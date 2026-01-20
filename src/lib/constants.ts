/**
 * Constants and data definitions for FiveStarsCleaning website
 * 
 * This file contains all static data used throughout the application including:
 * - Services data (5 services)
 * - Company features (6 features)
 * - Customer testimonials (3 testimonials)
 * - Statistics data
 * - Navigation links
 * - Contact information
 * 
 * @see Requirements 2.3, 2.4, 2.5, 2.6
 */

import type { Service, Testimonial, Stat, Feature, Value, ContactInfo } from '@/types';

/**
 * Navigation links for the website
 * Used in Navbar and Footer components
 * 
 * @see Requirements 1.1 - Navigation links (Home, Services, About, Contact)
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Company contact information
 * Used in Contact page and Footer
 * 
 * @see Requirements 5.1 - Contact information display
 */
export const CONTACT_INFO: ContactInfo = {
  phone: '+64 22 503 0102',
  email: 'info@fivestarscleaning.co.nz',
  address: '10 Athol Street, Queenstown 9300, New Zealand',
  hours: 'Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 4:00 PM',
};

/**
 * Services offered by FiveStarsCleaning
 * 5 services: Residential, Commercial, Airbnb Turnover, Deep Cleaning, Move In/Out
 * 
 * @see Requirements 2.3 - Display 5 service cards
 */
export const SERVICES: Service[] = [
  {
    id: 'residential',
    name: 'Residential Cleaning',
    description: 'Professional home cleaning services tailored to your needs. We ensure your living space is spotless and comfortable.',
    icon: 'home',
    features: [
      'Regular weekly or fortnightly cleaning',
      'Kitchen and bathroom deep clean',
      'Dusting and vacuuming all rooms',
      'Floor mopping and polishing',
      'Window sill and surface cleaning',
    ],
    category: 'residential',
  },
  {
    id: 'commercial',
    name: 'Commercial Cleaning',
    description: 'Comprehensive cleaning solutions for offices, retail spaces, and commercial properties. Keep your business looking professional.',
    icon: 'business',
    features: [
      'Office and workspace cleaning',
      'Reception and common area maintenance',
      'Restroom sanitization',
      'Floor care and carpet cleaning',
      'Waste management and recycling',
    ],
    category: 'commercial',
  },
  {
    id: 'airbnb-turnover',
    name: 'Airbnb Turnover',
    description: 'Quick and thorough cleaning between guest stays. We help you maintain 5-star reviews with pristine property presentation.',
    icon: 'hotel',
    features: [
      'Fast turnaround between guests',
      'Linen change and bed making',
      'Full kitchen and bathroom reset',
      'Restocking essentials check',
      'Property inspection report',
    ],
    category: 'commercial',
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    description: 'Intensive cleaning service that reaches every corner. Perfect for seasonal cleaning or when your space needs extra attention.',
    icon: 'cleaning_services',
    features: [
      'Behind and under furniture cleaning',
      'Appliance deep clean (oven, fridge)',
      'Grout and tile scrubbing',
      'Light fixture and ceiling fan cleaning',
      'Baseboard and door frame detailing',
    ],
    category: 'residential',
  },
  {
    id: 'move-in-out',
    name: 'Move In/Out Cleaning',
    description: 'Comprehensive cleaning for property transitions. Leave your old place spotless or start fresh in your new home.',
    icon: 'package_2',
    features: [
      'Complete property sanitization',
      'Carpet steam cleaning',
      'Wall mark and scuff removal',
      'Cabinet and closet cleaning',
      'Garage and outdoor area sweep',
    ],
    category: 'residential',
  },
];

/**
 * Company features/benefits - Why Choose Us section
 * 6 features: Fully Insured, Experienced Team, Reliability, Consistent Quality, Eco-friendly, Trusted Local
 * 
 * @see Requirements 2.4 - Display 6 company features
 */
export const FEATURES: Feature[] = [
  {
    id: 'fully-insured',
    title: 'Fully Insured',
    description: 'Complete peace of mind with comprehensive insurance coverage for all our cleaning services.',
    icon: 'verified_user',
  },
  {
    id: 'experienced-team',
    title: 'Experienced Team',
    description: 'Our professional cleaners have years of experience and undergo rigorous training.',
    icon: 'groups',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    description: 'We show up on time, every time. Count on us for consistent, dependable service.',
    icon: 'schedule',
  },
  {
    id: 'consistent-quality',
    title: 'Consistent Quality',
    description: 'Every clean meets our high standards with detailed checklists and quality checks.',
    icon: 'workspace_premium',
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly',
    description: 'We use environmentally safe cleaning products that are gentle on your home and the planet.',
    icon: 'eco',
  },
  {
    id: 'trusted-local',
    title: 'Trusted Local',
    description: 'Proudly serving Queenstown communities with a team that knows and cares about local needs.',
    icon: 'location_on',
  },
];

/**
 * Customer testimonials with 5-star ratings
 * 3 testimonials as per requirements
 * 
 * @see Requirements 2.5 - Display 3 customer 5-star reviews
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Mitchell',
    location: 'Queenstown Central',
    rating: 5,
    content: 'FiveStarsCleaning has transformed our home! Their attention to detail is incredible, and the team is always friendly and professional. I highly recommend their services to anyone looking for reliable cleaning.',
  },
  {
    id: 'testimonial-2',
    name: 'James Chen',
    location: 'Frankton, Queenstown',
    rating: 5,
    content: 'As a busy professional, having FiveStarsCleaning take care of my apartment has been a game-changer. They are punctual, thorough, and my place has never looked better. Worth every penny!',
  },
  {
    id: 'testimonial-3',
    name: 'Emma Thompson',
    location: 'Arrowtown',
    rating: 5,
    content: 'We use FiveStarsCleaning for our Airbnb properties and the results are consistently excellent. Our guests always comment on how clean and fresh everything is. Truly five-star service!',
  },
];

/**
 * Company statistics
 * Stats: 5k+ Homes, 98% Retention, 100% Satisfaction
 * 
 * @see Requirements 2.6 - Display statistics
 */
export const STATS: Stat[] = [
  {
    value: '5k+',
    label: 'Homes Cleaned',
    icon: 'home',
  },
  {
    value: '98%',
    label: 'Client Retention',
    icon: 'favorite',
  },
  {
    value: '100%',
    label: 'Satisfaction Guaranteed',
    icon: 'thumb_up',
  },
];

/**
 * Core company values for About page
 * 4 values: Quality, Consistency, Trust, Satisfaction
 * 
 * @see Requirements 4.2 - Display 4 core values
 */
export const VALUES: Value[] = [
  {
    id: 'quality',
    title: 'Quality',
    description: 'We never compromise on the quality of our work. Every clean is performed to the highest standards.',
    icon: 'star',
  },
  {
    id: 'consistency',
    title: 'Consistency',
    description: 'You can expect the same excellent results every single time we clean your space.',
    icon: 'autorenew',
  },
  {
    id: 'trust',
    title: 'Trust',
    description: 'We build lasting relationships with our clients based on honesty, reliability, and respect.',
    icon: 'handshake',
  },
  {
    id: 'satisfaction',
    title: 'Satisfaction',
    description: 'Your happiness is our priority. We are not satisfied until you are completely satisfied.',
    icon: 'sentiment_satisfied',
  },
];

/**
 * Trust badges for Hero section
 * 3 badges: Fully Insured, 100% Satisfaction, Eco-Friendly
 * 
 * @see Requirements 2.1 - Hero section trust badges
 */
export const TRUST_BADGES = [
  { icon: 'verified_user', label: 'Fully Insured' },
  { icon: 'thumb_up', label: '100% Satisfaction' },
  { icon: 'eco', label: 'Eco-Friendly' },
] as const;

/**
 * Process steps for homepage
 * 3 steps: Book Online → We Clean → Enjoy
 * 
 * @see Requirements 2.2 - Display 3-step process
 */
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Book Online',
    description: 'Schedule your cleaning service online or give us a call. Choose a time that works for you.',
    icon: 'calendar_month',
  },
  {
    step: 2,
    title: 'We Clean',
    description: 'Our professional team arrives on time and cleans your space to perfection.',
    icon: 'cleaning_services',
  },
  {
    step: 3,
    title: 'Enjoy',
    description: 'Relax and enjoy your spotless, fresh-smelling home or office space.',
    icon: 'sentiment_very_satisfied',
  },
] as const;

/**
 * Social media links for Footer
 * 
 * @see Requirements 8.2 - Social media links in footer
 */
export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://facebook.com/fivestarscleaning', icon: 'facebook' },
  { name: 'Instagram', href: 'https://instagram.com/fivestarscleaning', icon: 'instagram' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/fivestarscleaning', icon: 'linkedin' },
] as const;

/**
 * Service types for contact form dropdown
 * 
 * @see Requirements 5.2 - Service type field in contact form
 */
export const SERVICE_TYPES = [
  { value: '', label: 'Select a service' },
  { value: 'residential', label: 'Residential Cleaning' },
  { value: 'commercial', label: 'Commercial Cleaning' },
  { value: 'airbnb', label: 'Airbnb Turnover' },
  { value: 'deep-cleaning', label: 'Deep Cleaning' },
  { value: 'move-in-out', label: 'Move In/Out Cleaning' },
  { value: 'other', label: 'Other' },
] as const;

/**
 * Company information
 */
export const COMPANY_INFO = {
  name: 'FiveStarsCleaning',
  tagline: 'Professional Cleaning Services in Queenstown',
  description: 'Queenstown\'s trusted cleaning service provider. We deliver exceptional cleaning solutions for homes and businesses with a commitment to quality, reliability, and customer satisfaction.',
  foundedYear: 2015,
} as const;
