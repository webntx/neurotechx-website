import { Calendar, MapPin } from 'lucide-react';
import { sortedEvents } from '@/lib/events';

// Shared events grid (Upcoming/Past badges, sorted upcoming-first). Used on the
// homepage and the community page so there's a single source of truth.
// `upcomingOnly` drops past events; `limit` caps the count (e.g. homepage teaser).
export default function EventsList({
  upcomingOnly = false,
  limit,
}: {
  upcomingOnly?: boolean;
  limit?: number;
} = {}) {
  let events = sortedEvents();
  if (upcomingOnly) events = events.filter((e) => !e.past);
  if (limit) events = events.slice(0, limit);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {events.map((e) => (
        <a
          key={e.name}
          href={e.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-6 transition hover:border-neuro-accent hover:-translate-y-0.5"
        >
          <div className="mb-3 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={
                e.past
                  ? { background: 'var(--surface-3)', color: 'var(--muted-foreground)' }
                  : { background: 'rgba(34,211,238,0.15)', color: 'var(--neuro-accent)' }
              }
            >
              {e.past ? 'Past' : 'Upcoming'}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{e.tag}</span>
          </div>
          <h3 className="mb-3 text-lg font-bold leading-snug group-hover:text-neuro-accent transition-colors">{e.name}</h3>
          <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-neuro-accent" /> {e.dateLabel}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-neuro-accent" /> {e.location}</span>
          </div>
          <p className="text-sm text-muted-foreground">{e.desc}</p>
        </a>
      ))}
    </div>
  );
}
