'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { factorCards, considerations } from '@/data/insecurity';
import { principles } from '@/data/philosophy';
import Badge from '@/components/ui/Badge/Badge';
import styles from './InsecuritySection.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function InsecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  // Panel 1
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Panel 2
  const panel2Ref = useRef<HTMLDivElement>(null);
  const considerRef = useRef<HTMLDivElement>(null);
  const vainRef = useRef<HTMLDivElement>(null);
  const keyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Panel 1 entrance — same on all devices
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      tl1
        .from(badgeRef.current, { y: -16, opacity: 0, duration: 0.6 })
        .from(
          headingRef.current?.querySelectorAll('span') ?? [],
          { y: 60, opacity: 0, duration: 0.9, stagger: 0.12 },
          '-=0.2'
        )
        .from(bodyRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.45')
        .from(
          cardsRef.current?.querySelectorAll('article') ?? [],
          { y: 60, opacity: 0, duration: 0.8, stagger: 0.1 },
          '-=0.4'
        );
    }, sectionRef);

    // Panel 2 behaviour differs between desktop and mobile.
    // On mobile, position:fixed pins glitch on iOS and the 350% scroll
    // distance is unusable — show content with a simple entrance instead.
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      // Blur scrubs in as Panel 2 enters
      gsap.fromTo(blurRef.current, { opacity: 0 }, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: panel2Ref.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.6,
        },
      });

      // Panel 2: pin for extended scroll, cards pass through continuously
      // Positions (timeline units, 350% viewport = ~33svh/unit):
      //   0.0–1.5  vain enters
      //   2.0–4.5  left card rises from 120vh→0   (enter half)
      //   4.5–7.0  left card rises from 0→-120vh  (exit half)
      //   3.5–6.0  right card rises from 120vh→0  (offset 1.5 so both overlap on screen)
      //   6.0–8.5  right card rises from 0→-120vh
      //   8.5–10.0 vain exits (after right card is gone)
      //   10.0–10.5 final hold before pin releases
      const panel2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel2Ref.current,
          start: 'top top',
          end: '+=350%',
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      // All positions are absolute so there is no cursor-tracking ambiguity.
      // y and opacity are driven by separate tweens:
      //   • A single fromTo covers the full y journey (120vh → -120vh) — no seam at 0
      //   • Two opacity tweens ramp in then out over the same window
      panel2Tl
        // ── Vain enters ──
        .from(vainRef.current, { y: 80, opacity: 0, duration: 1.5 }, 0)

        // ── Left card  (2.0 → 7.0) ──
        .fromTo(considerRef.current, { y: '100vh' }, { y: '-120vh', duration: 5, ease: 'none' }, 1.0)
        .fromTo(considerRef.current, { opacity: 0 }, { opacity: 1,   duration: 2.5, ease: 'none' }, 1.0)
        .to(considerRef.current, { opacity: 0, duration: 2.5, ease: 'none' }, 4.5)

        // ── Right card (3.5 → 8.5) — offset 1.5 so both overlap on screen ──
        .fromTo(keyRef.current, { y: '100vh' }, { y: '-120vh', duration: 5, ease: 'none' }, 3)
        .fromTo(keyRef.current, { opacity: 0 }, { opacity: 1,   duration: 2.5, ease: 'none' }, 3)
        .to(keyRef.current, { opacity: 0, duration: 2.5, ease: 'none' }, 6.0)

        // ── Vain exits after right card clears (8.5) ──
        .to(vainRef.current, { y: -80, opacity: 0, duration: 1.5 }, 6)

        // ── Final hold before pin releases ──
        .to({}, { duration: 0.5 }, 8.0);
    });

    mm.add('(max-width: 768px)', () => {
      gsap.fromTo(blurRef.current, { opacity: 0 }, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: panel2Ref.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.6,
        },
      });

      gsap.from(vainRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: panel2Ref.current,
          start: 'top 70%',
          once: true,
        },
      });
    });

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Sticky pinned video */}
      <div className={styles.stickyBg}>
        <video className={styles.bg} autoPlay muted loop playsInline>
          <source src="/videos/insecure-section-background-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.bgOverlay} />
        <div ref={blurRef} className={styles.blurLayer} />
      </div>

      {/* Panels scroll over the sticky video */}
      <div className={styles.panels}>
        {/* ── Panel 1: Insecurity ── */}
        <div className={styles.panel}>
          <div className={styles.inner}>
            <div ref={badgeRef} className={styles.badgeWrap}>
              <Badge variant="secondary">Backed by 2000+ Research Papers</Badge>
            </div>

            <div className={styles.content}>
              <h2 ref={headingRef} className={styles.heading}>
                <span className={styles.headingLine}>Will analyzing my face</span>
                <span className={`${styles.headingLine} ${styles.headingLine2}`}>Make me insecure?</span>
              </h2>
              <p ref={bodyRef} className={styles.body}>
                Most insecurity comes from uncertainty-not knowing if your concerns
                are real or imagined. When you&apos;re guessing about your appearance,
                your mind often makes things seem worse than they are.
              </p>
            </div>

            <div ref={cardsRef} className={styles.cards} data-horizontal-scroll>
              {factorCards.map((card) => (
                <article key={card.id} className={styles.card}>
                  <div className={styles.cardImgWrap}>
                    <Image
                      src={card.img}
                      alt={card.label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className={styles.cardImg}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{card.label}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── Panel 2: Philosophy (blurred bg) ── */}
        <div ref={panel2Ref} className={`${styles.panel} ${styles.panel2}`}>
          <div className={styles.inner}>
            <div className={styles.philosophyGrid}>
              <div ref={vainRef} className={styles.vainWrap}>
                <h2 className={styles.vainHeading}>
                  <span>Is it vain to care</span>
                  <span className={styles.vainDim}>about your appearance?</span>
                </h2>
                <p className={styles.vainBody}>
                  Many feel guilty about wanting to improve their looks, fearing it means they&apos;re
                  shallow or insecure. But here&apos;s what research tells us: caring about appearance
                  is natural. Like fitness, finances, and education, it&apos;s just another form of
                  self-improvement.
                </p>
              </div>

              <div className={styles.glassCards} data-horizontal-scroll>
                <div ref={considerRef} className={styles.glassCard}>
                  <h3 className={styles.glassCardTitle}>Consider this...</h3>
                  <ul className={styles.pillList}>
                    {considerations.map((item) => (
                      <li key={item} className={styles.pill}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div ref={keyRef} className={styles.glassCard}>
                  <h3 className={styles.glassCardTitle}>The key is approaching it intelligently</h3>
                  <ul className={styles.pillList}>
                    {principles.map((p) => (
                      <li key={p} className={styles.pill}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
