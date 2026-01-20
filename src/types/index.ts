/**
 * Type definitions for FiveStarsCleaning website
 * 
 * These types define the data structures used throughout the application
 * for services, testimonials, statistics, features, values, and contact information.
 */

/**
 * Service type representing a cleaning service offering
 * Used in service cards and service listings
 * 
 * @see Requirements 3.4 - Service card display
 */
export interface Service {
  /** Unique identifier for the service */
  id: string;
  /** Display name of the service */
  name: string;
  /** Brief description of the service */
  description: string;
  /** Material icon name for the service */
  icon: string;
  /** List of features/benefits included in the service */
  features: string[];
  /** Service category for filtering */
  category: 'residential' | 'commercial';
  /** Optional image URL for the service */
  image?: string;
}

/**
 * Testimonial type representing a customer review
 * Used in testimonials section
 * 
 * @see Requirements 2.5 - Customer testimonials display
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string;
  /** Customer name */
  name: string;
  /** Customer location (city/area) */
  location: string;
  /** Rating from 1-5 stars */
  rating: number;
  /** Testimonial content/review text */
  content: string;
  /** Optional customer avatar image URL */
  avatar?: string;
}

/**
 * Stat type representing a company statistic
 * Used in stats section to display key metrics
 * 
 * @see Requirements 2.6 - Statistics display
 */
export interface Stat {
  /** Display value (e.g., "5k+", "98%") */
  value: string;
  /** Label describing the statistic */
  label: string;
  /** Optional Material icon name */
  icon?: string;
}

/**
 * Feature type representing a company feature/benefit
 * Used in "Why Choose Us" section
 * 
 * @see Requirements 2.4 - Company features display
 */
export interface Feature {
  /** Unique identifier for the feature */
  id: string;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Material icon name for the feature */
  icon: string;
}

/**
 * Value type representing a company core value
 * Used in About page values section
 * 
 * @see Requirements 4.2 - Core values display
 */
export interface Value {
  /** Unique identifier for the value */
  id: string;
  /** Value title */
  title: string;
  /** Value description */
  description: string;
  /** Material icon name for the value */
  icon: string;
}

/**
 * ContactInfo type representing company contact information
 * Used in contact page and footer
 * 
 * @see Requirements 5.1, 5.2 - Contact information display
 */
export interface ContactInfo {
  /** Company phone number */
  phone: string;
  /** Company email address */
  email: string;
  /** Company physical address */
  address: string;
  /** Business hours */
  hours: string;
}
