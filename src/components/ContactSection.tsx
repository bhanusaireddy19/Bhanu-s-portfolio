import { type FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ContactFormErrors, ContactFormValues } from '../types/portfolio';
import {
  hasContactFormErrors,
  validateContactForm,
} from '../utils/portfolioHelpers';
import { Reveal } from './Reveal';

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactSection() {
  const { contact } = PORTFOLIO_DATA;
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback ignored silently if restricted in sandbox
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (hasContactFormErrors(validationErrors)) {
      return;
    }

    setSubmittedData({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      message: values.message.trim(),
    });
    setValues(INITIAL_VALUES);
    setErrors({});
  };

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="border-b border-neutral-200 bg-[#FAFAFA] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Channels */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] text-neutral-500">
                05 · Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-5xl leading-[1.08] text-balance">
                {contact.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600">
                {contact.subheading}
              </p>
            </div>

            <div className="mt-10 divide-y divide-neutral-200 border-t border-b border-neutral-200">
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-neutral-500">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-0.5 block truncate text-sm font-medium text-[#0A0A0A] hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email to clipboard"
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-[#0A0A0A] transition-colors hover:border-[#0A0A0A] whitespace-nowrap shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <div>
                  <p className="text-xs font-medium text-neutral-500">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="mt-0.5 block font-mono text-sm font-medium text-[#0A0A0A] tabular-nums hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
                <span className="text-xs text-neutral-400">Direct Line</span>
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-neutral-500">LinkedIn</p>
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block truncate text-sm font-medium text-[#0A0A0A] hover:underline"
                  >
                    {contact.linkedinLabel}
                  </a>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-neutral-500">GitHub</p>
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block truncate text-sm font-medium text-[#0A0A0A] hover:underline"
                  >
                    {contact.githubLabel}
                  </a>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
              </div>
            </div>
          </Reveal>

          {/* Right Column: Interactive Contact Form */}
          <Reveal delayMs={60} className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 lg:p-10">
              {submittedData ? (
                <div role="status" className="py-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0A0A0A] text-white">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[#0A0A0A]">
                    Message Received
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    Thank you, {submittedData.name}. Your inquiry has been recorded for{' '}
                    <span className="font-medium text-[#0A0A0A]">{submittedData.email}</span>.
                    You can also reach Bhanu directly at{' '}
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-medium text-[#0A0A0A] underline underline-offset-4"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>

                  <div className="mt-6 rounded-xl border border-neutral-200 bg-[#FAFAFA] p-4 text-xs text-neutral-600">
                    <p className="font-medium text-[#0A0A0A]">Submitted Summary</p>
                    <p className="mt-1.5 leading-relaxed">{submittedData.message}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="mt-6 inline-flex min-h-[44px] items-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-[#0A0A0A] transition-colors hover:border-[#0A0A0A] hover:bg-neutral-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#0A0A0A]"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="Your full name"
                        className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-neutral-400 transition-colors focus:border-[#0A0A0A] focus:outline-none"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#0A0A0A]"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder="you@domain.com"
                        className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-neutral-400 transition-colors focus:border-[#0A0A0A] focus:outline-none"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-[#0A0A0A]"
                    >
                      Phone Number <span className="font-normal text-neutral-400">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      placeholder="e.g. 9703049449"
                      className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-neutral-400 transition-colors focus:border-[#0A0A0A] focus:outline-none"
                    />
                    {errors.phone && (
                      <p
                        id="contact-phone-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-700"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#0A0A0A]"
                    >
                      Project or Inquiry Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Share a brief overview of your project, role, or collaboration idea..."
                      className="mt-2 block w-full resize-y rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-neutral-400 transition-colors focus:border-[#0A0A0A] focus:outline-none"
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-700"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-neutral-500">
                      Direct contact: {contact.phone} · {contact.email}
                    </p>

                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                    >
                      <span>Get In Touch</span>
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
