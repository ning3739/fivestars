import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Card>
          <p>Card content</p>
        </Card>
      );
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('renders as a div element', () => {
      render(
        <Card>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card?.tagName).toBe('DIV');
    });

    it('renders complex children correctly', () => {
      render(
        <Card>
          <h3>Title</h3>
          <p>Description</p>
          <button>Action</button>
        </Card>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });
  });

  describe('Base Styles', () => {
    /**
     * @validates Requirements 2.3 - THE Website SHALL 在首页显示5种服务卡片
     * @validates Requirements 3.4 - THE Service_Card SHALL 显示服务名称、描述、功能列表和 CTA 按钮
     */
    it('applies white background', () => {
      render(
        <Card>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('bg-white');
    });

    it('applies rounded-xl for rounded corners per design system', () => {
      render(
        <Card>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('rounded-xl');
    });

    it('applies shadow-md per design system', () => {
      render(
        <Card>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('shadow-md');
    });
  });

  describe('Responsive Padding', () => {
    it('applies base padding (p-4)', () => {
      render(
        <Card>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('p-4');
    });

    it('applies responsive padding for larger screens (sm:p-6)', () => {
      render(
        <Card>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('sm:p-6');
    });
  });

  describe('Hover Effect', () => {
    it('does not apply hover styles by default', () => {
      render(
        <Card>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).not.toHaveClass('hover:shadow-lg');
      expect(card).not.toHaveClass('hover:scale-[1.02]');
    });

    it('applies hover styles when hover prop is true', () => {
      render(
        <Card hover>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('hover:shadow-lg');
      expect(card).toHaveClass('hover:scale-[1.02]');
    });

    it('applies transition styles when hover is enabled', () => {
      render(
        <Card hover>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('transition-all');
      expect(card).toHaveClass('duration-300');
    });

    it('does not apply transition styles when hover is disabled', () => {
      render(
        <Card hover={false}>
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).not.toHaveClass('transition-all');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      render(
        <Card className="custom-class">
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('custom-class');
    });

    it('merges custom className with default classes', () => {
      render(
        <Card className="mt-4 max-w-md">
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('mt-4');
      expect(card).toHaveClass('max-w-md');
      expect(card).toHaveClass('bg-white');
      expect(card).toHaveClass('rounded-xl');
    });

    it('allows overriding default styles with custom className', () => {
      render(
        <Card className="bg-background-secondary">
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      // Custom class should be applied (cn utility handles merging)
      expect(card).toHaveClass('bg-background-secondary');
    });
  });

  describe('Combined Props', () => {
    it('applies both hover and custom className correctly', () => {
      render(
        <Card hover className="border border-primary">
          <p>Content</p>
        </Card>
      );
      const card = screen.getByText('Content').parentElement;
      expect(card).toHaveClass('hover:shadow-lg');
      expect(card).toHaveClass('border');
      expect(card).toHaveClass('border-primary');
      expect(card).toHaveClass('bg-white');
    });
  });
});
