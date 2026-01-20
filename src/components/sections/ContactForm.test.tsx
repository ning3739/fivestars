import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { ContactForm } from './ContactForm';
import { SERVICE_TYPES } from '@/lib/constants';
import { ERROR_MESSAGES } from '@/lib/validation';

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Form Fields', () => {
    it('renders all required form fields', () => {
      render(<ContactForm />);

      expect(screen.getByTestId('contact-form')).toBeInTheDocument();
      expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Service Type/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });

    it('renders name input field with correct attributes', () => {
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/Full Name/i);
      expect(nameInput).toHaveAttribute('type', 'text');
      expect(nameInput).toHaveAttribute('name', 'name');
    });

    it('renders email input field with correct attributes', () => {
      render(<ContactForm />);

      const emailInput = screen.getByLabelText(/Email Address/i);
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('name', 'email');
    });

    it('renders phone input field with correct attributes', () => {
      render(<ContactForm />);

      const phoneInput = screen.getByLabelText(/Phone Number/i);
      expect(phoneInput).toHaveAttribute('type', 'tel');
      expect(phoneInput).toHaveAttribute('name', 'phone');
    });

    it('renders service type dropdown with all options', () => {
      render(<ContactForm />);

      const serviceSelect = screen.getByLabelText(/Service Type/i);
      expect(serviceSelect).toBeInTheDocument();

      SERVICE_TYPES.forEach((type) => {
        expect(screen.getByRole('option', { name: type.label })).toBeInTheDocument();
      });
    });

    it('renders message textarea with correct attributes', () => {
      render(<ContactForm />);

      const messageTextarea = screen.getByLabelText(/Message/i);
      expect(messageTextarea.tagName).toBe('TEXTAREA');
      expect(messageTextarea).toHaveAttribute('name', 'message');
    });

    it('renders submit button', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute('type', 'submit');
    });
  });

  describe('Form Input Handling', () => {
    it('updates name field on input', () => {
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/Full Name/i);
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });

      expect(nameInput).toHaveValue('John Doe');
    });

    it('updates email field on input', () => {
      render(<ContactForm />);

      const emailInput = screen.getByLabelText(/Email Address/i);
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

      expect(emailInput).toHaveValue('john@example.com');
    });

    it('updates phone field on input', () => {
      render(<ContactForm />);

      const phoneInput = screen.getByLabelText(/Phone Number/i);
      fireEvent.change(phoneInput, { target: { value: '+64 21 123 4567' } });

      expect(phoneInput).toHaveValue('+64 21 123 4567');
    });

    it('updates service type on selection', () => {
      render(<ContactForm />);

      const serviceSelect = screen.getByLabelText(/Service Type/i);
      fireEvent.change(serviceSelect, { target: { value: 'residential' } });

      expect(serviceSelect).toHaveValue('residential');
    });

    it('updates message field on input', () => {
      render(<ContactForm />);

      const messageTextarea = screen.getByLabelText(/Message/i);
      fireEvent.change(messageTextarea, { target: { value: 'I need a quote for cleaning services.' } });

      expect(messageTextarea).toHaveValue('I need a quote for cleaning services.');
    });
  });

  describe('Error Display', () => {
    it('displays error for empty name field on submit', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      fireEvent.click(submitButton);

      expect(screen.getByTestId('name-error')).toHaveTextContent(ERROR_MESSAGES.NAME_REQUIRED);
    });

    it('displays error for invalid email format on submit', () => {
      render(<ContactForm />);

      const emailInput = screen.getByLabelText(/Email Address/i);
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      fireEvent.click(submitButton);

      expect(screen.getByTestId('email-error')).toHaveTextContent(ERROR_MESSAGES.EMAIL_INVALID);
    });

    it('displays error for invalid phone format on submit', () => {
      render(<ContactForm />);

      const phoneInput = screen.getByLabelText(/Phone Number/i);
      fireEvent.change(phoneInput, { target: { value: '123' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      fireEvent.click(submitButton);

      expect(screen.getByTestId('phone-error')).toHaveTextContent(ERROR_MESSAGES.PHONE_INVALID);
    });

    it('clears error when user starts typing in field', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      fireEvent.click(submitButton);

      expect(screen.getByTestId('name-error')).toBeInTheDocument();

      const nameInput = screen.getByLabelText(/Full Name/i);
      fireEvent.change(nameInput, { target: { value: 'J' } });

      expect(screen.queryByTestId('name-error')).not.toBeInTheDocument();
    });

    it('applies error styling to invalid fields', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      fireEvent.click(submitButton);

      const nameInput = screen.getByLabelText(/Full Name/i);
      expect(nameInput).toHaveClass('border-red-500');
      expect(nameInput).toHaveClass('bg-red-50');
    });

    it('sets aria-invalid on invalid fields', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      fireEvent.click(submitButton);

      const nameInput = screen.getByLabelText(/Full Name/i);
      expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Submit State Management', () => {
    it('shows loading state during submission', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      
      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(screen.getByText(/Sending/i)).toBeInTheDocument();
    });

    it('disables submit button during submission', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      
      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(submitButton).toBeDisabled();
    });

    it('does not submit form when validation fails', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      fireEvent.click(submitButton);

      expect(screen.queryByText(/Sending/i)).not.toBeInTheDocument();
    });
  });

  describe('Success Message', () => {
    it('displays success message after successful submission', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      
      await act(async () => {
        fireEvent.click(submitButton);
        await vi.advanceTimersByTimeAsync(1100);
      });

      expect(screen.getByTestId('contact-form-success')).toBeInTheDocument();
      expect(screen.getByText(/Thank You/i)).toBeInTheDocument();
    });

    it('shows reset button in success state', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      
      await act(async () => {
        fireEvent.click(submitButton);
        await vi.advanceTimersByTimeAsync(1100);
      });

      expect(screen.getByTestId('contact-form-reset-button')).toBeInTheDocument();
    });

    it('resets form when clicking reset button', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      
      await act(async () => {
        fireEvent.click(submitButton);
        await vi.advanceTimersByTimeAsync(1100);
      });

      const resetButton = screen.getByTestId('contact-form-reset-button');
      fireEvent.click(resetButton);

      expect(screen.getByTestId('contact-form')).toBeInTheDocument();
      expect(screen.queryByTestId('contact-form-success')).not.toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies custom className', () => {
      render(<ContactForm className="custom-class" />);

      const form = screen.getByTestId('contact-form');
      expect(form).toHaveClass('custom-class');
    });

    it('applies rounded to input fields', () => {
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/Full Name/i);
      expect(nameInput).toHaveClass('rounded');
    });

    it('applies full width to submit button', () => {
      render(<ContactForm />);

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      expect(submitButton).toHaveClass('w-full');
    });
  });

  describe('Accessibility', () => {
    it('has proper label associations', () => {
      render(<ContactForm />);

      expect(screen.getByLabelText(/Full Name/i)).toHaveAttribute('id', 'name');
      expect(screen.getByLabelText(/Email Address/i)).toHaveAttribute('id', 'email');
      expect(screen.getByLabelText(/Phone Number/i)).toHaveAttribute('id', 'phone');
      expect(screen.getByLabelText(/Service Type/i)).toHaveAttribute('id', 'serviceType');
      expect(screen.getByLabelText(/Message/i)).toHaveAttribute('id', 'message');
    });

    it('uses noValidate to prevent browser validation', () => {
      render(<ContactForm />);

      const form = screen.getByTestId('contact-form');
      expect(form).toHaveAttribute('noValidate');
    });
  });

  describe('Valid Form Submission', () => {
    it('accepts valid form with all fields filled', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '+64 21 123 4567' } });
      fireEvent.change(screen.getByLabelText(/Service Type/i), { target: { value: 'residential' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'I need a quote for cleaning services.' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      
      await act(async () => {
        fireEvent.click(submitButton);
        await vi.advanceTimersByTimeAsync(1100);
      });

      expect(screen.getByTestId('contact-form-success')).toBeInTheDocument();
    });

    it('accepts valid form with only required fields', async () => {
      render(<ContactForm />);

      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

      const submitButton = screen.getByRole('button', { name: /Send Request/i });
      
      await act(async () => {
        fireEvent.click(submitButton);
        await vi.advanceTimersByTimeAsync(1100);
      });

      expect(screen.getByTestId('contact-form-success')).toBeInTheDocument();
    });
  });
});
