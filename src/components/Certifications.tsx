import { BrainCircuit, Code, Database, BadgeCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolio';
import { useInView } from '../lib/hooks';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  BrainCircuit,
  Database,
};

export default function Certifications() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="certifications" className="section-shell">
      <div ref={ref}>
        <div className="text-center">
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Certifications
            <span className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Verified <span className="text-gradient">credentials.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            Skill modules validated and signed off — permanent entries in the operator record.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = ICONS[c.icon] ?? Code;
            const accent = c.accent === 'secondary' ? 'secondary' : 'primary';
            return (
              <div
                key={c.title}
                className={`glass scanlines glass-hover group relative flex flex-col items-center p-7 text-center transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* seal */}
                <div className="relative">
                  <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/20" />
                  <span
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full border ${
                      accent === 'secondary'
                        ? 'border-secondary/40 bg-secondary/10 text-secondary shadow-glow-purple'
                        : 'border-primary/40 bg-primary/10 text-primary shadow-glow-sm'
                    } transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-base font-bold leading-snug text-white">
                  {c.title}
                </h3>
                <p className="relative mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {c.issuer}
                </p>

                <span className="relative mt-4 inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[9px] uppercase text-emerald-400">
                  <BadgeCheck className="h-3 w-3" /> verified
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
