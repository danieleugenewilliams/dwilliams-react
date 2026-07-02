import { useRef, useEffect, type ReactNode, type ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  [key: string]: unknown;
}

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in');
      return;
    }

    // Already in view on mount (e.g. hero) → show immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('in');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);

    // Failsafe: never leave content hidden if the observer misfires.
    const t = setTimeout(() => el.classList.add('in'), 2200);
    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  const clampedDelay = Math.min(Math.max(Math.round(delay), 0), 4);
  const delayClass = clampedDelay > 0 ? ` reveal-d${clampedDelay}` : '';

  return (
    <Tag ref={ref} className={`reveal${delayClass}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </Tag>
  );
}
