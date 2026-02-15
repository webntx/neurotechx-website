export type SourceType = 'blog' | 'external' | 'community' | 'job';

export interface NewsItem {
    id: string;
    title: string;
    link: string;
    pubDate: string; // ISO string
    contentSnippet?: string;
    content?: string;
    source: {
        name: string;
        url?: string;
        type: SourceType;
    };
    author?: string;
    categories?: string[];
}

export interface FeedConfig {
    url: string;
    name: string;
    type: SourceType;
}
