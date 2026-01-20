import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MaterialIcon } from './MaterialIcon';

describe('MaterialIcon', () => {
  it('renders with the correct icon name', () => {
    render(<MaterialIcon name="home" />);
    const icon = screen.getByText('home');
    expect(icon).toBeInTheDocument();
  });

  it('applies material-symbols-outlined class by default', () => {
    render(<MaterialIcon name="star" />);
    const icon = screen.getByText('star');
    expect(icon).toHaveClass('material-symbols-outlined');
  });

  it('applies filled class when filled prop is true', () => {
    render(<MaterialIcon name="favorite" filled />);
    const icon = screen.getByText('favorite');
    expect(icon).toHaveClass('filled');
  });

  it('does not apply filled class when filled prop is false', () => {
    render(<MaterialIcon name="favorite" filled={false} />);
    const icon = screen.getByText('favorite');
    expect(icon).not.toHaveClass('filled');
  });

  it('applies correct size class for sm size', () => {
    render(<MaterialIcon name="check" size="sm" />);
    const icon = screen.getByText('check');
    expect(icon).toHaveClass('text-lg');
  });

  it('applies correct size class for md size (default)', () => {
    render(<MaterialIcon name="check" size="md" />);
    const icon = screen.getByText('check');
    expect(icon).toHaveClass('text-2xl');
  });

  it('applies correct size class for lg size', () => {
    render(<MaterialIcon name="check" size="lg" />);
    const icon = screen.getByText('check');
    expect(icon).toHaveClass('text-3xl');
  });

  it('applies correct size class for xl size', () => {
    render(<MaterialIcon name="check" size="xl" />);
    const icon = screen.getByText('check');
    expect(icon).toHaveClass('text-4xl');
  });

  it('applies default md size when no size prop is provided', () => {
    render(<MaterialIcon name="settings" />);
    const icon = screen.getByText('settings');
    expect(icon).toHaveClass('text-2xl');
  });

  it('applies custom className', () => {
    render(<MaterialIcon name="info" className="text-blue-500" />);
    const icon = screen.getByText('info');
    expect(icon).toHaveClass('text-blue-500');
  });

  it('has aria-hidden attribute for accessibility', () => {
    render(<MaterialIcon name="accessibility" />);
    const icon = screen.getByText('accessibility');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('combines multiple props correctly', () => {
    render(
      <MaterialIcon 
        name="star" 
        size="lg" 
        filled 
        className="text-gold-500" 
      />
    );
    const icon = screen.getByText('star');
    expect(icon).toHaveClass('material-symbols-outlined');
    expect(icon).toHaveClass('text-3xl');
    expect(icon).toHaveClass('filled');
    expect(icon).toHaveClass('text-gold-500');
  });
});
