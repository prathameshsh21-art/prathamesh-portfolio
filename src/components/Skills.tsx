import {
  Code,
  Database,
  Boxes,
  Globe,
  GitBranch,
  Github,
  Cpu,
  Activity,
} from 'lucide-react';
import { SKILLS } from '../data/portfolio';
import { useInView } from '../lib/hooks';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Database,
  Boxes,
  Globe,
  GitBranch,
  Github,
};

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="section-shell">
      <div ref={ref}>
        <div className="text-center">
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Skills Dashboard
            <span className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Core <span className="text-gradient">technology stack.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-400">
            The languages, tools, and paradigms powering my builds — a snapshot of the operator's
            trained capabilities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {SKILLS.map((skill, i) => {
            const Icon = ICONS[skill.icon] ?? Cpu;
            return (
              <div
                key={skill.name}
                className={`glass scanlines glass-hover group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-5 text-center transition-all duration-500 hover:-translate-y-1 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* glow */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:bg-secondary/20" />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-bg-card text-primary shadow-glow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold leading-tight text-white">{skill.name}</div>
                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-500">
                    {skill.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* system status bar */}
        <div className="glass mt-6 flex flex-col items-center justify-between gap-4 p-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-emerald-400" />
            <div>
              <div className="font-mono text-xs text-slate-400">system status</div>
              <div className="font-display text-lg font-bold text-white">All systems operational</div>
            </div>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ONLINE
          </span>
        </div>
      </div>
    </section>
  );
}
