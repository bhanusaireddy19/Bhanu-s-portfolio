import { PORTFOLIO_DATA } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

export function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="border-b border-neutral-200 bg-[#FAFAFA] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-3">
          <p className="text-xs font-medium tracking-[0.12em] text-neutral-500">
            01 · Profile
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl text-balance">
            {about.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Monochrome Profile Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 text-center">
              <div className="aspect-square w-56 sm:w-64 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-200">
                <EditorialImage
                  src={about.image}
                  alt={about.imageAlt}
                  fallbackTitle="Bhanu Sai"
                  className="h-full w-full scale-[1.02] object-cover object-center grayscale transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="mt-6 font-display text-base font-semibold text-[#0A0A0A]">
                Bhanu Sai
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                B.Tech. Artificial Intelligence · Joy University
              </p>
            </div>
          </Reveal>

          {/* Right Column: Narrative + 4 Information Cards */}
          <Reveal delayMs={60} className="lg:col-span-7">
            <p className="font-display text-xl font-medium leading-relaxed text-[#0A0A0A] sm:text-2xl">
              {about.lead}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.highlights.map((card) => (
                <div
                  key={card.id}
                  className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors duration-150 hover:border-neutral-400"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-sm font-semibold text-[#0A0A0A]">
                      {card.title}
                    </h3>
                    <span className="font-mono text-xs text-neutral-400 tabular-nums">
                      {card.index}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
