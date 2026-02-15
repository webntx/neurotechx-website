import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './page.module.css';
import { getDockitContent } from '@/lib/dockit';
import { DockitRenderer } from '@/components/DockitRenderer';

export default function AboutPage() {
    const dockitContent = getDockitContent('about');

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.title}>About NeuroTechX</h1>
                <p className={styles.subtitle}>
                    NeuroTechX is a non-profit organization whose mission is to facilitate the advancement of neurotechnology by providing key resources and learning opportunities, and by being leaders in local and worldwide technological initiatives.
                </p>
                <p className={styles.pillars}>
                    Our 3 pillars are “Community”, “Education”, and “Professional Development”.
                </p>
            </section>

            {dockitContent && (
                <section className={styles.section}>
                    <DockitRenderer content={dockitContent} />
                </section>
            )}

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Our Origins</h2>
                <p className="text-center max-w-2xl mx-auto mb-8 text-muted-foreground">
                    NeuroTechX stands on the shoulders of giants. We acknowledge the <a href="https://alexandre.barachant.org/" target="_blank" className="text-neuro-accent hover:underline font-bold">founders and intellectual sources</a> whose open-source contributions (like <em>muse-lsl</em> and <em>pyriemann</em>) laid the technical foundation for our community.
                    <br /><br />
                    For a deeper dive, explore the <a href="https://neurotech-course.github.io/neurotech_history/" target="_blank" className="text-neuro-accent hover:underline font-bold">Neurotech History Timeline</a>.
                </p>
                <div className={styles.originsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Paris: CogLab</h3>
                        <span className={styles.cardLabel}>Historical Pillar</span>
                        <p className={styles.cardText}>
                            Founded in 2013 at <em>La Paillasse</em> (a community bio-hackerspace), <strong>CogLab</strong> pioneered the &quot;Community Lab&quot; model.
                            It was one of the first grassroots groups to explore cognitive science through DIY hardware and open citizen science.
                        </p>
                        <div className="flex flex-col gap-2">
                            <a href="https://coglab.fr/home-en/" target="_blank" className={styles.link}>
                                Visit CogLab <ArrowUpRight className={styles.icon} />
                            </a>
                            <a href="https://www.meetup.com/coglab/" target="_blank" className={styles.link}>
                                Weekly Meetings (Meetup) <ArrowUpRight className={styles.icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>San Francisco: Berkeley Cognitive Technology Group</h3>
                        <span className={styles.cardLabel}>Historical Pillar</span>
                        <p className={styles.cardText}>
                            The <strong>Cognitive Technology Group at Berkeley</strong> was a seminal student organization that laid the groundwork for the modern student club network.
                            Stemming from the original <strong>Exploratorium project</strong>, their work set the standard for what would become <em>NeuroTech@Berkeley</em>.
                        </p>
                        <a href="http://www.explorecogtech.com/" target="_blank" className={styles.link}>
                            Visit Original Project <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Montreal: District 3 Workshop</h3>
                        <span className={styles.cardLabel}>Educational Milestone (2018)</span>
                        <p className={styles.cardText}>
                            Hosted at <strong>District 3</strong> (Concordia University), the &quot;Deep Learning for EEG&quot; workshop was a seminal event that brought together the ML and Neuroscience communities.
                            It laid the foundation for our modern educational curriculum, bridging the gap between raw signal processing and modern AI.
                        </p>
                        <a href="https://github.com/NeuroTechX/bci-workshop" target="_blank" className={styles.link}>
                            View Workshop Materials <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Global: muse-lsl & eeg-notebooks</h3>
                        <span className={styles.cardLabel}>Technical Milestone (2019-2022)</span>
                        <p className={styles.cardText}>
                            Created by <a href="https://alexandre.barachant.org/" target="_blank" className="hover:text-neuro-accent underline">Alexandre Barachant</a>, <strong>muse-lsl</strong> democratized access to EEG data.
                            It was extended by <a href="https://kylemathewson.com/" target="_blank" className="hover:text-neuro-accent underline">Kyle Mathewson</a> (Use_LSL_Environments) to create the first <strong>eeg-notebooks</strong>.
                            This toolchain enabled large-scale studies, including <a href="https://www.biorxiv.org/content/10.1101/2022.12.16.520764v1.full" target="_blank" className="hover:text-neuro-accent underline">massive hyperscanning protocols</a> with Muse headbands.
                        </p>
                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/alexandrebarachant/muse-lsl" target="_blank" className={styles.link}>
                                Original muse-lsl <ArrowUpRight className={styles.icon} />
                            </a>
                            <a href="https://github.com/NeuroTechX/eeg-notebooks" target="_blank" className={styles.link}>
                                eeg-notebooks <ArrowUpRight className={styles.icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Mobile: eeg-101</h3>
                        <span className={styles.cardLabel}>Educational App (2016-2020)</span>
                        <p className={styles.cardText}>
                            <strong>eeg-101</strong> was an interactive mobile app that taught EEG basics using a Muse headband.
                            It provided a hands-on learning experience for thousands of students before being superseded by the comprehensive <a href="https://eegedu.com/" target="_blank" className="hover:text-neuro-accent underline">EEGedu project</a>.
                        </p>
                        <a href="https://github.com/NeuroTechX/eeg-101" target="_blank" className={styles.link}>
                            View Archived Repo <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Queen&apos;s University Partnership</h3>
                        <span className={styles.cardLabel}>Strategic Milestone (2025)</span>
                        <p className={styles.cardText}>
                            NeuroTechX partnered with Queen&apos;s University on a grant-funded initiative to launch the <strong>Neurotech Micro-credential Program</strong>.
                            This program sets a new standard for hands-on neurotechnology education, combining academic rigor with industry-relevant skills.
                        </p>
                        <a href="https://neurotechmicrocreds.com/" target="_blank" className={styles.link}>
                            Visit Program <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
