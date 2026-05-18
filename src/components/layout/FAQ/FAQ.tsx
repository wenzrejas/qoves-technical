'use client';

import { useEffect, useRef, useState } from 'react';
import { Plus, Minus, X } from 'react-feather';
import { gsap } from '@/lib/gsap';
import { type FAQItem, type FAQCategory, faqCategories } from '@/data/faq';
import Badge from '@/components/ui/Badge/Badge';
import styles from './FAQ.module.scss';

// ─── Inner Q&A row ─────────────────────────────────────────────────────────────
function QAItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (!mounted.current) {
      mounted.current = true;
      gsap.set(bodyRef.current, { height: 0, opacity: 0 });
      return;
    }
    if (isOpen) {
      gsap.fromTo(
        bodyRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.2, ease: 'power2.in' });
    }
  }, [isOpen]);

  return (
    <li className={`${styles.qaItem} ${isOpen ? styles.qaItemOpen : ''}`}>
      <button className={styles.qaQuestion} onClick={onToggle}>
        <span className={styles.qaText}>{item.q}</span>
        <span className={styles.qaIcon}>
          {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </span>
      </button>

      <div
        ref={bodyRef}
        className={styles.qaBody}
        style={{ height: 0, overflow: 'hidden', opacity: 0 }}
      >
        <p className={styles.qaAnswer}>{item.a}</p>
      </div>
    </li>
  );
}

// ─── Outer category row ────────────────────────────────────────────────────────
function CategoryRow({
  category,
  isOpen,
  onToggle,
  openItemIdx,
  onToggleItem,
}: {
  category: FAQCategory;
  isOpen: boolean;
  onToggle: () => void;
  openItemIdx: number | null;
  onToggleItem: (i: number) => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (!mounted.current) {
      mounted.current = true;
      gsap.set(bodyRef.current, { height: 0 });
      return;
    }
    if (isOpen) {
      gsap.fromTo(
        bodyRef.current,
        { height: 0 },
        { height: 'auto', duration: 0.42, ease: 'power3.out' }
      );
    } else {
      gsap.to(bodyRef.current, { height: 0, duration: 0.3, ease: 'power3.in' });
    }
  }, [isOpen]);

  return (
    <div className={`${styles.category} ${isOpen ? styles.categoryOpen : ''}`}>
      <button className={styles.catHeader} onClick={onToggle}>
        <span className={styles.catTitle}>{category.title}</span>
        <span className={styles.catIcon}>
          {isOpen ? <X size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>

      <div ref={bodyRef} style={{ overflow: 'hidden', height: 0 }}>
        <ul className={styles.qaList}>
          {category.items.map((item, i) => (
            <QAItem
              key={i}
              item={item}
              isOpen={isOpen && openItemIdx === i}
              onToggle={() => onToggleItem(i)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── FAQ section ───────────────────────────────────────────────────────────────
export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openItemIdx, setOpenItemIdx] = useState<number | null>(null);

  const toggleCategory = (id: string) => {
    if (openCategoryId === id) {
      setOpenCategoryId(null);
      setOpenItemIdx(null);
    } else {
      setOpenCategoryId(id);
      setOpenItemIdx(null);
    }
  };

  const toggleItem = (idx: number) => {
    setOpenItemIdx((prev) => (prev === idx ? null : idx));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([labelRef.current, titleRef.current, subtitleRef.current], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from(listRef.current?.querySelectorAll(`.${styles.category}`) ?? [], {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.045,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 78%',
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headerArea}>
          <Badge ref={labelRef} className={styles.label}>
            Your Questions
          </Badge>
          <h2 ref={titleRef} className={styles.title}>
            Frequently asked <em className={styles.italic}>questions</em>
          </h2>
          <p ref={subtitleRef} className={styles.subtitle}>
            If you have any further questions, please use the chat box in the bottom right or
            contact us by email at{' '}
            <a href="mailto:hello@qoves.com" className={styles.emailLink}>
              hello@qoves.com
            </a>
          </p>
        </div>

        <div ref={listRef} className={styles.categoryList}>
          {faqCategories.map((cat) => (
            <CategoryRow
              key={cat.id}
              category={cat}
              isOpen={openCategoryId === cat.id}
              onToggle={() => toggleCategory(cat.id)}
              openItemIdx={openCategoryId === cat.id ? openItemIdx : null}
              onToggleItem={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
