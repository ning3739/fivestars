import { describe, it, expect } from 'vitest';
import {
  validateForm,
  isFormValid,
  isEmpty,
  isValidEmail,
  isValidPhone,
  ERROR_MESSAGES,
  type FormState,
  type FormErrors,
} from './validation';

describe('isEmpty', () => {
  it('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns true for whitespace-only string', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('\t')).toBe(true);
    expect(isEmpty('\n')).toBe(true);
    expect(isEmpty('  \t\n  ')).toBe(true);
  });

  it('returns false for non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty('  hello  ')).toBe(false);
    expect(isEmpty('a')).toBe(false);
  });
});

describe('isValidEmail', () => {
  describe('valid emails', () => {
    it('accepts standard email format', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user@domain.co.nz')).toBe(true);
      expect(isValidEmail('name.surname@company.org')).toBe(true);
    });

    it('accepts emails with numbers', () => {
      expect(isValidEmail('user123@example.com')).toBe(true);
      expect(isValidEmail('test@domain123.com')).toBe(true);
    });

    it('accepts emails with special characters in local part', () => {
      expect(isValidEmail('user+tag@example.com')).toBe(true);
      expect(isValidEmail('user.name@example.com')).toBe(true);
      expect(isValidEmail('user_name@example.com')).toBe(true);
    });

    it('trims whitespace before validation', () => {
      expect(isValidEmail('  test@example.com  ')).toBe(true);
    });
  });

  describe('invalid emails', () => {
    it('rejects empty string', () => {
      expect(isValidEmail('')).toBe(false);
    });

    it('rejects whitespace-only string', () => {
      expect(isValidEmail('   ')).toBe(false);
    });

    it('rejects email without @', () => {
      expect(isValidEmail('testexample.com')).toBe(false);
    });

    it('rejects email without domain', () => {
      expect(isValidEmail('test@')).toBe(false);
    });

    it('rejects email without local part', () => {
      expect(isValidEmail('@example.com')).toBe(false);
    });

    it('rejects email without TLD', () => {
      expect(isValidEmail('test@example')).toBe(false);
    });

    it('rejects email with spaces', () => {
      expect(isValidEmail('test @example.com')).toBe(false);
      expect(isValidEmail('test@ example.com')).toBe(false);
    });

    it('rejects plain text', () => {
      expect(isValidEmail('not an email')).toBe(false);
    });
  });
});

describe('isValidPhone', () => {
  describe('valid phone numbers', () => {
    it('accepts NZ mobile numbers', () => {
      expect(isValidPhone('021 123 4567')).toBe(true);
      expect(isValidPhone('0211234567')).toBe(true);
      expect(isValidPhone('021-123-4567')).toBe(true);
    });

    it('accepts NZ landline numbers', () => {
      expect(isValidPhone('09 123 4567')).toBe(true);
      expect(isValidPhone('091234567')).toBe(true);
    });

    it('accepts international format', () => {
      expect(isValidPhone('+64 21 123 4567')).toBe(true);
      expect(isValidPhone('+6421123456')).toBe(true);
      expect(isValidPhone('+1-555-123-4567')).toBe(true);
    });

    it('accepts numbers with parentheses', () => {
      expect(isValidPhone('(021) 123-4567')).toBe(true);
      expect(isValidPhone('(09) 123 4567')).toBe(true);
    });

    it('returns true for empty string (phone is optional)', () => {
      expect(isValidPhone('')).toBe(true);
    });

    it('returns true for whitespace-only string (phone is optional)', () => {
      expect(isValidPhone('   ')).toBe(true);
    });
  });

  describe('invalid phone numbers', () => {
    it('rejects too short numbers (less than 7 digits)', () => {
      expect(isValidPhone('123456')).toBe(false);
      expect(isValidPhone('12345')).toBe(false);
    });

    it('rejects too long numbers (more than 15 digits)', () => {
      expect(isValidPhone('1234567890123456')).toBe(false);
    });

    it('rejects letters', () => {
      expect(isValidPhone('abc1234567')).toBe(false);
      expect(isValidPhone('call-me')).toBe(false);
    });

    it('rejects special characters other than allowed', () => {
      expect(isValidPhone('021#123#4567')).toBe(false);
    });
  });
});

describe('validateForm', () => {
  const validFormData: FormState = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '021 123 4567',
    serviceType: 'residential',
    message: 'I need a cleaning service.',
  };

  describe('valid form data', () => {
    /**
     * @validates Requirements 5.3 - Form validation
     */
    it('returns empty errors object for valid form data', () => {
      const errors = validateForm(validFormData);
      expect(errors).toEqual({});
      expect(isFormValid(errors)).toBe(true);
    });

    it('accepts form without phone (optional field)', () => {
      const formData: FormState = {
        ...validFormData,
        phone: '',
      };
      const errors = validateForm(formData);
      expect(errors).toEqual({});
    });

    it('accepts form without serviceType', () => {
      const formData: FormState = {
        ...validFormData,
        serviceType: '',
      };
      const errors = validateForm(formData);
      expect(errors).toEqual({});
    });
  });

  describe('name validation', () => {
    /**
     * @validates Requirements 5.3 - Required field validation
     */
    it('returns error for empty name', () => {
      const formData: FormState = {
        ...validFormData,
        name: '',
      };
      const errors = validateForm(formData);
      expect(errors.name).toBe(ERROR_MESSAGES.NAME_REQUIRED);
    });

    it('returns error for whitespace-only name', () => {
      const formData: FormState = {
        ...validFormData,
        name: '   ',
      };
      const errors = validateForm(formData);
      expect(errors.name).toBe(ERROR_MESSAGES.NAME_REQUIRED);
    });

    it('accepts valid name', () => {
      const formData: FormState = {
        ...validFormData,
        name: 'Jane Smith',
      };
      const errors = validateForm(formData);
      expect(errors.name).toBeUndefined();
    });
  });

  describe('email validation', () => {
    /**
     * @validates Requirements 5.3 - Email format validation
     */
    it('returns error for empty email', () => {
      const formData: FormState = {
        ...validFormData,
        email: '',
      };
      const errors = validateForm(formData);
      expect(errors.email).toBe(ERROR_MESSAGES.EMAIL_INVALID);
    });

    it('returns error for invalid email format', () => {
      const formData: FormState = {
        ...validFormData,
        email: 'invalid-email',
      };
      const errors = validateForm(formData);
      expect(errors.email).toBe(ERROR_MESSAGES.EMAIL_INVALID);
    });

    it('returns error for email without domain', () => {
      const formData: FormState = {
        ...validFormData,
        email: 'test@',
      };
      const errors = validateForm(formData);
      expect(errors.email).toBe(ERROR_MESSAGES.EMAIL_INVALID);
    });

    it('accepts valid email', () => {
      const formData: FormState = {
        ...validFormData,
        email: 'valid@example.com',
      };
      const errors = validateForm(formData);
      expect(errors.email).toBeUndefined();
    });
  });

  describe('phone validation', () => {
    /**
     * @validates Requirements 5.3 - Phone format validation
     */
    it('does not return error for empty phone (optional)', () => {
      const formData: FormState = {
        ...validFormData,
        phone: '',
      };
      const errors = validateForm(formData);
      expect(errors.phone).toBeUndefined();
    });

    it('returns error for invalid phone format', () => {
      const formData: FormState = {
        ...validFormData,
        phone: '123',
      };
      const errors = validateForm(formData);
      expect(errors.phone).toBe(ERROR_MESSAGES.PHONE_INVALID);
    });

    it('returns error for phone with letters', () => {
      const formData: FormState = {
        ...validFormData,
        phone: 'call-me-now',
      };
      const errors = validateForm(formData);
      expect(errors.phone).toBe(ERROR_MESSAGES.PHONE_INVALID);
    });

    it('accepts valid phone number', () => {
      const formData: FormState = {
        ...validFormData,
        phone: '+64 21 123 4567',
      };
      const errors = validateForm(formData);
      expect(errors.phone).toBeUndefined();
    });
  });

  describe('message validation', () => {
    /**
     * @validates Requirements 5.3 - Required field validation
     */
    it('returns error for empty message', () => {
      const formData: FormState = {
        ...validFormData,
        message: '',
      };
      const errors = validateForm(formData);
      expect(errors.message).toBe(ERROR_MESSAGES.MESSAGE_REQUIRED);
    });

    it('returns error for whitespace-only message', () => {
      const formData: FormState = {
        ...validFormData,
        message: '   ',
      };
      const errors = validateForm(formData);
      expect(errors.message).toBe(ERROR_MESSAGES.MESSAGE_REQUIRED);
    });

    it('accepts valid message', () => {
      const formData: FormState = {
        ...validFormData,
        message: 'Please clean my house.',
      };
      const errors = validateForm(formData);
      expect(errors.message).toBeUndefined();
    });
  });

  describe('multiple errors', () => {
    /**
     * @validates Requirements 5.3 - Form validation completeness
     */
    it('returns all errors for completely empty form', () => {
      const formData: FormState = {
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      };
      const errors = validateForm(formData);
      expect(errors.name).toBe(ERROR_MESSAGES.NAME_REQUIRED);
      expect(errors.email).toBe(ERROR_MESSAGES.EMAIL_INVALID);
      expect(errors.message).toBe(ERROR_MESSAGES.MESSAGE_REQUIRED);
      expect(errors.phone).toBeUndefined(); // Phone is optional
      expect(isFormValid(errors)).toBe(false);
    });

    it('returns multiple errors for partially invalid form', () => {
      const formData: FormState = {
        name: '',
        email: 'invalid',
        phone: '123',
        serviceType: 'residential',
        message: '',
      };
      const errors = validateForm(formData);
      expect(errors.name).toBe(ERROR_MESSAGES.NAME_REQUIRED);
      expect(errors.email).toBe(ERROR_MESSAGES.EMAIL_INVALID);
      expect(errors.phone).toBe(ERROR_MESSAGES.PHONE_INVALID);
      expect(errors.message).toBe(ERROR_MESSAGES.MESSAGE_REQUIRED);
    });
  });
});

describe('isFormValid', () => {
  it('returns true for empty errors object', () => {
    expect(isFormValid({})).toBe(true);
  });

  it('returns false when there are errors', () => {
    expect(isFormValid({ name: 'Error' })).toBe(false);
    expect(isFormValid({ email: 'Error', message: 'Error' })).toBe(false);
  });
});
