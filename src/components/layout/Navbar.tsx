'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';

/**
 * Navigation links - Services now has dropdown
 */
const NAV_ITEMS: Array<{ label: string; href: string; hasDropdown?: boolean }> = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = window.innerWidth >= 768 ? 40 : 0;
      setIsScrolled(window.scrollY > bannerHeight);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isCurrentPage = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsMobileServicesOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
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

  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={cn(
        'sticky top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isTransparent ? 'bg-transparent' : 'bg-white shadow-sm',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <span className="text-2xl text-gold">★</span>
            <span className={cn(
              "font-heading font-bold text-lg transition-colors",
              isTransparent 
                ? "text-white group-hover:text-gold" 
                : "text-primary group-hover:text-primary-600"
            )}>
              FiveStars
            </span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                item.hasDropdown ? (
                  // Services with dropdown
                  <div 
                    key={item.href} 
                    className="relative"
                    ref={servicesRef}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        'px-4 py-2 text-sm transition-all duration-200 rounded-sm inline-flex items-center gap-1 font-semibold',
                        isTransparent
                          ? isCurrentPage(item.href)
                            ? 'text-white bg-white/15'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                          : isCurrentPage(item.href)
                            ? 'text-primary'
                            : 'text-text-secondary hover:text-primary'
                      )}
                    >
                      {item.label}
                      <MaterialIcon 
                        name="expand_more" 
                        size="sm" 
                        className={cn(
                          "transition-transform duration-200 -mr-1",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden"
                        >
                          <div className="py-1">
                            {SERVICES.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                              >
                                <MaterialIcon name={service.icon} size="sm" className="text-gold" />
                                <span className="text-sm text-text group-hover:text-primary transition-colors">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular nav link
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm transition-all duration-200 rounded-sm font-semibold',
                      isTransparent
                        ? isCurrentPage(item.href)
                          ? 'text-white bg-white/15'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                        : isCurrentPage(item.href)
                          ? 'text-primary'
                          : 'text-text-secondary hover:text-primary'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Button
              variant="primary"
              size="sm"
              href="/contact"
              className={cn(
                isTransparent && "bg-gold text-primary hover:bg-gold-400"
              )}
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
              'rounded-sm transition-all duration-200',
              'focus:outline-none',
              'active:scale-95',
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-primary hover:bg-primary/5'
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              id="mobile-menu"
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <div className="px-4 py-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.hasDropdown ? (
                      // Services with expandable submenu
                      <div>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={cn(
                            'w-full flex items-center justify-between px-4 py-3 rounded text-base',
                            'transition-colors',
                            isCurrentPage(item.href)
                              ? 'text-primary font-semibold bg-primary/5'
                              : 'text-text hover:bg-gray-50'
                          )}
                        >
                          {item.label}
                          <MaterialIcon 
                            name="expand_more" 
                            size="sm"
                            className={cn(
                              "transition-transform duration-200",
                              isMobileServicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-1">
                                {SERVICES.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded hover:bg-gray-50 transition-colors"
                                  >
                                    <MaterialIcon name={service.icon} size="sm" className="text-gold" />
                                    <span className="text-sm text-text">{service.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          'block px-4 py-3 rounded text-base',
                          'transition-colors',
                          isCurrentPage(item.href)
                            ? 'text-primary font-semibold bg-primary/5'
                            : 'text-text hover:bg-gray-50'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* CTA Button */}
                <motion.div 
                  className="mt-4 px-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.05 }}
                >
                  <Button
                    variant="primary"
                    size="md"
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="w-full"
                  >
                    Get a Quote
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/20 -z-10"
              style={{ top: '100%' }}
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
