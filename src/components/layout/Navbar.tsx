'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';

/**
 * Navbar component props
 */
export interface NavbarProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Navbar Component
 */
export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  // Track scroll position for homepage
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const isCurrentPage = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Determine if navbar should be transparent
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isTransparent
          ? 'bg-transparent'
          : 'bg-white',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className={cn(
              "text-3xl",
              isTransparent ? "text-gold" : "text-gold"
            )}>★</span>
            <span className={cn(
              "font-heading font-bold text-xl transition-colors",
              isTransparent 
                ? "text-white group-hover:text-gold" 
                : "text-primary group-hover:text-primary-600"
            )}>
              FiveStars
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm transition-all duration-200 rounded-lg',
                  isTransparent
                    ? isCurrentPage(link.href)
                      ? 'text-white bg-white/15 font-bold'
                      : 'text-white/80 hover:text-white hover:bg-white/10 font-medium'
                    : isCurrentPage(link.href)
                      ? 'text-primary bg-primary/10 font-bold'
                      : 'text-text-secondary hover:text-primary hover:bg-gray-50 font-medium'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={isTransparent ? "secondary" : "primary"}
              size="sm"
              href="/contact"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={cn(
              'md:hidden',
              'inline-flex items-center justify-center',
              'w-10 h-10 p-2',
              'rounded-lg transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              isTransparent
                ? 'text-white hover:bg-white/10 focus:ring-white'
                : 'text-primary hover:bg-gray-100 focus:ring-primary'
            )}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <MaterialIcon
              name={isMobileMenuOpen ? 'close' : 'menu'}
              size="md"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden',
          'absolute top-full left-0 right-0',
          'bg-white border-t border-gray-100',
          'shadow-lg',
          'transition-all duration-300 ease-in-out',
          'overflow-hidden',
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        )}
      >
        <div className="px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={cn(
                'block px-4 py-3 rounded-lg',
                'font-medium transition-colors duration-200',
                isCurrentPage(link.href)
                  ? 'text-primary bg-primary/5'
                  : 'text-text-secondary hover:text-primary hover:bg-gray-50'
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-3 pb-1">
            <Button
              variant="primary"
              size="md"
              href="/contact"
              className="w-full"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-black/20 z-[-1]"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;
