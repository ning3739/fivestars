/**
 * Home Page Tests
 * 
 * Tests for the main landing page to verify all sections are rendered correctly.
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  describe('Page Structure', () => {
    it('renders the main element', () => {
      render(<Home />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('Hero Section', () => {
    it('renders the hero section with home variant', () => {
      render(<Home />);
      const heroSection = screen.getByTestId('hero-section');
      expect(heroSection).toBeInTheDocument();
      expect(heroSection).toHaveAttribute('data-variant', 'home');
    });

    it('renders the hero title', () => {
      render(<Home />);
      const title = screen.getByTestId('hero-title');
      expect(title).toHaveTextContent('Professional Cleaning Services for New Zealand Homes');
    });

    it('renders the hero subtitle', () => {
      render(<Home />);
      const subtitle = screen.getByTestId('hero-subtitle');
      expect(subtitle).toHaveTextContent('A PREMIUM CLEANING EXPERIENCE');
    });

    it('renders the hero description', () => {
      render(<Home />);
      const description = screen.getByTestId('hero-description');
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent("Queenstown's most trusted cleaning professionals");
    });

    it('renders the primary CTA button', () => {
      render(<Home />);
      const ctaButton = screen.getByRole('link', { name: /get your free quote/i });
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton).toHaveAttribute('href', '/contact');
    });

    it('renders the secondary CTA button with phone number', () => {
      render(<Home />);
      // Phone number is displayed somewhere on the page
      const phoneElements = screen.getAllByText(/\+64/);
      expect(phoneElements.length).toBeGreaterThan(0);
    });

    it('renders trust badges', () => {
      render(<Home />);
      const badgesContainer = screen.getByTestId('hero-badges-container');
      expect(badgesContainer).toBeInTheDocument();
      
      expect(badgesContainer).toHaveTextContent('Fully Insured');
      expect(badgesContainer).toHaveTextContent('100% Satisfaction');
      expect(badgesContainer).toHaveTextContent('Eco-Friendly');
    });
  });

  describe('ProcessSteps Section', () => {
    it('renders the process steps section', () => {
      render(<Home />);
      const processSection = screen.getByTestId('process-steps-section');
      expect(processSection).toBeInTheDocument();
    });

    it('renders all 3 process steps', () => {
      render(<Home />);
      expect(screen.getByTestId('process-step-1')).toBeInTheDocument();
      expect(screen.getByTestId('process-step-2')).toBeInTheDocument();
      expect(screen.getByTestId('process-step-3')).toBeInTheDocument();
    });

    it('renders step titles: Book Online, We Clean, Enjoy', () => {
      render(<Home />);
      expect(screen.getByText('Book Online')).toBeInTheDocument();
      expect(screen.getByText('We Clean')).toBeInTheDocument();
      expect(screen.getByText('Enjoy')).toBeInTheDocument();
    });
  });

  describe('ServicesSection', () => {
    it('renders the services section', () => {
      render(<Home />);
      const servicesSection = screen.getByTestId('services-section');
      expect(servicesSection).toBeInTheDocument();
    });

    it('renders service cards', () => {
      render(<Home />);
      // Services are rendered on the page
      expect(screen.getAllByText(/Cleaning/).length).toBeGreaterThan(0);
    });
  });

  describe('WhyUsSection', () => {
    it('renders the why us section', () => {
      render(<Home />);
      const whyUsSection = screen.getByTestId('why-us-section');
      expect(whyUsSection).toBeInTheDocument();
    });

    it('renders all 6 company features', () => {
      render(<Home />);
      const whyUsGrid = screen.getByTestId('why-us-grid');
      expect(whyUsGrid).toHaveTextContent('Fully Insured');
      expect(whyUsGrid).toHaveTextContent('Experienced Team');
      expect(whyUsGrid).toHaveTextContent('Reliability');
      expect(whyUsGrid).toHaveTextContent('Consistent Quality');
      expect(whyUsGrid).toHaveTextContent('Eco-Friendly');
      expect(whyUsGrid).toHaveTextContent('Trusted Local');
    });
  });

  describe('Testimonials Section', () => {
    it('renders the testimonials section', () => {
      render(<Home />);
      const testimonialsSection = screen.getByTestId('testimonials-section');
      expect(testimonialsSection).toBeInTheDocument();
    });

    it('renders all 3 customer testimonials', () => {
      render(<Home />);
      const testimonialsGrid = screen.getByTestId('testimonials-grid');
      expect(testimonialsGrid).toHaveTextContent('Sarah Mitchell');
      expect(testimonialsGrid).toHaveTextContent('James Chen');
      expect(testimonialsGrid).toHaveTextContent('Emma Thompson');
    });
  });

  describe('Stats Section', () => {
    it('renders the stats section', () => {
      render(<Home />);
      const statsSection = screen.getByTestId('stats-section');
      expect(statsSection).toBeInTheDocument();
    });

    it('renders all 3 statistics', () => {
      render(<Home />);
      expect(screen.getByText('5k+')).toBeInTheDocument();
      expect(screen.getByText('98%')).toBeInTheDocument();
      expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('renders stat labels', () => {
      render(<Home />);
      expect(screen.getByText('Homes Cleaned')).toBeInTheDocument();
      expect(screen.getByText('Client Retention')).toBeInTheDocument();
      expect(screen.getByText('Satisfaction')).toBeInTheDocument();
    });
  });

  describe('Contact Form Section', () => {
    it('renders the contact section', () => {
      render(<Home />);
      const contactSection = screen.getByTestId('contact-section');
      expect(contactSection).toBeInTheDocument();
    });

    it('renders the contact form', () => {
      render(<Home />);
      const contactForm = screen.getByTestId('contact-form');
      expect(contactForm).toBeInTheDocument();
    });

    it('renders the section title', () => {
      render(<Home />);
      expect(screen.getByText('Get a Free Quote')).toBeInTheDocument();
    });

    it('renders all form fields', () => {
      render(<Home />);
      expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Service Type/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });
  });

  describe('Section Order', () => {
    it('renders sections in the correct order', () => {
      render(<Home />);
      const main = screen.getByRole('main');
      const sections = main.querySelectorAll('section');
      
      expect(sections.length).toBeGreaterThanOrEqual(7);
      
      const sectionIds = Array.from(sections).map(s => s.getAttribute('data-testid'));
      
      expect(sectionIds[0]).toBe('hero-section');
      expect(sectionIds[1]).toBe('process-steps-section');
      expect(sectionIds[2]).toBe('services-section');
      expect(sectionIds[3]).toBe('why-us-section');
      expect(sectionIds[4]).toBe('testimonials-section');
      expect(sectionIds[5]).toBe('stats-section');
      expect(sectionIds[6]).toBe('contact-section');
    });
  });
});
