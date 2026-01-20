'use client';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import type { Service } from '@/types';

/**
 * ServiceCard component props
 * Displays a service in either compact or detailed format
 */
export interface ServiceCardProps {
  /** Service data to display */
  service: Service;
  /** Display variant - compact for homepage, detailed for services page */
  variant?: 'compact' | 'detailed';
}

/**
 * ServiceCard Component
 * 
 * A card component for displaying cleaning service information.
 * Supports two variants:
 * - compact: Icon, title, short description (for homepage)
 * - detailed: Icon, title, full description, features list, CTA button (for services page)
 * 
 * Features:
 * - Uses Card component for consistent styling
 * - MaterialIcon for service icons
 * - Responsive layout
 * - Hover effects for interactivity
 * 
 * @example
 * // Compact variant (homepage)
 * <ServiceCard service={service} variant="compact" />
 * 
 * @example
 * // Detailed variant (services page)
 * <ServiceCard service={service} variant="detailed" />
 * 
 * @validates Requirements 2.3 - THE Website SHALL 在首页显示5种服务卡片
 * @validates Requirements 3.4 - THE Service_Card SHALL 显示服务名称、描述、功能列表和 CTA 按钮
 */
export function ServiceCard({
  service,
  variant = 'compact',
}: ServiceCardProps) {
  const isDetailed = variant === 'detailed';

  return (
    <Card
      hover
      className={cn(
        'flex flex-col',
        isDetailed ? 'h-full' : '',
        'border border-gray-100'
      )}
    >
      {/* Icon - Yellow/Gold background matching Figma design */}
      <div
        className={cn(
          'flex items-center justify-center',
          'w-14 h-14 rounded-md',
          'bg-gold/10',
          'mb-5'
        )}
      >
        <MaterialIcon name={service.icon} size="lg" className="text-gold" />
      </div>

      {/* Title */}
      <h3
        className={cn(
          'font-heading font-bold text-text',
          isDetailed ? 'text-xl mb-3' : 'text-lg mb-2'
        )}
      >
        {service.name}
      </h3>

      {/* Description */}
      <p
        className={cn(
          'text-text-secondary',
          isDetailed ? 'text-base mb-5' : 'text-sm line-clamp-2'
        )}
      >
        {service.description}
      </p>

      {/* Features list - only in detailed variant */}
      {isDetailed && service.features.length > 0 && (
        <ul className="mt-2 mb-6 space-y-3 flex-grow">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-text-secondary"
            >
              <MaterialIcon
                name="check_circle"
                size="sm"
                className="text-gold flex-shrink-0 mt-0.5"
                filled
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Link - styled like Figma design */}
      {isDetailed && (
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Button
            variant="ghost"
            size="md"
            href="/contact"
            className="w-full justify-between text-primary hover:text-primary-600 font-semibold px-0"
            icon="arrow_forward"
          >
            Book {service.name.split(' ')[0]}
          </Button>
        </div>
      )}
    </Card>
  );
}
