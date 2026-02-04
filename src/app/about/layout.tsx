import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Five Stars Cleaning - Queenstown\'s trusted local cleaning experts. NZ owned & operated, fully insured, background-verified team. Discover our mission, values, and commitment to excellence.',
  keywords: ['about Five Stars', 'Queenstown cleaners', 'NZ owned cleaning company', 'trusted cleaners', 'professional cleaning team'],
  openGraph: {
    title: 'About Five Stars Cleaning | Queenstown\'s Trusted Cleaners',
    description: 'Learn about Five Stars Cleaning - Queenstown\'s trusted local cleaning experts.',
    url: 'https://fivestars.co.nz/about',
  },
  alternates: {
    canonical: 'https://fivestars.co.nz/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
