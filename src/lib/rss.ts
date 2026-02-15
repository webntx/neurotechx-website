import Parser from 'rss-parser';
import { FeedConfig, NewsItem } from './types';
import { formatISO } from 'date-fns';

// Initialize parser with custom fields if needed
const parser = new Parser({
    customFields: {
        item: ['media:content', 'media:group', 'dc:creator', 'content:encoded'],
    },
    timeout: 5000, // 5 second timeout to prevent build hangs
});

export const FEEDS: FeedConfig[] = [
    {
        name: 'NeuroTechX Medium',
        url: 'https://medium.com/feed/neurotechx',
        type: 'blog',
    },
    {
        name: 'INCF',
        url: 'https://www.incf.org/blog/feed/', // Added trailing slash
        type: 'external',
    },
    {
        name: 'NITRC',
        url: 'https://www.nitrc.org/export/rss20_news.php?group_id=6',
        type: 'external',
    },
    {
        name: 'NeuroStars',
        url: 'https://neurostars.org/latest.rss',
        type: 'external',
    },
    {
        name: 'Simons Foundation (Neuroscience)',
        url: 'https://www.simonsfoundation.org/category/neuroscience/feed/',
        type: 'external',
    },
    {
        name: "Deric's Mind Blog",
        url: 'http://mindblog.dericbownds.net/rss.xml',
        type: 'blog',
    }
];

export async function fetchFeeds(): Promise<NewsItem[]> {
    const allItems: NewsItem[] = [];

    const feedPromises = FEEDS.map(async (feed) => {
        try {
            console.log(`Fetching feed: ${feed.name} (${feed.url})`);
            const parsed = await parser.parseURL(feed.url);
            console.log(`Fetched ${parsed.items?.length || 0} items from ${feed.name}`);

            const items = (parsed.items as any[]).map((item: any) => {
                // Normalize date
                let pubDate = new Date().toISOString();
                if (item.pubDate) {
                    try {
                        const date = new Date(item.pubDate);
                        if (!isNaN(date.getTime())) {
                            pubDate = date.toISOString();
                        }
                    } catch (e) {
                        console.warn(`Failed to parse date for ${item.title}: ${item.pubDate}`);
                    }
                } else if (item.isoDate) {
                    pubDate = item.isoDate;
                }

                // Sanitize categories to ensure they are strings
                const categories = Array.isArray(item.categories)
                    ? item.categories.map((c: any) => typeof c === 'string' ? c : JSON.stringify(c))
                    : [];

                return {
                    id: item.guid || item.link || Math.random().toString(36).substr(2, 9),
                    title: item.title || 'Untitled',
                    link: item.link || '#',
                    pubDate,
                    contentSnippet: (item.contentSnippet || item.summary || '').substring(0, 600), // Slightly larger snippet
                    content: '', // Drop full content to reduce build size/memory usage since we don't display it
                    author: item.creator || item['dc:creator'] || null,
                    categories: categories,
                    source: {
                        name: feed.name,
                        type: feed.type,
                        url: feed.url
                    }
                } as NewsItem;
            });

            return items;
        } catch (error) {
            console.error(`Error fetching feed ${feed.name}:`, error);
            return [];
        }
    });

    const results = await Promise.all(feedPromises);

    // Flatten results
    results.forEach(feedItems => {
        allItems.push(...feedItems);
    });

    // Sort by date (newest first)
    return allItems.sort((a, b) => {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });
}
