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
 * Extended service details for individual service pages
 */
export const SERVICE_DETAILS: Record<string, {
  longDescription: string;
  image: string;
  process: { step: number; title: string; description: string }[];
  includes: string[];
  faqs: { question: string; answer: string }[];
}> = {
  'residential': {
    longDescription: 'Our residential cleaning service is designed to give you back your precious time while ensuring your home is always welcoming and comfortable. We understand that every home is unique, which is why we offer customizable cleaning plans that fit your lifestyle and budget. Our trained professionals use eco-friendly products and proven techniques to deliver consistent, high-quality results.',
    image: '/images/residential.jpg',
    process: [
      { step: 1, title: 'Initial Consultation', description: 'We assess your home and discuss your specific cleaning needs and preferences.' },
      { step: 2, title: 'Custom Plan', description: 'We create a tailored cleaning schedule that works with your lifestyle.' },
      { step: 3, title: 'Professional Clean', description: 'Our trained team arrives on time with all necessary supplies and equipment.' },
      { step: 4, title: 'Quality Check', description: 'We ensure every corner meets our high standards before we leave.' },
    ],
    includes: [
      'All bedrooms dusted and vacuumed',
      'Bathrooms cleaned and sanitized',
      'Kitchen surfaces and appliances wiped',
      'Floors vacuumed and mopped',
      'Mirrors and glass cleaned',
      'Trash emptied and bins lined',
      'General tidying and organizing',
      'Door handles and light switches sanitized',
    ],
    faqs: [
      { question: 'How often should I schedule cleaning?', answer: 'Most clients prefer weekly or fortnightly cleaning. We recommend weekly for busy households or homes with pets, and fortnightly for smaller spaces or those who maintain regular tidying.' },
      { question: 'Do I need to be home during cleaning?', answer: 'No, many of our clients provide us with a key or access code. We are fully insured and all our staff undergo background checks for your peace of mind.' },
      { question: 'Do you bring your own supplies?', answer: 'Yes, we bring all cleaning supplies and equipment. We use eco-friendly products, but can also use your preferred products if you have specific requirements.' },
    ],
  },
  'commercial': {
    longDescription: 'A clean workplace is essential for productivity, employee wellbeing, and making a great impression on clients. Our commercial cleaning services are tailored to meet the unique demands of businesses, from small offices to large retail spaces. We work around your schedule to minimize disruption while maintaining the highest standards of cleanliness.',
    image: '/images/commercial.jpg',
    process: [
      { step: 1, title: 'Site Assessment', description: 'We visit your premises to understand your specific requirements and challenges.' },
      { step: 2, title: 'Custom Quote', description: 'We provide a detailed quote based on your space size and cleaning frequency.' },
      { step: 3, title: 'Scheduled Service', description: 'Our team cleans at times that suit your business operations.' },
      { step: 4, title: 'Regular Reviews', description: 'We conduct periodic reviews to ensure our service meets your expectations.' },
    ],
    includes: [
      'Reception and waiting areas',
      'Office workstations and desks',
      'Meeting rooms and boardrooms',
      'Kitchen and break room cleaning',
      'Restroom sanitization',
      'Floor vacuuming and mopping',
      'Window and glass cleaning',
      'Waste removal and recycling',
    ],
    faqs: [
      { question: 'Can you clean outside business hours?', answer: 'Absolutely! We offer flexible scheduling including early morning, evening, and weekend cleaning to minimize disruption to your operations.' },
      { question: 'Do you offer contract cleaning?', answer: 'Yes, we offer both one-off and contract cleaning arrangements. Contract clients enjoy priority scheduling and discounted rates.' },
      { question: 'Are you insured for commercial work?', answer: 'Yes, we carry comprehensive public liability insurance and can provide certificates upon request.' },
    ],
  },
  'airbnb-turnover': {
    longDescription: 'First impressions matter in the hospitality industry. Our Airbnb turnover service ensures your property is guest-ready with quick turnaround times and meticulous attention to detail. We help you maintain those crucial 5-star reviews by presenting a spotless, welcoming space for every guest arrival.',
    image: '/images/airbnb.jpg',
    process: [
      { step: 1, title: 'Booking Integration', description: 'We sync with your booking calendar for automatic scheduling.' },
      { step: 2, title: 'Quick Turnaround', description: 'Our team arrives promptly after checkout to prepare for the next guest.' },
      { step: 3, title: 'Thorough Clean', description: 'Every surface is cleaned and sanitized to hotel standards.' },
      { step: 4, title: 'Final Inspection', description: 'We check all amenities and report any maintenance issues.' },
    ],
    includes: [
      'Complete linen change and bed making',
      'Bathroom deep clean and restock',
      'Kitchen reset and appliance cleaning',
      'Living areas dusted and vacuumed',
      'Amenity restocking check',
      'Trash removal',
      'Property condition report',
      'Photo documentation (optional)',
    ],
    faqs: [
      { question: 'How quickly can you turn around a property?', answer: 'Standard turnaround is 2-3 hours depending on property size. We can accommodate same-day bookings with advance notice.' },
      { question: 'Do you provide linens?', answer: 'We can work with your existing linens or arrange linen rental services. We also offer laundry services for an additional fee.' },
      { question: 'Can you handle multiple properties?', answer: 'Yes! We manage cleaning for many property managers with multiple listings. We offer volume discounts and priority scheduling.' },
    ],
  },
  'deep-cleaning': {
    longDescription: 'Sometimes your home needs more than a regular clean. Our deep cleaning service tackles the areas that are often overlooked in routine cleaning - behind appliances, inside cabinets, and those hard-to-reach corners. Perfect for spring cleaning, preparing for special events, or giving your home a fresh start.',
    image: '/images/deep-cleaning.jpg',
    process: [
      { step: 1, title: 'Detailed Assessment', description: 'We identify priority areas and discuss any specific concerns.' },
      { step: 2, title: 'Systematic Approach', description: 'We work room by room, ensuring nothing is missed.' },
      { step: 3, title: 'Intensive Cleaning', description: 'Using specialized equipment and products for tough jobs.' },
      { step: 4, title: 'Final Walkthrough', description: 'We review the work with you to ensure complete satisfaction.' },
    ],
    includes: [
      'Inside oven and refrigerator cleaning',
      'Behind and under furniture',
      'Baseboard and door frame detailing',
      'Light fixtures and ceiling fans',
      'Window tracks and frames',
      'Grout and tile scrubbing',
      'Cabinet interior cleaning',
      'Vent and exhaust fan cleaning',
    ],
    faqs: [
      { question: 'How long does a deep clean take?', answer: 'A typical deep clean takes 4-8 hours depending on the size of your home and its current condition. We will provide a time estimate after assessment.' },
      { question: 'How often should I get a deep clean?', answer: 'We recommend a deep clean every 3-6 months, or seasonally. It is also great before hosting events or after renovations.' },
      { question: 'Is deep cleaning worth the extra cost?', answer: 'Absolutely! Deep cleaning extends the life of your surfaces and appliances, improves air quality, and makes regular cleaning easier to maintain.' },
    ],
  },
  'move-in-out': {
    longDescription: 'Moving is stressful enough without worrying about cleaning. Our move in/out cleaning service ensures you leave your old place in perfect condition for bond return, or start fresh in your new home. We handle everything from carpet cleaning to wall marks, so you can focus on your move.',
    image: '/images/move-in-out.jpg',
    process: [
      { step: 1, title: 'Pre-Move Assessment', description: 'We evaluate the property and note any specific requirements.' },
      { step: 2, title: 'Comprehensive Clean', description: 'Every room is thoroughly cleaned from top to bottom.' },
      { step: 3, title: 'Detail Work', description: 'We address marks, stains, and built-up grime.' },
      { step: 4, title: 'Inspection Ready', description: 'We ensure the property is ready for final inspection.' },
    ],
    includes: [
      'All rooms cleaned top to bottom',
      'Carpet steam cleaning',
      'Wall mark and scuff removal',
      'Inside all cabinets and wardrobes',
      'Oven and rangehood degreasing',
      'Window cleaning (interior)',
      'Garage sweep and clean',
      'Garden area tidy (if applicable)',
    ],
    faqs: [
      { question: 'Will this help me get my bond back?', answer: 'Our move-out clean is designed to meet property manager standards. While we cannot guarantee bond return (as this depends on other factors), our thorough clean gives you the best chance.' },
      { question: 'Can you clean before my furniture arrives?', answer: 'Yes! Move-in cleans are best done before furniture arrives. We can also clean after your belongings are in place if needed.' },
      { question: 'Do you offer carpet cleaning?', answer: 'Yes, carpet steam cleaning is included in our move in/out package. For heavily soiled carpets, additional treatment may be recommended.' },
    ],
  },
};

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
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'James Chen',
    location: 'Frankton, Queenstown',
    rating: 5,
    content: 'As a busy professional, having FiveStarsCleaning take care of my apartment has been a game-changer. They are punctual, thorough, and my place has never looked better. Worth every penny!',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Emma Thompson',
    location: 'Arrowtown',
    rating: 5,
    content: 'We use FiveStarsCleaning for our Airbnb properties and the results are consistently excellent. Our guests always comment on how clean and fresh everything is. Truly five-star service!',
    avatar: '/images/avatar-3.jpg',
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
  foundedYear: 2025,
} as const;
