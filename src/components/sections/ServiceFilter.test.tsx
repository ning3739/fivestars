import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ServiceFilter } from './ServiceFilter';
import type { ServiceFilterType } from '@/lib/utils';

describe('ServiceFilter', () => {
  const mockOnFilterChange = vi.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  describe('Rendering', () => {
    /**
     * @validates Requirements 3.2 - THE Website SHALL 提供服务筛选标签(All Services, Residential, Commercial)
     */
    it('renders all three filter tabs', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      expect(screen.getByText('All Services')).toBeInTheDocument();
      expect(screen.getByText('Residential')).toBeInTheDocument();
      expect(screen.getByText('Commercial')).toBeInTheDocument();
    });

    it('renders as a tablist for accessibility', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('renders three buttons', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(3);
    });

    it('applies custom className', () => {
      render(
        <ServiceFilter 
          activeFilter="all" 
          onFilterChange={mockOnFilterChange}
          className="custom-class"
        />
      );
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveClass('custom-class');
    });
  });

  describe('Active State', () => {
    it('shows "All Services" as active when activeFilter is "all"', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      const allButton = screen.getByText('All Services').closest('button');
      expect(allButton).toHaveClass('bg-primary');
      expect(allButton).toHaveAttribute('aria-selected', 'true');
    });

    it('shows "Residential" as active when activeFilter is "residential"', () => {
      render(
        <ServiceFilter activeFilter="residential" onFilterChange={mockOnFilterChange} />
      );
      
      const residentialButton = screen.getByText('Residential').closest('button');
      expect(residentialButton).toHaveClass('bg-primary');
      expect(residentialButton).toHaveAttribute('aria-selected', 'true');
    });

    it('shows "Commercial" as active when activeFilter is "commercial"', () => {
      render(
        <ServiceFilter activeFilter="commercial" onFilterChange={mockOnFilterChange} />
      );
      
      const commercialButton = screen.getByText('Commercial').closest('button');
      expect(commercialButton).toHaveClass('bg-primary');
      expect(commercialButton).toHaveAttribute('aria-selected', 'true');
    });

    it('shows inactive tabs with outline variant', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      const residentialButton = screen.getByText('Residential').closest('button');
      const commercialButton = screen.getByText('Commercial').closest('button');
      
      expect(residentialButton).toHaveClass('border-primary');
      expect(residentialButton).toHaveAttribute('aria-selected', 'false');
      expect(commercialButton).toHaveClass('border-primary');
      expect(commercialButton).toHaveAttribute('aria-selected', 'false');
    });
  });

  describe('Interactions', () => {
    /**
     * @validates Requirements 3.3 - WHEN 用户点击筛选标签 THEN THE Website SHALL 过滤显示对应类别的服务卡片
     */
    it('calls onFilterChange with "all" when All Services is clicked', () => {
      render(
        <ServiceFilter activeFilter="residential" onFilterChange={mockOnFilterChange} />
      );
      
      fireEvent.click(screen.getByText('All Services'));
      expect(mockOnFilterChange).toHaveBeenCalledWith('all');
      expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
    });

    it('calls onFilterChange with "residential" when Residential is clicked', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      fireEvent.click(screen.getByText('Residential'));
      expect(mockOnFilterChange).toHaveBeenCalledWith('residential');
      expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
    });

    it('calls onFilterChange with "commercial" when Commercial is clicked', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      fireEvent.click(screen.getByText('Commercial'));
      expect(mockOnFilterChange).toHaveBeenCalledWith('commercial');
      expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
    });

    it('calls onFilterChange even when clicking the already active filter', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      fireEvent.click(screen.getByText('All Services'));
      expect(mockOnFilterChange).toHaveBeenCalledWith('all');
    });
  });

  describe('Accessibility', () => {
    it('has aria-label on the tablist', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('aria-label', 'Service category filter');
    });

    it('has aria-controls on each tab', () => {
      render(
        <ServiceFilter activeFilter="all" onFilterChange={mockOnFilterChange} />
      );
      
      const tabs = screen.getAllByRole('tab');
      tabs.forEach(tab => {
        expect(tab).toHaveAttribute('aria-controls', 'services-grid');
      });
    });

    it('correctly sets aria-selected based on active state', () => {
      render(
        <ServiceFilter activeFilter="residential" onFilterChange={mockOnFilterChange} />
      );
      
      const allButton = screen.getByText('All Services').closest('button');
      const residentialButton = screen.getByText('Residential').closest('button');
      const commercialButton = screen.getByText('Commercial').closest('button');
      
      expect(allButton).toHaveAttribute('aria-selected', 'false');
      expect(residentialButton).toHaveAttribute('aria-selected', 'true');
      expect(commercialButton).toHaveAttribute('aria-selected', 'false');
    });
  });

  describe('Filter Types', () => {
    const filterTypes: ServiceFilterType[] = ['all', 'residential', 'commercial'];
    
    filterTypes.forEach(filterType => {
      it(`correctly handles activeFilter="${filterType}"`, () => {
        render(
          <ServiceFilter activeFilter={filterType} onFilterChange={mockOnFilterChange} />
        );
        
        // Should render without errors
        expect(screen.getByRole('tablist')).toBeInTheDocument();
      });
    });
  });
});
