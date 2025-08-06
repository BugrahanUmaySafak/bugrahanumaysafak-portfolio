"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollNavigationProps {
  totalSections: number;
  animationDuration?: number;
  swipeThreshold?: number; // New prop for swipe sensitivity
}

export function useScrollNavigation({
  totalSections,
  animationDuration = 1000,
  swipeThreshold = 50, // Default swipe threshold
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        isAnimatingRef.current = false;
      }, animationDuration);
    },
    [totalSections, animationDuration]
  );

  const goToSection = useCallback(
    (targetIndex: number) => {
      if (
        !isAnimatingRef.current &&
        targetIndex >= 0 &&
        targetIndex < totalSections
      ) {
        setIndex(targetIndex);
        isAnimatingRef.current = true;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          isAnimatingRef.current = false;
        }, animationDuration);
      }
    },
    [totalSections, animationDuration]
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
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

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent default scrolling
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY.current;

      if (deltaY < -swipeThreshold) {
        // Swiped up (scroll down)
        scrollTo("next");
      } else if (deltaY > swipeThreshold) {
        // Swiped down (scroll up)
        scrollTo("prev");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [scrollTo, swipeThreshold]); // Add swipeThreshold to dependencies

  return {
    index,
    isAnimating: isAnimatingRef.current,
    scrollTo,
    goToSection,
  };
}
