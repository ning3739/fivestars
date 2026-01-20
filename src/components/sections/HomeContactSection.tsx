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
          <div className="rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left - Contact Info with embedded map */}
            <SlideInLeft delay={0.2} className="bg-primary p-8 md:p-10 text-white flex flex-col">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                Your Home is Our Priority
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-8">
                Get in touch with us today for a free consultation. We&apos;re here to help make your space shine.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-5 mb-6">
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

              {/* Embedded Map - flex-1 to fill remaining space */}
              <div className="rounded-lg overflow-hidden flex-1 min-h-[150px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89664.29584164498!2d168.5891!3d-45.0312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2sQueenstown%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Queenstown, New Zealand Map"
                />
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
