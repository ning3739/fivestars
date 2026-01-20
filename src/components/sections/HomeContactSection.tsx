'use client';

import { ContactForm } from '@/components/sections/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import { FadeInScale, SlideInLeft, SlideInRight } from '@/components/ui/Motion';

export function HomeContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 bg-background-secondary"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInScale>
          <div className="rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Contact Info (dark blue) */}
            <SlideInLeft delay={0.2} className="bg-primary p-8 md:p-10 text-white">
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
            </SlideInLeft>

            {/* Right - Contact Form (white) */}
            <SlideInRight delay={0.2} className="bg-white p-8 md:p-10">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text mb-6">
                Get a Free Quote
              </h3>
              <ContactForm />
            </SlideInRight>
          </div>
        </FadeInScale>
      </div>
    </section>
  );
}
