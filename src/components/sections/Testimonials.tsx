'use client';

import { cn } from '@/lib/utils';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { Card } from '@/components/ui/Card';
import { TESTIMONIALS } from '@/lib/constants';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import type { Testimonial } from '@/types';

/**
 * Testimonials component props
 */
export interface TestimonialsProps {
  /** Optional custom testimonials data (defaults to TESTIMONIALS from constants) */
  testimonials?: Testimonial[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * StarRating Component
 * 
 * Renders a 5-star rating display with filled stars based on the rating value.
 * 
 * @param rating - Number of filled stars (1-5)
 */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" data-testid="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <MaterialIcon
          key={star}
          name="star"
          size="sm"
          filled={star <= rating}
          className={cn(
            star <= rating ? 'text-gold' : 'text-gray-300'
          )}
        />
      ))}
    </div>
  );
}

/**
 * Testimonials Component
 * 
 * Displays customer testimonials with 5-star ratings in a responsive grid layout.
 * Each testimonial card shows customer name, location, rating (stars), and review content.
 * 
 * Features:
 * - Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop
 * - Each testimonial displays: avatar placeholder, name, location, 5-star rating, content
 * - Card-based design with hover effects
 * - Uses TESTIMONIALS data from constants by default
 * 
 * @example
 * // Basic usage with default testimonials
 * <Testimonials />
 * 
 * @example
 * // With custom className
 * <Testimonials className="my-16" />
 * 
 * @example
 * // With custom testimonials
 * <Testimonials testimonials={customTestimonials} />
 * 
 * @validates Requirements 2.5 - THE Website SHALL 在首页显示3个客户5星评价
 */
export function Testimonials({
  testimonials = TESTIMONIALS,
  className,
}: TestimonialsProps) {
  return (
    <section
      data-testid="testimonials-section"
      className={cn(
        'w-full',
        'py-16 md:py-20',
        'bg-white',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <h2
            data-testid="testimonials-title"
            className={cn(
              'font-heading font-bold',
              'text-2xl sm:text-3xl lg:text-4xl',
              'text-text',
              'mb-4'
            )}
          >
            Rated 5 Stars by Locals
          </h2>
          <p
            data-testid="testimonials-subtitle"
            className={cn(
              'text-text-secondary',
              'text-base sm:text-lg',
              'max-w-2xl mx-auto',
              'leading-relaxed'
            )}
          >
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          className={cn(
            'grid',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
            'gap-6 sm:gap-8',
            'max-w-6xl mx-auto'
          )}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card
                data-testid={`testimonial-card-${testimonial.id}`}
                className={cn(
                  'flex flex-col',
                  'h-full',
                  'border border-gray-100'
                )}
                hover
              >
                {/* Star Rating - at top */}
                <div
                  data-testid={`testimonial-rating-${testimonial.id}`}
                  className="mb-4"
                >
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial Content */}
                <p
                  data-testid={`testimonial-content-${testimonial.id}`}
                  className={cn(
                    'text-text',
                    'text-base',
                    'leading-relaxed',
                    'flex-1',
                    'mb-6'
                  )}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Customer Info - at bottom */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {/* Avatar */}
                  <div
                    data-testid={`testimonial-avatar-${testimonial.id}`}
                    className={cn(
                      'w-10 h-10',
                      'rounded-full',
                      'bg-primary',
                      'flex items-center justify-center',
                      'flex-shrink-0'
                    )}
                  >
                    {testimonial.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>

                  {/* Name and Location */}
                  <div className="flex-1 min-w-0">
                    <h3
                      data-testid={`testimonial-name-${testimonial.id}`}
                      className={cn(
                        'font-semibold',
                        'text-sm',
                        'text-text',
                        'truncate'
                      )}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      data-testid={`testimonial-location-${testimonial.id}`}
                      className={cn(
                        'text-text-secondary',
                        'text-xs',
                        'truncate'
                      )}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
