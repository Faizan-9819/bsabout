// "use client";

// import { ReactLenis } from "lenis/react";
// import { ReactNode } from "react";

// interface SmoothScrollProps {
//   children: ReactNode;
// }

// export default function SmoothScrollProvider({ children }: SmoothScrollProps) {
//   return (
//     <ReactLenis
//       root
//       options={{
//         // Higher values = faster/snappier, lower values = slower/smoother (0.05 to 0.15 is ideal)
//         lerp: 0.08,
//         duration: 1.2,
//         smoothWheel: true,
//         syncTouch: true, // Smoothes trackpad and touch inputs seamlessly
//       }}
//     >
//       {children}
//     </ReactLenis>
//   );
// }

"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProps) {
  // ReactLenis forwards a ref that exposes { lenis: LenisInstance }.
  // We need direct access to the underlying Lenis instance so we can
  // drive it manually from GSAP's own ticker below.
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Every time Lenis fires a scroll event (real or smoothed), tell
    // ScrollTrigger to recalculate immediately. Without this, pin/scrub
    // math is based on stale scroll positions and pin never engages
    // correctly.
    function handleScroll() {
      ScrollTrigger.update();
    }

    lenisRef.current?.lenis?.on("scroll", handleScroll);

    // Drive Lenis's internal raf loop from GSAP's ticker instead of
    // Lenis's own independent rAF loop. This is the critical sync step —
    // it guarantees Lenis's smoothed scroll position and ScrollTrigger's
    // pin calculations update on the exact same frame.
    function update(time: number) {
      // GSAP ticker gives time in seconds, Lenis expects milliseconds.
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Turn off GSAP's own lag-smoothing. Lenis already smooths scroll
    // itself, so double-smoothing (GSAP smoothing on top of Lenis
    // smoothing) causes pin start/end points to drift and can prevent
    // pins from ever cleanly engaging.
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisRef.current?.lenis?.off("scroll", handleScroll);
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        // Higher values = faster/snappier, lower values = slower/smoother (0.05 to 0.15 is ideal)
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true, // Smoothes trackpad and touch inputs seamlessly

        // CRITICAL: disable Lenis's own independent requestAnimationFrame
        // loop. We're driving it manually via gsap.ticker above instead,
        // so both Lenis and ScrollTrigger update on the same frame clock.
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
