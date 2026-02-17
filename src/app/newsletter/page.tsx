import { ExternalLink, Mail } from 'lucide-react';

const newsletterArchive = [
    {
        year: '2024',
        editions: [
            { title: 'May 2024', url: 'https://mailchi.mp/200293c09f37/may-the-neurotech-be-with-you' },
            { title: 'April 2024', url: 'https://mailchi.mp/663625d9706b/neurotechnology-is-blooming-with-new-advancements' },
            { title: 'March 2024', url: 'https://mailchi.mp/f9dcc82ae38a/hello-neurotech-world-id0joxu371' },
            { title: 'February 2024', url: 'https://mailchi.mp/1a56caa46999/catch-up-with-the-neurotech-space' },
            { title: 'January 2024', url: 'https://mailchi.mp/2036440a9add/start-the-year-with-ntx' },
        ]
    },
    {
        year: '2023',
        editions: [
            { title: 'December 2023', url: 'https://mailchi.mp/a4eb073ff95a/happy-winter-holidays' },
            { title: 'November 2023', url: 'https://mailchi.mp/576b48be79d0/hello-neurotech-world-vy6n31k899' },
            { title: 'October 2023', url: 'https://mailchi.mp/db815ac1d11c/trick-or-brain-treat' },
            { title: 'September 2023', url: 'https://mailchi.mp/48b019836d64/explore-the-neurotech-world' },
            { title: 'August 2023', url: 'https://mailchi.mp/d49cdd3b241c/its-time-to-catch-up-with-neurotech-news' },
            { title: 'July 2023', url: 'https://mailchi.mp/6bad776296a5/explore-the-neurotech-world' },
            { title: 'June 2023', url: 'https://mailchi.mp/babf97cb7b01/start-your-summer-with-neurotech' },
            { title: 'Micro-credential Special', url: 'https://mailchi.mp/315a9457b26b/enrollment-now-open-for-the-neurotech-micro-credential-program' },
            { title: 'May 2023', url: 'https://mailchi.mp/da108c2c4160/may-the-neurotech-be-with-you' },
            { title: 'April 2023', url: 'https://mailchi.mp/39c922073c95/neurotechnology-is-blooming-with-new-advancements' },
            { title: 'March 2023', url: 'https://mailchi.mp/ec2c1a164922/discover-the-infinite-possibilities-of-neurotechnology' },
            { title: 'February 2023', url: 'https://mailchi.mp/eace02ab2522/lets-unlock-secrets-one-element-at-a-time' },
            { title: 'January 2023', url: 'https://mailchi.mp/fa06c76083b2/new-year-new-brain' },
        ]
    },
    {
        year: '2022',
        editions: [
            { title: 'December 2022', url: 'https://mailchi.mp/17a7eb4517ca/keep-your-brain-cozy-with-neurotech-news' },
            { title: 'November 2022', url: 'https://mailchi.mp/092e0b6da7ab/hello-neurotech-white-hat-hackers' },
            { title: 'October 2022', url: 'https://mailchi.mp/7aeb1f96d071/hello-neurotech-zombies-trick-or-brain' },
            { title: 'September 2022', url: 'https://mailchi.mp/1cf253d0e5b3/celebrate-fall-with-neurotechx' },
            { title: 'August 2022', url: 'https://mailchi.mp/bb50313f29ab/connect-to-the-world-wide-neurotech' },
            { title: 'July 2022', url: 'https://mailchi.mp/8d73410b5ebf/catch-up-with-the-neurotechs-infinity' },
            { title: 'June 2022', url: 'https://mailchi.mp/6ff0dd1ef563/start-your-summer-with-neurotech' },
            { title: 'May 2022', url: 'https://mailchi.mp/3b48951c1b5c/may-the-neurotech-be-with-you' },
            { title: 'April 2022', url: 'https://mailchi.mp/a8e1419d51c7/neurotech-is-blossoming' },
            { title: 'March 2022', url: 'https://mailchi.mp/d15af6ff6a5c/blow-your-mind-with-neurotech' },
            { title: 'February 2022', url: 'https://mailchi.mp/248bbf405e31/explore-the-neurotech-world' },
            { title: 'January 2022', url: 'https://mailchi.mp/499dfa07c03f/happy-new-year' },
        ]
    },
    {
        year: '2015 - 2021',
        editions: [
            { title: 'Holiday 2021', url: 'https://mailchi.mp/3e5caf44a4e3/our-best-wishes-for-the-holidays' },
            { title: 'December 2021', url: 'https://mailchi.mp/0dcdf45601d1/hello-neurotech-world-6rcxjd2q4n' },
            { title: 'October 2021', url: 'https://mailchi.mp/neurotechx/hello-neurotech-world-dget2iaioc' },
            { title: 'September 2021', url: 'https://mailchi.mp/neurotechx/hello-neurotech-world-bh8ttvoie9' },
            { title: 'December 2020', url: 'https://us12.campaign-archive.com/?u=5124b2527cf13d913a8beeea3&id=64bab28a04' },
            { title: 'January 2020', url: 'https://us12.campaign-archive.com/?u=5124b2527cf13d913a8beeea3&id=53d3d747fb' },
            { title: 'May 2019', url: 'http://eepurl.com/gpW8dH' },
            { title: 'November 2015 (Digest #1)', url: 'https://us12.campaign-archive.com/?u=5124b2527cf13d913a8beeea3&id=e753aad7de' },
        ]
    }
];

export default function NewsletterArchivePage() {
    return (
        <div className="container py-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-serif font-bold mb-4">Newsletter Archive</h1>
                        <p className="text-lg text-muted-foreground">
                            Deep dives, community updates, and the latest news from the world of neurotechnology.
                        </p>
                    </div>
                    <div className="bg-muted p-6 rounded-xl border border-border">
                        <h3 className="font-bold flex items-center gap-2 mb-2">
                            <Mail className="w-4 h-4 text-neuro-accent" />
                            Stay Updated
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Get the monthly digest directly in your inbox.
                        </p>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform" 
                            target="_blank" 
                            className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium bg-neuro-accent text-white hover:opacity-90 h-10 px-4"
                        >
                            Subscribe Now
                        </a>
                    </div>
                </div>

                <div className="space-y-12">
                    {newsletterArchive.map((section) => (
                        <div key={section.year}>
                            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">{section.year}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {section.editions.map((edition) => (
                                    <a
                                        key={edition.url}
                                        href={edition.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-muted/20 hover:bg-muted/40 border border-border rounded-lg flex items-center justify-between group transition-colors"
                                    >
                                        <span className="font-medium">{edition.title}</span>
                                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-muted rounded-xl text-center border border-border">
                    <h2 className="text-xl font-bold mb-4">Looking for something specific?</h2>
                    <p className="text-muted-foreground mb-6">
                        Our newsletters cover a wide range of topics, from technical tutorials to industry analysis. 
                        If you can&apos;t find what you&apos;re looking for, feel free to reach out to our community on Slack.
                    </p>
                    <a href="/community" className="text-neuro-accent font-bold hover:underline">
                        Back to Community &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}
