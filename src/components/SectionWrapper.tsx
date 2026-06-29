import type { ReactNode } from 'react';
import { useInView } from '../lib/hooks';

type Props = {
  id: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  number?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  label,
  title,
  intro,
  align = 'left',
  number,
  children,
  className = '',
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const centered = align === 'center';

  return (
    <section id={id} className="section-shell relative">
      {number && <span className="section-watermark hidden md:block">{number}</span>}

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className={centered ? 'text-center' : ''}>
          <div className={`section-label ${centered ? 'justify-center' : ''}`}>
            <span className="h-px w-8 bg-primary/60" />
            {label}
            {centered && <span className="h-px w-8 bg-primary/60" />}
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-4 max-w-xl text-slate-400 sm:text-lg ${
                centered ? 'mx-auto' : ''
              }`}
            >
              {intro}
            </p>
          )}
        </div>

        <div className={`mt-12 ${className}`}>{children}</div>
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="section-divider py-4 md:py-6">
      <div className="divider-line">
        <span className="absolute left-1/2 top-1/2 flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/30" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-primary shadow-glow-sm" />
        </span>
      </div>
    </div>
  );
}
