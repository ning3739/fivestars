import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhyUsSection } from './WhyUsSection';
import { FEATURES } from '@/lib/constants';
import type { Feature } from '@/types';

describe('WhyUsSection', () => {
  const customFeatures: Feature[] = [
    {
      id: 'custom-1',
      title: 'Custom Feature 1',
      description: 'Custom description 1',
      icon: 'star',
    },
    {
      id: 'custom-2',
      title: 'Custom Feature 2',
      description: 'Custom description 2',
      icon: 'check',
    },
  ];

  describe('Basic Rendering', () => {
    it('renders the why us section', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('why-us-section')).toBeInTheDocument();
    });

    it('renders the section title', () => {
      render(<WhyUsSection />);
      const title = screen.getByTestId('why-us-title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Why Choose Us');
    });

    it('renders the section subtitle', () => {
      render(<WhyUsSection />);
      const subtitle = screen.getByTestId('why-us-subtitle');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent('Discover what makes FiveStarsCleaning');
    });

    it('renders the features grid', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('why-us-grid')).toBeInTheDocument();
    });
  });

  describe('Default Features', () => {
    it('renders all 6 default features', () => {
      render(<WhyUsSection />);
      FEATURES.forEach((feature) => {
        expect(screen.getByTestId(`feature-card-${feature.id}`)).toBeInTheDocument();
      });
    });

    it('renders Fully Insured feature', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('feature-title-fully-insured')).toHaveTextContent('Fully Insured');
      expect(screen.getByTestId('feature-description-fully-insured')).toHaveTextContent(
        'Complete peace of mind with comprehensive insurance'
      );
    });

    it('renders Experienced Team feature', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('feature-title-experienced-team')).toHaveTextContent('Experienced Team');
    });

    it('renders Reliability feature', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('feature-title-reliability')).toHaveTextContent('Reliability');
    });

    it('renders Consistent Quality feature', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('feature-title-consistent-quality')).toHaveTextContent('Consistent Quality');
    });

    it('renders Eco-Friendly feature', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('feature-title-eco-friendly')).toHaveTextContent('Eco-Friendly');
    });

    it('renders Trusted Local feature', () => {
      render(<WhyUsSection />);
      expect(screen.getByTestId('feature-title-trusted-local')).toHaveTextContent('Trusted Local');
      expect(screen.getByTestId('feature-description-trusted-local')).toHaveTextContent(
        'Proudly serving Queenstown communities'
      );
    });
  });

  describe('Custom Features', () => {
    it('renders custom features when provided', () => {
      render(<WhyUsSection features={customFeatures} />);
      expect(screen.getByTestId('feature-card-custom-1')).toBeInTheDocument();
      expect(screen.getByTestId('feature-card-custom-2')).toBeInTheDocument();
      expect(screen.queryByTestId('feature-card-fully-insured')).not.toBeInTheDocument();
    });

    it('renders custom feature titles', () => {
      render(<WhyUsSection features={customFeatures} />);
      expect(screen.getByTestId('feature-title-custom-1')).toHaveTextContent('Custom Feature 1');
      expect(screen.getByTestId('feature-title-custom-2')).toHaveTextContent('Custom Feature 2');
    });

    it('renders custom feature descriptions', () => {
      render(<WhyUsSection features={customFeatures} />);
      expect(screen.getByTestId('feature-description-custom-1')).toHaveTextContent('Custom description 1');
      expect(screen.getByTestId('feature-description-custom-2')).toHaveTextContent('Custom description 2');
    });
  });

  describe('Styling', () => {
    it('applies primary background to section', () => {
      render(<WhyUsSection />);
      const section = screen.getByTestId('why-us-section');
      expect(section).toHaveClass('bg-primary');
    });

    it('applies full width to section', () => {
      render(<WhyUsSection />);
      const section = screen.getByTestId('why-us-section');
      expect(section).toHaveClass('w-full');
    });

    it('applies white text color to title', () => {
      render(<WhyUsSection />);
      const title = screen.getByTestId('why-us-title');
      expect(title).toHaveClass('text-white');
    });

    it('applies font-heading to title', () => {
      render(<WhyUsSection />);
      const title = screen.getByTestId('why-us-title');
      expect(title).toHaveClass('font-heading');
    });

    it('applies custom className when provided', () => {
      render(<WhyUsSection className="custom-class" />);
      const section = screen.getByTestId('why-us-section');
      expect(section).toHaveClass('custom-class');
    });
  });

  describe('Responsive Design', () => {
    it('applies single column layout on mobile (grid-cols-1)', () => {
      render(<WhyUsSection />);
      const grid = screen.getByTestId('why-us-grid');
      expect(grid).toHaveClass('grid-cols-1');
    });

    it('applies 2-column layout on tablet (sm:grid-cols-2)', () => {
      render(<WhyUsSection />);
      const grid = screen.getByTestId('why-us-grid');
      expect(grid).toHaveClass('sm:grid-cols-2');
    });

    it('applies responsive padding to section', () => {
      render(<WhyUsSection />);
      const section = screen.getByTestId('why-us-section');
      expect(section).toHaveClass('py-12');
      expect(section).toHaveClass('sm:py-16');
      expect(section).toHaveClass('lg:py-20');
    });

    it('applies gap to grid', () => {
      render(<WhyUsSection />);
      const grid = screen.getByTestId('why-us-grid');
      expect(grid).toHaveClass('gap-6');
    });
  });

  describe('Feature Icons', () => {
    it('renders icon containers for all features', () => {
      render(<WhyUsSection />);
      FEATURES.forEach((feature) => {
        expect(screen.getByTestId(`feature-icon-${feature.id}`)).toBeInTheDocument();
      });
    });

    it('applies gold background to icon containers', () => {
      render(<WhyUsSection />);
      const iconContainer = screen.getByTestId('feature-icon-fully-insured');
      expect(iconContainer).toHaveClass('bg-gold/20');
    });

    it('applies rounded styling to icon containers', () => {
      render(<WhyUsSection />);
      const iconContainer = screen.getByTestId('feature-icon-fully-insured');
      expect(iconContainer).toHaveClass('rounded-md');
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty features array', () => {
      render(<WhyUsSection features={[]} />);
      expect(screen.getByTestId('why-us-section')).toBeInTheDocument();
      expect(screen.getByTestId('why-us-grid')).toBeInTheDocument();
    });

    it('renders with single feature', () => {
      const singleFeature: Feature[] = [
        {
          id: 'single',
          title: 'Single Feature',
          description: 'Single description',
          icon: 'star',
        },
      ];
      render(<WhyUsSection features={singleFeature} />);
      expect(screen.getByTestId('feature-card-single')).toBeInTheDocument();
    });
  });
});
