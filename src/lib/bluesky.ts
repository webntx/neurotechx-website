import { NewsItem } from './types';

const HANDLE = 'neurotechx.bsky.social';
const APPVIEW = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed';

// Pull the NeuroTechX Bluesky timeline as NewsItems so it can be merged into the
// homepage "Pulse" feed alongside RSS sources. Public API — no auth required.
export async function fetchBlueskyPosts(limit = 8): Promise<NewsItem[]> {
  try {
    const res = await fetch(
      `${APPVIEW}?actor=${HANDLE}&limit=${limit}&filter=posts_no_replies`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.feed ?? [])
      .filter((it: any) => it.post?.author?.handle === HANDLE && !it.reason)
      .map((it: any) => {
        const p = it.post;
        const text: string = p.record?.text ?? '';
        const rkey = String(p.uri).split('/').pop();
        return {
          id: p.uri,
          title: (text.split('\n')[0] || 'NeuroTechX update').slice(0, 140),
          link: `https://bsky.app/profile/${HANDLE}/post/${rkey}`,
          pubDate: new Date(p.record?.createdAt ?? p.indexedAt).toISOString(),
          contentSnippet: text,
          source: {
            name: 'NeuroTechX · Bluesky',
            type: 'community' as const,
            url: `https://bsky.app/profile/${HANDLE}`,
          },
        } as NewsItem;
      });
  } catch {
    return [];
  }
}
