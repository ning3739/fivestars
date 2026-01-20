'use client';

import { cn } from '@/lib/utils';
import { MaterialIcon } from '@/components/icons/MaterialIcon';

/**
 * Button component props
 * Supports multiple variants, sizes, and optional icon
 */
export interface ButtonProps {
  /** Button style variant */
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Button size */
  size: 'sm' | 'md' | 'lg';
  /** Button content */
  children: React.ReactNode;
  /** Optional link href - renders as anchor tag when provided */
  href?: string;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Optional Material Symbol icon name */
  icon?: string;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Variant styles for the Button component
 * Maps variant names to Tailwind CSS classes
 */
const variantClasses: Record<ButtonProps['variant'], string> = {
  primary: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
  secondary: 'bg-gold text-primary hover:bg-gold-400 active:bg-gold-500',
  outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
  ghost: 'text-primary bg-transparent hover:bg-primary-50 active:bg-primary-100',
};

/**
 * Size styles for the Button component
 * All sizes ensure minimum 44x44px touch target (min-h-11 min-w-11)
 */
const sizeClasses: Record<ButtonProps['size'], string> = {
  sm: 'px-4 py-2 text-sm min-h-11 min-w-11',
  md: 'px-6 py-3 text-base min-h-11 min-w-11',
  lg: 'px-8 py-4 text-lg min-h-11 min-w-11',
};

/**
 * Icon size mapping based on button size
 */
const iconSizeMap: Record<ButtonProps['size'], 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'md',
};

/**
 * Button Component
 * 
 * A versatile button component that supports multiple variants, sizes, and icons.
 * Renders as an anchor tag when href is provided, otherwise as a button.
 * 
 * Features:
 * - Four style variants: primary, secondary, outline, ghost
 * - Three sizes: sm, md, lg
 * - Optional Material Symbol icon
 * - Minimum 44x44px touch target for accessibility
 * - Supports both button and link behavior
 * 
 * @example
 * // Primary button
 * <Button variant="primary" size="md">Get a Quote</Button>
 * 
 * @example
 * // Button with icon
 * <Button variant="secondary" size="lg" icon="phone">Call Us</Button>
 * 
 * @example
 * // Link button
 * <Button variant="outline" size="md" href="/contact">Contact</Button>
 * 
 * @validates Requirements 6.5 - THE Website SHALL 确保所有交互元素在触摸设备上有足够的点击区域(最小 44x44px)
 */
export function Button({
  variant,
  size,
  children,
  href,
  onClick,
  className,
  icon,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = cn(
    // Base styles
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-lg',
    'transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
    'transform hover:scale-[1.02] active:scale-[0.98]',
    // Variant styles
    variantClasses[variant],
    // Size styles
    sizeClasses[size],
    // Disabled styles
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none hover:scale-100',
    // Custom classes
    className
  );

  const content = (
    <>
      {icon && <MaterialIcon name={icon} size={iconSizeMap[size]} />}
      {children}
    </>
  );

  // Render as anchor tag if href is provided
  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}

export default Button;
