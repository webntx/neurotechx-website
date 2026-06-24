import { NextResponse } from 'next/server';

// Publish an RSS feed mirroring the NeuroTechX Bluesky account.
// Served at https://neurotechx.org/feed.xml — refreshes every 30 min.
export const revalidate = 1800;

const HANDLE = 'neurotechx.bsky.social';
const SITE = 'https://neurotechx.org';
const APPVIEW = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const url = `${APPVIEW}?actor=${HANDLE}&limit=30&filter=posts_no_replies`;
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    return new NextResponse('Failed to fetch Bluesky feed', { status: 502 });
  }
  const data = await res.json();
  const feed: any[] = data.feed ?? [];

  const items = feed
    .filter((it) => it.post?.author?.handle === HANDLE && !it.reason)
    .map((it) => {
      const p = it.post;
      const text: string = p.record?.text ?? '';
      const rkey = String(p.uri).split('/').pop();
      const link = `https://bsky.app/profile/${HANDLE}/post/${rkey}`;
      const title = (text.split('\n')[0] || 'NeuroTechX update').slice(0, 100);
      const date = new Date(p.record?.createdAt ?? p.indexedAt).toUTCString();
      return `    <item>
      <title>${esc(title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <pubDate>${date}</pubDate>
      <description>${esc(text)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NeuroTechX</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>NeuroTechX news &amp; updates (mirrors our Bluesky)</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
