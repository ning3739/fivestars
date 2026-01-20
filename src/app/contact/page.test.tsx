/**
 * Contact Page Tests
 * 
 * Tests for the contact page to verify all sections are rendered correctly.
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactPage from './page';

describe('Contact Page', () => {
  describe('Page Structure', () => {
    it('renders the main element', () => {
      render(<ContactPage />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('Hero Section', () => {
    it('renders the hero section with page variant', () => {
      render(<ContactPage />);
      const heroSection = screen.getByTestId('hero-section');
      expect(heroSection).toBeInTheDocument();
      expect(heroSection).toHaveAttribute('data-variant', 'page');
    });

    it('renders the hero title', () => {
      render(<ContactPage />);
      const title = screen.getByTestId('hero-title');
      expect(title).toHaveTextContent('Contact FiveStarsCleaning');
    });

    it('renders the hero description', () => {
      render(<ContactPage />);
      const description = screen.getByTestId('hero-description');
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent('Premium cleaning services tailored to your space');
    });
  });

  describe('Contact Information Section', () => {
    it('renders the contact info section', () => {
      render(<ContactPage />);
      const contactSection = screen.getByTestId('contact-info-section');
      expect(contactSection).toBeInTheDocument();
    });

    it('renders the GET IN TOUCH badge', () => {
      render(<ContactPage />);
      expect(screen.getByText('GET IN TOUCH')).toBeInTheDocument();
    });

    it('renders the We are here to help heading', () => {
      render(<ContactPage />);
      expect(screen.getByText("We're here to help.")).toBeInTheDocument();
    });

    it('renders contact info cards container', () => {
      render(<ContactPage />);
      const cardsContainer = screen.getByTestId('contact-info-cards');
      expect(cardsContainer).toBeInTheDocument();
    });

    it('renders phone contact information', () => {
      render(<ContactPage />);
      const cardsContainer = screen.getByTestId('contact-info-cards');
      expect(cardsContainer).toHaveTextContent('PHONE');
      expect(cardsContainer).toHaveTextContent('+64 22 503 0102');
    });

    it('renders phone link with correct href', () => {
      render(<ContactPage />);
      const phoneLink = screen.getByTestId('contact-phone-link');
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute('href', 'tel:+64225030102');
    });

    it('renders email contact information', () => {
      render(<ContactPage />);
      const cardsContainer = screen.getByTestId('contact-info-cards');
      expect(cardsContainer).toHaveTextContent('EMAIL');
      expect(cardsContainer).toHaveTextContent('info@fivestarscleaning.co.nz');
    });

    it('renders email link with correct href', () => {
      render(<ContactPage />);
      const emailLink = screen.getByTestId('contact-email-link');
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', 'mailto:info@fivestarscleaning.co.nz');
    });

    it('renders headquarters information', () => {
      render(<ContactPage />);
      const cardsContainer = screen.getByTestId('contact-info-cards');
      expect(cardsContainer).toHaveTextContent('HEADQUARTERS');
      expect(cardsContainer).toHaveTextContent('Queenstown Central');
    });

    it('renders all 3 contact info items', () => {
      render(<ContactPage />);
      const cardsContainer = screen.getByTestId('contact-info-cards');
      expect(cardsContainer.children.length).toBe(3);
    });
  });

  describe('Contact Form Section', () => {
    it('renders the Send us a message heading', () => {
      render(<ContactPage />);
      expect(screen.getByText('Send us a message')).toBeInTheDocument();
    });

    it('renders the contact form', () => {
      render(<ContactPage />);
      const contactForm = screen.getByTestId('contact-form');
      expect(contactForm).toBeInTheDocument();
    });
  });

  describe('Service Areas Section', () => {
    it('renders the service areas section', () => {
      render(<ContactPage />);
      const serviceAreasSection = screen.getByTestId('service-areas-section');
      expect(serviceAreasSection).toBeInTheDocument();
    });

    it('renders the Service Area heading', () => {
      render(<ContactPage />);
      expect(screen.getByText('Service Area')).toBeInTheDocument();
    });

    it('renders service areas list', () => {
      render(<ContactPage />);
      const areasList = screen.getByTestId('service-areas-list');
      expect(areasList).toBeInTheDocument();
    });

    it('renders Queenstown Central in service areas', () => {
      render(<ContactPage />);
      const areasList = screen.getByTestId('service-areas-list');
      expect(areasList).toHaveTextContent('Queenstown Central');
    });

    it('renders Frankton in service areas', () => {
      render(<ContactPage />);
      const areasList = screen.getByTestId('service-areas-list');
      expect(areasList).toHaveTextContent('Frankton');
    });

    it('renders multiple service areas', () => {
      render(<ContactPage />);
      const areasList = screen.getByTestId('service-areas-list');
      expect(areasList).toHaveTextContent('Arrowtown');
      expect(areasList).toHaveTextContent('Kelvin Heights');
    });

    it('renders all 4 service areas', () => {
      render(<ContactPage />);
      const areasList = screen.getByTestId('service-areas-list');
      expect(areasList.children.length).toBe(4);
    });

    it('renders Greater Queenstown Region text', () => {
      render(<ContactPage />);
      expect(screen.getByText('Greater Queenstown Region')).toBeInTheDocument();
    });

    it('renders active status indicator', () => {
      render(<ContactPage />);
      expect(screen.getByText('Active in your area now')).toBeInTheDocument();
    });
  });

  describe('Section Order', () => {
    it('renders sections in the correct order', () => {
      render(<ContactPage />);
      const main = screen.getByRole('main');
      const sections = main.querySelectorAll('section');
      
      expect(sections.length).toBe(3);
      
      const sectionIds = Array.from(sections).map(s => s.getAttribute('data-testid'));
      
      expect(sectionIds[0]).toBe('hero-section');
      expect(sectionIds[1]).toBe('contact-info-section');
      expect(sectionIds[2]).toBe('service-areas-section');
    });
  });

  describe('Responsive Layout', () => {
    it('renders contact info section with responsive grid', () => {
      render(<ContactPage />);
      const contactSection = screen.getByTestId('contact-info-section');
      const grid = contactSection.querySelector('.grid');
      
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('lg:grid-cols-2');
    });
  });

  describe('Accessibility', () => {
    it('renders contact links with accessible text', () => {
      render(<ContactPage />);
      
      const phoneLink = screen.getByTestId('contact-phone-link');
      const emailLink = screen.getByTestId('contact-email-link');
      
      expect(phoneLink).toHaveTextContent('+64 22 503 0102');
      expect(emailLink).toHaveTextContent('info@fivestarscleaning.co.nz');
    });

    it('renders headings in correct hierarchy', () => {
      render(<ContactPage />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Contact FiveStarsCleaning');
      
      const h2Headings = screen.getAllByRole('heading', { level: 2 });
      expect(h2Headings.length).toBeGreaterThanOrEqual(2);
    });
  });
});
