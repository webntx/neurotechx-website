export interface StudentClub {
    name: string;
    university: string;
    location: string;
    logo: string; // Path to image in /public/clubs/ or external URL
    website?: string;
    github?: string;
    email?: string;
    description: string;
}

export const studentClubs: StudentClub[] = [
    {
        name: "NeuroTech Berkeley",
        university: "University of California, Berkeley",
        location: "Berkeley, CA",
        logo: "/images/clubs/berkeley.png", // Placeholder
        website: "https://neurotech.berkeley.edu",
        github: "https://github.com/NeuroTech-Berkeley",
        description: "Focusing on BCI projects, education, and the annual California Neurotechnology Conference."
    },
    {
        name: "NeuroTechSC",
        university: "University of California, Santa Cruz",
        location: "Santa Cruz, CA",
        logo: "/images/clubs/ucsc.png",
        website: "https://neurotechsc.com",
        description: "Exploring the intersection of neuroscience and technology through hardware and software projects."
    },
    // Add your club here via PR!
    {
        name: "MINT (Michigan NeuroTech)",
        university: "University of Michigan",
        location: "Ann Arbor, MI",
        logo: "/images/clubs/michigan.png",
        website: "https://mint.engin.umich.edu/",
        description: "Michigan's premier neurotechnology student design team."
    },
    {
        name: "Polycortex",
        university: "Polytechnique Montréal",
        location: "Montréal, QC",
        logo: "/images/clubs/polycortex.png",
        website: "http://polycortex.polymtl.ca/",
        description: "Student committee dedicated to neurotechnology and biomedical engineering."
    },
    {
        name: "Synapse",
        university: "McGill University",
        location: "Montréal, QC",
        logo: "/images/clubs/synapse.png",
        description: "McGill's undergraduate neurotechnology group."
    }
];
