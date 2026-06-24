import { fetchFeeds, REPORTS_FEEDS } from '@/lib/rss';
import PageHeader from '@/components/PageHeader';
import { formatDistanceToNow } from 'date-fns';

export const revalidate = 3600; // refresh hourly

export default async function ReportsPage() {
    const all = await fetchFeeds(REPORTS_FEEDS).catch(() => []);

    // De-dupe by normalized title (the queries overlap), keep newest-first.
    const seen = new Set<string>();
    const items = all
        .filter((i) => i?.title && i.pubDate)
        .filter((i) => {
            const k = i.title.toLowerCase().replace(/\s+/g, ' ').trim();
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
        })
        .slice(0, 36);

    return (
        <div className="container py-12">
            <PageHeader
                eyebrow="Industry"
                title="Reports"
                subtitle="Business-oriented neurotech news and press releases from across the industry — curated and updated hourly."
            />

            {items.length === 0 ? (
                <p className="text-muted-foreground">No items right now — check back soon.</p>
            ) : (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 transition hover:border-neuro-accent hover:-translate-y-0.5"
                        >
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
    );
}
