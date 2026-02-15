import LandingPageLayout from '@/components/LandingPageLayout';

export default function JobsPage() {
    return (
        <LandingPageLayout
            title="NeuroTech Futures"
            subtitle="The premier job board for careers in neurotechnology and brain-computer interfaces."
            ctaText="Browse Open Roles on NeuroTech Futures"
            ctaLink="https://neurotechjobs.io"
        >
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="card p-6">
                    <h3 className="text-2xl font-serif font-bold mb-2">For Job Seekers</h3>
                    <p className="text-muted-foreground mb-4">
                        Find roles in clinical research, software engineering, and hardware development at top neurotech companies.
                    </p>
                </div>
                <div className="card p-6">
                    <h3 className="text-2xl font-serif font-bold mb-2">For Employers</h3>
                    <p className="text-muted-foreground mb-4">
                        Post your open roles to the most targeted audience of neurotech professionals.
                    </p>
                </div>
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold mb-6">Related Job Boards</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <a href="https://bernstein-network.de/en/career/job-pool/" target="_blank" className="card p-4 hover:border-neuro-accent transition-colors flex items-center justify-between group">
                        <div>
                            <span className="font-bold block group-hover:text-neuro-accent">Bernstein Network Job Pool</span>
                            <span className="text-xs text-muted-foreground">Computational Neuroscience & Neurotechnology (Germany/Global)</span>
                        </div>
                        <svg className="w-4 h-4 text-muted-foreground group-hover:text-neuro-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                </div>
            </div>
        </LandingPageLayout>
    );
}
