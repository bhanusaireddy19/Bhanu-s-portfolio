import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sectionIds = PORTFOLIO_DATA.navigation.map((item) => item.id);
      const threshold = Math.max(140, window.innerHeight * 0.35);
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80'
          : 'bg-white border-b border-neutral-200/60'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-[#0A0A0A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
        >
          {PORTFOLIO_DATA.identity.initials} · {PORTFOLIO_DATA.identity.fullName}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600"
        >
          {PORTFOLIO_DATA.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              data-active={activeSection === item.id}
              className={`editorial-link py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A] ${
                activeSection === item.id ? 'text-[#0A0A0A]' : 'hover:text-[#0A0A0A]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0A] px-4 py-2 text-xs font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-[#0A0A0A] transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-neutral-200 bg-white px-6 py-5"
        >
          <div className="flex flex-col gap-1">
            {PORTFOLIO_DATA.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center justify-between border-b border-neutral-100 py-2 text-base font-medium text-neutral-800 hover:text-[#0A0A0A]"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-neutral-400" aria-hidden="true" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0A0A0A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <span>Let’s Connect</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
