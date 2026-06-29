import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Cpu,
  Terminal,
  Activity,
  ChevronRight,
} from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { useTypingEffect } from '../lib/hooks';
import ParticleField from './ParticleField';

const FLOATING = [
  { icon: Cpu, label: 'CORE', className: 'left-[6%] top-[26%]', delay: '0s' },
  { icon: Terminal, label: 'BUILD', className: 'right-[7%] top-[20%]', delay: '1.2s' },
  { icon: Activity, label: '0.8ms', className: 'left-[10%] bottom-[22%]', delay: '0.6s' },
  { icon: Sparkles, label: 'AI', className: 'right-[9%] bottom-[26%]', delay: '1.8s' },
] as const;

export default function Hero() {
  const typedRole = useTypingEffect(PROFILE.roles);
  const typedHeadline = useTypingEffect([PROFILE.headline], {
    typeSpeed: 55,
    deleteSpeed: 0,
    hold: 999999,
  });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      {/* particle canvas */}
      <ParticleField className="absolute inset-0 z-[1]" />

      {/* grid + glows */}
      <div className="grid-bg radial-fade absolute inset-0 z-[2] opacity-50" />
      <div className="absolute -left-32 top-24 z-[2] h-96 w-96 rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute -right-20 top-1/3 z-[2] h-96 w-96 rounded-full bg-secondary/20 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-bg/40 via-transparent to-bg" />

      {/* floating elements */}
      <div className="pointer-events-none absolute inset-0 z-[3]">
        {FLOATING.map((f) => (
          <div
            key={f.label}
            className={`absolute ${f.className} hidden md:flex animate-float`}
            style={{ animationDelay: f.delay }}
          >
            <span className="glass flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-primary">
              <f.icon className="h-3.5 w-3.5" />
              {f.label}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-5 py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* LEFT: copy */}
          <div>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="tag">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                SYSTEM ONLINE · ACCEPTING INTERNSHIP INQUIRIES
              </span>
            </div>

            <div className="mt-6 animate-fade-up opacity-0" style={{ animationDelay: '0.25s' }}>
              <p className="font-mono text-sm text-primary/80">{'>'} hello_world.execute()</p>
              <h1 className="mt-3 font-display text-5xl font-black leading-[1.05] text-white sm:text-6xl md:text-[4.5rem]">
                Prathamesh <br />
                <span className="text-gradient-anim">Kumbar</span>
              </h1>
            </div>

            {/* Roles typing */}
            <div
              className="mt-6 flex items-center gap-2 font-mono text-xl text-slate-300 sm:text-2xl animate-fade-up opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-secondary">{'{'}</span>
              <span className="text-white">{typedRole}</span>
              <span className="ml-0.5 inline-block h-6 w-[2px] animate-blink bg-primary align-middle sm:h-7" />
              <span className="text-secondary">{'}'}</span>
            </div>

            {/* Headline typing */}
            <p
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 animate-fade-up opacity-0 sm:text-lg"
              style={{ animationDelay: '0.55s' }}
            >
              <span className="text-slate-500">{'// '}</span>
              <span className="text-white">{typedHeadline}</span>
              <span className="ml-0.5 inline-block h-5 w-[2px] animate-blink bg-primary align-middle" />
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up opacity-0"
              style={{ animationDelay: '0.7s' }}
            >
              <a href="#projects" className="btn-primary">
                <Sparkles className="h-4 w-4" />
                View Projects
              </a>
              <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="btn-ghost">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-5 font-mono text-xs text-slate-500 animate-fade-up opacity-0"
              style={{ animationDelay: '0.85s' }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {PROFILE.location}
              </span>
              <span className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-secondary" />
                {PROFILE.university}
              </span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                {PROFILE.githubHandle}
              </a>
            </div>

            {/* Stat strip */}
            <div
              className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] animate-fade-up opacity-0"
              style={{ animationDelay: '1s' }}
            >
              {PROFILE.stats.map((s) => (
                <div key={s.label} className="bg-bg-card/40 px-4 py-4 text-center">
                  <div className="font-display text-xl font-bold text-white">{s.value}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: profile image */}
          <div className="mt-8 flex justify-center lg:mt-0">
            <ProfileCard />
          </div>
        </div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-primary md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

function ProfileCard() {
  return (
    <div
      className="relative animate-fade-up opacity-0 animate-float-slow"
      style={{ animationDelay: '0.5s' }}
    >
      {/* rotating rings */}
      <div className="absolute inset-0 -m-6 animate-spin-slow rounded-full border border-dashed border-primary/20" />
      <div className="absolute inset-0 -m-3 rounded-full border border-secondary/30" />

      {/* soft blue + purple glow */}
      <div className="absolute inset-0 -m-4 rounded-full bg-primary/15 blur-2xl" />
      <div className="absolute inset-0 -m-2 rounded-full bg-secondary/15 blur-xl" />

      <div className="glass relative aspect-square w-56 overflow-hidden rounded-full border border-primary/30 p-1.5 shadow-glow lg:h-80 lg:w-80">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-bg-card to-bg">
          <img
            src={PROFILE.image}
            alt="Prathamesh Virupaksh Kumbar"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          {/* subtle scanline overlay for theme cohesion */}
          <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />
        </div>
      </div>

      {/* badges */}
      <div className="absolute -top-2 -right-2 z-10 flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-bg-card/90 px-2.5 py-1 font-mono text-[9px] uppercase text-emerald-400 shadow-glow-sm backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        online
      </div>
      <div className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/30 bg-bg-card/90 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary backdrop-blur">
        Software Developer · Java · AI
      </div>
    </div>
  );
}
