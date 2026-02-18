import LandingPageLayout from '@/components/LandingPageLayout';
import { ExternalLink, Building2, MapPin, DollarSign } from 'lucide-react';

const FEATURED_JOBS = [
    {
        company: 'Orbit Neurotech',
        role: 'Founding Machine Learning Engineer',
        location: 'San Francisco, CA (On-site)',
        compensation: '$150K – $225K + Equity',
        description: 'Building foundation models of emotion using advanced BCI and AI. Real-time, multi-dimensional neural data.',
        link: 'https://orbitneuro.com/'
    },
    {
        company: 'Neuralink',
        role: 'Machine Learning Engineer (BCI Applications)',
        location: 'Fremont, CA / Austin, TX',
        description: 'Developing high-bandwidth brain-machine interfaces to connect humans and computers.',
        link: 'https://neuralink.com/careers/'
    },
    {
        company: 'Science Corporation',
        role: 'Software Engineer, Neural Interfaces',
        location: 'Alameda, CA',
        description: 'Building the future of vision restoration and clinical-stage neurotechnology.',
        link: 'https://science.xyz/'
    },
    {
        company: 'Precision Neuroscience',
        role: 'Full Stack Software Engineer',
        location: 'New York / Mountain View',
        description: 'Developing a high-resolution, minimally invasive neural interface.',
        link: 'https://precisionneuroscience.com/'
    },
    {
        company: 'Paradromics',
        role: 'Data Scientist / ML Engineer',
        location: 'Austin, TX',
        description: 'Creating the next generation of data-rate brain-computer interfaces.',
        link: 'https://paradromics.com/'
    }
];

export default function JobsPage() {
    return (
        <LandingPageLayout
            title="NeuroTech Futures"
            subtitle="The premier portal for careers in neurotechnology and brain-computer interfaces."
            ctaText="Post a Job"
            ctaLink="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform"
        >
            <section className="mt-12">
                <h2 className="text-3xl font-serif font-bold mb-8">Featured Openings</h2>
                <div className="grid gap-6">
                    {FEATURED_JOBS.map((job) => (
                        <div key={`${job.company}-${job.role}`} className="card p-6 hover:border-neuro-accent transition-all group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Building2 className="w-4 h-4 text-neuro-accent" />
                                        <span className="font-bold text-lg">{job.company}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-neuro-accent transition-colors">
                                        {job.role}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 max-w-2xl">
                                        {job.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        {job.compensation && (
                                            <div className="flex items-center gap-1">
                                                <DollarSign className="w-4 h-4" />
                                                {job.compensation}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex shrink-0">
                                    <a 
                                        href={job.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-2 px-6 py-2 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity"
                                    >
                                        Apply <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="card p-8 bg-muted/30 border-dashed">
                    <h3 className="text-2xl font-serif font-bold mb-4">For Job Seekers</h3>
                    <p className="text-muted-foreground mb-6">
                        Looking for more? Check out our dedicated job board at <a href="https://neurotechjobs.io" target="_blank" className="text-neuro-accent hover:underline">NeuroTech Futures</a>.
                    </p>
                    <a href="https://neurotechjobs.io" target="_blank" className="font-bold flex items-center gap-2 hover:text-neuro-accent">
                        Browse all jobs <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
                <div className="card p-8 bg-muted/30 border-dashed">
                    <h3 className="text-2xl font-serif font-bold mb-4">For Employers</h3>
                    <p className="text-muted-foreground mb-6">
                        Reach thousands of researchers, engineers, and clinical experts by posting your open roles.
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform" target="_blank" className="font-bold flex items-center gap-2 hover:text-neuro-accent">
                        Submit a posting <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="mt-16">
                <h3 className="text-2xl font-serif font-bold mb-6">Related Job Boards</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <a href="https://bernstein-network.de/en/career/job-pool/" target="_blank" className="card p-4 hover:border-neuro-accent transition-colors flex items-center justify-between group">
                        <div>
                            <span className="font-bold block group-hover:text-neuro-accent">Bernstein Network Job Pool</span>
                            <span className="text-xs text-muted-foreground">Computational Neuroscience & Neurotechnology (Germany/Global)</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neuro-accent" />
                    </a>
                </div>
            </div>
        </LandingPageLayout>
    );
}
