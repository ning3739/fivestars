'use client';

import { CONTACT_INFO } from '@/lib/constants';
import { MaterialIcon } from '@/components/icons/MaterialIcon';

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
      className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/40 active:scale-95 transition-transform"
      aria-label="Call us"
    >
      <MaterialIcon name="phone" size="md" className="text-primary" />
    </a>
  );
}
