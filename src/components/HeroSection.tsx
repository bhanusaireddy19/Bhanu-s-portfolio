import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

export function HeroSection() {
  const { identity, stats } = PORTFOLIO_DATA;

  return (
    <section
      id="top"
      className="border-b border-neutral-200 bg-white pt-10 pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="flex flex-col justify-between lg:col-span-7 py-2 lg:py-4">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-neutral-500">
                {identity.roleLabel}
              </p>

              <h1 className="mt-5 font-display text-[clamp(2.75rem,5.4vw,4.75rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-[#0A0A0A] text-balance">
                {identity.headlinePrefix}{' '}
                <span className="block text-[#0A0A0A]">{identity.fullName}.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {identity.tagline}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#portfolio"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0A0A0A] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                >
                  <span>Explore My Work</span>
                  <ArrowDownRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-[#0A0A0A] transition-colors duration-150 hover:border-[#0A0A0A] hover:bg-neutral-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
              <span>{identity.location}</span>
              <span>Available for 2026 Internships &amp; Collaborations</span>
            </div>
          </div>

          {/* Right Column: Monochrome Studio Portrait */}
          <div className="lg:col-span-5">
            <div className="relative flex h-[380px] sm:h-[440px] lg:h-full lg:min-h-[480px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200/80 bg-[#F4F4F4] p-8 sm:p-10">
              <div className="aspect-square w-full max-w-[340px] overflow-hidden rounded-full bg-white ring-1 ring-neutral-200 shadow-sm">
                <EditorialImage
                  src={identity.heroImage}
                  alt={identity.heroImageAlt}
                  fallbackTitle={identity.fullName}
                  priority
                  className="h-full w-full scale-[1.02] object-cover object-center grayscale transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Statistics Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 border-t border-neutral-200 pt-8 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`py-4 sm:py-0 ${
                index > 0 ? 'border-t border-neutral-200 sm:border-t-0 sm:border-l sm:pl-8' : ''
              }`}
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-[#0A0A0A] tabular-nums lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#0A0A0A]">{stat.label}</p>
              <p className="mt-0.5 text-xs text-neutral-500">{stat.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
