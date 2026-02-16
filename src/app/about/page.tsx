import { ArrowUpRight } from 'lucide-react';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.title}>Our Origins</h1>
                <p className="text-center max-w-2xl mx-auto mb-12 text-lg text-muted-foreground">
                    NeuroTechX stands on the shoulders of giants. We acknowledge the <a href="https://alexandre.barachant.org/" target="_blank" className="text-neuro-accent hover:underline font-bold">founders and intellectual sources</a> whose open-source contributions laid the technical foundation for our global community.
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

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Board of Directors</h2>
                <div className={styles.originsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Morgan Hough</h3>
                        <span className={styles.cardLabel}>Director</span>
                        <p className={styles.cardText}>
                            A specialist in Clinical Neurology (Oxford) and Biophysics (Reed), Morgan has a background spanning AI, medical imaging, and software engineering management. He is a co-founder of NeuroFedora and has been instrumental in bridging scientific research with open-source development.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>John Griffiths, PhD</h3>
                        <span className={styles.cardLabel}>Director</span>
                        <p className={styles.cardText}>
                            Assistant Professor at the University of Toronto and Independent Scientist at the Krembil Centre for Neuroinformatics. John specializes in mathematical modeling of large-scale brain dynamics and multimodal neuroimaging data analysis.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Susan Boehnke, PhD</h3>
                        <span className={styles.cardLabel}>Director</span>
                        <p className={styles.cardText}>
                            Associate Professor at Queen&apos;s University and Director of the NeuroTech Micro-credential Program. Susan&apos;s research focuses on sensory processing and neurodegenerative diseases, and she is a leader in neurotechnology ethics and education.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Officers & Leadership</h2>
                <div className={styles.originsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Han Cat Nguyen</h3>
                        <span className={styles.cardLabel}>Officer</span>
                        <p className={styles.cardText}>
                            A biomedical engineer with expertise in biosensor design, firmware development, and brain-computer interfaces. Han has contributed significantly to research on intraoral electrooculogram monitoring and DIY neurotechnology hardware.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Dhruv Mehrotra</h3>
                        <span className={styles.cardLabel}>Officer</span>
                        <p className={styles.cardText}>
                            A neuroscience researcher and developer of Pynapple, a popular open-source toolbox for neuroscience data analysis. Dhruv&apos;s work focuses on the dynamics of spontaneous brain activity and adaptive decision-making.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Sophie Valentine</h3>
                        <span className={styles.cardLabel}>Content Laboratory Lead</span>
                        <p className={styles.cardText}>
                            Leading the NTX Content Laboratory, Sophie brings a background in experimental psychology and cognitive neuroscience. She is an expert in digital health product innovation and a champion for diversity and inclusion in neurotechnology.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
