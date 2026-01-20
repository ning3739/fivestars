'use client';

/**
 * About Page - Matching Figma Design
 */

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { VALUES, FEATURES } from '@/lib/constants';
import { CONTACT_INFO } from '@/lib/constants';
import { FadeIn, FadeInScale, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

function ImageWithSkeleton({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(className, 'transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0')}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="page"
        title="About FiveStarsCleaning"
        subtitle="WHO WE ARE"
        description="Your trusted local cleaning experts in Queenstown. Premium cleaning services for New Zealand homes and businesses."
        backgroundImage="/images/move-in-out.jpg"
      />

      {/* Proudly NZ Owned & Operated Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">OUR STORY</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mt-2 mb-6">
              Proudly NZ Owned & Operated
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              FiveStars Cleaning was founded with a clear mission: to bring exceptional cleaning services to Queenstown homes and businesses. We&apos;re a local team passionate about creating spotless spaces that our clients love coming home to.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              We believe a clean space is more than just aesthetics—it&apos;s about creating environments where people can thrive. Our dedicated team brings passion, expertise, and meticulous attention to detail to every job. We&apos;re not just cleaners; we&apos;re your partners in maintaining the spaces you love.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">OUR CORE PRINCIPLES</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mt-2 mb-4">
              Mission & Values
            </h2>
            <p className="text-text-secondary text-base max-w-2xl mx-auto">
              These four pillars guide every decision we make and every surface we clean, 
              ensuring you get the best experience possible.
            </p>
          </FadeIn>

          {/* Values Grid - 4 columns */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <StaggerItem key={value.id}>
                <div className="bg-white rounded-md p-6 text-center border border-gray-100/80 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300 ease-out hover:-translate-y-0.5 group h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <MaterialIcon name={value.icon} size="lg" className="text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Professionals You Can Rely On Section - Single Card */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single card with image left, content right */}
          <FadeInScale>
            <div className="rounded-md shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">
              {/* Left - Team Image */}
              <SlideInLeft className="relative min-h-[300px] lg:min-h-[400px]">
                <ImageWithSkeleton
                  src="/images/team.jpg"
                  alt="FiveStarsCleaning professional team"
                  className="object-cover"
                />
              </SlideInLeft>

              {/* Right - Content */}
              <SlideInRight delay={0.2} className="p-8 md:p-10 flex flex-col justify-center">
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
                    <div className="w-10 h-10 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MaterialIcon name="verified_user" className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Background Verified</h4>
                      <p className="text-text-secondary text-sm">Every team member undergoes comprehensive background checks for your peace of mind.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MaterialIcon name="school" className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Extensively Trained</h4>
                      <p className="text-text-secondary text-sm">Rigorous training programs ensure consistent, high-quality results every time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MaterialIcon name="shield" className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text mb-1">Fully Insured</h4>
                      <p className="text-text-secondary text-sm">Complete insurance coverage protects you and your property at all times.</p>
                    </div>
                  </div>
                </div>
              </SlideInRight>
            </div>
          </FadeInScale>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4">
              Why Trust Us?
            </h2>
            <p className="text-text-secondary text-base max-w-2xl mx-auto">
              We go above and beyond to give you a cleaner that is quality, reliable, and always on point.
            </p>
          </FadeIn>

          {/* Trust Points Grid - 3 columns with white cards */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.id}>
                <div className="bg-white rounded-md p-6 border border-gray-100/80 shadow-sm hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300 ease-out hover:-translate-y-0.5 group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <MaterialIcon name={feature.icon} className="text-gold" />
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a spotless space?
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
              Join Queenstown locals who trust FiveStars for their cleaning needs. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
              >
                Get a Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="border-white text-white hover:bg-white hover:text-primary"
                icon="phone"
              >
                {CONTACT_INFO.phone}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
