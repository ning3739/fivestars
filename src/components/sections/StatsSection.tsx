'use client';

import Image from 'next/image';
import { FadeInScale, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

const STATS = [
  { value: '5k+', label: 'Homes Cleaned' },
  { value: '98%', label: 'Client Retention' },
  { value: '100%', label: 'Satisfaction' },
];

export function StatsSection() {
  return (
    <section
      className="py-16 md:py-20 bg-background-secondary"
      data-testid="stats-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInScale>
          <div className="rounded-md shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
            {/* Left - Team Image */}
            <div className="relative min-h-[300px] lg:min-h-[350px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="FiveStars professional team"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Stats Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text mb-4">
                More Than Just a Cleaning Service
              </h2>
              <p className="text-text-secondary text-base sm:text-lg mb-8">
                We&apos;re committed to delivering exceptional results and building lasting relationships with our clients across Queenstown.
              </p>

              {/* Stats Grid */}
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-3 gap-4 sm:gap-8">
                {STATS.map((stat, index) => (
                  <StaggerItem key={index}>
                    <div data-testid={`stat-item-${index}`} className="flex flex-col">
                      <span data-testid={`stat-value-${index}`} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-1">
                        {stat.value}
                      </span>
                      <span data-testid={`stat-label-${index}`} className="text-text-secondary text-sm">
                        {stat.label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </FadeInScale>
      </div>
    </section>
  );
}
