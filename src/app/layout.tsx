import type { Metadata } from 'next'
import { Inter, Aldrich } from 'next/font/google'
import './globals.css'

// Inter = body + headings (readable). Aldrich = display/wordmark only (--font-display).
const interSans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const interSerif = Inter({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })
const aldrich = Aldrich({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://neurotechx.org'),
  title: {
    default: 'NeuroTechX — The global neurotechnology community',
    template: '%s · NeuroTechX',
  },
  description:
    'NeuroTechX is a volunteer-led non-profit representing the largest global community of neurotechnology innovators — education, open-source tools, hackathons, and 30+ local chapters.',
  openGraph: {
    title: 'NeuroTechX',
    description: 'The global community for neurotechnology.',
    url: 'https://neurotechx.org',
    siteName: 'NeuroTechX',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'NeuroTechX', description: 'The global community for neurotechnology.' },
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${interSerif.variable} ${aldrich.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
