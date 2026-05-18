'use client';

import { forwardRef } from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary';
}

const Badge = forwardRef<HTMLParagraphElement, BadgeProps>(
  ({ children, className, variant = 'default' }, ref) => (
    <p
      ref={ref}
      className={[styles.badge, variant === 'secondary' ? styles.secondary : '', className ?? '']
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </p>
  )
);

Badge.displayName = 'Badge';

export default Badge;
