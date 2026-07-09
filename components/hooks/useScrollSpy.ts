"use client";
import { useEffect, useState, useRef, useCallback } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setActiveIdWithClickLock = useCallback(
    (id: string, lock: boolean = false) => {
      if (lock) {
        isClickScrolling.current = true;
        if (clickTimeout.current) clearTimeout(clickTimeout.current);
        setActiveId(id);
        clickTimeout.current = setTimeout(() => {
          isClickScrolling.current = false;
        }, 1000);
      } else if (!isClickScrolling.current) {
        setActiveId(id);
      }
    },
    [],
  );

  useEffect(() => {
    if (ids.length === 0) return;

    // Trigger point: upper third of the viewport
    const TRIGGER_RATIO = 0.33;

    let rafId: number | null = null;

    const detect = () => {
      if (isClickScrolling.current) return;

      const triggerY = window.innerHeight * TRIGGER_RATIO;
      let found = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        // If the section top has scrolled past the trigger line, it's the active one
        if (el.getBoundingClientRect().top <= triggerY) {
          found = id;
        }
      }

      setActiveId((prev) => (prev === found ? prev : found));
    };

    const onScroll = () => {
      // Debounce via requestAnimationFrame to avoid thrashing and jerking
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(detect);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    detect(); // run once on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty deps — ids is stable because parent wraps it in useMemo

  return [activeId, setActiveIdWithClickLock] as const;
}
