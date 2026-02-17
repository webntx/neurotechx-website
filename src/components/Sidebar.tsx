import { Calendar as CalendarIcon, MapPin, ExternalLink, Video, ShoppingBag } from 'lucide-react';
import { fetchCalendarEvents } from '@/lib/calendar';

export default async function Sidebar() {
    const events = await fetchCalendarEvents();

    return (
        <aside className="flex flex-col gap-8">
            {/* Featured Resource */}
            <div className="card bg-neuro-accent/10 border-neuro-accent">
                <h3 className="text-lg font-serif font-bold mb-2 text-neuro-accent">Essential Reading</h3>
                <a href="https://neurotechx.com/primer" target="_blank" className="font-bold text-xl hover:underline mb-1 block">
                    The NeuroTech Primer
                </a>
                <p className="text-sm text-foreground/80 mb-3">
                    A beginner&apos;s guide to everything neurotechnology. Free for the community.
                </p>
                <a href="https://neurotechx.com/primer" target="_blank" className="text-sm font-bold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all">
                    Read Now <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            {/* Founder Resources (Merged from Old Founders Page) */}
            <div className="card border-neuro-accent/20">
                <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
                    Startups & Founders
                </h3>
                <ul className="space-y-4">
                    <li>
                        <a href="https://neurofounders.co/map" target="_blank" className="font-bold hover:text-neuro-accent block">Startup Map</a>
                        <p className="text-xs text-muted-foreground">Interactive database of 225+ companies.</p>
                    </li>
                    <li>
                        <a href="https://neurotechjobs.io/nerd" target="_blank" className="font-bold hover:text-neuro-accent block">NERD Program</a>
                        <p className="text-xs text-muted-foreground">Milestone-based funding for R&D.</p>
                    </li>
                    <li>
                        <a href="http://www.neurotechreports.com/" target="_blank" className="font-bold hover:text-neuro-accent block">Neurotech Reports</a>
                        <p className="text-xs text-muted-foreground">Market intelligence & analysis.</p>
                    </li>
                    <li>
                        <a href="https://neurofounders.co/glossary" target="_blank" className="font-bold hover:text-neuro-accent block">Glossary</a>
                        <p className="text-xs text-muted-foreground">600+ neurotech terms defined.</p>
                    </li>
                </ul>
            </div>

            {/* Open Source / Code & Data */}
            <div className="card">
                <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 3C6.72 2 4 3 4 3c-1.2 0-2.3.66-2.9 1.76-.6 1.1-.6 2.4-.04 3.5-.66 1.05-.98 2.28-.9 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    Code & Data
                </h3>
                <ul className="space-y-4">
                    <li>
                        <a href="https://github.com/NeuroTechX/awesome-bci" target="_blank" className="font-bold hover:text-neuro-accent block">awesome-bci</a>
                        <p className="text-xs text-muted-foreground">The &quot;Goldmine&quot; of BCI resources. 1.4k+ stars.</p>
                    </li>
                    <li>
                        <a href="https://github.com/NeuroTechX/moabb" target="_blank" className="font-bold hover:text-neuro-accent block">MOABB</a>
                        <p className="text-xs text-muted-foreground">The Mother of All BCI Benchmarks.</p>
                    </li>
                    <li>
                        <a href="https://github.com/braindecode/braindecode" target="_blank" className="font-bold hover:text-neuro-accent block">Braindecode</a>
                        <p className="text-xs text-muted-foreground">Deep learning software for EEG.</p>
                    </li>
                    <li>
                        <a href="https://brainflow.org" target="_blank" className="font-bold hover:text-neuro-accent block">BrainFlow</a>
                        <p className="text-xs text-muted-foreground">Universal biosensor library.</p>
                    </li>
                    <li>
                        <a href="https://pieeg.com" target="_blank" className="font-bold hover:text-neuro-accent block">PiEEG</a>
                        <p className="text-xs text-muted-foreground">Raspberry Pi Shield for EEG.</p>
                    </li>
                </ul>
                <div className="mt-4 pt-4 border-t text-sm text-center">
                    <a href="https://github.com/NeuroTechX" target="_blank" className="text-neuro-accent hover:underline font-medium inline-flex items-center gap-1">
                        View Organization <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* YouTube Featured Video */}
            <div className="card p-0 overflow-hidden border-none shadow-sm group">
                <div className="bg-red-600 text-white p-3 font-bold flex items-center justify-between">
                    <span>Featured Video</span>
                    <Video className="w-5 h-5" />
                </div>
                <div className="aspect-video bg-black relative flex items-center justify-center">
                    {/* Placeholder for iframe or thumbnail */}
                    <a href="https://www.youtube.com/neurotechx" target="_blank" className="text-white/80 hover:text-white flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                        <span className="text-xs font-medium">Watch on YouTube</span>
                    </a>
                </div>
                <div className="p-4 bg-card">
                    <h4 className="font-bold leading-tight mb-2">NeuroTechX: The Global Community</h4>
                    <p className="text-xs text-muted-foreground">
                        Discover what makes our ecosystem unique.
                    </p>
                </div>
            </div>

            {/* Calendar Section */}
            <div className="card">
                <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    Upcoming Events
                </h3>
                <div className="space-y-4">
                    {events.length === 0 ? (
                        <p className="text-sm text-muted-foreground italic">No upcoming events found.</p>
                    ) : (
                        events.map((event) => {
                            const start = new Date(event.start);
                            const month = start.toLocaleString('default', { month: 'short' });
                            const day = start.getDate();

                            return (
                                <div key={event.id} className="flex gap-3 items-start group">
                                    <div className="flex flex-col items-center min-w-[3rem] p-1 border rounded bg-muted">
                                        <span className="text-xs uppercase font-bold text-muted-foreground">{month}</span>
                                        <span className="text-xl font-bold">{day}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold leading-tight group-hover:text-neuro-accent transition-colors">
                                            <a href={event.url} target="_blank" rel="noreferrer">{event.title}</a>
                                        </h4>
                                        {event.location && (
                                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1 truncate max-w-[150px]">
                                                <MapPin className="w-3 h-3" /> {event.location}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <div className="mt-4 pt-4 border-t text-sm text-center flex flex-col gap-2">
                    <a href="https://luma.com/neurotechx" target="_blank" className="text-neuro-accent hover:underline font-medium inline-flex items-center justify-center gap-1">
                        View NeuroTechX Calendar <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href="https://sites.google.com/site/fabienlotte/bci-community/conferences" target="_blank" className="text-muted-foreground hover:text-neuro-accent text-xs inline-flex items-center justify-center gap-1 transition-colors">
                        View Global BCI Conference List <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Community Section */}
            <div className="card bg-muted/50 border-none">
                <h3 className="text-lg font-serif font-bold mb-2">Join the Community</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Connect with 20,000+ neuro-enthusiasts, researchers, and founders.
                </p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform"
                    target="_blank"
                    className="block w-full py-2 px-4 bg-foreground text-background text-center rounded font-medium hover:opacity-90 transition-opacity"
                >
                    Become a Member
                </a>
                {/* Support & Merch */}
                <div className="card border-neuro-accent/20 mt-4">
                    <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
                        Support the Mission
                    </h3>
                    <div className="space-y-4">
                        <a href="https://neurotechx-store.creator-spring.com/" target="_blank" className="flex items-center gap-3 group">
                            <div className="p-2 bg-muted rounded-full group-hover:bg-neuro-accent/10 transition-colors">
                                <ShoppingBag className="w-5 h-5 group-hover:text-neuro-accent" />
                            </div>
                            <div>
                                <span className="font-bold block group-hover:text-neuro-accent">Merch Store</span>
                                <span className="text-xs text-muted-foreground">T-shirts, hoodies, and more.</span>
                            </div>
                        </a>
                    </div>
                    <div className="mt-4 pt-4 border-t text-sm text-center">
                        <a href="/donate" className="text-neuro-accent hover:underline font-medium inline-flex items-center gap-1">
                            Donate to NeuroTechX <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Partners & Wikis */}
                <div className="card mt-4">
                    <h3 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
                        Partners & Wikis
                    </h3>

                    {/* BCIwiki Search */}
                    <form action="https://bciwiki.org/w/index.php" method="get" target="_blank" className="mb-6">
                        <input type="hidden" name="title" value="Special:Search" />
                        <label className="text-xs font-bold uppercase text-muted-foreground mb-1 block">Search BCIwiki</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="search"
                                placeholder="e.g. EEG, Motor Imagery..."
                                className="w-full px-3 py-2 text-sm border rounded-md bg-background"
                            />
                            <button type="submit" className="px-3 py-2 bg-neuro-accent text-white rounded-md hover:bg-neuro-accent/90">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </div>
                    </form>

                    <ul className="space-y-4 border-t pt-4">
                        <li>
                            <a href="https://bciwiki.org" target="_blank" className="font-bold hover:text-neuro-accent block flex items-center gap-2">
                                BCIwiki <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            </a>
                            <p className="text-xs text-muted-foreground">The open encyclopedia for BCI.</p>
                        </li>
                        <li>
                            <a href="https://tfussociety.miraheze.org/wiki/Main_Page" target="_blank" className="font-bold hover:text-neuro-accent block flex items-center gap-2">
                                TFUS Society <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            </a>
                            <p className="text-xs text-muted-foreground">Transcranial Focused Ultrasound resources.</p>
                        </li>
                        <li>
                            <a href="https://brainbox-initiative.com/" target="_blank" className="font-bold hover:text-neuro-accent block flex items-center gap-2">
                                Brainbox Initiative <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            </a>
                            <p className="text-xs text-muted-foreground">Workshops and awards for early-career neuroscientists.</p>
                        </li>
                        <li>
                            <a href="https://bcisociety.org" target="_blank" className="font-bold hover:text-neuro-accent block flex items-center gap-2">
                                BCI Society <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            </a>
                            <p className="text-xs text-muted-foreground">International society. Next meeting: Banff 2025.</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Newsletter Section - Future integration */}
            <div className="p-4 border rounded-lg bg-white dark:bg-black">
                <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">Weekly Digest</h3>
                <p className="text-xs text-muted-foreground mb-3">
                    Get the top river stories in your inbox every Monday.
                </p>
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full px-2 py-1 text-sm border rounded bg-transparent"
                        disabled
                    />
                    <button className="px-3 py-1 text-xs font-bold bg-foreground text-background rounded" disabled>
                        Join
                    </button>
                </div>
                <div className="mt-3 text-center">
                    <a href="/newsletter" className="text-xs text-neuro-accent hover:underline flex items-center justify-center gap-1">
                        View Past Issues <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </aside>
    );
}
