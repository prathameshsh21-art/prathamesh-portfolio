import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.unobserve(entry.target);
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

export function useTypingEffect(
  words: string[],
  opts?: { typeSpeed?: number; deleteSpeed?: number; hold?: number; start?: boolean },
) {
  const { typeSpeed = 90, deleteSpeed = 40, hold = 1400, start = true } = opts ?? {};
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!start) return;
    const current = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, hold, start]);

  return text;
}

/**
 * Types a list of lines sequentially (one line at a time, non-deleting).
 * Returns the visible lines (some may be fully typed, one in progress).
 * Only runs when `start` is true.
 */
export function useSequentialLines(
  lines: string[],
  opts?: { typeSpeed?: number; lineDelay?: number; start?: boolean },
) {
  const { typeSpeed = 28, lineDelay = 220, start = true } = opts ?? {};
  const [done, setDone] = useState<string[]>([]);
  const [current, setCurrent] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!start || finished) return;
    if (lineIdx >= lines.length) {
      setFinished(true);
      return;
    }
    const line = lines[lineIdx];

    if (charIdx < line.length) {
      const t = window.setTimeout(() => {
        setCurrent(line.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, typeSpeed);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setDone((d) => [...d, line]);
      setCurrent('');
      setCharIdx(0);
      setLineIdx((i) => i + 1);
    }, lineDelay);
    return () => window.clearTimeout(t);
  }, [start, finished, lineIdx, charIdx, lines, typeSpeed, lineDelay]);

  return {
    visible: [...done, current].filter(Boolean),
    done,
    currentLine: lineIdx + (finished ? 0 : 1),
    total: lines.length,
    finished,
  };
}

/**
 * Counts from 0 to target once `start` becomes true.
 * Uses rAF with easeOutExpo; returns the current numeric value.
 */
export function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let startTime = 0;
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(target * ease(progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}
