import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(<Button variant="primary" size="md">Click Me</Button>);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('renders as a button element by default', () => {
      render(<Button variant="primary" size="md">Button</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders as an anchor element when href is provided', () => {
      render(<Button variant="primary" size="md" href="/contact">Link</Button>);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/contact');
    });

    it('renders icon when icon prop is provided', () => {
      render(<Button variant="primary" size="md" icon="phone">Call Us</Button>);
      expect(screen.getByText('phone')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('applies primary variant styles', () => {
      render(<Button variant="primary" size="md">Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary');
      expect(button).toHaveClass('text-white');
    });

    it('applies secondary variant styles', () => {
      render(<Button variant="secondary" size="md">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gold');
      expect(button).toHaveClass('text-primary');
    });

    it('applies outline variant styles', () => {
      render(<Button variant="outline" size="md">Outline</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border-2');
      expect(button).toHaveClass('border-primary');
      expect(button).toHaveClass('bg-transparent');
    });

    it('applies ghost variant styles', () => {
      render(<Button variant="ghost" size="md">Ghost</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-primary');
      expect(button).toHaveClass('bg-transparent');
    });
  });

  describe('Sizes', () => {
    it('applies sm size styles', () => {
      render(<Button variant="primary" size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4');
      expect(button).toHaveClass('py-2');
      expect(button).toHaveClass('text-sm');
    });

    it('applies md size styles', () => {
      render(<Button variant="primary" size="md">Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-6');
      expect(button).toHaveClass('py-3');
      expect(button).toHaveClass('text-base');
    });

    it('applies lg size styles', () => {
      render(<Button variant="primary" size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-8');
      expect(button).toHaveClass('py-4');
      expect(button).toHaveClass('text-lg');
    });
  });

  describe('Minimum Touch Target (44x44px)', () => {
    /**
     * @validates Requirements 6.5 - THE Website SHALL 确保所有交互元素在触摸设备上有足够的点击区域(最小 44x44px)
     */
    it('applies minimum height class for sm size', () => {
      render(<Button variant="primary" size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('min-h-11');
      expect(button).toHaveClass('min-w-11');
    });

    it('applies minimum height class for md size', () => {
      render(<Button variant="primary" size="md">Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('min-h-11');
      expect(button).toHaveClass('min-w-11');
    });

    it('applies minimum height class for lg size', () => {
      render(<Button variant="primary" size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('min-h-11');
      expect(button).toHaveClass('min-w-11');
    });
  });

  describe('Interactions', () => {
    it('calls onClick handler when clicked', () => {
      const handleClick = vi.fn();
      render(<Button variant="primary" size="md" onClick={handleClick}>Click</Button>);
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn();
      render(<Button variant="primary" size="md" onClick={handleClick} disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('applies disabled styles when disabled', () => {
      render(<Button variant="primary" size="md" disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('opacity-50');
      expect(button).toHaveClass('cursor-not-allowed');
    });
  });

  describe('Button Type', () => {
    it('has type="button" by default', () => {
      render(<Button variant="primary" size="md">Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('accepts type="submit"', () => {
      render(<Button variant="primary" size="md" type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('accepts type="reset"', () => {
      render(<Button variant="primary" size="md" type="reset">Reset</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      render(<Button variant="primary" size="md" className="custom-class">Custom</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('merges custom className with default classes', () => {
      render(<Button variant="primary" size="md" className="mt-4">Custom</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('mt-4');
      expect(button).toHaveClass('bg-primary');
    });
  });

  describe('Base Styles', () => {
    it('applies rounded-lg for rounded corners', () => {
      render(<Button variant="primary" size="md">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('rounded-lg');
    });

    it('applies flex layout for icon alignment', () => {
      render(<Button variant="primary" size="md">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex');
      expect(button).toHaveClass('items-center');
      expect(button).toHaveClass('justify-center');
    });

    it('applies focus ring styles', () => {
      render(<Button variant="primary" size="md">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('focus:ring-2');
      expect(button).toHaveClass('focus:ring-primary');
    });
  });
});
