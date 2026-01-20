import { describe, it, expect } from 'vitest';
import { cn, filterServices, type ServiceFilterType } from './utils';
import type { Service } from '@/types';

describe('cn (className utility)', () => {
  it('merges class names correctly', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', true && 'active')).toBe('base active');
    expect(cn('base', false && 'active')).toBe('base');
  });

  it('deduplicates Tailwind classes', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });
});

describe('filterServices', () => {
  // Sample test data
  const mockServices: Service[] = [
    {
      id: 'residential-1',
      name: 'Residential Cleaning',
      description: 'Home cleaning service',
      icon: 'home',
      features: ['Feature 1'],
      category: 'residential',
    },
    {
      id: 'residential-2',
      name: 'Deep Cleaning',
      description: 'Deep cleaning service',
      icon: 'cleaning_services',
      features: ['Feature 1'],
      category: 'residential',
    },
    {
      id: 'commercial-1',
      name: 'Commercial Cleaning',
      description: 'Office cleaning service',
      icon: 'business',
      features: ['Feature 1'],
      category: 'commercial',
    },
    {
      id: 'commercial-2',
      name: 'Airbnb Turnover',
      description: 'Airbnb cleaning service',
      icon: 'hotel',
      features: ['Feature 1'],
      category: 'commercial',
    },
  ];

  describe('Filter: all', () => {
    /**
     * @validates Requirements 3.2, 3.3 - Service filtering functionality
     */
    it('returns all services when filter is "all"', () => {
      const result = filterServices(mockServices, 'all');
      expect(result).toHaveLength(4);
      expect(result).toEqual(mockServices);
    });

    it('returns empty array when input is empty and filter is "all"', () => {
      const result = filterServices([], 'all');
      expect(result).toHaveLength(0);
      expect(result).toEqual([]);
    });
  });

  describe('Filter: residential', () => {
    /**
     * @validates Requirements 3.2, 3.3 - Service filtering functionality
     */
    it('returns only residential services when filter is "residential"', () => {
      const result = filterServices(mockServices, 'residential');
      expect(result).toHaveLength(2);
      expect(result.every(s => s.category === 'residential')).toBe(true);
    });

    it('returns correct residential services', () => {
      const result = filterServices(mockServices, 'residential');
      expect(result.map(s => s.id)).toEqual(['residential-1', 'residential-2']);
    });

    it('returns empty array when no residential services exist', () => {
      const commercialOnly: Service[] = mockServices.filter(s => s.category === 'commercial');
      const result = filterServices(commercialOnly, 'residential');
      expect(result).toHaveLength(0);
    });
  });

  describe('Filter: commercial', () => {
    /**
     * @validates Requirements 3.2, 3.3 - Service filtering functionality
     */
    it('returns only commercial services when filter is "commercial"', () => {
      const result = filterServices(mockServices, 'commercial');
      expect(result).toHaveLength(2);
      expect(result.every(s => s.category === 'commercial')).toBe(true);
    });

    it('returns correct commercial services', () => {
      const result = filterServices(mockServices, 'commercial');
      expect(result.map(s => s.id)).toEqual(['commercial-1', 'commercial-2']);
    });

    it('returns empty array when no commercial services exist', () => {
      const residentialOnly: Service[] = mockServices.filter(s => s.category === 'residential');
      const result = filterServices(residentialOnly, 'commercial');
      expect(result).toHaveLength(0);
    });
  });

  describe('Edge cases', () => {
    it('handles empty services array', () => {
      expect(filterServices([], 'all')).toEqual([]);
      expect(filterServices([], 'residential')).toEqual([]);
      expect(filterServices([], 'commercial')).toEqual([]);
    });

    it('does not mutate the original array', () => {
      const original = [...mockServices];
      filterServices(mockServices, 'residential');
      expect(mockServices).toEqual(original);
    });

    it('returns the same array reference when filter is "all" (performance optimization)', () => {
      const result = filterServices(mockServices, 'all');
      expect(result).toBe(mockServices);
    });

    it('returns a new array reference when filtering by category', () => {
      const resultResidential = filterServices(mockServices, 'residential');
      const resultCommercial = filterServices(mockServices, 'commercial');
      expect(resultResidential).not.toBe(mockServices);
      expect(resultCommercial).not.toBe(mockServices);
    });

    it('preserves service object references', () => {
      const result = filterServices(mockServices, 'residential');
      expect(result[0]).toBe(mockServices[0]);
    });
  });

  describe('Completeness', () => {
    /**
     * @validates Requirements 3.3 - Filter should not miss any services of the selected category
     */
    it('does not miss any residential services', () => {
      const result = filterServices(mockServices, 'residential');
      const expectedResidential = mockServices.filter(s => s.category === 'residential');
      expect(result).toHaveLength(expectedResidential.length);
      expectedResidential.forEach(service => {
        expect(result).toContainEqual(service);
      });
    });

    it('does not miss any commercial services', () => {
      const result = filterServices(mockServices, 'commercial');
      const expectedCommercial = mockServices.filter(s => s.category === 'commercial');
      expect(result).toHaveLength(expectedCommercial.length);
      expectedCommercial.forEach(service => {
        expect(result).toContainEqual(service);
      });
    });
  });
});
