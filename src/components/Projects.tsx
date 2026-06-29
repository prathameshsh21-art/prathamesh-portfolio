import { ArrowUpRight, Fingerprint, SpellCheck, Github } from 'lucide-react';
import { PROJECTS, PROFILE } from '../data/portfolio';
import { useInView } from '../lib/hooks';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Fingerprint,
  SpellCheck,
};

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="section-shell">
      <div ref={ref}>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="section-label">
              <span className="h-px w-8 bg-primary/60" />
              Featured Projects
            </div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Selected <span className="text-gradient">builds.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-400 sm:text-right">
            A curated set of projects — each engineered to solve a real problem end-to-end.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const Icon = ICONS[p.icon] ?? Fingerprint;
            const accent = p.accent === 'secondary' ? 'secondary' : 'primary';
            return (
              <article
                key={p.title}
                className={`glass scanlines glass-hover group relative overflow-hidden p-7 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    accent === 'secondary' ? 'bg-secondary/20' : 'bg-primary/15'
                  }`}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                      accent === 'secondary'
                        ? 'border-secondary/40 bg-secondary/10 text-secondary shadow-glow-purple'
                        : 'border-primary/40 bg-primary/10 text-primary shadow-glow-sm'
                    } transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    project.0{i + 1}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-xl font-bold text-white">
                  {p.title}
                </h3>

                <div className="relative mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  <span className="text-slate-600">tech:</span>
                  {p.tech.join(' · ')}
                </div>

                <p className="relative mt-3 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <div className="relative mt-5 flex flex-wrap items-center gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full border px-3 py-1 font-mono text-[10px] ${
                        accent === 'secondary'
                          ? 'border-secondary/30 bg-secondary/10 text-secondary'
                          : 'border-primary/30 bg-primary/10 text-primary'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className={`relative mt-6 inline-flex items-center gap-1.5 font-mono text-xs ${
                    accent === 'secondary' ? 'text-secondary' : 'text-primary'
                  } opacity-70 transition-all duration-300 group-hover:gap-2.5 group-hover:opacity-100`}
                >
                  module.deploy()
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            );
          })}
        </div>

        {/* note: more projects on GitHub */}
        <div className="mt-8 flex justify-center">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover flex items-center gap-2 px-5 py-3 font-mono text-xs text-slate-300 transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4 text-primary" />
            More Projects on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
