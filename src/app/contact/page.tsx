/**
 * Contact Page - Matching Figma Design
 */

import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ContactForm } from '@/components/sections/ContactForm';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { CONTACT_INFO } from '@/lib/constants';

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

/**
 * Service areas covered by FiveStarsCleaning
 */
const SERVICE_AREAS = ['Queenstown Central', 'Frankton', 'Arrowtown', 'Kelvin Heights'];

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="Contact FiveStarsCleaning"
        description="Premium cleaning services tailored to your space."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      {/* Contact Information & Form Section */}
      <section className="py-16 md:py-20 bg-white" data-testid="contact-info-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Information */}
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                GET IN TOUCH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
                We&apos;re here to help.
              </h2>
              <p className="text-text-secondary text-base mb-10">
                Experience the FiveStars difference. Contact us today for a consultation or to schedule your first premium clean.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-6" data-testid="contact-info-cards">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="phone" className="text-gold" />
                  </div>
                  <div>
                    <span className="text-text-secondary text-xs uppercase tracking-wider">PHONE</span>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="block text-text font-semibold text-lg hover:text-primary transition-colors"
                      data-testid="contact-phone-link"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <span className="text-text-secondary text-sm">Mon-Fri 8am - 6pm</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="email" className="text-gold" />
                  </div>
                  <div>
                    <span className="text-text-secondary text-xs uppercase tracking-wider">EMAIL</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="block text-text font-semibold text-lg hover:text-primary transition-colors"
                      data-testid="contact-email-link"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    <span className="text-text-secondary text-sm">Online support 24/7</span>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="location_on" className="text-gold" />
                  </div>
                  <div>
                    <span className="text-text-secondary text-xs uppercase tracking-wider">HEADQUARTERS</span>
                    <p className="text-text font-semibold text-lg">Queenstown Central</p>
                    <span className="text-text-secondary text-sm">10 Athol Street, Queenstown 9300</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 sm:p-8">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text mb-6">
                  Get a Free Quote
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-20 bg-background-secondary" data-testid="service-areas-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Area Card with Map Background */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Map Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-primary/80" />
            
            {/* Content */}
            <div className="relative z-10 py-12 px-6 sm:px-12 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <MaterialIcon name="location_on" size="lg" className="text-primary" />
              </div>
              
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                Service Area
              </h2>
              <p className="text-white/80 text-base max-w-lg mx-auto mb-8">
                We proudly serve the entire <span className="text-gold font-semibold">Greater Queenstown Region</span>. 
                Our team covers all major suburbs and surrounding areas.
              </p>
              
              {/* Area Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-8" data-testid="service-areas-list">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
              
              {/* Active Status */}
              <div className="flex items-center justify-center gap-2 text-gold text-sm">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span>Active in your area now</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
