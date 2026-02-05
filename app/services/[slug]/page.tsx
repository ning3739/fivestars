'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { SERVICES, SERVICE_DETAILS } from '@/lib/constants';
import { FadeIn, FadeInScale, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Unwrap params using React.use() for async params
  const { slug } = use(params);
  
  const service = SERVICES.find(s => s.id === slug);
  const details = SERVICE_DETAILS[slug];
  
  if (!service || !details) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title={service.name}
        subtitle={service.category === 'residential' ? 'RESIDENTIAL SERVICE' : 'COMMERCIAL SERVICE'}
        description={service.description}
        backgroundImage={details.image}
      />

      {/* Overview Section - Card Style */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInScale>
            <div className="rounded-md shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
              {/* Left - Image */}
              <div className="relative min-h-[300px] lg:min-h-[400px]">
                {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
                <Image
                  src={details.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={cn(
                    "object-cover transition-opacity duration-500",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Right - Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">ABOUT THIS SERVICE</span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text mt-2 mb-4">
                  {service.name}
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {details.longDescription}
                </p>

                {/* Quick features */}
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <MaterialIcon name="check_circle" size="sm" className="text-gold flex-shrink-0" filled />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="primary" size="lg" href="/contact" className="w-fit">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </FadeInScale>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">HOW IT WORKS</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mt-2 mb-4">
              Our Process
            </h2>
            <p className="text-text-secondary text-base max-w-2xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure consistent, high-quality results every time.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.process.map((step) => (
              <StaggerItem key={step.step} className="h-full">
                <div className="bg-background-secondary rounded-md p-6 border border-gray-100/80 h-full relative">
                  {/* Step number */}
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included Section - Full Width Card */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInScale>
            <div className="rounded-md shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-5 bg-white">
              {/* Left - Title (2 cols) */}
              <div className="lg:col-span-2 bg-primary p-8 md:p-10 text-white flex flex-col justify-center">
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">WHAT YOU GET</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                  What&apos;s Included
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-4">
                  Every {service.name.toLowerCase()} service includes a comprehensive checklist to ensure nothing is missed.
                </p>
                <p className="text-sm text-white/70 flex items-center gap-2">
                  <MaterialIcon name="add_circle" size="sm" className="text-gold flex-shrink-0" />
                  <span>Additional services available upon request</span>
                </p>
              </div>

              {/* Right - Checklist (3 cols) */}
              <div className="lg:col-span-3 p-8 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MaterialIcon name="check_circle" size="sm" className="text-gold flex-shrink-0" filled />
                      <span className="text-text text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInScale>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">QUESTIONS</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="space-y-4">
            {details.faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="bg-background-secondary rounded-md border border-gray-100/80 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-text pr-4">{faq.question}</span>
                    <MaterialIcon 
                      name={openFaq === index ? 'expand_less' : 'expand_more'} 
                      className="text-primary flex-shrink-0"
                    />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    openFaq === index ? "max-h-96" : "max-h-0"
                  )}>
                    <p className="px-6 pb-4 text-text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to book your {service.name.toLowerCase()}?
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote today. We&apos;ll get back to you within 24 hours.
            </p>
            <Button variant="secondary" size="lg" href="/contact">
              Get a Free Quote
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">MORE SERVICES</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mt-2">
              Explore Other Services
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.filter(s => s.id !== slug).map((otherService) => (
              <StaggerItem key={otherService.id} className="h-full">
                <Link
                  href={`/services/${otherService.id}`}
                  className="block h-full p-6 bg-white rounded-md text-center shadow-sm border border-gray-100/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-md flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                    <MaterialIcon name={otherService.icon} className="text-gold" />
                  </div>
                  <h3 className="font-semibold text-text text-sm group-hover:text-primary transition-colors">
                    {otherService.name}
                  </h3>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
