/**
 * Home Page
 * 
 * The main landing page for FiveStarsCleaning website.
 * Composed of multiple section components to showcase:
 * - Hero section with company tagline and CTAs
 * - 3-step process (Book → Clean → Enjoy)
 * - Services overview
 * - Why choose us features
 * - Customer testimonials
 * - Company statistics
 * - Contact form
 * 
 * @validates Requirements 2.1 - Hero section with background, tagline, CTAs, and trust badges
 * @validates Requirements 2.2 - 3-step process area
 * @validates Requirements 2.3 - 5 service cards
 * @validates Requirements 2.4 - 6 company features
 * @validates Requirements 2.5 - 3 customer 5-star reviews
 * @validates Requirements 2.6 - Statistics display
 * @validates Requirements 2.7 - Contact form at bottom
 */

import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { StatsSection } from '@/components/sections/StatsSection';
import { HomeContactSection } from '@/components/sections/HomeContactSection';
import { TRUST_BADGES, CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FiveStars - Professional Cleaning Services in Queenstown | Home',
  description: 'Transform your living space with Queenstown\'s most trusted cleaning professionals. Residential & commercial cleaning, eco-friendly products, 100% satisfaction guaranteed. Get a free quote today!',
  keywords: ['Queenstown cleaning', 'house cleaning Queenstown', 'professional cleaners NZ', 'eco-friendly cleaning', 'residential cleaning', 'commercial cleaning'],
  openGraph: {
    title: 'FiveStars - Professional Cleaning Services in Queenstown',
    description: 'Transform your living space with Queenstown\'s most trusted cleaning professionals. Get a free quote today!',
    url: 'https://fivestars.co.nz',
  },
  alternates: {
    canonical: 'https://fivestars.co.nz',
  },
};

export default function Home() {
  // JSON-LD structured data for local business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FiveStars Cleaning',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    '@id': 'https://fivestars.co.nz',
    url: 'https://fivestars.co.nz',
    telephone: '+64225030102',
    email: 'info@fivestarscleaning.co.nz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10 Athol Street',
      addressLocality: 'Queenstown',
      postalCode: '9300',
      addressCountry: 'NZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -45.0312,
      longitude: 168.6626,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://facebook.com/fivestarscleaning',
      'https://instagram.com/fivestarscleaning',
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '150',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
      {/* Hero Section - Full screen with background, tagline, CTAs, and trust badges */}
      <Hero
        variant="home"
        title="Professional Cleaning Services for New Zealand Homes"
        subtitle="A PREMIUM CLEANING EXPERIENCE"
        highlightedText="New Zealand Homes"
        description="Transform your living space with Queenstown's most trusted cleaning professionals. We deliver exceptional results with eco-friendly products and meticulous attention to detail."
        primaryCTA={{
          label: 'Get Your Free Quote',
          href: '/contact',
        }}
        secondaryCTA={{
          label: CONTACT_INFO.phone,
          href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
        }}
        badges={[...TRUST_BADGES]}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      {/* Process Steps - 3-step process: Book Online → We Clean → Enjoy */}
      <ProcessSteps />

      {/* Services Section - 5 service cards */}
      <ServicesSection />

      {/* Why Us Section - 6 company features */}
      <WhyUsSection />

      {/* Testimonials - 3 customer 5-star reviews */}
      <Testimonials />

      {/* Stats Section - Single Card with Image + Content */}
      <StatsSection />

      {/* Contact Section - Single Card with two halves */}
      <HomeContactSection />
    </main>
    </>
  );
}
