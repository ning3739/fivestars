'use client';

import { cn } from '@/lib/utils';

/**
 * MaterialIcon component props
 * Wraps Google Material Symbols for consistent icon usage
 */
export interface MaterialIconProps {
  /** The name of the Material Symbol icon (e.g., 'home', 'star', 'check_circle') */
  name: string;
  /** Icon size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional CSS classes */
  className?: string;
  /** Whether to use filled variant */
  filled?: boolean;
}

/**
 * Size mappings for Material Symbols
 * Maps size variants to Tailwind text size classes
 */
const sizeClasses: Record<NonNullable<MaterialIconProps['size']>, string> = {
  sm: 'text-lg',    // 18px
  md: 'text-2xl',   // 24px (default)
  lg: 'text-3xl',   // 30px
  xl: 'text-4xl',   // 36px
};

/**
 * MaterialIcon Component
 * 
 * A wrapper component for Google Material Symbols that provides:
 * - Consistent sizing across the application
 * - Support for filled/outlined variants
 * - Easy integration with Tailwind CSS
 * 
 * @example
 * // Basic usage
 * <MaterialIcon name="home" />
 * 
 * @example
 * // With size and filled variant
 * <MaterialIcon name="star" size="lg" filled />
 * 
 * @example
 * // With custom className
 * <MaterialIcon name="check_circle" className="text-green-500" />
 * 
 * @validates Requirements 7.3 - THE Website SHALL 使用 Google Material Symbols 图标
 */
export function MaterialIcon({
  name,
  size = 'md',
  className,
  filled = false,
}: MaterialIconProps) {
  return (
    <span
      className={cn(
        'material-symbols-outlined',
        sizeClasses[size],
        filled && 'filled',
        className
      )}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

export default MaterialIcon;
