export type NtxEvent = {
  name: string;
  tag: string;
  dateLabel: string;
  end: string; // ISO end date — drives Upcoming/Past + sorting
  location: string;
  url: string;
  desc: string;
};

// NeuroTechX-relevant neurotech/neuroscience conference calendar.
// Upcoming/Past is computed from `end` at render time (so it never goes stale).
export const EVENTS: NtxEvent[] = [
  // ── Past 2026 ──
  {
    name: 'Global NeuroHack 2026', tag: 'Hackathon', dateLabel: 'Apr 10–12, 2026', end: '2026-04-12',
    location: 'Frontier Tower, San Francisco', url: 'https://global-neurohack.github.io/',
    desc: 'A 48-hour student neurotech hackathon — 100+ students from world-leading universities.',
  },
  {
    name: 'California Neurotechnology Conference 2026', tag: 'Conference', dateLabel: 'Apr 26, 2026', end: '2026-04-26',
    location: 'UC Berkeley', url: 'https://neurotech.studentorg.berkeley.edu/conference.html',
    desc: '4th annual conference, co-hosted by UCLA, UCSD, UC Davis, UCSC & USC.',
  },
  // ── Upcoming ──
  {
    name: 'FUN26 — Focused Ultrasound Neuromodulation', tag: 'Conference', dateLabel: 'Jul 22–24, 2026', end: '2026-07-24',
    location: 'Paris, France', url: 'https://www.itrusst.com/fun26',
    desc: 'ITRUSST conference on transcranial ultrasound stimulation & neuromodulation.',
  },
  {
    name: 'CuttingGardens 2026', tag: 'Conference', dateLabel: '21–25 Sep 2026', end: '2026-09-25',
    location: 'Distributed · multi-hub', url: 'https://cuttingeeg.org/cuttinggardens2026/',
    desc: 'A distributed multi-hub conference on cutting-edge M/EEG analysis methods.',
  },
  {
    name: 'NeuroTechX @ SF Tech Week', tag: 'Meetup', dateLabel: 'Oct 5–11, 2026', end: '2026-10-11',
    location: 'San Francisco', url: 'https://www.tech-week.com/',
    desc: 'A NeuroTechX × UC Berkeley event planned during SF Tech Week (details soon).',
  },
  {
    name: 'IEEE Brain Discovery & Neurotechnology Workshop', tag: 'Workshop', dateLabel: 'Nov 11–13, 2026', end: '2026-11-13',
    location: 'Washington, DC', url: 'https://brain.ieee.org/2026-ieee-brain-discovery-neurotechnology-workshop/',
    desc: 'The flagship neurotech satellite alongside Society for Neuroscience 2026.',
  },
  {
    name: 'Neuroscience 2026 (SfN)', tag: 'Conference', dateLabel: 'Nov 14–18, 2026', end: '2026-11-18',
    location: 'Washington, DC', url: 'https://www.sfn.org/meetings/neuroscience-2026/',
    desc: "Society for Neuroscience 56th annual meeting — the world's largest neuroscience gathering.",
  },
  {
    name: 'NeurIPS 2026', tag: 'Conference', dateLabel: 'Dec 6–12, 2026', end: '2026-12-12',
    location: 'Sydney, Australia', url: 'https://neurips.cc/Conferences/2026/',
    desc: 'Flagship machine learning & computational neuroscience conference (satellites in Paris & Atlanta).',
  },
  {
    name: 'MAIN 2026 — Montreal AI & Neuroscience', tag: 'Conference', dateLabel: 'Dec 2026 · dates TBA', end: '2026-12-31',
    location: 'Montreal, QC', url: 'https://www.main2025.org/',
    desc: 'Annual Montreal conference at the intersection of AI and neuroscience.',
  },
];

export function sortedEvents(now: Date = new Date()): (NtxEvent & { past: boolean })[] {
  return EVENTS
    .map((e) => ({ ...e, past: new Date(e.end) < now }))
    .sort((a, b) => {
      if (a.past !== b.past) return a.past ? 1 : -1; // upcoming first
      return a.past
        ? new Date(b.end).getTime() - new Date(a.end).getTime() // past: most recent first
        : new Date(a.end).getTime() - new Date(b.end).getTime(); // upcoming: soonest first
    });
}
