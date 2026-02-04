import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Cleaning Services',
  description: 'Explore our professional cleaning services in Queenstown: residential cleaning, commercial cleaning, deep cleaning, move in/out cleaning, and Airbnb turnover services. Get a free quote today!',
  keywords: ['cleaning services Queenstown', 'residential cleaning', 'commercial cleaning', 'deep cleaning', 'move out cleaning', 'Airbnb cleaning NZ'],
  openGraph: {
    title: 'Professional Cleaning Services | Five Stars Queenstown',
    description: 'Explore our range of professional cleaning services. Residential, commercial, deep cleaning & more.',
    url: 'https://fivestars.co.nz/services',
  },
  alternates: {
    canonical: 'https://fivestars.co.nz/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
