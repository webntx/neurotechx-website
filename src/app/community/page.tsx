import { ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import EventsList from '@/components/EventsList';
import Chapters from '@/components/Chapters';

export default function CommunityPage() {
    return (
        <div className="container py-12">
            <PageHeader
                eyebrow="Get involved"
                title="Community & Chapters"
                subtitle="Join a local chapter or start your own."
            />

            <div className="mb-12">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform" target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
                    Become a Member (Free)
                </a>
                <a href="/code-of-conduct" className="ml-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-neuro-accent hover:underline h-11 px-4 py-2">
                    Read Code of Conduct
                </a>
            </div>

            {/* Chapters: world map + featured + full list */}
            <div className="mb-16">
                <Chapters />
            </div>

            {/* Past Events Archive */}
            <div className="mb-12 p-8 border border-border rounded-xl bg-muted/20">
                <h2 className="text-2xl font-bold mb-4">Events &amp; Conferences</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                    Upcoming and recent neurotech conferences, hackathons, and workshops from across the community.
                </p>

                <EventsList />

                <div className="mt-6 p-4 border border-dashed rounded-lg text-center text-muted-foreground text-sm">
                    Hosting a neurotech event? <a href="https://github.com/webntx/neurotechx-website" className="text-foreground underline">Submit a PR</a> or contact us on Slack.
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-muted rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Community Stories</h2>
                    <p className="mb-4 text-muted-foreground">Hear from our members about their journey in neurotechnology.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="aspect-video bg-black rounded overflow-hidden relative group">
                            <iframe
                                src="https://www.youtube.com/embed/QEmz_ovwUd4"
                                className="w-full h-full"
                                title="NeuroTechX Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="aspect-video bg-black rounded overflow-hidden relative group">
                            <iframe
                                src="https://www.youtube.com/embed/p4XmnU1Y1MM"
                                className="w-full h-full"
                                title="NeuroTechX Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="aspect-video bg-black rounded overflow-hidden relative group">
                            <iframe
                                src="https://www.youtube.com/embed/sUAyel1Yfqg"
                                className="w-full h-full"
                                title="NeuroTechX Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="aspect-video bg-black rounded overflow-hidden relative group">
                            <iframe
                                src="https://www.youtube.com/embed/iiIOG3Db-xE"
                                className="w-full h-full"
                                title="NeuroTechX Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <a href="https://www.youtube.com/@neurotechx" target="_blank" className="text-sm font-bold text-neuro-accent hover:underline">
                            Watch More Stories on YouTube →
                        </a>
                    </div>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">The Turing Way Integration</h2>
                    <p className="mb-4">
                        The Turing Way is the global collaborative guide to best practices in community organizing around data science for science topics.
                    </p>
                    <a href="https://the-turing-way.netlify.app/welcome" target="_blank" className="text-neuro-accent hover:underline">Read the Handbook →</a>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-muted rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Connect Online</h2>
                    <p className="mb-4 text-muted-foreground">Follow us across the web to stay updated.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://linktr.ee/neurotechx" target="_blank" className="flex items-center gap-2 hover:text-neuro-accent font-medium text-neuro-accent">Linktree (All Links)</a>
                        <a href="https://bsky.app/profile/neurotechx.bsky.social" target="_blank" className="flex items-center gap-2 hover:text-neuro-accent font-medium">Bluesky</a>
                        <a href="https://twitter.com/neurotechx" target="_blank" className="flex items-center gap-2 hover:text-neuro-accent font-medium">Twitter / X</a>
                        <a href="https://www.linkedin.com/company/neurotechx" target="_blank" className="flex items-center gap-2 hover:text-neuro-accent font-medium">LinkedIn</a>
                        <a href="https://www.instagram.com/neurotechx" target="_blank" className="flex items-center gap-2 hover:text-neuro-accent font-medium">Instagram</a>
                        <a href="https://www.facebook.com/neurotechx" target="_blank" className="flex items-center gap-2 hover:text-neuro-accent font-medium">Facebook</a>
                        <a href="https://www.tiktok.com/@neurotechx" target="_blank" className="flex items-center gap-2 hover:text-neuro-accent font-medium">TikTok</a>
                    </div>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Newsletter Archive</h2>
                    <p className="mb-4 text-muted-foreground">
                        Catch up on previous editions of our weekly digest and monthly newsletters.
                    </p>
                    <a href="/newsletter" className="inline-flex items-center gap-2 text-neuro-accent hover:underline font-bold">
                        Browse Full Archive <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Benchmarks & Challenges */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Open Source, Benchmarks & Challenges</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card p-6">
                        <h3 className="font-bold text-lg mb-2">EEG 2026 Challenge</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Defining the next generation of EEG benchmarks.
                        </p>
                        <a href="https://eeg2026.github.io/" target="_blank" className="text-sm font-bold text-neuro-accent hover:underline">
                            View Challenge
                        </a>
                    </div>
                    <div className="card p-6">
                        <h3 className="font-bold text-lg mb-2">Brain Age Prediction</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            State-of-the-art benchmarks for brain age from EEG/MEG (Gramfort et al.).
                        </p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/36336184/" target="_blank" className="text-sm font-bold text-neuro-accent hover:underline">
                            Read Paper
                        </a>
                    </div>
                    <div className="card p-6">
                        <h3 className="font-bold text-lg mb-2">Kaggle Competitions</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Historical data from major challenges like HMS Seizure Classification.
                        </p>
                        <a href="https://www.kaggle.com/competitions/hms-harmful-brain-activity-classification" target="_blank" className="text-sm font-bold text-neuro-accent hover:underline">
                            Explore Kaggle
                        </a>
                    </div>
                </div>
            </div>


            {/* Community Resources */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Community Resources</h2>
                <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30">
                    <h3 className="font-bold text-lg mb-2">BCI Conference Calendar</h3>
                    <p className="text-sm text-foreground/80 mb-4">
                        A comprehensive list of BCI, EEG, and Neurotechnology conferences maintained by the community.
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-bold text-muted-foreground">Curated by:</span>
                        <a href="https://sites.google.com/site/fabienlotte" target="_blank" className="text-xs font-bold text-neuro-accent hover:underline">
                            Fabien Lotte (Inria)
                        </a>
                    </div>
                    <a href="https://sites.google.com/site/fabienlotte/bci-community/conferences" target="_blank" className="text-sm font-bold text-neuro-accent hover:underline flex items-center gap-1">
                        View Full Conference List <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Open Science Networks */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Open Science Networks</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                    EU-funded COST Action networks advancing open, FAIR, and reproducible neuroimaging — open to researchers worldwide to join.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <a href="https://eeg101.eu/" target="_blank" className="card p-6 block hover:border-neuro-accent transition-colors group">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-neuro-accent">EEG101 (COST Action CA24148)</h3>
                        <p className="text-sm text-muted-foreground">Reducing methodological inconsistencies through shared EEG reporting standards and harmonized datasets.</p>
                    </a>
                    <a href="https://www.indos-costaction.eu" target="_blank" className="card p-6 block hover:border-neuro-accent transition-colors group">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-neuro-accent">INDoS (COST Action CA24161)</h3>
                        <p className="text-sm text-muted-foreground">Making multimodal neuroimaging data (MRI, MEG, EEG) Findable, Accessible, Interoperable &amp; Reusable.</p>
                    </a>
                </div>
            </div>

            {/* Forums & Support */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Forums & Support</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card p-6 border-l-4 border-neuro-accent">
                        <h3 className="font-bold text-xl mb-2">NeuroStars</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            The central Q&A forum for the global neuroinformatics community. Supported by INCF.
                        </p>
                        <a href="https://neurostars.org/" target="_blank" className="text-neuro-accent hover:underline font-bold">
                            Ask a Question on NeuroStars →
                        </a>
                    </div>

                    <div className="card p-6">
                        <h3 className="font-bold text-xl mb-4">Software Communities</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://mne.tools/stable/overview/get_help.html" target="_blank" className="font-bold hover:text-neuro-accent block">MNE-Python</a>
                                <span className="text-xs text-muted-foreground">Active Discourse forum and Discord server.</span>
                            </li>
                            <li>
                                <a href="https://sccn.ucsd.edu/eeglab/mailinglist.php" target="_blank" className="font-bold hover:text-neuro-accent block">EEGLAB</a>
                                <span className="text-xs text-muted-foreground">The best place for EEGLAB-specific questions (Mailing List).</span>
                            </li>
                            <li>
                                <a href="https://www.fieldtriptoolbox.org/discussion_list/" target="_blank" className="font-bold hover:text-neuro-accent block">FieldTrip</a>
                                <span className="text-xs text-muted-foreground">Donders Institute mailing list for MEG/EEG analysis.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}
