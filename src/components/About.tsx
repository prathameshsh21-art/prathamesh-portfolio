import {
  Target,
  FolderGit2,
  BadgeCheck,
  Code2,
  Cpu,
  Puzzle,
  Quote,
} from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { useCountUp, useInView } from '../lib/hooks';

const ICONS: Record<string, typeof Target> = {
  Target,
  FolderGit2,
  BadgeCheck,
};

const PASSIONS = [
  { label: 'Software Development', icon: Code2 },
  { label: 'Artificial Intelligence', icon: Cpu },
  { label: 'Java Programming', icon: Code2 },
  { label: 'Problem Solving', icon: Puzzle },
];

const PARAGRAPHS = [
  'I am Prathamesh Virupaksh Kumbar, a B.Tech student in Computer Science Engineering (AI & ML) at CMR University.',
  'I am passionate about Software Development, Artificial Intelligence, Java Programming, and Problem Solving.',
  'I enjoy building real-world applications and continuously learning new technologies to improve my development skills.',
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />

      <div
        ref={ref}
        className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
      >
        {/* LEFT: profile image with animated glowing border */}
        <div
          className={`relative mx-auto transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <GlowingProfile />
        </div>

        {/* RIGHT: content */}
        <div
          className={`transition-all delay-100 duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="section-label">
            <span className="h-px w-8 bg-primary/60" />
            About Me
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            WHO <span className="text-gradient">AM I?</span>
          </h2>

          <Quote className="mt-6 h-6 w-6 text-primary/50" />
          <div className="mt-3 space-y-4">
            {PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-slate-300 sm:text-lg"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* passion chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {PASSIONS.map((passion) => (
              <span
                key={passion.label}
                className="glass flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:text-primary"
              >
                <passion.icon className="h-3.5 w-3.5 text-primary" />
                {passion.label}
              </span>
            ))}
          </div>

          {/* animated stat cards */}
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {PROFILE.aboutStats.map((stat, idx) => (
              <StatCard
                key={stat.label}
                stat={stat}
                icon={ICONS[stat.icon]}
                delay={idx * 120}
                active={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GlowingProfile() {
  return (
    <div className="relative h-72 w-72 sm:h-80 sm:w-80 animate-float-slow">
      {/* outer rotating conic glow */}
      <div className="absolute inset-0 -m-3 animate-spin-slow rounded-full opacity-80 [background:conic-gradient(from_0deg,rgba(0,217,255,0.35),rgba(124,58,237,0.45),rgba(0,217,255,0.35))]" />
      {/* static ring */}
      <div className="absolute inset-0 -m-1.5 rounded-full border border-white/10" />

      {/* soft blue + purple halo */}
      <div className="absolute inset-0 -m-2 rounded-full bg-primary/15 blur-2xl" />
      <div className="absolute inset-0 -m-1 rounded-full bg-secondary/15 blur-xl" />

      {/* image */}
      <div className="glass relative h-full w-full overflow-hidden rounded-full border border-primary/30 p-1.5 shadow-glow">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-bg-card to-bg">
          <img
            src={PROFILE.image}
            alt="Prathamesh Virupaksh Kumbar"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />
        </div>
      </div>

      {/* floating tag */}
      <div className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/30 bg-bg-card/90 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary backdrop-blur">
        B.Tech CSE · AI & ML
      </div>
    </div>
  );
}

function StatCard({
  stat,
  icon: Icon,
  delay,
  active,
}: {
  stat: { label: string; value: number; decimals: number; suffix: string };
  icon: typeof Target;
  delay: number;
  active: boolean;
}) {
  const count = useCountUp(stat.value, active, 1500);
  const display = stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count).toString();

  return (
    <div
      className="glass group relative overflow-hidden rounded-2xl p-4 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
      style={{ transitionDelay: `${delay}ms`, opacity: active ? 1 : 0 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <Icon className="mx-auto h-5 w-5 text-primary" />
        <div className="mt-2 font-display text-2xl font-bold text-white">
          {display}
          <span className="text-primary">{stat.suffix}</span>
        </div>
        <div className="mt-1 font-mono text-[10px] leading-tight uppercase tracking-widest text-slate-500">
          {stat.label}
        </div>
      </div>
    </div>
  );
}
