import ical from 'ical.js';

export interface CalendarEvent {
    id: string;
    title: string;
    start: string; // ISO string
    end?: string;
    location?: string;
    url?: string;
    description?: string;
}

// Google Calendar Public Address
// Placeholder for future official NTX calendar. 
// Currently removed Canadian holidays as requested.
const CALENDAR_URL = ''; 

export async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
    try {
        let events: CalendarEvent[] = [];

        if (CALENDAR_URL) {
            const response = await fetch(CALENDAR_URL, { next: { revalidate: 3600 } });
            if (response.ok) {
                const text = await response.text();
                const jcalData = ical.parse(text);
                const comp = new ical.Component(jcalData);
                const vevents = comp.getAllSubcomponents('vevent');

                events = vevents.map((vevent: any) => {
                    const event = new ical.Event(vevent);
                    return {
                        id: event.uid,
                        title: event.summary,
                        start: event.startDate.toJSDate().toISOString(),
                        end: event.endDate ? event.endDate.toJSDate().toISOString() : undefined,
                        location: event.location,
                        description: event.description,
                        url: event.description?.match(/https?:\/\/[^\s]+/)?.[0] || '#'
                    };
                });
            }
        }

        const now = new Date();

        // Manually inject key NeuroTechX and partner events
        const manualEvents: CalendarEvent[] = [
            {
                id: 'brain-school-2026',
                title: 'Brain School 2026: Genes, Brains & Breakthroughs',
                start: new Date('2026-03-09T17:00:00').toISOString(),
                location: 'Roanoke, Virginia',
                url: 'https://fbri.vtc.vt.edu/events/annual-brain-school.html',
                description: 'The Future Promise of Cell & Gene Therapy for Brain Disorders.'
            },
            {
                id: 'mnc-2026',
                title: 'Midwest Neurotechnology Conference (MNC)',
                start: new Date('2026-03-27T09:00:00').toISOString(),
                end: new Date('2026-03-29T17:00:00').toISOString(),
                location: 'University of Illinois Urbana-Champaign',
                url: 'https://noemiamahmud.github.io/Neurotech/mnc.html',
                description: 'Midwest Neurotechnology Conference 2026.'
            },
            {
                id: 'cnc-2026',
                title: 'California Neurotechnology Conference',
                start: new Date('2026-04-26T09:00:00').toISOString(),
                end: new Date('2026-04-26T18:00:00').toISOString(),
                location: 'UC Berkeley, CA',
                url: 'https://www.eventbrite.com/e/2026-california-neurotechnology-conference-tickets-1982321023544',
                description: '4th annual California Neurotechnology Conference.'
            },
            {
                id: 'cortico-2026',
                title: 'Journées CORTICO 2026',
                start: new Date('2026-05-26T09:00:00').toISOString(),
                end: new Date('2026-05-28T17:00:00').toISOString(),
                location: 'Grenoble, France',
                url: 'https://www.cortico.fr/journees-cortico-2026/',
                description: 'Journées CORTICO 2026: The French BCI association meeting.'
            }
        ];

        events = [...events, ...manualEvents];

        return events
            .filter((e: CalendarEvent) => new Date(e.end || e.start) >= now) // Only upcoming or current
            .sort((a: CalendarEvent, b: CalendarEvent) => new Date(a.start).getTime() - new Date(b.start).getTime())
            .slice(0, 10); // Show more events now
    } catch (error) {
        console.error('Error fetching calendar events:', error);
        return [];
    }
}
