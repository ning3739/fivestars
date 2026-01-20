'use client';

/**
 * Contact Page - Matching Figma Design
 */

import { useState } from 'react';
import { Hero } from '@/components/sections/Hero';
import { ContactForm } from '@/components/sections/ContactForm';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { CONTACT_INFO } from '@/lib/constants';
import { FadeIn, FadeInScale, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

/**
 * Service areas covered by FiveStarsCleaning
 */
const SERVICE_AREAS = ['Queenstown Central', 'Frankton', 'Arrowtown', 'Kelvin Heights', 'Jacks Point', 'Lake Hayes'];

/**
 * Why contact us - trust points
 */
const TRUST_POINTS = [
  {
    icon: 'schedule',
    title: '24-Hour Response',
    description: 'We respond to all inquiries within 24 hours, guaranteed.',
  },
  {
    icon: 'verified',
    title: 'Free Consultation',
    description: 'No obligation quotes tailored to your specific needs.',
  },
  {
    icon: 'shield',
    title: 'Fully Insured',
    description: 'Complete peace of mind with comprehensive coverage.',
  },
];

/**
 * FAQ items for contact page
 */
const FAQS = [
  {
    question: 'How do I book a cleaning service?',
    answer: 'Simply fill out the contact form above, call us, or send an email. We\'ll get back to you within 24 hours to discuss your needs and schedule a convenient time.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We cover the entire Greater Queenstown region including Queenstown Central, Frankton, Arrowtown, Kelvin Heights, Jacks Point, and Lake Hayes.',
  },
  {
    question: 'Do you offer one-time or regular cleaning?',
    answer: 'We offer both! Whether you need a one-time deep clean or regular weekly/fortnightly service, we can accommodate your schedule.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfer, credit/debit cards, and cash. Payment is due after the service is completed to your satisfaction.',
  },
  {
    question: 'Are your cleaners background checked?',
    answer: 'Yes, all our team members undergo comprehensive background checks and are fully trained before joining our team.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="Get in Touch"
        subtitle="CONTACT US"
        description="Have questions or ready to book? We're here to help make your space shine."
        backgroundImage="/images/commercial.jpg"
      />

      {/* Trust Points */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST_POINTS.map((point, index) => (
              <StaggerItem key={index}>
                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name={point.icon} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{point.title}</h3>
                    <p className="text-text-secondary text-sm">{point.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-12 md:py-20 bg-white" data-testid="contact-info-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left - Contact Information */}
            <FadeIn>
              <div className="border border-gray-200 rounded-md p-5 sm:p-6 md:p-8 bg-white shadow-sm h-full flex flex-col">
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                  GET IN TOUCH
                </span>
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-text mt-2 mb-3">
                  We&apos;re here to help.
                </h2>
                <p className="text-text-secondary text-sm sm:text-base mb-5">
                  Experience the FiveStars difference. Contact us today for a consultation or to schedule your first premium clean.
                </p>

                {/* Contact Info Cards */}
                <div className="flex flex-col gap-3" data-testid="contact-info-cards">
                  {/* Phone */}
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-background-secondary rounded-md hover:bg-gray-100 transition-colors group"
                    data-testid="contact-phone-link"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <MaterialIcon name="phone" className="text-gold" size="sm" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-text-secondary text-xs uppercase tracking-wider">Phone</span>
                      <p className="text-text font-semibold text-sm sm:text-base">{CONTACT_INFO.phone}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-background-secondary rounded-md hover:bg-gray-100 transition-colors group"
                    data-testid="contact-email-link"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <MaterialIcon name="email" className="text-gold" size="sm" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-text-secondary text-xs uppercase tracking-wider">Email</span>
                      <p className="text-text font-semibold text-sm break-all">{CONTACT_INFO.email}</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-background-secondary rounded-md">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MaterialIcon name="location_on" className="text-gold" size="sm" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-text-secondary text-xs uppercase tracking-wider">Address</span>
                      <p className="text-text font-semibold text-sm">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-background-secondary rounded-md">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MaterialIcon name="schedule" className="text-gold" size="sm" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-text-secondary text-xs uppercase tracking-wider">Hours</span>
                      <p className="text-text font-semibold text-sm">{CONTACT_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right - Contact Form */}
            <FadeIn delay={0.1}>
              <div className="border border-gray-200 rounded-md p-5 sm:p-6 md:p-8 bg-white shadow-sm h-full">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text mb-5 sm:mb-6">
                  Get a Free Quote
                </h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 md:py-20 bg-background-secondary" data-testid="service-areas-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card Container */}
          <FadeInScale>
            <div className="rounded-md shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left - Service Area Info */}
                <div className="bg-primary p-6 sm:p-8 md:p-10 text-white flex flex-col justify-center">
                  <span className="inline-block bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
                    OUR COVERAGE
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                    Service Area
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base mb-6">
                    We proudly serve the entire <span className="text-gold font-semibold">Greater Queenstown Region</span>. 
                    Our team covers all major suburbs and surrounding areas.
                  </p>
                  
                  {/* Area Tags */}
                  <div className="flex flex-wrap gap-2" data-testid="service-areas-list">
                    {SERVICE_AREAS.map((area) => (
                      <span
                        key={area}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Embedded Map */}
                <div className="h-[280px] sm:h-[350px] lg:h-auto lg:min-h-[400px]">
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
            </div>
          </FadeInScale>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-8 sm:mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">QUESTIONS</span>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-text mt-2 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Find answers to common questions about our services.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="space-y-3">
            {FAQS.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="bg-background-secondary rounded-md border border-gray-100/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-text text-sm sm:text-base pr-4">{faq.question}</span>
                    <MaterialIcon 
                      name={openFaq === index ? 'expand_less' : 'expand_more'} 
                      className="text-primary flex-shrink-0"
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-4 sm:px-6 pb-3 sm:pb-4 text-text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
