import { useEffect, useState } from 'react';
import { Cpu, Terminal, CheckCircle2, Loader2 } from 'lucide-react';

const BOOT_LINES = [
  { text: 'Initializing NEURAL_OS v3.7.1 ...', delay: 350 },
  { text: 'Mounting /dev/cortex ............ OK', delay: 280 },
  { text: 'Loading kernel modules [AI/ML] . OK', delay: 320 },
  { text: 'Calibrating attention layers ... OK', delay: 300 },
  { text: 'Authenticating operator ....... Prathamesh V. Kumbar', delay: 380 },
  { text: 'Booting portfolio interface ... READY', delay: 300 },
];

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let mounted = true;
    const timers: number[] = [];
    let acc = 200;

    BOOT_LINES.forEach((line, i) => {
      acc += line.delay;
      timers.push(
        window.setTimeout(() => {
          if (mounted) setVisibleLines(i + 1);
        }, acc),
      );
    });

    const progressTimer = window.setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 9 + 3);
        return next;
      });
    }, 130);

    const total = acc + 700;
    timers.push(
      window.setTimeout(() => {
        if (!mounted) return;
        setExiting(true);
        window.setTimeout(() => mounted && onDone(), 750);
      }, total),
    );

    timers.push(progressTimer);
    return () => {
      mounted = false;
      timers.forEach(clearInterval);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg transition-opacity duration-700 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="grid-bg radial-fade absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-xl px-6">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30" />
            <div className="absolute inset-2 animate-pulse-soft rounded-full border border-secondary/40" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-bg-card border border-primary/40 shadow-glow">
              <Cpu className="h-9 w-9 text-primary" />
            </div>
          </div>
          <h1 className="font-display text-2xl font-bold tracking-wide text-white text-shadow-glow">
            NEURAL_OS
          </h1>
          <p className="mt-1 font-mono text-xs text-slate-500">operator: prathamesh_kumbar</p>
        </div>

        <div className="glass scanlines relative overflow-hidden p-5 font-mono text-[13px] leading-relaxed">
          <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2 text-slate-500">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-xs">system://boot.log</span>
          </div>
          <div className="space-y-1.5 min-h-[150px]">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="flex items-start gap-2 text-slate-300 animate-fade-in">
                <span className="text-primary/60">›</span>
                <span className="flex-1">{line.text}</span>
                {i === visibleLines - 1 ? (
                  <Loader2 className="mt-0.5 h-3.5 w-3.5 animate-spin text-secondary" />
                ) : (
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-400" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="mb-1 flex justify-between text-[10px] text-slate-500">
              <span>loading interface</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-150"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
