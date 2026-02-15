import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            {/* Main Navigation */}
            <header className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <div className={styles.logo}>
                            <Link href="/" className={styles.logoText}>
                                <span style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>NeuroTech</span><span style={{ color: 'var(--neuro-accent)' }}>X</span>
                            </Link>
                        </div>
                        {/* Tabs as a proper row */}
                        <nav className={styles.nav}>
                            {[
                                { name: 'About', href: '/about' },
                                { name: 'Community', href: '/community' },
                                { name: 'Education', href: '/education' },
                                { name: 'Events', href: 'https://luma.com/neurotechx', external: true },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Reports', href: '/reports' },
                                { name: 'Jobs', href: '/jobs' },
                            ].map((item) => (
                                item.external ? (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.navLink}
                                    >
                                        {item.name} <ArrowRight className="inline-block w-3 h-3 ml-0.5 opacity-50" />
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={styles.navLink}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </nav>
                    </div>

                    <div className={styles.rightSection}>
                        <Link href="/donate" className={styles.donateLink}>
                            Donate
                        </Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform" target="_blank" className={styles.joinButton}>
                            Join Community
                        </a>
                    </div>
                </div>
            </header>

            {/* Ticket Bar (Sub-header) - Restored "Wonderful" Style */}
            <div className={styles.ticketBanner}>
                <div className={styles.bannerContainer}>
                    <div className={styles.bannerContent}>
                        <span className={styles.badge}>Upcoming</span>
                        <span className={styles.bannerTitle}>California Neurotechnology Conference 2026</span>
                        <span className={styles.bannerDetails}>April 26 • UC Berkeley</span>
                    </div>
                    <a href="https://www.eventbrite.com/e/2026-california-neurotechnology-conference-tickets-1982321023544" target="_blank" className={styles.ticketLink}>
                        Get Tickets <ArrowRight width={14} height={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}
