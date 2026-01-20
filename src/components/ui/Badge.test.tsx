import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    /**
     * @validates Requirements 2.1 - THE Hero_Section SHALL 显示三个信任徽章
     */
    it('renders the label text correctly', () => {
      render(<Badge icon="verified_user" label="Fully Insured" />);
      expect(screen.getByText('Fully Insured')).toBeInTheDocument();
    });

    it('renders the icon correctly', () => {
      render(<Badge icon="verified_user" label="Fully Insured" />);
      expect(screen.getByText('verified_user')).toBeInTheDocument();
    });

    it('renders as a div element', () => {
      render(<Badge icon="star" label="Test Badge" />);
      const badge = screen.getByText('Test Badge').parentElement;
      expect(badge?.tagName).toBe('DIV');
    });

    it('renders icon with MaterialIcon component', () => {
      render(<Badge icon="eco" label="Eco-Friendly" />);
      const icon = screen.getByText('eco');
      expect(icon).toHaveClass('material-symbols-outlined');
    });
  });

  describe('Default Variant', () => {
    it('applies default variant styles when no variant is specified', () => {
      render(<Badge icon="verified_user" label="Fully Insured" />);
      const badge = screen.getByText('Fully Insured').parentElement;
      expect(badge).toHaveClass('bg-white/90');
      expect(badge).toHaveClass('text-primary');
    });

    it('applies default variant styles when variant is explicitly "default"', () => {
      render(<Badge icon="verified_user" label="Fully Insured" variant="default" />);
      const badge = screen.getByText('Fully Insured').parentElement;
      expect(badge).toHaveClass('bg-white/90');
      expect(badge).toHaveClass('text-primary');
    });
  });

  describe('Gold Variant', () => {
    it('applies gold variant styles when variant is "gold"', () => {
      render(<Badge icon="star" label="Premium" variant="gold" />);
      const badge = screen.getByText('Premium').parentElement;
      expect(badge).toHaveClass('bg-gold');
      expect(badge).toHaveClass('text-primary');
    });

    it('does not apply default background when gold variant is used', () => {
      render(<Badge icon="star" label="Premium" variant="gold" />);
      const badge = screen.getByText('Premium').parentElement;
      expect(badge).not.toHaveClass('bg-white/90');
    });
  });

  describe('Base Styles', () => {
    it('applies inline-flex and items-center for layout', () => {
      render(<Badge icon="check" label="Test" />);
      const badge = screen.getByText('Test').parentElement;
      expect(badge).toHaveClass('inline-flex');
      expect(badge).toHaveClass('items-center');
    });

    it('applies gap-2 for spacing between icon and label', () => {
      render(<Badge icon="check" label="Test" />);
      const badge = screen.getByText('Test').parentElement;
      expect(badge).toHaveClass('gap-2');
    });

    it('applies rounded-full for pill shape', () => {
      render(<Badge icon="check" label="Test" />);
      const badge = screen.getByText('Test').parentElement;
      expect(badge).toHaveClass('rounded-full');
    });

    it('applies padding (px-4 py-2)', () => {
      render(<Badge icon="check" label="Test" />);
      const badge = screen.getByText('Test').parentElement;
      expect(badge).toHaveClass('px-4');
      expect(badge).toHaveClass('py-2');
    });

    it('applies text-sm and font-medium for typography', () => {
      render(<Badge icon="check" label="Test" />);
      const badge = screen.getByText('Test').parentElement;
      expect(badge).toHaveClass('text-sm');
      expect(badge).toHaveClass('font-medium');
    });
  });

  describe('Icon Size', () => {
    it('renders icon with small size', () => {
      render(<Badge icon="verified_user" label="Test" />);
      const icon = screen.getByText('verified_user');
      // MaterialIcon with size="sm" applies text-lg class
      expect(icon).toHaveClass('text-lg');
    });
  });

  describe('Trust Badges Use Cases', () => {
    /**
     * @validates Requirements 2.1 - THE Hero_Section SHALL 显示三个信任徽章(Fully Insured, 100% Satisfaction, Eco-Friendly)
     */
    it('renders Fully Insured badge correctly', () => {
      render(<Badge icon="verified_user" label="Fully Insured" />);
      expect(screen.getByText('Fully Insured')).toBeInTheDocument();
      expect(screen.getByText('verified_user')).toBeInTheDocument();
    });

    it('renders 100% Satisfaction badge correctly', () => {
      render(<Badge icon="thumb_up" label="100% Satisfaction" />);
      expect(screen.getByText('100% Satisfaction')).toBeInTheDocument();
      expect(screen.getByText('thumb_up')).toBeInTheDocument();
    });

    it('renders Eco-Friendly badge correctly', () => {
      render(<Badge icon="eco" label="Eco-Friendly" />);
      expect(screen.getByText('Eco-Friendly')).toBeInTheDocument();
      expect(screen.getByText('eco')).toBeInTheDocument();
    });
  });
});
