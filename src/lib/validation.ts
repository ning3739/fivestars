/**
 * Form validation utilities for FiveStarsCleaning website
 * 
 * Provides pure validation functions for contact form data.
 * 
 * @see Requirements 5.3 - Form validation
 */

/**
 * Form state representing the contact form data
 * @see Requirements 5.2 - Contact form fields
 */
export interface FormState {
  /** Customer name */
  name: string;
  /** Customer email address */
  email: string;
  /** Customer phone number (optional) */
  phone: string;
  /** Selected service type */
  serviceType: string;
  /** Customer message */
  message: string;
}

/**
 * Form errors object containing field-specific error messages
 */
export interface FormErrors {
  /** Error message for name field */
  name?: string;
  /** Error message for email field */
  email?: string;
  /** Error message for phone field */
  phone?: string;
  /** Error message for message field */
  message?: string;
}

/**
 * Email validation regex pattern
 * Validates standard email format: local@domain.tld
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation regex pattern
 * Supports various formats:
 * - International: +64 21 123 4567, +1-555-123-4567
 * - Local: 021 123 4567, (021) 123-4567
 * - With or without spaces, dashes, parentheses
 * - Minimum 7 digits, maximum 15 digits (ITU-T E.164 standard)
 */
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

/**
 * Error messages in Chinese as specified in the design document
 */
export const ERROR_MESSAGES = {
  NAME_REQUIRED: '请输入您的姓名',
  EMAIL_INVALID: '请输入有效的邮箱地址',
  PHONE_INVALID: '请输入有效的电话号码',
  MESSAGE_REQUIRED: '请输入您的消息',
} as const;

/**
 * Check if a string is empty or contains only whitespace
 * 
 * @param value - String to check
 * @returns true if the string is empty or whitespace-only
 */
export function isEmpty(value: string | null | undefined): boolean {
  if (value === null || value === undefined) {
    return true;
  }
  return value.trim().length === 0;
}

/**
 * Validate email format
 * 
 * @param email - Email address to validate
 * @returns true if the email format is valid
 */
export function isValidEmail(email: string): boolean {
  if (isEmpty(email)) {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Validate phone number format
 * 
 * @param phone - Phone number to validate
 * @returns true if the phone format is valid
 */
export function isValidPhone(phone: string): boolean {
  if (isEmpty(phone)) {
    return true; // Phone is optional, empty is valid
  }
  const trimmedPhone = phone.trim();
  // Check if phone has at least 7 digits
  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return false;
  }
  return PHONE_REGEX.test(trimmedPhone);
}

/**
 * Validate contact form data
 * 
 * A pure function that validates form data and returns an errors object.
 * Required fields: name, email, message
 * Optional fields: phone (but must be valid format if provided), serviceType
 * 
 * @param formData - Form data to validate
 * @returns FormErrors object with field-specific error messages
 * 
 * @example
 * const errors = validateForm({ name: '', email: 'invalid', phone: '', serviceType: '', message: '' });
 * // Returns: { name: '请输入您的姓名', email: '请输入有效的邮箱地址', message: '请输入您的消息' }
 * 
 * @validates Requirements 5.3 - Form validation
 */
export function validateForm(formData: FormState): FormErrors {
  const errors: FormErrors = {};

  // Validate name (required)
  if (isEmpty(formData.name)) {
    errors.name = ERROR_MESSAGES.NAME_REQUIRED;
  }

  // Validate email (required and must be valid format)
  if (isEmpty(formData.email)) {
    errors.email = ERROR_MESSAGES.EMAIL_INVALID;
  } else if (!isValidEmail(formData.email)) {
    errors.email = ERROR_MESSAGES.EMAIL_INVALID;
  }

  // Validate phone (optional but must be valid format if provided)
  if (!isEmpty(formData.phone) && !isValidPhone(formData.phone)) {
    errors.phone = ERROR_MESSAGES.PHONE_INVALID;
  }

  // Validate message (required)
  if (isEmpty(formData.message)) {
    errors.message = ERROR_MESSAGES.MESSAGE_REQUIRED;
  }

  return errors;
}

/**
 * Check if form has any validation errors
 * 
 * @param errors - FormErrors object to check
 * @returns true if there are no errors
 */
export function isFormValid(errors: FormErrors): boolean {
  return Object.keys(errors).length === 0;
}
