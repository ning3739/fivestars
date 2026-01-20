'use client';

/**
 * Services Page - Matching Figma Design
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { SERVICES } from '@/lib/constants';
import { filterServices, type ServiceFilterType } from '@/lib/utils';
import { FadeIn, FadeInScale } from '@/components/ui/Motion';

// Note: Metadata must be in a separate file for client components
// See src/app/services/metadata.ts

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceFilterType>('all');
  const filteredServices = filterServices(SERVICES, activeFilter);

  // Split services: first 3 in top row, last 2 in bottom row
  const topServices = filteredServices.slice(0, 3);
  const bottomServices = filteredServices.slice(3, 5);

  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="Our Professional Cleaning Services"
        subtitle="DETAILED SERVICE MENU"
        description="We don't just clean; we curate environments. Explore our detailed service breakdowns below to find the perfect solution for your needs."
        backgroundImage="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80"
      />

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white" data-testid="services-filter-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <FadeIn className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {[
                { value: 'all', label: 'All Services' },
                { value: 'residential', label: 'Residential' },
                { value: 'commercial', label: 'Commercial' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value as ServiceFilterType)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.value
                      ? 'bg-primary text-white'
                      : 'text-text-secondary hover:text-text'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Services Grid - Top Row (3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6" data-testid="services-grid">
            <AnimatePresence mode="popLayout">
              {topServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Services Grid - Bottom Row (2 cards centered) */}
          {bottomServices.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:max-w-[66%]">
              <AnimatePresence mode="popLayout">
                {bottomServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Empty state */}
          <AnimatePresence>
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
                data-testid="no-services-message"
              >
                <p className="text-text-secondary text-lg">No services found for this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background-secondary" data-testid="services-cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInScale>
            <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  Ready for a spotless space?
                </h2>
                <p className="text-white/80 text-base">
                  Get a custom quote in minutes. No credit card required.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                className="whitespace-nowrap"
              >
                Get Your Free Quote
              </Button>
            </div>
          </FadeInScale>
        </div>
      </section>
    </main>
  );
}

/**
 * Service Card Component
 */
function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 group">
      {/* Yellow Icon */}
      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
        <MaterialIcon name={service.icon} className="text-gold" />
      </div>
      
      {/* Title */}
      <h3 className="font-heading font-bold text-text text-lg mb-2">
        {service.name}
      </h3>
      
      {/* Description */}
      <p className="text-text-secondary text-sm mb-4">
        {service.description}
      </p>
      
      {/* Features list */}
      <ul className="space-y-2 mb-4">
        {service.features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
            <MaterialIcon name="check_circle" size="sm" className="text-gold flex-shrink-0 mt-0.5" filled />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* CTA Link */}
      <a href="/contact" className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline group-hover:gap-2 transition-all">
        Book {service.name.split(' ')[0]} <MaterialIcon name="arrow_forward" size="sm" />
      </a>
    </div>
  );
}
