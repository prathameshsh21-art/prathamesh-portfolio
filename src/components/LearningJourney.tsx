import { BookOpen, Target, Cpu, Code, Globe, Database, GitBranch, Boxes } from 'lucide-react';
import { LEARNING } from '../data/portfolio';
import { useInView } from '../lib/hooks';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  HTML: Globe,
  CSS: Globe,
  JavaScript: Code,
  'React (Upcoming)': Cpu,
  'Data Structures & Algorithms': Boxes,
  'Advanced Java': Code,
  Database,
  GitBranch,
};

export default function LearningJourney() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="learning" className="section-shell">
      <div ref={ref}>
        <div className="text-center">
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Current Learning Journey
            <span className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Currently <span className="text-gradient">learning.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            Always in motion — the modules I'm actively studying to level up.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div
            className={`glass scanlines relative overflow-hidden p-6 sm:p-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-secondary/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
                  Currently Learning
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {LEARNING.current.map((item, i) => {
                  const Icon = ICONS[item] ?? Code;
                  return (
                    <div
                      key={item}
                      className={`group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  );
                })}
              </div>

              {/* goal */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-4">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    Goal
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-emerald-200">{LEARNING.goal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
