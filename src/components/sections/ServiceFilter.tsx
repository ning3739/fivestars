'use client';

import { cn } from '@/lib/utils';
import type { ServiceFilterType } from '@/lib/utils';

/**
 * Filter tab configuration
 */
interface FilterTab {
  value: ServiceFilterType;
  label: string;
}

/**
 * Available filter tabs
 * @see Requirements 3.2 - Provide filter tabs: All Services, Residential, Commercial
 */
const FILTER_TABS: FilterTab[] = [
  { value: 'all', label: 'All Services' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
];

/**
 * ServiceFilter component props
 */
export interface ServiceFilterProps {
  /** Currently active filter */
  activeFilter: ServiceFilterType;
  /** Callback when filter changes */
  onFilterChange: (filter: ServiceFilterType) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Variant styles for filter buttons
 */
const variantClasses = {
  active: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
  inactive: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white',
};

/**
 * ServiceFilter Component
 * 
 * A filter component that displays tabs for filtering services by category.
 * Provides three filter options: All Services, Residential, and Commercial.
 * 
 * Features:
 * - Three filter tabs with visual active state
 * - Accessible button-based navigation
 * - Responsive design
 * - Callback-based state management
 * 
 * @example
 * const [filter, setFilter] = useState<ServiceFilterType>('all');
 * <ServiceFilter activeFilter={filter} onFilterChange={setFilter} />
 * 
 * @validates Requirements 3.2 - THE Website SHALL 提供服务筛选标签(All Services, Residential, Commercial)
 * @validates Requirements 3.3 - WHEN 用户点击筛选标签 THEN THE Website SHALL 过滤显示对应类别的服务卡片
 */
export function ServiceFilter({
  activeFilter,
  onFilterChange,
  className,
}: ServiceFilterProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap justify-center gap-2 sm:gap-4',
        className
      )}
      role="tablist"
      aria-label="Service category filter"
    >
      {FILTER_TABS.map((tab) => {
        const isActive = activeFilter === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            onClick={() => onFilterChange(tab.value)}
            className={cn(
              // Base styles
              'inline-flex items-center justify-center gap-2',
              'font-medium rounded-lg',
              'px-6 py-3 text-base min-h-11 min-w-11',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              // Variant styles
              isActive ? variantClasses.active : variantClasses.inactive,
              !isActive && 'hover:bg-primary-50'
            )}
            aria-selected={isActive}
            aria-controls="services-grid"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default ServiceFilter;
