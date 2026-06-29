import {
  Bot,
  Cpu,
  Activity,
  Github,
  Linkedin,
  GraduationCap,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
  Code2,
  Database,
  Puzzle,
  GitBranch,
  FolderGit2,
  Target,
} from 'lucide-react';
import { useInView, useSequentialLines } from '../lib/hooks';
import { PROFILE } from '../data/portfolio';

const COMMANDS = [
  '$ ./prathamesh.ai --analyze-candidate',
  '> booting neural_assistant v2.6...',
  '> fetching identity profile... ok',
  '> scanning skill_matrix... ok',
  '> compiling assessment_report... ok',
  '',
  '> ANALYSIS COMPLETE',
];

const REPORT = {
  candidate: 'Prathamesh Virupaksh Kumbar',
  role: ['Software Developer', 'AI & ML Student'],
  university: 'CMR University',
  cgpa: '8.50 / 10',
  languages: ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  coreSkills: [
    { label: 'Object Oriented Programming', icon: Code2 },
    { label: 'Database Management', icon: Database },
    { label: 'Problem Solving', icon: Puzzle },
    { label: 'Git & GitHub', icon: GitBranch },
  ],
  projects: [
    { name: 'Student Attendance Recovery System', tech: 'Java · SQL · DBMS' },
    { name: 'Grammar & Spell Corrector', tech: 'Python · NLTK · NLP' },
  ],
  goal: 'Software Development Internship',
  assessment:
    'Highly motivated developer with strong programming fundamentals, practical project experience, and a continuous learning mindset.',
};

const CORE_METRICS = [
  { icon: Cpu, label: 'CPU', value: 'Stable', tone: 'primary' },
  { icon: Activity, label: 'Neural', value: 'Active', tone: 'secondary' },
  { icon: ShieldCheck, label: 'Trust', value: 'Verified', tone: 'emerald' },
] as const;

const toneMap: Record<string, string> = {
  primary: 'text-primary border-primary/40 bg-primary/5',
  secondary: 'text-violet-300 border-violet-400/40 bg-violet-400/5',
  emerald: 'text-emerald-300 border-emerald-400/40 bg-emerald-400/5',
};

export default function AIIntro() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const lines = useSequentialLines(COMMANDS, {
    typeSpeed: 22,
    lineDelay: 240,
    start: inView,
  });

  const showReport = lines.finished;

  return (
    <section id="intro" className="section-shell relative">
      <span className="section-watermark hidden md:block">02</span>

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="section-label">
          <span className="h-px w-8 bg-primary/60" />
          AI Introduction
        </div>
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Neural assistant <span className="text-gradient">candidate analysis</span>
        </h2>
        <p className="mt-4 max-w-xl text-slate-400">
          The on-board AI ran a candidate scan. Here's the report it compiled.
        </p>

        {/* DASHBOARD CARD */}
        <div className="relative mt-10">
          {/* outer glow */}
          <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-r from-primary/15 via-violet-500/10 to-secondary/15 blur-2xl" />

          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-1.5 shadow-glow">
            {/* scanning beam */}
            <div className="scan-beam absolute inset-0 z-20 pointer-events-none" />

            <div className="relative rounded-[1.4rem] bg-bg-card/40 backdrop-blur-xl">
              {/* header bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                    <Bot className="h-5 w-5" />
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-bg-card animate-pulse" />
                  </div>
                  <div>
                    <div className="font-mono text-sm font-semibold text-white">
                      PRATHAMESH.AI Assistant
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      neural_repl · session #002
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
              </div>

              {/* TERMINAL (brief) -> fades out, report fades in */}
              <div
                className={`relative transition-all duration-500 ${
                  showReport ? 'pointer-events-none max-h-0 opacity-0' : 'max-h-[500px] opacity-100'
                } overflow-hidden`}
              >
                <div className="relative p-5 scanlines">
                  <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    <BrainCircuit className="h-3.5 w-3.5 text-secondary" />
                    analyzing candidate...
                  </div>
                  <div className="min-h-[180px] space-y-1 font-mono text-[13px] leading-relaxed">
                    {lines.visible.map((line, i) => (
                      <div
                        key={i}
                        className={
                          line.startsWith('>')
                            ? line.includes('COMPLETE')
                              ? 'text-emerald-300'
                              : line.includes('booting')
                                ? 'text-slate-400'
                                : 'text-primary/90'
                            : 'text-violet-300'
                        }
                      >
                        {line}
                        {i === lines.visible.length - 1 && !lines.finished && (
                          <span className="ml-0.5 inline-block h-4 w-[7px] animate-blink bg-primary align-middle" />
                        )}
                      </div>
                    ))}
                    {lines.finished && (
                      <div className="mt-1 flex items-center gap-1.5 text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" />
                        candidate_profile.json — compiled successfully
                      </div>
                    )}
                  </div>

                  {/* core metrics */}
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {CORE_METRICS.map((m) => (
                      <div
                        key={m.label}
                        className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 ${toneMap[m.tone]}`}
                      >
                        <m.icon className="h-3.5 w-3.5" />
                        <span className="font-mono text-[10px] uppercase tracking-wider">
                          {m.label}:
                          <span className="ml-1 text-white">{m.value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* REPORT (revealed after terminal) */}
              <div
                className={`relative transition-all duration-700 ${
                  showReport ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <div className="border-t border-white/10 px-5 py-4">
                  <div className="mb-4 flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4 text-secondary" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
                      AI Candidate Analysis Report
                    </span>
                  </div>

                  {/* key fields */}
                  <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    <ReportField label="Candidate" value={REPORT.candidate} />
                    <ReportField
                      label="Role"
                      value={REPORT.role.join(' · ')}
                      icon={Target}
                    />
                    <ReportField
                      label="University"
                      value={REPORT.university}
                      icon={GraduationCap}
                    />
                    <ReportField label="CGPA" value={REPORT.cgpa} highlight />
                  </div>

                  {/* programming languages */}
                  <div className="mt-5">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      Programming Languages
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {REPORT.languages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* core skills */}
                  <div className="mt-5">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      Core Skills
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {REPORT.coreSkills.map((skill) => (
                        <div
                          key={skill.label}
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2"
                        >
                          <skill.icon className="h-3.5 w-3.5 shrink-0 text-secondary" />
                          <span className="text-xs text-slate-200">{skill.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* projects */}
                  <div className="mt-5">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      Projects
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {REPORT.projects.map((p) => (
                        <div
                          key={p.name}
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                        >
                          <FolderGit2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <div className="truncate text-xs text-white">{p.name}</div>
                            <div className="font-mono text-[9px] text-slate-500">{p.tech}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* current goal */}
                  <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/5 px-3 py-2">
                    <Target className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      Current Goal:
                    </span>
                    <span className="text-sm text-emerald-300">{REPORT.goal}</span>
                  </div>

                  {/* assessment */}
                  <div className="mt-4 rounded-xl border border-violet-400/30 bg-violet-400/5 p-3">
                    <div className="mb-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-violet-300">
                      <BrainCircuit className="h-3.5 w-3.5" />
                      assessment
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-slate-200">
                      {REPORT.assessment}
                    </p>
                  </div>

                  {/* quick links */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-[10px] text-slate-300 transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Github className="h-3 w-3" />
                      {PROFILE.githubHandle}
                    </a>
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-[10px] text-slate-300 transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Linkedin className="h-3 w-3" />
                      LinkedIn
                    </a>
                    <span className="flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-400/5 px-2.5 py-1.5 font-mono text-[10px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      available
                    </span>
                  </div>
                </div>
              </div>

              {/* progress footer */}
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {showReport ? 'report ready' : `scanning... ${lines.currentLine}/${lines.total}`}
                </span>
                <div className="h-1 w-40 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    style={{ width: showReport ? '100%' : `${(lines.currentLine / lines.total) * 100}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] text-primary">
                  {showReport ? '100%' : `${Math.round((lines.currentLine / lines.total) * 100)}%`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportField({
  label,
  value,
  icon: Icon,
  highlight,
}: {
  label: string;
  value: string;
  icon?: typeof Target;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2">
      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
        {label}
      </span>
      <span
        className={`flex items-center gap-1.5 text-sm ${
          highlight ? 'font-semibold text-primary' : 'text-white'
        }`}
      >
        {Icon && <Icon className="h-3.5 w-3.5 text-secondary" />}
        {value}
      </span>
    </div>
  );
}
