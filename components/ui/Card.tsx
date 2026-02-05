'use client';

import { cn } from '@/lib/utils';

/**
 * Card component props
 * A flexible container component with optional hover effects
 */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Enable hover effect with shadow and scale */
  hover?: boolean;
}

/**
 * Card Component
 * 
 * A versatile container component for displaying content in a card format.
 * Supports optional hover effects for interactive cards.
 */
export function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles
        'bg-white',
        'rounded-md',
        'shadow-sm',
        'border border-gray-100/80',
        // Responsive padding
        'p-4 sm:p-6',
        // Hover effect styles - refined
        hover && [
          'transition-all duration-300 ease-out',
          'hover:shadow-lg hover:shadow-gray-200/50',
          'hover:-translate-y-0.5',
          'hover:border-gray-200',
        ],
        // Custom classes
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
