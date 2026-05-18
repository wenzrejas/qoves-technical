'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge from '@/components/ui/Badge/Badge';
import styles from './FacialAnalysis.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function FacialAnalysis() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      tl.from([labelRef.current, titleRef.current, bodyRef.current], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      }).from(imageRef.current, { y: 40, opacity: 0, duration: 1.2, ease: 'power2.out' }, '-=0.5');
    }, sectionRef);

    // Parallax scrub causes jank on touch devices — desktop only
    const mm = gsap.matchMedia();
    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="analysis" className={styles.section}>
      <div className={styles.header}>
        <Badge ref={labelRef} className={styles.label} variant="secondary">
          Personalized Aesthetics
        </Badge>
        <h2 ref={titleRef} className={styles.title}>
          Your complete{' '}
          <em className={styles.italic}>facial analysis</em>
        </h2>
        <p ref={bodyRef} className={styles.body}>
          Every face is unique. We assess more than 100 unique facial markers to
          give you a precise understanding of your aesthetics.
        </p>
      </div>

      <img src="/svg/chart-scatterplot.svg" alt="" aria-hidden className={styles.chartScatterplot} />
      <img src="/svg/chart-bell-curve.svg" alt="" aria-hidden className={styles.chartBellCurve} />
      <img src="/svg/chart-bar-graph.svg" alt="" aria-hidden className={styles.chartBarGraph} />
      <img src="/svg/chart-color-palette.svg" alt="" aria-hidden className={styles.chartColorPalette} />
      <img src="/svg/chart-facial-thirds.svg" alt="" aria-hidden className={styles.chartFacialThirds} />
      <img src="/svg/chart-half-blocks.svg" alt="" aria-hidden className={styles.chartHalfBlocks} />

      <div className={styles.canvas}>
        <div ref={imageRef} className={styles.faceContainer}>
          <Image
            src="/images/facial-analysis-main-foreground.png"
            alt="Facial analysis subject"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 620px, 920px"
            quality={100}
            className={styles.faceImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
