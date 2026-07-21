import { useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, Award, Building2, Shield } from 'lucide-react';
import { CERTIFICATES } from '../data/certificates';
import { SmartImage } from './SmartImage';

type Props = {
  onBack: () => void;
  dark: boolean;
  onToggleDark: () => void;
};

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function CertificatesPage({ onBack, dark, onToggleDark }: Props) {
  useReveal();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div ref={topRef} className="relative min-h-screen overflow-x-hidden">
      {/* Sticky sub-header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200/60 bg-ink-50/70 backdrop-blur-xl dark:border-ink-800/60 dark:bg-ink-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2.5 text-sm font-medium text-ink-600 transition-colors hover:text-accent-600 dark:text-ink-300 dark:hover:text-accent-400"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-ink-200/70 transition-all duration-300 group-hover:border-accent-400 group-hover:text-accent-600 dark:border-ink-800 dark:group-hover:text-accent-400">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </span>
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-ink-200/70 bg-ink-100/60 px-3.5 py-1.5 text-xs font-semibold text-ink-600 sm:inline-flex dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300">
              <Award className="h-3.5 w-3.5 text-accent-500" />
              Certificate Gallery
            </span>
            <button
              onClick={onToggleDark}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-200/70 text-ink-600 transition-all duration-300 hover:border-accent-400 hover:text-accent-500 dark:border-ink-800 dark:text-ink-300"
            >
              {dark ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-12 lg:pt-44 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-400/15 blur-3xl animate-blob dark:bg-accent-500/10" />
          <div className="absolute inset-0 grain opacity-60" />
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-ink-50/60 px-4 py-1.5 text-xs font-medium text-ink-600 backdrop-blur dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300">
            <Shield className="h-3.5 w-3.5 text-accent-500" />
            Lifelong learning — certified & self-driven
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Certificate & Learning{' '}
            <span className="bg-gradient-to-r from-accent-500 via-accent-400 to-electric-400 bg-clip-text text-transparent">
              Showcase Gallery
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600 text-balance dark:text-ink-300">
            A curated collection of my networking certifications and self-driven learning
            milestones — from vendor certifications to hands-on lab mastery.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {CERTIFICATES.map((c) => (
              <article
                key={c.title}
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200/70 bg-ink-50/60 transition-all duration-500 hover:-translate-y-1 hover:border-accent-400/60 hover:shadow-2xl hover:shadow-accent-500/5 dark:border-ink-800 dark:bg-ink-900/40"
              >
                {/* Image with placeholder fallback */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-200/40 dark:bg-ink-800/40">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-400 dark:text-ink-500">
                    <Award className="h-12 w-12 opacity-40" />
                    <span className="font-mono text-xs uppercase tracking-widest">Certificate Photo</span>
                  </div>
                  <SmartImage
                    src={c.image}
                    alt={c.title}
                    fill
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-ink-950/80 px-3 py-1 text-[11px] font-semibold text-ink-50 backdrop-blur">
                    <span className="font-mono">{c.date}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
                    {c.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-500 dark:text-ink-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" />
                      {c.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="font-mono">{c.date}</span>
                    </span>
                  </div>

                  <p className="mt-3.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {c.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-ink-200/50 px-2.5 py-1 font-mono text-xs font-medium text-ink-600 dark:bg-ink-800/60 dark:text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {c.credentialId && (
                    <div className="mt-5 flex items-center justify-between border-t border-ink-200/60 pt-4 dark:border-ink-800/60">
                      <span className="font-mono text-[11px] text-ink-400">
                        ID: {c.credentialId}
                      </span>
                      {/* <span className="inline-flex items-center gap-1 text-xs font-medium text-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-accent-400">
                        View <ExternalLink className="h-3 w-3" />
                      </span> */}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
