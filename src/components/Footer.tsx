import { Facebook, Linkedin, Instagram, Twitter, Cloud, Video, Github, ShoppingBag } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/NeuroTechX', icon: Github },
        { name: 'Bluesky', url: 'https://bsky.app/profile/neurotechx.bsky.social', icon: Cloud },
        { name: 'Twitter', url: 'https://twitter.com/neurotechx', icon: Twitter },
        { name: 'YouTube', url: 'https://www.youtube.com/neurotechx', icon: Video },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/neurotechx', icon: Linkedin },
        { name: 'Facebook', url: 'https://www.facebook.com/neurotechx', icon: Facebook },
        { name: 'Instagram', url: 'https://www.instagram.com/neurotechx', icon: Instagram },
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
