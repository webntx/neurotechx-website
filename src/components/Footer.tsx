import { Linkedin, Instagram, Youtube, Github, Facebook, ShoppingBag } from 'lucide-react';
import styles from './Footer.module.css';

// Brand glyphs lucide doesn't ship (Bluesky, X)
function BlueskyIcon({ width = 20, height = 20 }: { width?: number; height?: number }) {
    return (
        <svg width={width} height={height} viewBox="0 0 568 501" fill="currentColor" aria-hidden="true">
            <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.193 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.66 0 75.293 0 57.947 0-28.906 76.135-1.611 123.121 33.664Z" />
        </svg>
    );
}
function XIcon({ width = 20, height = 20 }: { width?: number; height?: number }) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

export default function Footer() {
    const socialLinks = [
        { name: 'Bluesky', url: 'https://bsky.app/profile/neurotechx.bsky.social', icon: BlueskyIcon },
        { name: 'X', url: 'https://x.com/neurotechx', icon: XIcon },
        { name: 'GitHub', url: 'https://github.com/NeuroTechX', icon: Github },
        { name: 'YouTube', url: 'https://www.youtube.com/@neurotechx', icon: Youtube },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/neurotechx', icon: Linkedin },
        { name: 'Instagram', url: 'https://www.instagram.com/neurotechx', icon: Instagram },
        { name: 'Facebook', url: 'https://www.facebook.com/neurotechx', icon: Facebook },
        { name: 'Merch Store', url: 'https://neurotechx-store.creator-spring.com/', icon: ShoppingBag },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    <p>
                        © {new Date().getFullYear()} NeuroTechX. <a href="/code-of-conduct" className="hover:underline">Code of Conduct</a>.
                    </p>
                </div>
                <div className={styles.socialLinks}>
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.name}
                            className={styles.socialLink}
                        >
                            <link.icon width={20} height={20} />
                            <span className={styles.srOnly}>{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
