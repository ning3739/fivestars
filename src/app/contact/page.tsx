'use client';

/**
 * Contact Page - Matching Figma Design
 */

import { Hero } from '@/components/sections/Hero';
import { ContactForm } from '@/components/sections/ContactForm';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { CONTACT_INFO } from '@/lib/constants';
import { FadeIn, SlideInLeft, SlideInRight, FadeInScale } from '@/components/ui/Motion';

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
            <SlideInLeft>
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
            </SlideInLeft>

            {/* Right - Contact Form */}
            <SlideInRight delay={0.2}>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 sm:p-8">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text mb-6">
                  Get a Free Quote
                </h3>
                <ContactForm />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-20 bg-background-secondary" data-testid="service-areas-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card Container */}
          <FadeInScale>
            <div className="rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Service Area Info */}
              <div className="bg-primary p-8 md:p-10 text-white flex flex-col justify-center">
                <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
                  OUR COVERAGE
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                  Service Area
                </h2>
                <p className="text-white/80 text-base mb-6">
                  We proudly serve the entire <span className="text-gold font-semibold">Greater Queenstown Region</span>. 
                  Our team covers all major suburbs and surrounding areas.
                </p>
                
                {/* Area Tags */}
                <div className="flex flex-wrap gap-2" data-testid="service-areas-list">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-1.5 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Embedded Map */}
              <div className="h-[350px] lg:h-auto lg:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89664.29584164498!2d168.5891!3d-45.0312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2sQueenstown%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FiveStars Cleaning Service Area - Queenstown, New Zealand"
                />
              </div>
            </div>
          </FadeInScale>
        </div>
      </section>
    </main>
  );
}
