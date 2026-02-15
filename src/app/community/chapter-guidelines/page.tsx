import LandingPageLayout from '@/components/LandingPageLayout';
import { ExternalLink, BookOpen, Users, Shield, Heart, Share2, Globe } from 'lucide-react';

export default function ChapterGuidelinesPage() {
    return (
        <LandingPageLayout
            title="Chapter Guidelines"
            subtitle="Best practices for building inclusive, reproducible, and ethical neurotech communities. Inspired by The Turing Way."
            ctaText="Join the Chapter Leaders Slack"
            ctaLink="https://neurotechx.com/slack"
            heroImage="/images/community/chapter-hero.jpg"
        >
            {/* The Turing Way Philosophy */}
            <section className="mb-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Built on Open Principles</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        NeuroTechX chapters are more than just meetups. We strive to be local hubs of
                        <span className="font-bold text-foreground"> Open Science</span>,
                        <span className="font-bold text-foreground"> Ethical Innovation</span>, and
                        <span className="font-bold text-foreground"> Radical Inclusivity</span>.
                        Our guidelines are adapted from <a href="https://the-turing-way.netlify.app/" target="_blank" className="text-neuro-accent hover:underline inline-flex items-center gap-1">The Turing Way <ExternalLink className="w-4 h-4" /></a>, a handbook for reproducible data science.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card p-8 border-t-4 border-neuro-accent">
                        <BookOpen className="w-12 h-12 text-neuro-accent mb-6" />
                        <h3 className="text-xl font-bold mb-4">Reproducibility</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>Everything we do—from hackathons to workshops—should be documented and shareable.</p>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li>Record presentations (with permission).</li>
                                <li>Share slide decks and code repositories.</li>
                                <li>Create "How-To" guides for your event formats.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card p-8 border-t-4 border-neuro-accent">
                        <Users className="w-12 h-12 text-neuro-accent mb-6" />
                        <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>We build together. Chapters should actively seek to bridge gaps between disciplines.</p>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li>Host joint events with other chapters.</li>
                                <li>Invite speakers from diverse backgrounds (e.g., ethics, art, law).</li>
                                <li>Use the <a href="/code-of-conduct" className="underline hover:text-neuro-accent">Code of Conduct</a> to ensure safety.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card p-8 border-t-4 border-neuro-accent">
                        <Shield className="w-12 h-12 text-neuro-accent mb-6" />
                        <h3 className="text-xl font-bold mb-4">Ethics</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>Neurotechnology has profound implications. We must lead the conversation responsibly.</p>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li>Include "Neuroethics" as a topic in your curriculum.</li>
                                <li>Be transparent about sponsorship and conflicts of interest.</li>
                                <li>Prioritize accessibility in your venues and materials.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Guide */}
            <section className="max-w-4xl mx-auto mb-24">
                <h2 className="text-3xl font-serif font-bold mb-12 border-b pb-4">Chapter Playbook</h2>

                <div className="space-y-12">
                    <div className="flex gap-6 md:gap-8">
                        <div className="shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-xl text-neuro-accent">1</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                Organizing Inclusive Events
                                <Heart className="w-5 h-5 text-muted-foreground" />
                            </h3>
                            <div className="prose dark:prose-invert">
                                <p>
                                    Inclusivity isn&apos;t a checklist; it&apos;s a mindset. When planning an event:
                                </p>
                                <ul>
                                    <li><strong>Venue:</strong> Is it wheelchair accessible? Is it easy to find? Is it in a safe location?</li>
                                    <li><strong>Time:</strong> Does the time work for students? Professionals? Parents? Vary your event times.</li>
                                    <li><strong>Language:</strong> Avoid jargon. Define acronyms. Translate materials if your local community is multilingual.</li>
                                    <li><strong>Food/Drink:</strong> clearly label allergens. Provide non-alcoholic options prominently.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 md:gap-8">
                        <div className="shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-xl text-neuro-accent">2</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                Making Content Reusable
                                <Share2 className="w-5 h-5 text-muted-foreground" />
                            </h3>
                            <div className="prose dark:prose-invert">
                                <p>
                                    Don&apos;t let your hard work disappear after the event ends.
                                </p>
                                <ul>
                                    <li><strong>GitHub First:</strong> Create a repo for every hackathon or workshop.</li>
                                    <li><strong>Zenodo:</strong> Upload slide decks to Zenodo (tag 'neurotechx') to get a DOI.</li>
                                    <li><strong>YouTube:</strong> Stream or record talks for the global community.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 md:gap-8">
                        <div className="shrink-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-xl text-neuro-accent">3</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                Connecting Global & Local
                                <Globe className="w-5 h-5 text-muted-foreground" />
                            </h3>
                            <div className="prose dark:prose-invert">
                                <p>
                                    You are the bridge between your city and the world.
                                </p>
                                <ul>
                                    <li><strong>Newsletter:</strong> Submit your event recaps to the global newsletter.</li>
                                    <li><strong>Slack:</strong> Post updates in #general and your local channel.</li>
                                    <li><strong>Exchange:</strong> Invite a chapter leader from another city to give a virtual talk.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Box */}
            <section className="bg-muted/30 p-8 rounded-2xl max-w-4xl mx-auto border border-neuro-accent/20">
                <h3 className="text-xl font-bold mb-6">Recommended Reading</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <a href="https://the-turing-way.netlify.app/community-handbook/community-handbook.html" target="_blank" className="flex items-start gap-3 p-4 bg-background rounded-lg hover:border-neuro-accent border transition-colors group">
                        <BookOpen className="w-5 h-5 text-neuro-accent mt-1 shrink-0" />
                        <div>
                            <span className="font-bold block group-hover:text-neuro-accent">The Turing Way Community Handbook</span>
                            <span className="text-sm text-muted-foreground">The gold standard for open communities.</span>
                        </div>
                    </a>
                    <a href="https://mozilla.github.io/open-leadership-training-series/" target="_blank" className="flex items-start gap-3 p-4 bg-background rounded-lg hover:border-neuro-accent border transition-colors group">
                        <Users className="w-5 h-5 text-neuro-accent mt-1 shrink-0" />
                        <div>
                            <span className="font-bold block group-hover:text-neuro-accent">Mozilla Open Leadership</span>
                            <span className="text-sm text-muted-foreground">Training for community maintainers.</span>
                        </div>
                    </a>
                </div>
            </section>
        </LandingPageLayout>
    );
}
