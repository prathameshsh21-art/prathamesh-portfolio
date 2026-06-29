import { Github, Mail, Cpu, Heart, Linkedin, Download } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg-soft">
      <div className="grid-bg radial-fade absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-bg-card text-primary shadow-glow-sm">
                <Cpu className="h-4 w-4" />
              </span>
              <div>
                <div className="font-display text-base font-bold text-white">PRATHAMESH.AI</div>
                <div className="font-mono text-[10px] text-slate-500">
                  Software Developer · AI & ML Student
                </div>
              </div>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Internship Opportunities
            </span>
          </div>

          {/* quick links */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-primary/40 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-primary/40 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-primary/40 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-primary/40 hover:text-primary"
                aria-label="Download Resume"
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
            <p className="font-mono text-[10px] text-slate-500">
              © {new Date().getFullYear()} {PROFILE.name}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <p className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
            built with <Heart className="h-3 w-3 text-secondary" /> · react · supabase
          </p>
        </div>
      </div>
    </footer>
  );
}
