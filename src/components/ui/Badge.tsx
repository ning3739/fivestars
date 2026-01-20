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
 * Commonly used in Hero sections to highlight company credentials.
 * 
 * Features:
 * - Icon and label display
 * - Two variants: default (white/transparent) and gold
 * - Consistent styling with design system
 * 
 * @example
 * // Default variant
 * <Badge icon="verified_user" label="Fully Insured" />
 * 
 * @example
 * // Gold variant
 * <Badge icon="star" label="Premium Service" variant="gold" />
 * 
 * @validates Requirements 2.1 - THE Hero_Section SHALL 显示三个信任徽章(Fully Insured, 100% Satisfaction, Eco-Friendly)
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
        'px-4 py-2',
        'rounded-full',
        'text-sm font-medium',
        // Variant styles
        variant === 'default' && [
          'bg-white/90',
          'text-primary',
        ],
        variant === 'gold' && [
          'bg-gold',
          'text-primary',
        ],
      )}
    >
      <MaterialIcon name={icon} size="sm" />
      <span>{label}</span>
    </div>
  );
}

export default Badge;
