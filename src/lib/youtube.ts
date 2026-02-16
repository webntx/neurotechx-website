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
        console.error('YOUTUBE_API_KEY is not defined');
        return [];
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`YouTube API error: ${response.statusText}`);
        }

        const data = await response.json();

        return data.items.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
            publishedAt: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
        }));
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
}

export async function getLatestVideosFromChannels(channelIds: string[]): Promise<YouTubeVideo[]> {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
        console.error('YOUTUBE_API_KEY is not defined');
        return [];
    }

    try {
        // Since we can't easily search for multiple channels in one call and sort them globally without many requests,
        // we'll fetch the latest 5 videos from each channel and then sort them.
        // For performance, we'll limit the number of channels processed if needed, but 17 is manageable.
        
        const videoPromises = channelIds.map(async (channelId) => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=5&order=date&type=video&key=${apiKey}`
                );
                if (!response.ok) return [];
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
                console.error(`Error fetching for channel ${channelId}:`, e);
                return [];
            }
        });

        const results = await Promise.all(videoPromises);
        const allVideos = results.flat();

        // Sort by date descending
        return allVideos.sort((a, b) => 
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    } catch (error) {
        console.error('Error fetching channel videos:', error);
        return [];
    }
}
