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
 * 
 * Features:
 * - Rounded corners (rounded-xl) per design system
 * - Shadow (shadow-md) per design system
 * - White background (bg-white)
 * - Responsive padding (p-4 sm:p-6)
 * - Optional hover effect with enhanced shadow and subtle scale
 * 
 * @example
 * // Basic card
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * 
 * @example
 * // Card with hover effect
 * <Card hover>
 *   <h3>Interactive Card</h3>
 *   <p>This card has hover effects</p>
 * </Card>
 * 
 * @example
 * // Card with custom className
 * <Card className="max-w-md mx-auto">
 *   <h3>Custom Card</h3>
 * </Card>
 * 
 * @validates Requirements 2.3 - THE Website SHALL 在首页显示5种服务卡片
 * @validates Requirements 3.4 - THE Service_Card SHALL 显示服务名称、描述、功能列表和 CTA 按钮
 */
export function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles per design system
        'bg-white',
        'rounded-xl',
        'shadow-md',
        // Responsive padding
        'p-4 sm:p-6',
        // Hover effect styles
        hover && [
          'transition-all duration-300',
          'hover:shadow-lg',
          'hover:scale-[1.02]',
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
