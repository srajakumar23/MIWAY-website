import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: {
        default: 'MIWAY Teaching Aids | Future of Education',
        template: '%s | MIWAY'
    },
    description: 'Neuroscience-based, learner-centric educational publishing. Redefining the learning experience through Whole Brain Learning and Multiple Intelligences.',
    keywords: ['MIWAY', 'Educational Publishing', 'Neuroscience Education', 'Whole Brain Learning', 'Teaching Aids India'],
    openGraph: {
        title: 'MIWAY Teaching Aids',
        description: 'Redefining the future of learning through scientific pedagogy.',
        url: 'https://miway.in',
        siteName: 'MIWAY',
        locale: 'en_US',
        type: 'website',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
