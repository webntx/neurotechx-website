'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const JOIN =
  'https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform';

type CTA = { label: string; href: string; external?: boolean; primary?: boolean };
type Slide = { eyebrow: string; title: React.ReactNode; desc: string; ctas: CTA[] };

// ── Edit these to control the rotating front-page headlines ──
const SLIDES: Slide[] = [
  {
    eyebrow: 'The global neurotechnology community',
    title: (
      <>
        The International <span className="text-gradient">Neurotechnology</span> Community
      </>
    ),
    desc: 'A volunteer-led non-profit representing the largest global community of neurotechnology innovators — education, open-source tools, and 30+ local chapters.',
    ctas: [
      { label: 'Join the Community', href: JOIN, external: true, primary: true },
      { label: 'Explore Education', href: '/education' },
    ],
  },
  {
    eyebrow: 'Featured · SfN 2026 satellite',
    title: (
      <>
        IEEE Brain Discovery &amp; <span className="text-gradient">Neurotechnology</span> Workshop
      </>
    ),
    desc: 'Nov 11–13, 2026 · Washington, DC — the flagship neurotech satellite alongside Society for Neuroscience 2026.',
    ctas: [
      { label: 'View details', href: 'https://brain.ieee.org/2026-ieee-brain-discovery-neurotechnology-workshop/', external: true, primary: true },
    ],
  },
  {
    eyebrow: 'Upcoming · 21–25 Sep 2026',
    title: (
      <>
        <span className="text-gradient">CuttingGardens</span> 2026
      </>
    ),
    desc: 'A distributed M/EEG methods multi-hub conference — cutting-edge methods for M/EEG data analysis, across gardens worldwide.',
    ctas: [
      { label: 'Learn more', href: 'https://cuttingeeg.org/cuttinggardens2026/', external: true, primary: true },
    ],
  },
];

const INTERVAL = 6500;

function Cta({ cta }: { cta: CTA }) {
  const cls = cta.primary
    ? 'inline-flex items-center justify-center gap-2 rounded-lg bg-neuro-accent px-6 py-3.5 font-bold text-[var(--background)] shadow-glow transition hover:brightness-110'
    : 'inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-2)] px-6 py-3.5 font-bold text-foreground transition hover:border-neuro-accent';
  const inner = (
    <>
      {cta.label} {cta.primary && <ArrowRight width={18} height={18} />}
    </>
  );
  return cta.external ? (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={cta.href} className={cls}>{inner}</Link>
  );
}

export default function HeroCarousel({ mediumSlides = [] }: { mediumSlides?: Slide[] }) {
  // Curated welcome first, then the latest blog post(s), then the events.
  const all: Slide[] = [SLIDES[0], ...mediumSlides, ...SLIDES.slice(1)];
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = all.length;
  const go = useCallback((idx: number) => setI(((idx % n) + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [paused, n]);

  const s = all[i];

  return (
    <div
      className="mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div key={i} className="hero-slide">
        <p className="eyebrow mb-5">{s.eyebrow}</p>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-bold leading-[1.06] mb-6 min-h-[2.2em]">
          {s.title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-9 min-h-[3.3em]">{s.desc}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {s.ctas.map((c) => (
            <Cta key={c.label} cta={c} />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-10 flex items-center justify-center gap-2.5" role="tablist" aria-label="Featured headlines">
        {all.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === i}
            aria-label={`Headline ${idx + 1}`}
            onClick={() => go(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? 'w-7 bg-neuro-accent' : 'w-2 bg-[var(--border-strong)] hover:bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
