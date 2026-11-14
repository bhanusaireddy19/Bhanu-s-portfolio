import type {
  ContactFormErrors,
  ContactFormValues,
  ProjectCategory,
  ProjectItem,
} from '../types/portfolio';

export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: ProjectCategory
): ProjectItem[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function formatTechnologyLine(technologies: string[]): string {
  return technologies.join(' · ');
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedPhone = values.phone.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedPhone.length > 0) {
    const digitsOnly = trimmedPhone.replace(/[\s\-()+]/g, '');
    if (!/^\d{7,15}$/.test(digitsOnly)) {
      errors.phone = 'Please enter a valid phone number (7–15 digits) or leave blank.';
    }
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please share a brief message (at least 10 characters).';
  }

  return errors;
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
