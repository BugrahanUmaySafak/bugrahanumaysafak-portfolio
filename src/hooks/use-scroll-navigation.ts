// ✅ use-scroll-navigation.ts (güncellenmiş hali)
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
  const wheelDirectionRef = useRef<"none" | "next" | "prev">("none");

  const scrollTo = useCallback(
    (dir: "next" | "prev") => {
      if (isAnimatingRef.current) return;
      if (wheelDirectionRef.current === dir) return;

      isAnimatingRef.current = true;
      wheelDirectionRef.current = dir;

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
        wheelDirectionRef.current = "none";
      }, animationDuration);
    },
    [totalSections, animationDuration]
  );

  const canScrollContainer = (
    e: Event,
    direction: "next" | "prev"
  ): boolean => {
    let target = e.target as HTMLElement | null;

    while (target) {
      const overflowY = getComputedStyle(target).overflowY;
      const isScrollable =
        target.scrollHeight > target.clientHeight &&
        overflowY !== "visible" &&
        overflowY !== "hidden";

      if (isScrollable) {
        const scrollTop = target.scrollTop;
        const scrollBottom = scrollTop + target.clientHeight;
        const scrollHeight = target.scrollHeight;

        const atTop = scrollTop === 0;
        const atBottom = scrollBottom >= scrollHeight - 1;

        if (direction === "next" && !atBottom) return true;
        if (direction === "prev" && !atTop) return true;
      }

      target = target.parentElement;
    }

    return false;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const direction = e.deltaY > 50 ? "next" : e.deltaY < -50 ? "prev" : null;
      if (!direction) return;
      if (canScrollContainer(e, direction)) return;

      e.preventDefault();
      scrollTo(direction);
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
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY.current;

      const direction =
        deltaY < -swipeThreshold
          ? "next"
          : deltaY > swipeThreshold
          ? "prev"
          : null;
      if (!direction) return;
      if (canScrollContainer(e, direction)) return;

      scrollTo(direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
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
