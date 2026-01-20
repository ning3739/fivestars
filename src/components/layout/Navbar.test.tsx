import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

// Import the mocked module
import { usePathname } from 'next/navigation';

describe('Navbar', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/');
    // Reset body overflow style
    document.body.style.overflow = '';
  });

  afterEach(() => {
    // Clean up body overflow style after each test
    document.body.style.overflow = '';
  });

  describe('Rendering', () => {
    /**
     * @validates Requirements 1.1 - Navigation bar with Logo
     */
    it('renders the company logo', () => {
      render(<Navbar />);
      expect(screen.getByText(COMPANY_INFO.name)).toBeInTheDocument();
    });

    it('renders the logo as a link to home', () => {
      render(<Navbar />);
      const logoLink = screen.getByText(COMPANY_INFO.name).closest('a');
      expect(logoLink).toHaveAttribute('href', '/');
    });

    /**
     * @validates Requirements 1.1 - Navigation bar with navigation links
     */
    it('renders all navigation links in desktop menu', () => {
      render(<Navbar />);
      // Desktop navigation links are in the hidden md:flex container
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      NAV_LINKS.forEach((link) => {
        const navLink = desktopNav?.querySelector(`a[href="${link.href}"]`);
        expect(navLink).toBeInTheDocument();
        expect(navLink).toHaveTextContent(link.label);
      });
    });

    it('renders navigation links with correct hrefs', () => {
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      NAV_LINKS.forEach((link) => {
        const navLink = desktopNav?.querySelector(`a[href="${link.href}"]`);
        expect(navLink).toHaveAttribute('href', link.href);
      });
    });

    /**
     * @validates Requirements 1.1, 1.3 - Get a Quote CTA button
     */
    it('renders the Get a Quote CTA button', () => {
      render(<Navbar />);
      const ctaButtons = screen.getAllByText('Get a Quote');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
    });

    it('renders Get a Quote button as a link to contact page', () => {
      render(<Navbar />);
      const ctaButtons = screen.getAllByText('Get a Quote');
      ctaButtons.forEach((button) => {
        const link = button.closest('a');
        expect(link).toHaveAttribute('href', '/contact#quote');
      });
    });
  });

  describe('Fixed Positioning', () => {
    /**
     * @validates Requirements 1.1 - Fixed at top of page
     */
    it('has fixed positioning classes', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('fixed');
      expect(nav).toHaveClass('top-0');
      expect(nav).toHaveClass('left-0');
      expect(nav).toHaveClass('right-0');
    });

    it('has z-index for proper stacking', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('z-50');
    });
  });

  describe('Current Page Highlighting', () => {
    /**
     * @validates Requirements 1.2 - Current page link highlighting
     */
    it('highlights Home link when on home page', () => {
      vi.mocked(usePathname).mockReturnValue('/');
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      const homeLink = desktopNav?.querySelector('a[href="/"]');
      expect(homeLink).toHaveClass('text-primary');
      expect(homeLink).toHaveClass('border-b-2');
      expect(homeLink).toHaveClass('border-gold');
    });

    it('highlights Services link when on services page', () => {
      vi.mocked(usePathname).mockReturnValue('/services');
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      const servicesLink = desktopNav?.querySelector('a[href="/services"]');
      expect(servicesLink).toHaveClass('text-primary');
      expect(servicesLink).toHaveClass('border-b-2');
      expect(servicesLink).toHaveClass('border-gold');
    });

    it('highlights About link when on about page', () => {
      vi.mocked(usePathname).mockReturnValue('/about');
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      const aboutLink = desktopNav?.querySelector('a[href="/about"]');
      expect(aboutLink).toHaveClass('text-primary');
      expect(aboutLink).toHaveClass('border-b-2');
    });

    it('highlights Contact link when on contact page', () => {
      vi.mocked(usePathname).mockReturnValue('/contact');
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      const contactLink = desktopNav?.querySelector('a[href="/contact"]');
      expect(contactLink).toHaveClass('text-primary');
      expect(contactLink).toHaveClass('border-b-2');
    });

    it('does not highlight non-current page links', () => {
      vi.mocked(usePathname).mockReturnValue('/');
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      const servicesLink = desktopNav?.querySelector('a[href="/services"]');
      expect(servicesLink).toHaveClass('text-text-secondary');
      expect(servicesLink).not.toHaveClass('border-b-2');
    });

    it('highlights link for nested routes', () => {
      vi.mocked(usePathname).mockReturnValue('/services/residential');
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      const servicesLink = desktopNav?.querySelector('a[href="/services"]');
      expect(servicesLink).toHaveClass('text-primary');
      expect(servicesLink).toHaveClass('border-b-2');
    });
  });

  describe('Custom className', () => {
    it('applies custom className to nav element', () => {
      render(<Navbar className="custom-class" />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('custom-class');
    });

    it('merges custom className with default classes', () => {
      render(<Navbar className="bg-white/90" />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('bg-white/90');
      expect(nav).toHaveClass('fixed');
    });
  });

  describe('Styling', () => {
    it('has white background', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('bg-white');
    });

    it('has shadow for visual separation', () => {
      render(<Navbar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('shadow-sm');
    });
  });

  describe('Desktop Navigation', () => {
    it('hides navigation links on mobile (md:flex)', () => {
      render(<Navbar />);
      // The navigation links container should have hidden md:flex classes
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      expect(desktopNav).toBeInTheDocument();
      expect(desktopNav).toHaveClass('hidden');
      expect(desktopNav).toHaveClass('md:flex');
    });

    it('hides CTA button on mobile (md:block)', () => {
      render(<Navbar />);
      const ctaContainer = document.querySelector('.hidden.md\\:block');
      expect(ctaContainer).toBeInTheDocument();
      expect(ctaContainer).toHaveClass('hidden');
      expect(ctaContainer).toHaveClass('md:block');
    });
  });

  describe('Accessibility', () => {
    it('uses nav element for semantic navigation', () => {
      render(<Navbar />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('navigation links have minimum touch target height', () => {
      render(<Navbar />);
      const desktopNav = document.querySelector('.hidden.md\\:flex');
      const homeLink = desktopNav?.querySelector('a[href="/"]');
      expect(homeLink).toHaveClass('min-h-11');
    });
  });

  describe('Mobile Menu', () => {
    /**
     * @validates Requirements 1.4 - Hamburger menu on viewport < 768px
     */
    it('renders hamburger menu button on mobile', () => {
      render(<Navbar />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toBeInTheDocument();
    });

    it('hamburger button is hidden on desktop (md:hidden)', () => {
      render(<Navbar />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toHaveClass('md:hidden');
    });

    it('hamburger button has minimum touch target size', () => {
      render(<Navbar />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toHaveClass('min-h-11');
      expect(menuButton).toHaveClass('min-w-11');
    });

    it('hamburger button shows menu icon when closed', () => {
      render(<Navbar />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const icon = menuButton.querySelector('.material-symbols-outlined');
      expect(icon).toHaveTextContent('menu');
    });

    /**
     * @validates Requirements 1.5 - Mobile menu expand on hamburger click
     */
    it('opens mobile menu when hamburger button is clicked', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      // Menu should be visible
      const mobileMenu = document.getElementById('mobile-menu');
      expect(mobileMenu).toHaveClass('visible');
      expect(mobileMenu).toHaveClass('opacity-100');
    });

    it('shows close icon when menu is open', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      const icon = menuButton.querySelector('.material-symbols-outlined');
      expect(icon).toHaveTextContent('close');
    });

    it('closes mobile menu when hamburger button is clicked again', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      // Open menu
      fireEvent.click(menuButton);
      expect(document.getElementById('mobile-menu')).toHaveClass('visible');
      
      // Close menu
      fireEvent.click(menuButton);
      expect(document.getElementById('mobile-menu')).toHaveClass('invisible');
    });

    it('renders all navigation links in mobile menu', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      // Check that all nav links are in the mobile menu
      const mobileMenu = document.getElementById('mobile-menu');
      NAV_LINKS.forEach((link) => {
        const mobileLink = mobileMenu?.querySelector(`a[href="${link.href}"]`);
        expect(mobileLink).toBeInTheDocument();
      });
    });

    it('renders Get a Quote button in mobile menu', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      // There should be two "Get a Quote" buttons - one desktop, one mobile
      const ctaButtons = screen.getAllByText('Get a Quote');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(2);
    });

    it('closes mobile menu when a navigation link is clicked', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      // Click a link in the mobile menu
      const mobileMenu = document.getElementById('mobile-menu');
      const servicesLink = mobileMenu?.querySelector('a[href="/services"]');
      if (servicesLink) {
        fireEvent.click(servicesLink);
      }
      
      // Menu should be closed
      expect(document.getElementById('mobile-menu')).toHaveClass('invisible');
    });

    it('has aria-expanded attribute on hamburger button', () => {
      render(<Navbar />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('updates aria-expanded when menu is opened', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('has aria-controls pointing to mobile menu', () => {
      render(<Navbar />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    });

    it('mobile menu has transition classes for animation', () => {
      render(<Navbar />);
      const mobileMenu = document.getElementById('mobile-menu');
      expect(mobileMenu).toHaveClass('transition-all');
      expect(mobileMenu).toHaveClass('duration-300');
    });

    it('mobile menu is hidden on desktop (md:hidden)', () => {
      render(<Navbar />);
      const mobileMenu = document.getElementById('mobile-menu');
      expect(mobileMenu).toHaveClass('md:hidden');
    });

    it('highlights current page in mobile menu', () => {
      vi.mocked(usePathname).mockReturnValue('/services');
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      const mobileMenu = document.getElementById('mobile-menu');
      const servicesLink = mobileMenu?.querySelector('a[href="/services"]');
      expect(servicesLink).toHaveClass('text-primary');
      expect(servicesLink).toHaveClass('bg-primary-50');
      expect(servicesLink).toHaveClass('border-l-4');
      expect(servicesLink).toHaveClass('border-gold');
    });

    it('prevents body scroll when mobile menu is open', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('restores body scroll when mobile menu is closed', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      // Open menu
      fireEvent.click(menuButton);
      expect(document.body.style.overflow).toBe('hidden');
      
      // Close menu
      fireEvent.click(menuButton);
      expect(document.body.style.overflow).toBe('');
    });
  });
});
