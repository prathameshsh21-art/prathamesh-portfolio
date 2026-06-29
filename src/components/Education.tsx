import { GraduationCap, Award, ArrowDown } from 'lucide-react';
import { EDUCATION } from '../data/portfolio';
import { useInView } from '../lib/hooks';

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="education" className="section-shell">
      <div ref={ref}>
        <div className="text-center">
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Education Timeline
            <span className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Learning <span className="text-gradient">timeline.</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {EDUCATION.map((e, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative pl-12 sm:pl-0 ${
                    leftSide ? 'sm:w-1/2 sm:pr-8' : 'sm:ml-auto sm:w-1/2 sm:pl-8'
                  } transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {/* node */}
                  <div className="absolute left-4 top-1 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-primary/40 bg-bg shadow-glow-sm sm:left-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    {e.status === 'active' && (
                      <span className="absolute inset-0 animate-ping rounded-full border border-primary/40" />
                    )}
                  </div>

                  <div
                    className={`glass glass-hover p-5 ${
                      leftSide ? 'sm:text-right' : ''
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      {e.period}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-white">
                      {e.title}
                    </h3>
                    <div
                      className={`mt-1 flex items-center gap-2 text-sm text-slate-300 ${
                        leftSide ? 'sm:justify-end' : ''
                      }`}
                    >
                      <GraduationCap className="h-4 w-4 text-secondary" />
                      {e.org}
                    </div>
                    <p className="mt-2 text-xs text-slate-500">{e.detail}</p>

                    <div
                      className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${
                        e.status === 'active'
                          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-400'
                          : 'border-primary/30 bg-primary/10 text-primary'
                      }`}
                    >
                      {e.status === 'active' ? (
                        <>
                          <Award className="h-3 w-3" /> {e.metric} · in progress
                        </>
                      ) : (
                        <>
                          <Award className="h-3 w-3" /> {e.metric}
                        </>
                      )}
                    </div>
                  </div>

                  {/* connector arrow between items */}
                  {i < EDUCATION.length - 1 && (
                    <div
                      className={`absolute left-4 top-full -translate-x-1/2 text-primary/40 ${
                        leftSide ? 'sm:left-1/2' : 'sm:left-1/2'
                      }`}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
