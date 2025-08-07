"use client";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollNavigationProps {
  totalSections: number;
  animationDuration?: number;
  swipeThreshold?: number;
}

export function useScrollNavigation({
  totalSections,
  animationDuration = 1000,
  swipeThreshold = 50,
}: UseScrollNavigationProps) {
  const [index, setIndex] = useState(0);
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartY = useRef(0);

  const scrollTo = useCallback(
    (dir: "next" | "prev") => {
      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;
      setIndex((prev) => {
        const nextIndex =
          dir === "next"
            ? Math.min(prev + 1, totalSections - 1)
            : Math.max(prev - 1, 0);
        return nextIndex;
      });

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isAnimatingRef.current = false;
      }, animationDuration);
    },
    [totalSections, animationDuration]
  );

  const canScrollContainer = (e: Event): boolean => {
    let target = e.target as HTMLElement | null;

    while (target) {
      if (
        target.scrollHeight > target.clientHeight &&
        getComputedStyle(target).overflowY !== "visible"
      ) {
        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight;
        const clientHeight = target.clientHeight;

        const atTop = scrollTop === 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

        if (!atTop && !atBottom) return true;
      }
      target = target.parentElement;
    }

    return false;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (canScrollContainer(e)) return; // iç scroll aktifse geçiş yapma
      e.preventDefault();
      if (e.deltaY > 20) scrollTo("next");
      else if (e.deltaY < -20) scrollTo("prev");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        scrollTo("next");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollTo("prev");
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (canScrollContainer(e)) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY.current;

      if (deltaY < -swipeThreshold) scrollTo("next");
      else if (deltaY > swipeThreshold) scrollTo("prev");
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scrollTo, swipeThreshold]);

  const goToSection = useCallback(
    (targetIndex: number) => {
      if (
        !isAnimatingRef.current &&
        targetIndex >= 0 &&
        targetIndex < totalSections
      ) {
        setIndex(targetIndex);
        isAnimatingRef.current = true;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          isAnimatingRef.current = false;
        }, animationDuration);
      }
    },
    [totalSections, animationDuration]
  );

  return {
    index,
    isAnimating: isAnimatingRef.current,
    scrollTo,
    goToSection,
  };
}
