export interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
    channelTitle?: string;
}

export async function getPlaylistVideos(playlistId: string): Promise<YouTubeVideo[]> {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
        console.error('[YouTube API] ERROR: YOUTUBE_API_KEY is not defined');
        return [];
    }

    try {
        console.log(`[YouTube API] Fetching playlist: ${playlistId}`);
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        );

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`[YouTube API] ERROR fetching playlist ${playlistId}: ${response.status} ${response.statusText}`, errorBody);
            throw new Error(`YouTube API error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`[YouTube API] Successfully fetched ${data.items?.length || 0} videos from playlist ${playlistId}`);

        return data.items.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
        }));
    } catch (error) {
        console.error('[YouTube API] Unexpected error in getPlaylistVideos:', error);
        return [];
    }
}

export async function getLatestVideosFromChannels(channelIds: string[]): Promise<YouTubeVideo[]> {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
        console.error('[YouTube API] ERROR: YOUTUBE_API_KEY is not defined');
        return [];
    }

    try {
        console.log(`[YouTube API] Fetching latest videos from ${channelIds.length} channels`);
        
        const videoPromises = channelIds.map(async (channelId) => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=5&order=date&type=video&key=${apiKey}`
                );
                
                if (!response.ok) {
                    const errorBody = await response.text();
                    console.warn(`[YouTube API] WARNING: Failed to fetch for channel ${channelId}: ${response.status}`, errorBody);
                    return [];
                }
                
                const data = await response.json();
                return data.items.map((item: any) => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
                    publishedAt: item.snippet.publishedAt,
                    channelTitle: item.snippet.channelTitle,
                }));
            } catch (e) {
                console.error(`[YouTube API] ERROR fetching for channel ${channelId}:`, e);
                return [];
            }
        });

        const results = await Promise.all(videoPromises);
        const allVideos = results.flat();

        console.log(`[YouTube API] Total videos aggregated from channels: ${allVideos.length}`);

        // Sort by date descending
        return allVideos.sort((a, b) => 
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    } catch (error) {
        console.error('[YouTube API] Unexpected error in getLatestVideosFromChannels:', error);
        return [];
    }
}
