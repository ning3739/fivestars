'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CONTACT_INFO, SOCIAL_LINKS, COMPANY_INFO, SERVICES } from '@/lib/constants';
import { MaterialIcon } from '@/components/icons/MaterialIcon';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={cn('bg-primary text-white relative', className)}>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          'absolute -top-5 left-1/2 -translate-x-1/2',
          'w-10 h-10 bg-gold rounded-full',
          'flex items-center justify-center',
          'shadow-lg shadow-gold/30',
          'transition-all duration-300',
          'hover:bg-gold-400 hover:scale-110',
          'focus:outline-none',
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
        aria-label="Back to top"
      >
        <MaterialIcon name="keyboard_arrow_up" className="text-primary" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo & Description - Takes more space */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <span className="text-2xl text-gold">★</span>
                <span className="font-heading font-bold text-lg text-white">FiveStars</span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Queenstown&apos;s premier cleaning service. Quality you can trust, results you can see.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-gold hover:text-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
              <ul className="space-y-2.5">
                {SERVICES.slice(0, 4).map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={`/services/${service.id}`} 
                      className="text-white/70 text-sm hover:text-gold transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="text-white/70 text-sm hover:text-gold transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 text-sm hover:text-gold transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 text-sm hover:text-gold transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold/50 rounded-full group-hover:bg-gold transition-colors" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                    className="flex items-center gap-3 text-white/70 text-sm hover:text-gold transition-colors group"
                  >
                    <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <MaterialIcon name="phone" size="sm" className="text-gold" />
                    </span>
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="flex items-center gap-3 text-white/70 text-sm hover:text-gold transition-colors group"
                  >
                    <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <MaterialIcon name="email" size="sm" className="text-gold" />
                    </span>
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <MaterialIcon name="location_on" size="sm" className="text-gold" />
                  </span>
                  Queenstown, NZ
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <Link href="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="text-white/30">•</span>
            <Link href="/contact" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const iconClass = "w-4 h-4";
  switch (name) {
    case 'facebook':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return <MaterialIcon name="link" size="sm" />;
  }
}

export default Footer;
