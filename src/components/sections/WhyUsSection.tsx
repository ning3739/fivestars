'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { Card } from '@/components/ui/Card';
import { FEATURES } from '@/lib/constants';
import type { Feature } from '@/types';

/**
 * WhyUsSection component props
 */
export interface WhyUsSectionProps {
  /** Optional custom features data (defaults to FEATURES from constants) */
  features?: Feature[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * WhyUsSection Component
 * 
 * Displays 6 company features/benefits in a responsive grid layout.
 * Each feature card shows an icon, title, and description.
 * 
 * Features:
 * - Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop
 * - Each feature displays: icon, title, and description
 * - Card-based design with hover effects
 * - Uses FEATURES data from constants by default
 * 
 * @example
 * // Basic usage with default features
 * <WhyUsSection />
 * 
 * @example
 * // With custom className
 * <WhyUsSection className="my-16" />
 * 
 * @example
 * // With custom features
 * <WhyUsSection features={customFeatures} />
 * 
 * @validates Requirements 2.4 - THE Website SHALL 在首页显示6个公司特点
 */
export function WhyUsSection({
  features = FEATURES,
  className,
}: WhyUsSectionProps) {
  return (
    <section
      data-testid="why-us-section"
      className={cn(
        'w-full',
        'py-12 sm:py-16 lg:py-20',
        'bg-primary',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional cleaning team"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
              <p className="text-text text-sm italic mb-3">
                &ldquo;We don&apos;t just clean, we care for your home like it&apos;s our own.&rdquo;
              </p>
              <p className="text-primary font-semibold text-sm">— The FiveStars Team</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">THE FIVESTARS STANDARD</span>
            <h2
              data-testid="why-us-title"
              className={cn(
                'font-heading font-bold',
                'text-2xl sm:text-3xl lg:text-4xl',
                'text-white',
                'mt-2 mb-6'
              )}
            >
              Why Choose Us
            </h2>
            <p
              data-testid="why-us-subtitle"
              className={cn(
                'text-white/80',
                'text-base sm:text-lg',
                'mb-8'
              )}
            >
              Discover what makes FiveStarsCleaning the trusted choice for Queenstown homes and businesses
            </p>

            {/* Features Grid - 2x3 */}
            <div
              data-testid="why-us-grid"
              className={cn(
                'grid',
                'grid-cols-1 sm:grid-cols-2',
                'gap-6'
              )}
            >
              {features.map((feature) => (
                <div
                  key={feature.id}
                  data-testid={`feature-card-${feature.id}`}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div
                    data-testid={`feature-icon-${feature.id}`}
                    className={cn(
                      'w-10 h-10',
                      'rounded-lg',
                      'bg-gold/20',
                      'flex items-center justify-center',
                      'flex-shrink-0'
                    )}
                  >
                    <MaterialIcon
                      name={feature.icon}
                      size="md"
                      className="text-gold"
                    />
                  </div>

                  <div>
                    {/* Title */}
                    <h3
                      data-testid={`feature-title-${feature.id}`}
                      className={cn(
                        'font-heading font-semibold',
                        'text-base',
                        'text-white',
                        'mb-1'
                      )}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      data-testid={`feature-description-${feature.id}`}
                      className={cn(
                        'text-white/70',
                        'text-sm',
                        'leading-relaxed'
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
