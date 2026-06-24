import PageHeader from '@/components/PageHeader';
import { fetchFeeds } from '@/lib/rss';
import { formatDistanceToNow } from 'date-fns';
import { ArrowRight } from 'lucide-react';

export const revalidate = 3600; // refresh hourly

const CONTENT_LAB_FEED = [
    { name: 'NeuroTechX Content Lab', type: 'blog' as const, url: 'https://medium.com/feed/neurotechx' },
];

export default async function ContentLabPage() {
    const articles = (await fetchFeeds(CONTENT_LAB_FEED).catch(() => []))
        .filter((a) => a?.title && a.pubDate)
        .slice(0, 12);

    return (
        <div className="container py-12">
            <PageHeader
                eyebrow="Content Lab"
                title="NTX Content Laboratory"
                subtitle="Original writing on neurotechnology — by the NeuroTechX Content Lab's writers, editors, and designers."
            />

            {articles.length === 0 ? (
                <p className="text-muted-foreground">
                    Read our articles on{' '}
                    <a className="text-neuro-accent underline" href="https://medium.com/neurotechx" target="_blank" rel="noopener noreferrer">Medium</a>.
                </p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((a) => (
                        <a
                            key={a.id}
                            href={a.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-1)] transition hover:border-neuro-accent hover:-translate-y-0.5"
                        >
                            <div className="aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-2)]">
                                {a.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.18),transparent_60%)]">
                                        <span className="font-display text-2xl text-[var(--border-strong)]">NTX</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                                    {a.author && <span className="font-medium text-foreground/80">{a.author}</span>}
                                    {a.author && <span>·</span>}
                                    <time dateTime={a.pubDate}>{formatDistanceToNow(new Date(a.pubDate), { addSuffix: true })}</time>
                                </div>
                                <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug group-hover:text-neuro-accent transition-colors">
                                    {a.title}
                                </h3>
                                {a.contentSnippet && (
                                    <p className="line-clamp-3 flex-1 text-sm text-muted-foreground">
                                        {a.contentSnippet.replace(/<[^>]*>?/gm, '').trim()}
                                    </p>
                                )}
                                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neuro-accent">
                                    Read on Medium <ArrowRight width={15} height={15} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
                <a href="https://medium.com/neurotechx" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-neuro-accent px-6 py-3 font-bold text-[var(--background)] shadow-glow transition hover:brightness-110">
                    Read all on Medium <ArrowRight width={17} height={17} />
                </a>
                <a href="https://medium.com/neurotechx/about" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-2)] px-6 py-3 font-bold text-foreground transition hover:border-neuro-accent">
                    Write for us
                </a>
            </div>
        </div>
    );
}
