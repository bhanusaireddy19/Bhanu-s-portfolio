import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Footer() {
  const { identity, navigation, contact, footer } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-neutral-200 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#top"
              className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A]"
            >
              {identity.initials} · {identity.fullName}
            </a>
            <p className="mt-1.5 text-xs text-neutral-500">{footer.note}</p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs font-medium text-neutral-600 transition-colors hover:text-[#0A0A0A]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-neutral-600">
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-[#0A0A0A]"
            >
              Email
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#0A0A0A]"
            >
              LinkedIn
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#0A0A0A]"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">{footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-[#0A0A0A] transition-colors hover:border-[#0A0A0A] hover:bg-neutral-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
