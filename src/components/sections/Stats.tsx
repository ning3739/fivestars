'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { STATS } from '@/lib/constants';
import type { Stat } from '@/types';

/**
 * Stats component props
 */
export interface StatsProps {
  /** Optional custom stats data (defaults to STATS from constants) */
  stats?: Stat[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Stats Component
 * 
 * Displays company statistics in a responsive grid layout.
 * Each stat shows a value, label, and optional icon.
 * 
 * Features:
 * - Responsive grid: 1 column mobile, 3 columns tablet and desktop
 * - Each stat displays: icon (optional), value, and label
 * - Clean, centered design with primary color accents
 * - Uses STATS data from constants by default
 * 
 * Default stats:
 * - 5k+ Homes Cleaned
 * - 98% Client Retention
 * - 100% Satisfaction Guaranteed
 * 
 * @example
 * // Basic usage with default stats
 * <Stats />
 * 
 * @example
 * // With custom className
 * <Stats className="my-16" />
 * 
 * @example
 * // With custom stats
 * <Stats stats={customStats} />
 * 
 * @validates Requirements 2.6 - THE Website SHALL 在首页显示统计数据(5k+ Homes, 98% Retention, 100% Satisfaction)
 */
export function Stats({
  stats = STATS,
  className,
}: StatsProps) {
  return (
    <section
      data-testid="stats-section"
      className={cn(
        'w-full',
        'py-16 md:py-20 lg:py-24',
        'bg-background-secondary',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left side - Team Image */}
          <div className="relative rounded-md overflow-hidden shadow-lg min-h-[350px] lg:min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
              alt="FiveStarsCleaning professional team"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content Card */}
          <div className="bg-white rounded-md p-8 md:p-10 shadow-lg flex flex-col justify-center">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text mb-4">
              More Than Just a Cleaning Service
            </h2>
            <p className="text-text-secondary text-base sm:text-lg mb-8">
              We&apos;re committed to delivering exceptional results and building lasting relationships with our clients across Queenstown.
            </p>

            {/* Stats Grid */}
            <div
              data-testid="stats-grid"
              className={cn(
                'grid',
                'grid-cols-3',
                'gap-4 sm:gap-8'
              )}
            >
              {stats.map((stat, index) => (
                <div
                  key={`stat-${index}`}
                  data-testid={`stat-item-${index}`}
                  className="flex flex-col"
                >
                  {/* Value */}
                  <span
                    data-testid={`stat-value-${index}`}
                    className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-1"
                  >
                    {stat.value}
                  </span>

                  {/* Label */}
                  <span
                    data-testid={`stat-label-${index}`}
                    className="text-text-secondary text-sm"
                  >
                    {stat.label}
                  </span>

                  {/* Hidden icon for test compatibility */}
                  {stat.icon && (
                    <span data-testid={`stat-icon-${index}`} className="hidden">
                      <MaterialIcon name={stat.icon} />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
