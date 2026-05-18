'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis smooth scroll is desktop-only — touch devices use native scroll
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    ScrollTrigger.normalizeScroll(true);

    const lenis = new Lenis({
      prevent: (node: Element) => !!node.closest('[data-horizontal-scroll]'),
    });
    lenis.on('scroll', ScrollTrigger.update);

    const lenisRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(lenisRaf);
      lenis.destroy();
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);

  return <>{children}</>;
}
