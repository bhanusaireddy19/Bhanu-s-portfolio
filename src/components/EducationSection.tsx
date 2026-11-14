import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function EducationSection() {
  const { education, credentials } = PORTFOLIO_DATA;

  return (
    <section id="education" className="border-b border-neutral-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Education Timeline */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] text-neutral-500">
              04 · Academic Background
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl text-balance">
              {education.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            {education.subheading}
          </p>
        </div>

        <div className="relative border-l border-neutral-200 pl-6 sm:pl-8 space-y-10">
          {education.entries.map((entry, idx) => (
            <Reveal key={entry.id} delayMs={idx * 60}>
              <article className="relative rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] sm:-left-[39px] top-8 h-3 w-3 rounded-full border-2 border-[#0A0A0A] bg-white"
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-xs font-medium text-neutral-500">
                      {entry.period}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-[#0A0A0A]">
                      {entry.institution}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-[#0A0A0A] sm:text-right">
                    <span>{entry.degree}</span>
                    <span aria-hidden="true" className="mx-2 text-neutral-400">
                      ·
                    </span>
                    <span className="text-neutral-600">{entry.specialization}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
                  <span>
                    Current Academic Year:{' '}
                    <strong className="font-mono font-medium text-[#0A0A0A] tabular-nums">
                      {entry.academicYear}
                    </strong>
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
                  {entry.summary}
                </p>

                <div className="mt-6 border-t border-neutral-200 pt-5">
                  <h4 className="font-display text-xs font-semibold tracking-[0.06em] text-neutral-500">
                    Relevant Coursework
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                    {entry.coursework.map((course) => (
                      <li
                        key={course}
                        className="border-b border-neutral-200/80 py-2.5 text-xs font-medium text-[#0A0A0A]"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-20 border-t border-neutral-200 pt-16">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] text-neutral-500">
                Credentials
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#0A0A0A] sm:text-3xl text-balance">
                {credentials.heading}
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              {credentials.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {credentials.items.map((item, idx) => (
              <Reveal key={item.id} delayMs={(idx % 3) * 50}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-colors duration-150 hover:border-neutral-400">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-neutral-500">
                      <span className="font-medium text-[#0A0A0A]">{item.type}</span>
                      <span className="font-mono tabular-nums">{item.year}</span>
                    </div>

                    <h4 className="mt-3 font-display text-base font-semibold leading-snug text-[#0A0A0A]">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs font-medium text-neutral-500">
                      {item.issuer}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {item.summary}
                    </p>
                  </div>

                  {item.credentialCode && (
                    <div className="mt-5 border-t border-neutral-100 pt-3 flex items-center justify-between text-xs text-neutral-400">
                      <span>Reference</span>
                      <span className="font-mono tabular-nums text-neutral-600">
                        {item.credentialCode}
                      </span>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
