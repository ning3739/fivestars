import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Testimonials } from './Testimonials';
import type { Testimonial } from '@/types';

describe('Testimonials', () => {
  const customTestimonials: Testimonial[] = [
    {
      id: 'custom-1',
      name: 'John Doe',
      location: 'Queenstown Central',
      rating: 5,
      content: 'Excellent service! Highly recommended.',
    },
    {
      id: 'custom-2',
      name: 'Jane Smith',
      location: 'Frankton',
      rating: 4,
      content: 'Great cleaning team, very professional.',
      avatar: '/avatars/jane.jpg',
    },
  ];

  describe('Basic Rendering', () => {
    it('renders the testimonials section', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
    });

    it('renders the section title', () => {
      render(<Testimonials />);
      const title = screen.getByTestId('testimonials-title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Rated 5 Stars by Locals');
    });

    it('renders the section subtitle', () => {
      render(<Testimonials />);
      const subtitle = screen.getByTestId('testimonials-subtitle');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent("Don't just take our word for it");
    });

    it('renders the testimonials grid', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonials-grid')).toBeInTheDocument();
    });
  });

  describe('Default Testimonials', () => {
    it('renders all 3 default testimonials', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonial-name-testimonial-1')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-name-testimonial-2')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-name-testimonial-3')).toBeInTheDocument();
    });

    it('renders Sarah Mitchell testimonial', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonial-name-testimonial-1')).toHaveTextContent('Sarah Mitchell');
      expect(screen.getByTestId('testimonial-location-testimonial-1')).toHaveTextContent('Queenstown Central');
    });

    it('renders James Chen testimonial', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonial-name-testimonial-2')).toHaveTextContent('James Chen');
      expect(screen.getByTestId('testimonial-location-testimonial-2')).toHaveTextContent('Frankton, Queenstown');
    });

    it('renders Emma Thompson testimonial', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonial-name-testimonial-3')).toHaveTextContent('Emma Thompson');
      expect(screen.getByTestId('testimonial-location-testimonial-3')).toHaveTextContent('Arrowtown');
    });
  });

  describe('Star Rating Display', () => {
    it('renders star ratings for all testimonials', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonial-rating-testimonial-1')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-rating-testimonial-2')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-rating-testimonial-3')).toBeInTheDocument();
    });

    it('renders 5 stars for each testimonial', () => {
      render(<Testimonials />);
      const starRatings = screen.getAllByTestId('star-rating');
      expect(starRatings).toHaveLength(3);
      
      starRatings.forEach((rating) => {
        const stars = rating.querySelectorAll('.material-symbols-outlined');
        expect(stars).toHaveLength(5);
      });
    });

    it('renders filled stars based on rating', () => {
      render(<Testimonials testimonials={customTestimonials} />);
      const starRatings = screen.getAllByTestId('star-rating');
      
      const firstRatingStars = starRatings[0].querySelectorAll('.text-gold');
      expect(firstRatingStars).toHaveLength(5);
      
      const secondRatingGoldStars = starRatings[1].querySelectorAll('.text-gold');
      const secondRatingGrayStars = starRatings[1].querySelectorAll('.text-gray-300');
      expect(secondRatingGoldStars).toHaveLength(4);
      expect(secondRatingGrayStars).toHaveLength(1);
    });
  });

  describe('Testimonial Elements', () => {
    it('renders customer names', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonial-name-testimonial-1')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-name-testimonial-2')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-name-testimonial-3')).toBeInTheDocument();
    });

    it('renders customer locations', () => {
      render(<Testimonials />);
      expect(screen.getByTestId('testimonial-location-testimonial-1')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-location-testimonial-2')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-location-testimonial-3')).toBeInTheDocument();
    });

    it('renders testimonial content with quotes', () => {
      render(<Testimonials />);
      const content = screen.getByTestId('testimonial-content-testimonial-1');
      const textContent = content.textContent || '';
      expect(textContent.charCodeAt(0)).toBe(8220);
      expect(textContent.charCodeAt(textContent.length - 1)).toBe(8221);
    });
  });

  describe('Custom Testimonials', () => {
    it('renders custom testimonials when provided', () => {
      render(<Testimonials testimonials={customTestimonials} />);
      expect(screen.getByTestId('testimonial-name-custom-1')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-name-custom-2')).toBeInTheDocument();
      expect(screen.queryByTestId('testimonial-name-testimonial-1')).not.toBeInTheDocument();
    });

    it('renders custom testimonial names', () => {
      render(<Testimonials testimonials={customTestimonials} />);
      expect(screen.getByTestId('testimonial-name-custom-1')).toHaveTextContent('John Doe');
      expect(screen.getByTestId('testimonial-name-custom-2')).toHaveTextContent('Jane Smith');
    });

    it('renders custom testimonial locations', () => {
      render(<Testimonials testimonials={customTestimonials} />);
      expect(screen.getByTestId('testimonial-location-custom-1')).toHaveTextContent('Queenstown Central');
      expect(screen.getByTestId('testimonial-location-custom-2')).toHaveTextContent('Frankton');
    });
  });

  describe('Styling', () => {
    it('applies white background to section', () => {
      render(<Testimonials />);
      const section = screen.getByTestId('testimonials-section');
      expect(section).toHaveClass('bg-white');
    });

    it('applies full width to section', () => {
      render(<Testimonials />);
      const section = screen.getByTestId('testimonials-section');
      expect(section).toHaveClass('w-full');
    });

    it('applies font-heading to section title', () => {
      render(<Testimonials />);
      const title = screen.getByTestId('testimonials-title');
      expect(title).toHaveClass('font-heading');
    });

    it('applies custom className when provided', () => {
      render(<Testimonials className="custom-class" />);
      const section = screen.getByTestId('testimonials-section');
      expect(section).toHaveClass('custom-class');
    });

    it('applies rounded avatar styling', () => {
      render(<Testimonials />);
      const avatar = screen.getByTestId('testimonial-avatar-testimonial-1');
      expect(avatar).toHaveClass('rounded-full');
    });
  });

  describe('Responsive Design', () => {
    it('applies single column layout on mobile (grid-cols-1)', () => {
      render(<Testimonials />);
      const grid = screen.getByTestId('testimonials-grid');
      expect(grid).toHaveClass('grid-cols-1');
    });

    it('applies 2-column layout on tablet (sm:grid-cols-2)', () => {
      render(<Testimonials />);
      const grid = screen.getByTestId('testimonials-grid');
      expect(grid).toHaveClass('sm:grid-cols-2');
    });

    it('applies 3-column layout on desktop (lg:grid-cols-3)', () => {
      render(<Testimonials />);
      const grid = screen.getByTestId('testimonials-grid');
      expect(grid).toHaveClass('lg:grid-cols-3');
    });

    it('applies responsive padding to section', () => {
      render(<Testimonials />);
      const section = screen.getByTestId('testimonials-section');
      expect(section).toHaveClass('py-12');
      expect(section).toHaveClass('sm:py-16');
      expect(section).toHaveClass('lg:py-20');
    });

    it('applies responsive gap to grid', () => {
      render(<Testimonials />);
      const grid = screen.getByTestId('testimonials-grid');
      expect(grid).toHaveClass('gap-6');
      expect(grid).toHaveClass('sm:gap-8');
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty testimonials array', () => {
      render(<Testimonials testimonials={[]} />);
      expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
      expect(screen.getByTestId('testimonials-grid')).toBeInTheDocument();
    });

    it('renders with single testimonial', () => {
      const singleTestimonial: Testimonial[] = [
        {
          id: 'single',
          name: 'Single Customer',
          location: 'Queenstown',
          rating: 5,
          content: 'Single testimonial content',
        },
      ];
      render(<Testimonials testimonials={singleTestimonial} />);
      expect(screen.getByTestId('testimonial-name-single')).toBeInTheDocument();
    });

    it('handles testimonial with 0 rating', () => {
      const zeroRatingTestimonial: Testimonial[] = [
        {
          id: 'zero-rating',
          name: 'Zero Rating',
          location: 'Queenstown',
          rating: 0,
          content: 'Zero rating content',
        },
      ];
      render(<Testimonials testimonials={zeroRatingTestimonial} />);
      
      const starRating = screen.getByTestId('star-rating');
      const goldStars = starRating.querySelectorAll('.text-gold');
      const grayStars = starRating.querySelectorAll('.text-gray-300');
      expect(goldStars).toHaveLength(0);
      expect(grayStars).toHaveLength(5);
    });

    it('handles testimonial with partial rating', () => {
      const partialRatingTestimonial: Testimonial[] = [
        {
          id: 'partial-rating',
          name: 'Partial Rating',
          location: 'Queenstown',
          rating: 3,
          content: 'Partial rating content',
        },
      ];
      render(<Testimonials testimonials={partialRatingTestimonial} />);
      
      const starRating = screen.getByTestId('star-rating');
      const goldStars = starRating.querySelectorAll('.text-gold');
      const grayStars = starRating.querySelectorAll('.text-gray-300');
      expect(goldStars).toHaveLength(3);
      expect(grayStars).toHaveLength(2);
    });
  });
});
