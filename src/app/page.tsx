import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Code2, Mic, Video, Heart } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import NeuralBackground from '@/components/NeuralBackground';
import { fetchFeeds } from '@/lib/rss';
import { fetchBlueskyPosts } from '@/lib/bluesky';

export const revalidate = 1800;

const JOIN = 'https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform';

const PILLARS = [
  { icon: BookOpen, title: 'Education', desc: 'The NeuroTech Primer, getting-started guides, and 100+ hours of webinar archives.', href: '/education' },
  { icon: Users, title: 'Community', desc: 'A global network with local chapters across 30+ cities. Find your people.', href: '/community' },
  { icon: Code2, title: 'Open Source', desc: 'Reproducible BCI research with MOABB and community-built tools and datasets.', href: '/projects' },
];

const FEATURED = [
  { icon: BookOpen, tag: 'Guide', title: 'The NeuroTech Primer', desc: 'The essential guide to Brain–Computer Interfaces — start your journey here.', href: '/education', cta: 'Read the book' },
  { icon: Code2, tag: 'Open source', title: 'MOABB Benchmarks', desc: 'The community standard for reproducible BCI dataset benchmarking.', href: 'https://github.com/NeuroTechX/moabb', cta: 'View repo', external: true },
  { icon: Video, tag: 'Archive', title: 'Industry Webinars', desc: 'Technical workshops from g.tec, Interaxon, Neuroelectrics, ANT Neuro, NIRx & more.', href: '/education/webinars', cta: 'Watch archive' },
  { icon: Mic, tag: 'Podcast', title: 'FUS Forward', desc: 'Advancements in focused ultrasound, with host Charles Caskey.', href: 'https://podcasts.apple.com/us/podcast/fus-forward/id1857021050', cta: 'Listen', external: true },
  { icon: Users, tag: 'Network', title: 'Local Chapters', desc: 'Connect with neurotech enthusiasts in 30+ cities worldwide.', href: '/community', cta: 'Find a chapter' },
  { icon: Heart, tag: 'Support', title: 'Support the Mission', desc: 'Help keep these resources open and free. NeuroTechX is a non-profit.', href: '/donate', cta: 'Donate' },
];

export default async function Home() {
  const [feeds, bsky] = await Promise.all([
    fetchFeeds().catch(() => []),
    fetchBlueskyPosts(6),
  ]);
  const pulse = [...bsky, ...feeds]
    .filter((i) => i?.title && i.pubDate)
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <NeuralBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,211,238,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/30 via-transparent to-[var(--background)]" />
        <div className="container relative z-10 py-28 md:py-40 text-center">
          <p className="eyebrow mb-5">The global neurotechnology community</p>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-bold leading-[1.06] mb-6">
            The International <span className="text-gradient">Neurotechnology</span> Community
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-9">
            NeuroTechX is a volunteer-led non-profit representing the largest global community of
            neurotechnology innovators — education, open-source tools, and 30+ local chapters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={JOIN} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neuro-accent px-6 py-3.5 font-bold text-[var(--background)] shadow-glow transition hover:brightness-110">
              Join the Community <ArrowRight width={18} height={18} />
            </a>
            <Link href="/education"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-2)] px-6 py-3.5 font-bold text-foreground transition hover:border-neuro-accent">
              Explore Education
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Link key={p.title} href={p.href}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-7 transition hover:border-[var(--border-strong)] hover:-translate-y-0.5">
              <p.icon className="mb-4 h-7 w-7 text-neuro-accent" />
              <h3 className="mb-2 text-xl font-bold group-hover:text-neuro-accent transition-colors">{p.title}</h3>
              <p className="text-muted-foreground">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="container pb-4 md:pb-8">
        <p className="eyebrow mb-2">Explore</p>
        <h2 className="mb-8 text-2xl md:text-3xl font-bold">Projects &amp; resources</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((c) => {
            const Wrap: any = c.external ? 'a' : Link;
            const props: any = c.external
              ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: c.href };
            return (
              <Wrap key={c.title} {...props}
                className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-6 transition hover:border-[var(--border-strong)] hover:-translate-y-0.5">
                <div className="mb-4 flex items-center justify-between">
                  <c.icon className="h-6 w-6 text-neuro-accent" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">{c.tag}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold group-hover:text-neuro-accent transition-colors">{c.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neuro-accent">
                  {c.cta} <ArrowRight width={15} height={15} />
                </span>
              </Wrap>
            );
          })}
        </div>
      </section>

      {/* ── Pulse (live feed: RSS + Bluesky) ── */}
      <section className="mt-16 border-t border-[var(--border)] bg-[var(--surface-1)]/40 py-16 md:py-20">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">Live · auto-updating</p>
              <h2 className="text-2xl md:text-3xl font-bold">The Pulse of Neurotech</h2>
            </div>
            <a href="https://bsky.app/profile/neurotechx.bsky.social" target="_blank" rel="noopener noreferrer"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-neuro-accent sm:inline-flex">
              Follow on Bluesky <ArrowRight width={15} height={15} />
            </a>
          </div>
          {pulse.length === 0 ? (
            <p className="text-muted-foreground">The feed is quiet right now — check back soon.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pulse.map((item) => (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-5 transition hover:border-neuro-accent">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-[var(--surface-3)] px-2 py-0.5 font-medium">{item.source.name}</span>
                    <span>·</span>
                    <time dateTime={item.pubDate}>{formatDistanceToNow(new Date(item.pubDate), { addSuffix: true })}</time>
                  </div>
                  <h3 className="line-clamp-3 font-semibold leading-snug group-hover:text-neuro-accent transition-colors">
                    {item.title}
                  </h3>
                  {item.contentSnippet && (
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {item.contentSnippet.replace(/<[^>]*>?/gm, '')}
                    </p>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container py-20 text-center">
        <h2 className="mx-auto mb-4 max-w-2xl text-3xl md:text-4xl font-bold">Build the future of neurotech, together.</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          Join thousands of innovators, students, and researchers shaping the field.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={JOIN} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neuro-accent px-6 py-3.5 font-bold text-[var(--background)] shadow-glow transition hover:brightness-110">
            Join the Community <ArrowRight width={18} height={18} />
          </a>
          <Link href="/donate"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-2)] px-6 py-3.5 font-bold text-foreground transition hover:border-neuro-accent">
            Support the Mission
          </Link>
        </div>
      </section>
    </div>
  );
}
