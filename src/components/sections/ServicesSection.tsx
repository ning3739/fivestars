'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { SERVICES } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

/**
 * Service images from Unsplash
 */
const SERVICE_IMAGES: Record<string, string> = {
  'residential': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
  'commercial': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  'airbnb-turnover': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
  'deep-cleaning': 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80',
  'move-in-out': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
};

/**
 * ServicesSection component props
 */
export interface ServicesSectionProps {
  /** Optional custom title */
  title?: string;
  /** Optional custom subtitle */
  subtitle?: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * ServicesSection Component
 * 
 * @validates Requirements 2.3 - THE Website SHALL 在首页显示5种服务卡片
 */
export function ServicesSection({
  title = 'Cleaning Solutions for Every Need',
  subtitle = 'From regular home maintenance to specialized deep cleaning, we have the perfect solution for your space.',
  className,
}: ServicesSectionProps) {
  // Split services: first 3 in top row, last 2 in bottom row
  const topServices = SERVICES.slice(0, 3);
  const bottomServices = SERVICES.slice(3, 5);

  const ServiceCard = ({ service }: { service: typeof SERVICES[0] }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 group">
      {/* Service Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={SERVICE_IMAGES[service.id] || SERVICE_IMAGES['residential']}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      
      {/* Card Content */}
      <div className="p-6">
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
          {service.features.slice(0, 3).map((feature, idx) => (
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
    </div>
  );

  return (
    <section
      data-testid="services-section"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-background-secondary',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <div className="max-w-lg">
            <h2
              data-testid="services-section-title"
              className="font-heading font-bold text-text text-2xl sm:text-3xl mb-2"
            >
              {title}
            </h2>
            <p
              data-testid="services-section-subtitle"
              className="text-text-secondary text-base"
            >
              {subtitle}
            </p>
          </div>
          <a 
            href="/services" 
            className="mt-4 md:mt-0 inline-flex items-center gap-1 text-primary font-semibold hover:underline"
          >
            View All Services <MaterialIcon name="arrow_forward" size="sm" />
          </a>
        </FadeIn>

        {/* Services Grid - Top Row (3 cards) */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {topServices.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Services Grid - Bottom Row (2 cards centered) */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:max-w-[66%]"
        >
          {bottomServices.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
