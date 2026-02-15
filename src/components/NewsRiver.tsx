import { NewsItem } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { ExternalLink, Rss } from 'lucide-react';

export default function NewsRiver({ items }: { items: NewsItem[] }) {
    if (items.length === 0) {
        return (
            <div className="p-8 text-center text-muted-foreground border border-dashed rounded-lg">
                No news items found. The river is dry.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8">
            {items.map((item) => (
                <article key={item.id} className="card group relative overflow-hidden">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${item.source.type === 'blog' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-muted text-muted-foreground'
                                    }`}>
                                    {item.source.name}
                                </span>
                                <span>•</span>
                                <time dateTime={item.pubDate}>
                                    {formatDistanceToNow(new Date(item.pubDate), { addSuffix: true })}
                                </time>
                            </div>
                            <a href={item.source.url} target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Rss className="w-4 h-4" />
                            </a>
                        </div>

                        <h2 className="text-xl md:text-2xl font-serif font-bold leading-tight group-hover:text-neuro-accent transition-colors">
                            <a href={item.link} target="_blank" rel="noreferrer" className="block">
                                {item.title}
                                <ExternalLink className="inline-block ml-2 w-4 h-4 opacity-50" />
                            </a>
                        </h2>

                        {item.contentSnippet && (
                            <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                                {item.contentSnippet.replace(/<[^>]*>?/gm, '') /* Basic strip tags */}
                            </p>
                        )}

                        <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold opacity-50">
                            {item.categories?.slice(0, 3).join(' / ')}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
