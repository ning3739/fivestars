'use client';

import { cn } from '@/lib/utils';
import { MaterialIcon } from '@/components/icons/MaterialIcon';

/**
 * Badge component props
 * A badge component for displaying trust indicators with icon and label
 */
export interface BadgeProps {
  /** Material icon name to display */
  icon: string;
  /** Text label for the badge */
  label: string;
  /** Badge variant - default (white) or gold */
  variant?: 'default' | 'gold';
}

/**
 * Badge Component
 * 
 * A trust badge component used to display key selling points and guarantees.
 */
export function Badge({
  icon,
  label,
  variant = 'default',
}: BadgeProps) {
  return (
    <div
      className={cn(
        // Base styles
        'inline-flex items-center gap-2',
        'px-4 py-2.5',
        'rounded-full',
        'text-sm font-medium',
        'backdrop-blur-sm',
        'transition-all duration-300',
        'hover:scale-105',
        // Variant styles
        variant === 'default' && [
          'bg-white/95',
          'text-primary',
          'shadow-sm',
          'border border-white/20',
        ],
        variant === 'gold' && [
          'bg-gold',
          'text-primary',
          'shadow-sm shadow-gold/30',
        ],
      )}
    >
      <MaterialIcon name={icon} size="sm" className={variant === 'default' ? 'text-gold' : ''} />
      <span>{label}</span>
    </div>
  );
}

export default Badge;
