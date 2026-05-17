'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BeforeAfterSlider from './BeforeAfterSlider';
import { steps } from '@/data/hero';
import Badge from '@/components/ui/Badge/Badge';
import styles from './Hero.module.scss';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(labelRef.current, { y: 12, opacity: 0, duration: 0.6 })
        .from(
          titleRef.current?.querySelectorAll('span') ?? [],
          { y: 40, opacity: 0, duration: 0.8, stagger: 0.1 },
          '-=0.3'
        )
        .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(sliderRef.current, { y: 30, opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.4')
        .from(
          stepsRef.current?.querySelectorAll('li') ?? [],
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 },
          '-=0.6'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Badge ref={labelRef} className={styles.label}>Personalized Analysis</Badge>

          <h1 ref={titleRef} className={styles.title}>
            <span className={styles.line}>Get your personalised</span>{' '}
            <span className={`${styles.line} ${styles.accent}`}>Qoves plan</span>
          </h1>

          <p ref={subtitleRef} className={styles.subtitle}>
            Understand your facial features and start your glow-up today
            with a proven action plan, no plastic surgery needed.
          </p>
        </div>

        <div ref={sliderRef} className={styles.sliderWrap}>
          <BeforeAfterSlider />
        </div>

        <ul ref={stepsRef} className={styles.steps}>
          {steps.map((step) => (
            <li key={step.n} className={styles.step}>
              <span className={styles.stepNum}>{step.n}</span>
              <p className={styles.stepLabel}>{step.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
