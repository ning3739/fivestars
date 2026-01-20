'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

/**
 * Badge type for trust badges in Hero section
 */
interface HeroBadge {
  icon: string;
  label: string;
}

/**
 * CTA (Call to Action) button configuration
 */
interface CTAConfig {
  label: string;
  href: string;
}

/**
 * Hero component props
 * Supports two variants: 'home' for full-screen hero and 'page' for inner pages
 */
export interface HeroProps {
  /** Main title text */
  title: string;
  /** Optional subtitle (displayed above title) */
  subtitle?: string;
  /** Optional description text */
  description?: string;
  /** Primary CTA button configuration */
  primaryCTA?: CTAConfig;
  /** Secondary CTA button configuration */
  secondaryCTA?: CTAConfig;
  /** Trust badges (only displayed in home variant) */
  badges?: HeroBadge[];
  /** Background image URL */
  backgroundImage?: string;
  /** Hero variant - 'home' for full-screen, 'page' for inner pages */
  variant: 'home' | 'page';
  /** Optional highlighted text in title (for home variant) */
  highlightedText?: string;
}

/**
 * Hero Component
 * 
 * A versatile hero section component that supports two variants:
 * - 'home': Full-screen hero with background image, gradient overlay, title, description,
 *   two CTA buttons, and trust badges
 * - 'page': Smaller hero for inner pages with title and optional description
 * 
 * Features:
 * - Background image with gradient overlay
 * - Responsive design (mobile-first)
 * - Trust badges display (home variant only)
 * - Primary and secondary CTA buttons
 * - Accessible heading structure
 * 
 * @example
 * // Home page hero
 * <Hero
 *   variant="home"
 *   title="Professional Cleaning Services"
 *   subtitle="Queenstown's Trusted Cleaners"
 *   description="We deliver exceptional cleaning solutions..."
 *   primaryCTA={{ label: "Get a Quote", href: "/contact" }}
 *   secondaryCTA={{ label: "Call Us", href: "tel:+6421234567" }}
 *   badges={TRUST_BADGES}
 *   backgroundImage="/images/hero-bg.jpg"
 * />
 * 
 * @example
 * // Inner page hero
 * <Hero
 *   variant="page"
 *   title="Our Services"
 *   description="Discover our range of professional cleaning services"
 * />
 * 
 * @validates Requirements 2.1 - THE Hero_Section SHALL 显示全屏背景图、公司标语、两个 CTA 按钮和三个信任徽章
 * @validates Requirements 3.1 - THE Website SHALL 在服务页显示 Hero 区域，包含页面标题和简介
 * @validates Requirements 4.1 - THE Website SHALL 在关于页显示公司故事区域
 * @validates Requirements 5.1 - THE Website SHALL 显示联系信息
 */
export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badges,
  backgroundImage,
  variant,
  highlightedText,
}: HeroProps) {
  const isHome = variant === 'home';

  // Function to render title with highlighted text
  const renderTitle = () => {
    if (highlightedText && title.includes(highlightedText)) {
      const parts = title.split(highlightedText);
      return (
        <>
          {parts[0]}
          <span className="text-gold italic">{highlightedText}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        // Height based on variant
        isHome 
          ? 'min-h-[90vh] lg:min-h-screen -mt-16 md:-mt-20' 
          : 'min-h-[280px] md:min-h-[320px] flex items-center',
        // Background color fallback
        'bg-primary',
      )}
      data-testid="hero-section"
      data-variant={variant}
    >
      {/* Background Image with Next.js Image optimization */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          data-testid="hero-background"
        />
      )}
      
      {/* Gradient Overlay - matching Figma design */}
      <div
        className={cn(
          'absolute inset-0',
          isHome
            ? 'bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60'
            : 'bg-primary/85',
        )}
        data-testid="hero-overlay"
      />

      {/* Content Container */}
      <div
        className={cn(
          'relative z-10',
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          isHome
            ? 'flex flex-col justify-center items-start min-h-[90vh] lg:min-h-screen pt-32 md:pt-36 pb-20'
            : 'text-center py-8',
        )}
      >
        {/* Subtitle badge (only for home variant) */}
        {isHome && subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            data-testid="hero-subtitle"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{subtitle}</span>
          </motion.div>
        )}

        {/* Page variant subtitle badge */}
        {!isHome && subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center gap-2 bg-gold/20 rounded-full px-4 py-1.5 mb-4 mx-auto"
            data-testid="hero-subtitle"
          >
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">{subtitle}</span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            'font-heading font-bold text-white',
            isHome
              ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl'
              : 'text-3xl sm:text-4xl md:text-5xl',
            'leading-[1.1]',
          )}
          data-testid="hero-title"
        >
          {renderTitle()}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={cn(
              'text-white/80 mt-6',
              isHome
                ? 'text-base sm:text-lg md:text-xl max-w-xl'
                : 'text-base sm:text-lg max-w-2xl mx-auto',
            )}
            data-testid="hero-description"
          >
            {description}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={cn(
              'flex flex-col sm:flex-row gap-4 mt-8',
              !isHome && 'justify-center',
            )}
            data-testid="hero-cta-container"
          >
            {primaryCTA && (
              <Button
                variant="secondary"
                size="lg"
                href={primaryCTA.href}
                className="shadow-lg shadow-gold/30"
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryCTA.href}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                icon="phone"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        )}

        {/* Trust Badges (only for home variant) - styled like Figma */}
        {isHome && badges && badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-4 sm:gap-6 mt-10 sm:mt-14"
            data-testid="hero-badges-container"
          >
            {badges.map((badge, index) => (
              <Badge
                key={`${badge.label}-${index}`}
                icon={badge.icon}
                label={badge.label}
                variant="default"
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Hero;
