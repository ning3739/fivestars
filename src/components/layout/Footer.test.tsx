import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS, COMPANY_INFO } from '@/lib/constants';

describe('Footer', () => {
  describe('Rendering', () => {
    it('renders the footer element', () => {
      render(<Footer />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('renders the company logo', () => {
      render(<Footer />);
      expect(screen.getByText('FiveStars')).toBeInTheDocument();
    });

    it('renders the logo as a link to home', () => {
      render(<Footer />);
      const logoLink = screen.getByText('FiveStars').closest('a');
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('renders the company description', () => {
      render(<Footer />);
      expect(screen.getByText(/Professional cleaning services for Queenstown/)).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('renders all navigation links', () => {
      render(<Footer />);
      NAV_LINKS.forEach((link) => {
        const navLinks = screen.getAllByRole('link', { name: link.label });
        expect(navLinks.length).toBeGreaterThan(0);
      });
    });

    it('renders Services section heading', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument();
    });

    it('renders Company section heading', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument();
    });
  });

  describe('Contact Information', () => {
    it('renders Contact section heading', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
    });

    it('renders phone number as a clickable link', () => {
      render(<Footer />);
      const phoneLinks = screen.getAllByRole('link', { name: new RegExp(CONTACT_INFO.phone.replace(/[+]/g, '\\+')) });
      expect(phoneLinks.length).toBeGreaterThan(0);
    });

    it('renders email as a clickable link', () => {
      render(<Footer />);
      const emailLinks = screen.getAllByRole('link', { name: new RegExp(CONTACT_INFO.email) });
      expect(emailLinks.length).toBeGreaterThan(0);
    });

    it('renders the location', () => {
      render(<Footer />);
      expect(screen.getByText('Queenstown, NZ')).toBeInTheDocument();
    });
  });

  describe('Social Media Links', () => {
    it('renders all social media links', () => {
      render(<Footer />);
      SOCIAL_LINKS.forEach((social) => {
        const socialLink = screen.getByRole('link', { name: social.name });
        expect(socialLink).toBeInTheDocument();
        expect(socialLink).toHaveAttribute('href', social.href);
      });
    });

    it('social media links open in new tab', () => {
      render(<Footer />);
      SOCIAL_LINKS.forEach((social) => {
        const socialLink = screen.getByRole('link', { name: social.name });
        expect(socialLink).toHaveAttribute('target', '_blank');
        expect(socialLink).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  describe('Copyright Information', () => {
    it('renders copyright text with current year', () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
    });

    it('renders company name in copyright', () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(`© ${currentYear} ${COMPANY_INFO.name}. All rights reserved.`)).toBeInTheDocument();
    });
  });

  describe('Custom className', () => {
    it('applies custom className to footer element', () => {
      render(<Footer className="custom-class" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('custom-class');
    });
  });

  describe('Styling', () => {
    it('has dark background color', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('bg-[#0f2744]');
    });

    it('has white text color', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('text-white');
    });
  });

  describe('Accessibility', () => {
    it('uses footer element for semantic structure', () => {
      render(<Footer />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('social media links have accessible labels', () => {
      render(<Footer />);
      SOCIAL_LINKS.forEach((social) => {
        const socialLink = screen.getByRole('link', { name: social.name });
        expect(socialLink).toHaveAttribute('aria-label', social.name);
      });
    });
  });

  describe('Responsive Layout', () => {
    it('has responsive grid classes', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      const gridContainer = footer.querySelector('.grid');
      expect(gridContainer).toHaveClass('grid-cols-2');
      expect(gridContainer).toHaveClass('md:grid-cols-4');
    });
  });
});
