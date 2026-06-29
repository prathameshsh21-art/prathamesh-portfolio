import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Send,
  CheckCircle2,
  Loader2,
  Mail,
  User,
  Tag,
  AlertCircle,
  Github,
  Linkedin,
  Download,
  ArrowUpRight,
} from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { useInView } from '../lib/hooks';


const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojoljgz';

type Status = 'idle' | 'sending' | 'success' | 'error';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Enter a valid email address';
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  if (!form.message.trim()) errors.message = 'Message is required';
  return errors;
}

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const update =
    (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [k]: value }));
      if (touched[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  const blur = (k: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [k]: fieldErrors[k] }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
      window.setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div ref={ref}>
        <div className="text-center">
          <div className="section-label justify-center">
            <span className="h-px w-8 bg-primary/60" />
            Contact
            <span className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Open a <span className="text-gradient">channel.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            Internship inquiries, collaboration, or just a hello — transmit your message below.
          </p>
        </div>

        <div
          className={`mx-auto mt-12 grid max-w-4xl gap-6 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass scanlines relative overflow-hidden p-6 sm:p-8">
            {/* success overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg/95 backdrop-blur-sm animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
                  <CheckCircle2 className="relative h-16 w-16 text-emerald-400" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  Thank you! Your message has been sent successfully.
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-400">
                  status: 200 OK · channel open
                </p>
              </div>
            )}

            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-slate-400">
                POST /api/contact_transmit
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                endpoint online
              </span>
            </div>

            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  icon={User}
                  label="name"
                  value={form.name}
                  onChange={update('name')}
                  onBlur={blur('name')}
                  placeholder="Your name"
                  required
                  error={errors.name}
                />
                <Field
                  icon={Mail}
                  label="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  onBlur={blur('email')}
                  placeholder="you@domain.com"
                  required
                  error={errors.email}
                />
              </div>
              <Field
                icon={Tag}
                label="subject"
                value={form.subject}
                onChange={update('subject')}
                onBlur={blur('subject')}
                placeholder="Internship inquiry / collaboration"
                required
                error={errors.subject}
              />
              <div>
                <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  <Mail className="h-3 w-3" /> message
                </label>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  onBlur={blur('message')}
                  required
                  rows={5}
                  placeholder="Type your message here..."
                  className={`w-full resize-none rounded-xl border bg-bg-card/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:outline-none focus:ring-1 ${
                    errors.message
                      ? 'border-red-400/50 focus:border-red-400/70 focus:ring-red-400/30'
                      : 'border-white/10 focus:border-primary/50 focus:ring-primary/30'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-red-300">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-xs text-red-300">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="font-mono text-[10px] text-slate-500">
                  recipient: {PROFILE.email}
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* quick contact links */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <ContactLink
            href={`mailto:${PROFILE.email}`}
            icon={Mail}
            label="Email"
            value="Send a message"
          />
          <ContactLink
            href={PROFILE.github}
            target="_blank"
            icon={Github}
            label="GitHub"
            value={PROFILE.githubHandle}
          />
          <ContactLink
            href={PROFILE.linkedin}
            target="_blank"
            icon={Linkedin}
            label="LinkedIn"
            value="Connect"
          />
          <ContactLink
            href={PROFILE.resume}
            target="_blank"
            icon={Download}
            label="Resume"
            value="Download PDF"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  target,
  download,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
  target?: string;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? 'noreferrer' : undefined}
      download={download}
      className="glass glass-hover group flex items-center gap-3 p-4 transition-all duration-300 hover:-translate-y-0.5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
          {label}
        </div>
        <div className="flex items-center gap-1 truncate text-sm text-white">
          {value}
          <ArrowUpRight className="h-3 w-3 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </a>
  );
}

function Field({
  icon: Icon,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  required,
  error,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <Icon className="h-3 w-3" /> {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-xl border bg-bg-card/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:outline-none focus:ring-1 ${
          error
            ? 'border-red-400/50 focus:border-red-400/70 focus:ring-red-400/30'
            : 'border-white/10 focus:border-primary/50 focus:ring-primary/30'
        }`}
      />
      {error && (
        <p className="mt-1 flex items-center gap-1.5 text-xs text-red-300">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}
