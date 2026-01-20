/**
 * About Page - Matching Figma Design
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { VALUES, FEATURES, COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about FiveStars Cleaning - Queenstown\'s trusted local cleaning experts since 2015. NZ owned & operated, fully insured, background-verified team. Discover our mission, values, and commitment to excellence.',
  keywords: ['about FiveStars', 'Queenstown cleaners', 'NZ owned cleaning company', 'trusted cleaners', 'professional cleaning team'],
  openGraph: {
    title: 'About FiveStars Cleaning | Queenstown\'s Trusted Cleaners',
    description: 'Learn about FiveStars Cleaning - Queenstown\'s trusted local cleaning experts since 2015.',
    url: 'https://fivestars.co.nz/about',
  },
  alternates: {
    canonical: 'https://fivestars.co.nz/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="About FiveStarsCleaning"
        subtitle="WHO WE ARE"
        description="Your trusted local cleaning experts in Queenstown. Delivering premium cleaning services for New Zealand homes and businesses since 2015."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      {/* Proudly NZ Owned & Operated Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">OUR STORY</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mt-2 mb-6">
              Proudly NZ Owned & Operated
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              Founded in {COMPANY_INFO.foundedYear}, FiveStarsCleaning began with a simple mission: to provide Queenstown homes 
              and businesses with cleaning services that truly make a difference. What started as a small family operation 
              has grown into one of Queenstown&apos;s most trusted cleaning companies.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              We believe that a clean space is more than just aesthetics—it&apos;s about creating environments where people 
              can thrive. Our team of dedicated professionals brings passion, expertise, and attention to detail to every 
              job, big or small. We&apos;re not just cleaners; we&apos;re partners in maintaining the spaces you love.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">OUR CORE PRINCIPLES</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mt-2 mb-4">
              Mission & Values
            </h2>
            <p className="text-text-secondary text-base max-w-2xl mx-auto">
              These four pillars guide every decision we make and every surface we clean, 
              ensuring you get the best experience possible.
            </p>
          </div>

          {/* Values Grid - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <div key={value.id} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MaterialIcon name={value.icon} size="lg" className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-text mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals You Can Rely On Section - Single Card */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single card with image left, content right */}
          <div className="rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
            {/* Left - Team Image */}
            <div className="relative min-h-[300px] lg:min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="FiveStarsCleaning professional team"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">OUR PEOPLE</span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-text mt-2 mb-4">
                Professionals You Can Rely On
              </h2>
              <p className="text-text-secondary text-base mb-8">
                We believe in building a team of dedicated professionals who share our passion for 
                cleanliness and customer satisfaction. Every team member is carefully vetted and 
                trained to deliver exceptional results.
              </p>
              
              {/* Features list */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="verified_user" className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Background Verified</h4>
                    <p className="text-text-secondary text-sm">Every team member undergoes comprehensive background checks for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="school" className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Extensively Trained</h4>
                    <p className="text-text-secondary text-sm">Rigorous training programs ensure consistent, high-quality results every time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name="shield" className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Fully Insured</h4>
                    <p className="text-text-secondary text-sm">Complete insurance coverage protects you and your property at all times.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4">
              Why Trust Us?
            </h2>
            <p className="text-text-secondary text-base max-w-2xl mx-auto">
              We go above and beyond to give you a cleaner that is quality, reliable, and always on point.
            </p>
          </div>

          {/* Trust Points Grid - 3 columns with white cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MaterialIcon name={feature.icon} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-text mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Let us take care of the cleaning for you
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
            Join thousands of happy Queenstown residents who&apos;ve reclaimed their free time with FiveStarsCleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
            >
              Get a Free Quote →
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
