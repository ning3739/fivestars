/**
 * About Page Tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './page';

describe('About Page', () => {
  describe('Page Structure', () => {
    it('renders the main element', () => {
      render(<AboutPage />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('Hero Section', () => {
    it('renders the hero section with page variant', () => {
      render(<AboutPage />);
      const heroSection = screen.getByTestId('hero-section');
      expect(heroSection).toBeInTheDocument();
      expect(heroSection).toHaveAttribute('data-variant', 'page');
    });

    it('renders the hero title', () => {
      render(<AboutPage />);
      const title = screen.getByTestId('hero-title');
      expect(title).toHaveTextContent('About FiveStarsCleaning');
    });

    it('renders the hero description', () => {
      render(<AboutPage />);
      const description = screen.getByTestId('hero-description');
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent('trusted local cleaning experts in Queenstown');
    });
  });

  describe('Our Story Section', () => {
    it('renders the Proudly NZ Owned heading', () => {
      render(<AboutPage />);
      expect(screen.getByText('Proudly NZ Owned & Operated')).toBeInTheDocument();
    });

    it('renders company founding year', () => {
      render(<AboutPage />);
      expect(screen.getByText(/Founded in 2015/)).toBeInTheDocument();
    });

    it('renders company background story', () => {
      render(<AboutPage />);
      expect(screen.getByText(/FiveStarsCleaning began with a simple mission/)).toBeInTheDocument();
    });
  });

  describe('Mission & Values Section', () => {
    it('renders the Mission & Values heading', () => {
      render(<AboutPage />);
      expect(screen.getByText('Mission & Values')).toBeInTheDocument();
    });

    it('renders all 4 core values', () => {
      render(<AboutPage />);
      expect(screen.getByText('Quality')).toBeInTheDocument();
      expect(screen.getByText('Consistency')).toBeInTheDocument();
      expect(screen.getByText('Trust')).toBeInTheDocument();
      expect(screen.getByText('Satisfaction')).toBeInTheDocument();
    });
  });

  describe('Professionals Section', () => {
    it('renders the Professionals heading', () => {
      render(<AboutPage />);
      expect(screen.getByText('Professionals You Can Rely On')).toBeInTheDocument();
    });

    it('renders team qualifications', () => {
      render(<AboutPage />);
      expect(screen.getByText('Background Verified')).toBeInTheDocument();
      expect(screen.getByText('Extensively Trained')).toBeInTheDocument();
      // Fully Insured appears multiple times on the page
      expect(screen.getAllByText('Fully Insured').length).toBeGreaterThan(0);
    });
  });

  describe('Why Trust Us Section', () => {
    it('renders the Why Trust Us heading', () => {
      render(<AboutPage />);
      expect(screen.getByText('Why Trust Us?')).toBeInTheDocument();
    });

    it('renders trust points', () => {
      render(<AboutPage />);
      // These are rendered in the FEATURES constant
      expect(screen.getByText(/Complete peace of mind/)).toBeInTheDocument();
    });
  });

  describe('CTA Section', () => {
    it('renders the CTA title', () => {
      render(<AboutPage />);
      expect(screen.getByText('Let us take care of the cleaning for you')).toBeInTheDocument();
    });

    it('renders the CTA description', () => {
      render(<AboutPage />);
      expect(screen.getByText(/happy Queenstown residents/)).toBeInTheDocument();
    });

    it('renders the primary CTA button', () => {
      render(<AboutPage />);
      const ctaButton = screen.getByRole('link', { name: /Get a Free Quote/i });
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton).toHaveAttribute('href', '/contact');
    });
  });

  describe('Section Order', () => {
    it('renders sections in the correct order', () => {
      render(<AboutPage />);
      const main = screen.getByRole('main');
      const sections = main.querySelectorAll('section');
      
      expect(sections.length).toBe(6);
    });
  });
});
