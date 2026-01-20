'use client';

import { CONTACT_INFO } from '@/lib/constants';
import { MaterialIcon } from '@/components/icons/MaterialIcon';

export function TopBanner() {
  return (
    <div className="bg-primary text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile - Only phone */}
        <div className="flex md:hidden items-center justify-center">
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5"
          >
            <MaterialIcon name="phone" size="sm" />
            <span className="font-bold text-gold">{CONTACT_INFO.phone}</span>
          </a>
        </div>

        {/* Desktop - Full info */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left - Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <MaterialIcon name="phone" size="sm" />
              <span className="font-bold text-gold">{CONTACT_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <MaterialIcon name="email" size="sm" />
              <span className="font-semibold">{CONTACT_INFO.email}</span>
            </a>
          </div>

          {/* Right - Address */}
          <div className="flex items-center gap-1.5 text-white/80">
            <MaterialIcon name="location_on" size="sm" />
            <span className="font-semibold">10 Athol Street, Queenstown 9300</span>
          </div>
        </div>
      </div>
    </div>
  );
}
