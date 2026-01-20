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

import { Hero } from '@/components/sections/Hero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactForm } from '@/components/sections/ContactForm';
import { TRUST_BADGES, CONTACT_INFO } from '@/lib/constants';
import Image from 'next/image';

export default function Home() {
  return (
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
      <section
        className="py-16 md:py-20 lg:py-24 bg-background-secondary"
        data-testid="stats-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single card with left (image) and right (content) */}
          <div className="rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
            {/* Left - Team Image */}
            <div className="relative min-h-[300px] lg:min-h-[350px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="FiveStarsCleaning professional team"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Stats Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text mb-4">
                More Than Just a Cleaning Service
              </h2>
              <p className="text-text-secondary text-base sm:text-lg mb-8">
                We&apos;re committed to delivering exceptional results and building lasting relationships with our clients across Queenstown.
              </p>

              {/* Stats Grid */}
              <div data-testid="stats-grid" className="grid grid-cols-3 gap-4 sm:gap-8">
                {[
                  { value: '5k+', label: 'Homes Cleaned' },
                  { value: '98%', label: 'Client Retention' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} data-testid={`stat-item-${index}`} className="flex flex-col">
                    <span data-testid={`stat-value-${index}`} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-1">
                      {stat.value}
                    </span>
                    <span data-testid={`stat-label-${index}`} className="text-text-secondary text-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Single Card with two halves */}
      <section
        id="contact"
        className="py-16 md:py-20 lg:py-24 bg-background-secondary"
        data-testid="contact-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single card with left (blue) and right (white) */}
          <div className="rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Contact Info (dark blue) */}
            <div className="bg-primary p-8 md:p-10 text-white">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                Your Home is Our Priority
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-8">
                Get in touch with us today for a free consultation. We&apos;re here to help make your space shine.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-gold">phone</span>
                  </div>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-white font-medium hover:text-gold transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-gold">email</span>
                  </div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-medium hover:text-gold transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-gold">location_on</span>
                  </div>
                  <span className="text-white font-medium">Queenstown, New Zealand</span>
                </div>
              </div>
            </div>

            {/* Right - Contact Form (white) */}
            <div className="bg-white p-8 md:p-10">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text mb-6">
                Get a Free Quote
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
