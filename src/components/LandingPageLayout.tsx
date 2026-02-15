import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    children: React.ReactNode;
}

export default function LandingPageLayout({ title, subtitle, ctaText, ctaLink, children }: LandingPageProps) {
    return (
        <div className="container py-16 max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {subtitle}
                </p>
                <a
                    href={ctaLink}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
                >
                    {ctaText} <ArrowRight className="w-5 h-5" />
                </a>
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto">
                {children}
            </div>
        </div>
    );
}
