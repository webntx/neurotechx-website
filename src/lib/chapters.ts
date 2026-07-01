// NeuroTechX local chapters. `map` holds pre-projected [x,y] coordinates for the
// equirectangular WorldMap (viewBox 1000×420) — see scripts that generated them.
// Status drives the badge; `featured` promotes a chapter to a large card.

export type ChapterStatus = 'active' | 'restarting' | 'new';

export type Chapter = {
  name: string;        // display name
  city: string;        // city / region label
  status: ChapterStatus;
  note?: string;       // one-line context
  url: string;         // primary link (X account, site, or join form)
  linkLabel?: string;  // label for the primary link
  featured?: boolean;
  map: [number, number];
};

// University / student clubs — shown on the map with a distinct (violet) pin
// and a dedicated section. `school` is the institution; `url` is optional
// (omit when we don't have a verified current link).
export type StudentClub = {
  name: string;
  school: string;
  country?: string;
  url?: string;
  map: [number, number];
};

const JOIN = 'https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform';

export const CHAPTERS: Chapter[] = [
  // ── Featured / largest & most active ──
  {
    name: 'NeuroTechSF', city: 'San Francisco', status: 'active', featured: true,
    note: 'One of our largest and most active chapters, anchoring the Bay Area neurotech scene.',
    url: 'https://x.com/neurotechsf', linkLabel: '@neurotechsf', map: [159.9, 123.3],
  },
  {
    name: 'NeuroNYC', city: 'New York', status: 'active', featured: true,
    note: 'The New York City community — talks, socials, and hack nights.',
    url: 'https://x.com/NeuroTechNYC', linkLabel: '@NeuroTechNYC', map: [294.4, 110.7],
  },
  {
    name: 'NeuroTechX London', city: 'London · UK', status: 'active', featured: true,
    note: 'An active London chapter that also serves the wider UK community.',
    url: 'https://x.com/NeuroTechLDN', linkLabel: '@NeuroTechLDN', map: [499.6, 69.2],
  },
  {
    name: 'Coglab', city: 'Paris', status: 'active', featured: true,
    note: 'NeuroTechX Paris — the Coglab community for cognitive science & neurotech.',
    url: 'https://coglab.fr/', linkLabel: 'coglab.fr', map: [506.5, 78.6],
  },
  {
    name: 'NeuroTechX Toronto', city: 'Toronto', status: 'restarting', featured: true,
    note: 'Relaunching — get in touch to help reboot the Toronto chapter.',
    url: 'https://x.com/neurotechto', linkLabel: '@neurotechto', map: [279.5, 98.6],
  },
  {
    name: 'NeuroTechMTL', city: 'Montreal', status: 'restarting', featured: true,
    note: 'Where NeuroTechX began — the Montreal chapter is restarting.',
    url: 'https://x.com/NeuroTechMTL', linkLabel: '@NeuroTechMTL', map: [295.6, 91.3],
  },
  {
    name: 'NeuroTechX Houston', city: 'Houston', status: 'active', featured: true,
    note: 'A growing Texas hub with a couple of active local groups.',
    url: JOIN, linkLabel: 'Get involved', map: [235.1, 160.3],
  },
  {
    name: 'NeuroTechX Salt Lake City', city: 'Salt Lake City', status: 'active', featured: true,
    note: 'The Utah community for neurotech and neuroengineering.',
    url: JOIN, linkLabel: 'Get involved', map: [189.2, 110.5],
  },
  {
    name: 'NeuroTechX Berlin', city: 'Berlin', status: 'active', featured: true,
    note: 'The Berlin community — part of the NeuroTechX Europe network.',
    url: 'https://x.com/NeuroTechX_EU', linkLabel: '@NeuroTechX_EU', map: [537.2, 65.7],
  },

  // ── Other chapters ──
  { name: 'Barcelona', city: 'Barcelona', status: 'active', url: 'https://bcn.neurotechx.com', map: [506, 107.8] },
  { name: 'Boston', city: 'Boston', status: 'active', url: 'https://bos.neurotechx.com', map: [302.6, 103.8] },
  { name: 'Los Angeles', city: 'Los Angeles', status: 'active', url: 'https://la.neurotechx.com', map: [171.6, 140.1] },
  { name: 'Oslo', city: 'Oslo', status: 'active', url: 'https://oslo.neurotechx.com', map: [529.9, 42.9] },
  { name: 'Washington DC', city: 'Washington DC', status: 'active', url: 'https://dc.neurotechx.com', map: [286, 118.4] },
  { name: 'Tel Aviv', city: 'Tel Aviv', status: 'active', url: 'https://tlv.neurotechx.com', map: [596.6, 149.3] },
  { name: 'Vancouver', city: 'Vancouver', status: 'active', url: 'https://van.neurotechx.com', map: [158, 77.1] },
  { name: 'Waterloo', city: 'Waterloo', status: 'active', url: 'https://kw.neurotechx.com', map: [276.3, 99.4] },
  { name: 'Lima', city: 'Lima', status: 'active', url: 'https://lima.neurotechx.com', map: [286, 384.8] },
  { name: 'Ottawa', city: 'Ottawa', status: 'active', url: 'https://ott.neurotechx.com', map: [289.7, 91.6] },
  { name: 'Hamilton', city: 'Hamilton', status: 'active', url: 'https://ha.neurotechx.com', map: [278.1, 100.2] },
];

// Student clubs that organized / competed in Global NeuroHack 2026.
// (Sourced from GNH 2026 coverage, not the deprecated student-clubs directory —
//  add/prune as the roster is confirmed; some links pending.)
export const STUDENT_CLUBS: StudentClub[] = [
  { name: 'NeuroTechSC', school: 'UC Santa Cruz', country: 'USA', url: 'https://neurotech.ucsc.edu/', map: [161, 126.9] },
  { name: 'Neurotech@Berkeley', school: 'UC Berkeley', country: 'USA', url: 'https://neurotech.berkeley.edu/', map: [160.4, 122.9] },
  { name: 'Neurotech@Davis', school: 'UC Davis', country: 'USA', url: 'https://neurotechdavis.org/', map: [161.8, 120] },
  { name: 'McGill NeuroTech', school: 'McGill University', country: 'Canada', url: 'https://www.facebook.com/McGillNeurotech', map: [295.6, 91.3] },
  { name: 'JHU BCI Society', school: 'Johns Hopkins University', country: 'USA', url: 'https://jhu.campusgroups.com/jhubcis/home/', map: [287.2, 116.7] },
  { name: 'Penn Neurotech', school: 'University of Pennsylvania', country: 'USA', map: [291.1, 113.9] },
  { name: 'Neurotech X Columbia', school: 'Columbia University', country: 'USA', url: 'https://neurotech-x-columbia.github.io/', map: [294.5, 110.3] },
  { name: 'Longhorn Neurotech', school: 'UT Austin', country: 'USA', url: 'https://lhneurotech.com/', map: [228.5, 157.9] },
  { name: 'Imperial College Neurotech', school: 'Imperial College London', country: 'UK', map: [499.5, 69.2] },
];

export const FEATURED_CHAPTERS = CHAPTERS.filter((c) => c.featured);
export const OTHER_CHAPTERS = CHAPTERS.filter((c) => !c.featured);

export const STATUS_LABEL: Record<ChapterStatus, string> = {
  active: 'Active',
  restarting: 'Restarting',
  new: 'New',
};
