import { useEffect, useState } from 'react';
import { Github, Star, ArrowUpRight, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { useInView } from '../lib/hooks';

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
};

export default function GitHubSection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setLoading(true);
    setError(false);

    const username = 'prathameshsh21-art';
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [inView]);

  return (
    <section id="github" className="section-shell">
      <div ref={ref}>
        <div className="text-center">
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-primary/60" />
            GitHub Console
            <span className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Open <span className="text-gradient">source.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            My latest repositories, fetched live from GitHub.
          </p>
        </div>

        <div className="glass scanlines mt-12 overflow-hidden">
          {/* terminal header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-white" />
              <span className="font-mono text-xs text-slate-300">{PROFILE.githubHandle}</span>
            </div>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-primary hover:text-white"
            >
              view profile ↗
            </a>
          </div>

          <div className="p-6">
            {/* loading state */}
            {loading && (
              <div className="flex flex-col items-center justify-center gap-3 py-12">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <span className="font-mono text-xs text-slate-500">fetching repositories...</span>
              </div>
            )}

            {/* error / empty state */}
            {(error || (!loading && repos.length === 0)) && (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <AlertCircle className="h-6 w-6 text-slate-500" />
                <span className="font-mono text-xs text-slate-500">
                  {error ? 'Unable to fetch repositories right now.' : 'No public repositories found.'}
                </span>
              </div>
            )}

            {/* repos grid */}
            {!loading && !error && repos.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo, i) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-white/10 bg-bg-card/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.04]"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate font-mono text-xs text-white">{repo.name}</span>
                      <Star className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-primary" />
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[11px] text-slate-500">
                      {repo.description ?? 'No description provided.'}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      {repo.language ? (
                        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] text-primary">
                          {repo.language}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="flex items-center gap-1 font-mono text-[9px] text-slate-500">
                        <Star className="h-3 w-3" />
                        {repo.stargazers_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* footer with location + CTA */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-4 sm:flex-row">
            <span className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
              <MapPin className="h-3 w-3" /> {PROFILE.location} · building in public
            </span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-5 !py-2 !text-xs"
            >
              <Github className="h-4 w-4" />
              Visit GitHub Profile
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
