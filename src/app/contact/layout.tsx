import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact FiveStars Cleaning for a free quote. Phone: +64 22 503 0102, Email: info@fivestarscleaning.co.nz. Serving Queenstown Central, Frankton, Arrowtown & Kelvin Heights.',
  keywords: ['contact FiveStars', 'cleaning quote Queenstown', 'book cleaning service', 'Queenstown cleaners contact'],
  openGraph: {
    title: 'Contact FiveStars Cleaning | Get a Free Quote',
    description: 'Contact us for a free cleaning quote. Serving the Greater Queenstown Region.',
    url: 'https://fivestars.co.nz/contact',
  },
  alternates: {
    canonical: 'https://fivestars.co.nz/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
