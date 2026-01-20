'use client';

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { MaterialIcon } from '@/components/icons/MaterialIcon';
import { validateForm, isFormValid, FormState, FormErrors } from '@/lib/validation';
import { SERVICE_TYPES } from '@/lib/constants';

/**
 * ContactForm component props
 */
export interface ContactFormProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Initial form state with empty values
 */
const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  message: '',
};

/**
 * ContactForm Component
 * 
 * A contact form component for collecting customer inquiries.
 * Features:
 * - Form fields: name, email, phone, service type (dropdown), message (textarea)
 * - Real-time validation with error messages displayed below each field
 * - Submit button with loading state
 * - Success message after successful submission
 * 
 * @example
 * <ContactForm className="max-w-lg mx-auto" />
 * 
 * @validates Requirements 5.2 - THE Contact_Form SHALL contain name, email, phone, service type, message fields
 * @validates Requirements 5.3 - WHEN user submits empty required fields THEN THE Contact_Form SHALL display validation errors
 * @validates Requirements 5.4 - WHEN user submits valid form THEN THE Contact_Form SHALL display success message
 */
export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  /**
   * Handle input field changes
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData);
    
    // Check captcha
    if (!captchaToken) {
      validationErrors.message = 'Please complete the captcha verification';
    }
    
    setErrors(validationErrors);
    
    // If there are errors, don't submit
    if (!isFormValid(validationErrors) || !captchaToken) {
      return;
    }
    
    // Start submission
    setIsSubmitting(true);
    
    try {
      // Submit directly to Web3Forms
      const submitData = new FormData();
      submitData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '');
      submitData.append('subject', `New Quote Request from ${formData.name}`);
      submitData.append('from_name', 'FiveStars Website');
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('serviceType', formData.serviceType);
      submitData.append('message', formData.message);
      submitData.append('h-captcha-response', captchaToken);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error('Submission failed');
      }
      
      // Success
      setIsSubmitted(true);
      setFormData(initialFormState);
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      console.error('Form submission failed:', error);
      setErrors({ message: 'Failed to submit. Please try again or call us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message after submission
  if (isSubmitted) {
    return (
      <div
        data-testid="contact-form-success"
        className={cn(
          'bg-green-50 border border-green-200 rounded-md p-8 text-center',
          className
        )}
      >
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <MaterialIcon name="check_circle" size="xl" className="text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-heading font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 mb-6">
          We&apos;ve received your request and will contact you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          data-testid="contact-form-reset-button"
          className="inline-flex items-center justify-center gap-2 font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-primary text-white hover:bg-primary-600 active:bg-primary-700 px-6 py-3 text-base min-h-11 min-w-11"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      data-testid="contact-form"
      onSubmit={handleSubmit}
      className={cn('space-y-5', className)}
      noValidate
    >
      {/* Full Name and Phone Number Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(
              'w-full px-4 py-2.5 rounded border transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'min-h-11 text-sm',
              errors.name
                ? 'border-red-500 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            )}
          />
          {errors.name && (
            <p
              id="name-error"
              data-testid="name-error"
              className="mt-1 text-xs text-red-600 flex items-center gap-1"
            >
              <MaterialIcon name="error" size="sm" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 021 123 4567"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={cn(
              'w-full px-4 py-2.5 rounded border transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'min-h-11 text-sm',
              errors.phone
                ? 'border-red-500 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            )}
          />
          {errors.phone && (
            <p
              id="phone-error"
              data-testid="phone-error"
              className="mt-1 text-xs text-red-600 flex items-center gap-1"
            >
              <MaterialIcon name="error" size="sm" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Email Address and Service Type Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. jane@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(
              'w-full px-4 py-2.5 rounded border transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'min-h-11 text-sm',
              errors.email
                ? 'border-red-500 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            )}
          />
          {errors.email && (
            <p
              id="email-error"
              data-testid="email-error"
              className="mt-1 text-xs text-red-600 flex items-center gap-1"
            >
              <MaterialIcon name="error" size="sm" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Service Type Field */}
        <div>
          <label
            htmlFor="serviceType"
            className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
          >
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-2.5 rounded border transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'min-h-11 bg-white text-sm',
              'border-gray-200 hover:border-gray-300'
            )}
          >
            {SERVICE_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your requirements..."
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(
            'w-full px-4 py-2.5 rounded border transition-colors resize-y',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'text-sm',
            errors.message
              ? 'border-red-500 bg-red-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
          )}
        />
        {errors.message && (
          <p
            id="message-error"
            data-testid="message-error"
            className="mt-1 text-xs text-red-600 flex items-center gap-1"
          >
            <MaterialIcon name="error" size="sm" />
            {errors.message}
          </p>
        )}
      </div>

      {/* hCaptcha */}
      <div>
        <HCaptcha
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || '50b2fe65-b00b-4b9e-ad62-3ba471098be2'}
          reCaptchaCompat={false}
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
          size="normal"
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={isSubmitting || !captchaToken}
          className="w-full"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <MaterialIcon name="progress_activity" size="md" className="animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Request <MaterialIcon name="arrow_forward" size="sm" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
