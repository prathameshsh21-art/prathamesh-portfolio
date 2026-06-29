import { useEffect, useState } from 'react';
import { Menu, X, Cpu, Linkedin } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
      const top = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= top) {
          setActive(NAV[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/5 bg-bg/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-bg-card shadow-glow-sm">
            <Cpu className="h-5 w-5 text-primary" />
            <span className="absolute inset-0 animate-pulse-soft rounded-lg border border-primary/20" />
          </span>
          <span className="font-display text-sm font-bold tracking-wider text-white">
            P.K<span className="text-primary">.</span>AI
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                active === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === item.id && (
                <span className="absolute inset-0 rounded-full border border-primary/30 bg-primary/10" />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-primary/40 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#contact" className="hidden md:inline-flex btn-primary !px-5 !py-2 !text-xs">
            Let's Connect
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
