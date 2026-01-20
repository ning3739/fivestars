import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Service } from '@/types';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes with tailwind-merge for deduplication
 * 
 * @param inputs - Class values to merge
 * @returns Merged class string
 * 
 * @example
 * cn('px-4 py-2', 'bg-blue-500', isActive && 'bg-blue-700')
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Filter type for service filtering
 * 'all' - Show all services
 * 'residential' - Show only residential services
 * 'commercial' - Show only commercial services
 */
export type ServiceFilterType = 'all' | 'residential' | 'commercial';

/**
 * Filter services by category
 * 
 * A pure function that filters a list of services based on the selected category.
 * When 'all' is selected, returns all services unchanged.
 * When a specific category is selected, returns only services matching that category.
 * 
 * @param services - Array of services to filter
 * @param filter - Filter type: 'all', 'residential', or 'commercial'
 * @returns Filtered array of services
 * 
 * @example
 * // Get all services
 * filterServices(services, 'all')
 * 
 * @example
 * // Get only residential services
 * filterServices(services, 'residential')
 * 
 * @validates Requirements 3.2, 3.3 - Service filtering functionality
 */
export function filterServices(services: Service[], filter: ServiceFilterType): Service[] {
  if (filter === 'all') {
    return services;
  }
  return services.filter(service => service.category === filter);
}
