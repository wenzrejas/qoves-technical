'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { principles } from '@/data/philosophy';
import Badge from '@/components/ui/Badge/Badge';
import styles from './PhilosophySection.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      };

      gsap.from(leftRef.current, { x: -40, opacity: 0, duration: 1, ease: 'power3.out', ...st });
      gsap.from(rightRef.current, { x: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.15, ...st });
      gsap.from(listRef.current?.querySelectorAll('li') ?? [], {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3,
        ...st,
      });
    }, sectionRef);

    // BG parallax scrub causes jank on touch devices — desktop only
    const mm = gsap.matchMedia();
    mm.add('(min-width: 769px)', () => {
      gsap.to(`.${styles.bg}`, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className={styles.section}>
      {/* Background */}
      <div className={styles.bgWrap}>
        <Image
          src="https://images.unsplash.com/photo-1588453251771-cd919b362ed4?w=1600&q=80&fit=crop"
          alt="Philosophy background"
          fill
          sizes="100vw"
          className={styles.bg}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left — question */}
          <div ref={leftRef} className={styles.left}>
            <Badge className={styles.label}>The question</Badge>
            <h2 className={styles.question}>
              Is it vain to care about{' '}
              <em className={styles.italic}>your appearance?</em>
            </h2>
          </div>

          {/* Right — answer */}
          <div ref={rightRef} className={styles.right}>
            <Badge>The answer</Badge>
            <p className={styles.answer}>
              The key is approaching
              <br />
              <em className={`${styles.italic} ${styles.answerItalic}`}>
                it intelligently
              </em>
            </p>
            <p className={styles.answerSub}>
              Most insecurity comes from desperately trying to reach standards that are
              unachievable, or being ashamed about things that are simply part of your
              appearance, and often making things seem worse than they are.
            </p>

            <ul ref={listRef} className={styles.principles}>
              {principles.map((p) => (
                <li key={p} className={styles.principle}>
                  <span className={styles.tick}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
