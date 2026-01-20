/**
 * Services Page Tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ServicesPage from './page';

describe('Services Page', () => {
  describe('Page Structure', () => {
    it('renders the main element', () => {
      render(<ServicesPage />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('Hero Section', () => {
    it('renders the hero section with page variant', () => {
      render(<ServicesPage />);
      const heroSection = screen.getByTestId('hero-section');
      expect(heroSection).toBeInTheDocument();
      expect(heroSection).toHaveAttribute('data-variant', 'page');
    });

    it('renders the hero title', () => {
      render(<ServicesPage />);
      const title = screen.getByTestId('hero-title');
      expect(title).toHaveTextContent('Our Professional Cleaning Services');
    });

    it('renders the hero description', () => {
      render(<ServicesPage />);
      const description = screen.getByTestId('hero-description');
      expect(description).toBeInTheDocument();
    });
  });

  describe('Service Filter', () => {
    it('renders the service filter section', () => {
      render(<ServicesPage />);
      const filterSection = screen.getByTestId('services-filter-section');
      expect(filterSection).toBeInTheDocument();
    });

    it('renders all filter buttons', () => {
      render(<ServicesPage />);
      expect(screen.getByRole('button', { name: 'All Services' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Residential' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Commercial' })).toBeInTheDocument();
    });
  });

  describe('Service Filtering', () => {
    it('shows services when "All Services" is selected', () => {
      render(<ServicesPage />);
      const servicesGrid = screen.getByTestId('services-grid');
      
      expect(servicesGrid).toHaveTextContent('Residential Cleaning');
      expect(servicesGrid).toHaveTextContent('Commercial Cleaning');
      expect(servicesGrid).toHaveTextContent('Airbnb Turnover');
    });

    it('filters to show only residential services when "Residential" is clicked', () => {
      render(<ServicesPage />);
      
      const residentialButton = screen.getByRole('button', { name: 'Residential' });
      fireEvent.click(residentialButton);
      
      const servicesGrid = screen.getByTestId('services-grid');
      
      expect(servicesGrid).toHaveTextContent('Residential Cleaning');
      expect(servicesGrid).toHaveTextContent('Deep Cleaning');
      expect(servicesGrid).not.toHaveTextContent('Commercial Cleaning');
    });

    it('filters to show only commercial services when "Commercial" is clicked', () => {
      render(<ServicesPage />);
      
      const commercialButton = screen.getByRole('button', { name: 'Commercial' });
      fireEvent.click(commercialButton);
      
      const servicesGrid = screen.getByTestId('services-grid');
      
      expect(servicesGrid).toHaveTextContent('Commercial Cleaning');
      expect(servicesGrid).toHaveTextContent('Airbnb Turnover');
      expect(servicesGrid).not.toHaveTextContent('Residential Cleaning');
    });
  });

  describe('Service Cards', () => {
    it('renders service names', () => {
      render(<ServicesPage />);
      
      expect(screen.getByText('Residential Cleaning')).toBeInTheDocument();
      expect(screen.getByText('Commercial Cleaning')).toBeInTheDocument();
      expect(screen.getByText('Airbnb Turnover')).toBeInTheDocument();
    });

    it('renders service descriptions', () => {
      render(<ServicesPage />);
      
      expect(screen.getByText(/Professional home cleaning services/)).toBeInTheDocument();
    });
  });

  describe('CTA Section', () => {
    it('renders the CTA section', () => {
      render(<ServicesPage />);
      const ctaSection = screen.getByTestId('services-cta-section');
      expect(ctaSection).toBeInTheDocument();
    });

    it('renders the CTA title', () => {
      render(<ServicesPage />);
      expect(screen.getByText('Ready for a spotless space?')).toBeInTheDocument();
    });

    it('renders the primary CTA button', () => {
      render(<ServicesPage />);
      const ctaSection = screen.getByTestId('services-cta-section');
      const ctaButton = ctaSection.querySelector('a[href="/contact"]');
      expect(ctaButton).toBeInTheDocument();
    });
  });

  describe('Section Order', () => {
    it('renders sections in the correct order', () => {
      render(<ServicesPage />);
      const main = screen.getByRole('main');
      const sections = main.querySelectorAll('section');
      
      expect(sections.length).toBe(3);
      
      const sectionIds = Array.from(sections).map(s => s.getAttribute('data-testid'));
      
      expect(sectionIds[0]).toBe('hero-section');
      expect(sectionIds[1]).toBe('services-filter-section');
      expect(sectionIds[2]).toBe('services-cta-section');
    });
  });

  describe('Responsive Grid', () => {
    it('renders services grid with responsive classes', () => {
      render(<ServicesPage />);
      const servicesGrid = screen.getByTestId('services-grid');
      
      expect(servicesGrid).toHaveClass('grid');
      expect(servicesGrid).toHaveClass('grid-cols-1');
      expect(servicesGrid).toHaveClass('lg:grid-cols-3');
    });
  });
});
