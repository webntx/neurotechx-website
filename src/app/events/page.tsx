import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import EventsList from '@/components/EventsList';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Events',
    description:
        'NeuroTechX events — hacknights, workshops, talks, and chapter meetups worldwide on our Luma calendar, plus the major neurotech conferences and hackathons.',
};

const LUMA = 'https://luma.com/neurotechx';

export default function EventsPage() {
    return (
        <div className="container py-12">
            <PageHeader
                eyebrow="Events"
                title="Events"
                subtitle="Our live community calendar plus the major neurotech conferences and hackathons worldwide."
            />

            {/* Prominent Luma calendar CTA */}
            <a
                href={LUMA}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mb-14 block overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-1)] p-8 md:p-10 transition hover:border-neuro-accent"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(34,211,238,0.16),transparent_60%)]" />
                <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="eyebrow mb-2 flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> Live calendar
                        </p>
                        <h2 className="mb-2 text-2xl md:text-3xl font-bold group-hover:text-neuro-accent transition-colors">
                            NeuroTechX on Luma
                        </h2>
                        <p className="max-w-xl text-muted-foreground">
                            RSVP to hacknights, workshops, talks, and chapter meetups happening around the world — our full,
                            always-current event calendar lives on Luma.
                        </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-neuro-accent px-7 py-4 text-lg font-bold text-[var(--background)] shadow-glow transition group-hover:brightness-110">
                        View &amp; RSVP on Luma <ArrowRight width={20} height={20} />
                    </span>
                </div>
            </a>

            {/* Conferences & hackathons calendar */}
            <h2 className="mb-2 text-2xl md:text-3xl font-bold">Conferences &amp; hackathons</h2>
            <p className="mb-8 max-w-2xl text-muted-foreground">
                Major neurotech, BCI, and neuroscience meetings — upcoming and recent.
            </p>
            <EventsList />
        </div>
    );
}
