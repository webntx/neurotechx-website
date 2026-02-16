import { getPlaylistVideos } from '@/lib/youtube';
import { Play, Calendar, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

export const revalidate = 86400; // Revalidate every 24 hours

const WEBINAR_PLAYLIST_ID = 'PL7yYIG1eq9bTbK-W66TCl7t8wTXwelSNz';

export default async function WebinarsPage() {
    const videos = await getPlaylistVideos(WEBINAR_PLAYLIST_ID);

    return (
        <div className="container py-12">
            <div className={styles.header}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                    Industry <span className="text-neuro-accent">Webinars</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Technical workshops and deep dives featuring experts from the leading neurotechnology companies worldwide.
                </p>
            </div>

            <div className={styles.grid}>
                {videos.map((video) => (
                    <a 
                        key={video.id} 
                        href={`https://www.youtube.com/watch?v=${video.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <div className={styles.thumbnailContainer}>
                            <img 
                                src={video.thumbnail} 
                                alt={video.title} 
                                className={styles.thumbnail}
                            />
                            <div className={styles.playOverlay}>
                                <div className="bg-neuro-accent p-4 rounded-full text-white shadow-xl">
                                    <Play fill="white" size={24} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.date}>
                                <Calendar size={12} className="inline mr-1" />
                                {new Date(video.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <h3 className={styles.title}>{video.title}</h3>
                            <p className={styles.description}>{video.description}</p>
                            <div className={styles.footer}>
                                Watch Webinar <ExternalLink size={14} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {videos.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-muted-foreground">No webinars found. Please check back later.</p>
                </div>
            )}
        </div>
    );
}
