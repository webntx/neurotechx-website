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
    url: 'https://x.com/neurotechsf', linkLabel: '@neurotechsf', map: [214.4, 121.9],
  },
  {
    name: 'NeuroNYC', city: 'New York', status: 'active', featured: true,
    note: 'The New York City community — talks, socials, and hack nights.',
    url: 'https://x.com/NeuroTechNYC', linkLabel: '@NeuroTechNYC', map: [327.3, 115],
  },
  {
    name: 'NeuroTechX London', city: 'London · UK', status: 'active', featured: true,
    note: 'An active London chapter that also serves the wider UK community.',
    url: 'https://x.com/NeuroTechLDN', linkLabel: '@NeuroTechLDN', map: [499.7, 89.8],
  },
  {
    name: 'Coglab', city: 'Paris', status: 'active', featured: true,
    note: 'NeuroTechX Paris — the Coglab community for cognitive science & neurotech.',
    url: 'https://coglab.fr/', linkLabel: 'coglab.fr', map: [505.5, 96],
  },
  {
    name: 'NeuroTechX Toronto', city: 'Toronto', status: 'restarting', featured: true,
    note: 'Relaunching — get in touch to help reboot the Toronto chapter.',
    url: 'https://x.com/neurotechto', linkLabel: '@neurotechto', map: [314.8, 108.1],
  },
  {
    name: 'NeuroTechMTL', city: 'Montreal', status: 'restarting', featured: true,
    note: 'Where NeuroTechX began — the Montreal chapter is restarting.',
    url: 'https://x.com/NeuroTechMTL', linkLabel: '@NeuroTechMTL', map: [328.3, 103.8],
  },
  {
    name: 'NeuroTechX Houston', city: 'Houston', status: 'active', featured: true,
    note: 'A growing Texas hub with a couple of active local groups.',
    url: JOIN, linkLabel: 'Get involved', map: [277.5, 140.6],
  },
  {
    name: 'NeuroTechX Salt Lake City', city: 'Salt Lake City', status: 'active', featured: true,
    note: 'The Utah community for neurotech and neuroengineering.',
    url: JOIN, linkLabel: 'Get involved', map: [238.9, 114.9],
  },
  {
    name: 'NeuroTechX Berlin', city: 'Berlin', status: 'active', featured: true,
    note: 'The Berlin community — part of the NeuroTechX Europe network.',
    url: 'https://x.com/NeuroTechX_EU', linkLabel: '@NeuroTechX_EU', map: [531.3, 87.5],
  },

  // ── Other chapters ──
  { name: 'Barcelona', city: 'Barcelona', status: 'active', url: 'https://bcn.neurotechx.com', map: [505.1, 113.4] },
  { name: 'Boston', city: 'Boston', status: 'active', url: 'https://bos.neurotechx.com', map: [334.2, 111.2] },
  { name: 'Los Angeles', city: 'Los Angeles', status: 'active', url: 'https://la.neurotechx.com', map: [224.1, 130.5] },
  { name: 'Oslo', city: 'Oslo', status: 'active', url: 'https://oslo.neurotechx.com', map: [525.1, 70.2] },
  { name: 'Washington DC', city: 'Washington DC', status: 'active', url: 'https://dc.neurotechx.com', map: [320.2, 119.2] },
  { name: 'Tel Aviv', city: 'Tel Aviv', status: 'active', url: 'https://tlv.neurotechx.com', map: [581.2, 135.1] },
  { name: 'Vancouver', city: 'Vancouver', status: 'active', url: 'https://van.neurotechx.com', map: [212.7, 95] },
  { name: 'Waterloo', city: 'Waterloo', status: 'active', url: 'https://kw.neurotechx.com', map: [312.1, 108.6] },
  { name: 'Lima', city: 'Lima', status: 'active', url: 'https://lima.neurotechx.com', map: [320.2, 238.1] },
  { name: 'Ottawa', city: 'Ottawa', status: 'active', url: 'https://ott.neurotechx.com', map: [323.4, 104] },
  { name: 'Hamilton', city: 'Hamilton', status: 'active', url: 'https://ha.neurotechx.com', map: [313.6, 109.1] },
];

// Student clubs that organized / competed in Global NeuroHack 2026.
// (Sourced from GNH 2026 coverage, not the deprecated student-clubs directory —
//  add/prune as the roster is confirmed; some links pending.)
export const STUDENT_CLUBS: StudentClub[] = [
  { name: 'NeuroTechSC', school: 'UC Santa Cruz', country: 'USA', url: 'https://neurotech.ucsc.edu/', map: [215.3, 123.7] },
  { name: 'Neurotech@Berkeley', school: 'UC Berkeley', country: 'USA', url: 'https://neurotech.berkeley.edu/', map: [214.7, 121.6] },
  { name: 'Neurotech@Davis', school: 'UC Davis', country: 'USA', url: 'https://neurotechdavis.org/', map: [215.9, 120.1] },
  { name: 'Stanford Neurotech', school: 'Stanford University', country: 'USA', map: [214.9, 122.7] },
  { name: 'McGill NeuroTech', school: 'McGill University', country: 'Canada', url: 'https://www.facebook.com/McGillNeurotech', map: [328.3, 103.8] },
  { name: 'Johns Hopkins NeuroTech', school: 'Johns Hopkins University', country: 'USA', map: [321.2, 118.3] },
  { name: 'Penn Neurotech', school: 'University of Pennsylvania', country: 'USA', map: [324.6, 116.8] },
  { name: 'Texas Neurotech', school: 'UT Austin', country: 'USA', map: [271.9, 139.4] },
  { name: 'Imperial College Neurotech', school: 'Imperial College London', country: 'UK', map: [499.6, 89.8] },
];

export const FEATURED_CHAPTERS = CHAPTERS.filter((c) => c.featured);
export const OTHER_CHAPTERS = CHAPTERS.filter((c) => !c.featured);

export const STATUS_LABEL: Record<ChapterStatus, string> = {
  active: 'Active',
  restarting: 'Restarting',
  new: 'New',
};
