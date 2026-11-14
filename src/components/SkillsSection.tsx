import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="border-b border-neutral-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] text-neutral-500">
              02 · Capabilities
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl text-balance">
              {skills.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">
            {skills.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.categories.map((group, groupIdx) => (
            <Reveal
              key={group.id}
              delayMs={groupIdx * 50}
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 transition-colors duration-200 hover:border-[#0A0A0A] hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A]">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-neutral-400 tabular-nums">
                    {group.index}
                  </span>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-neutral-500">
                  {group.description}
                </p>

                <ul className="mt-6 divide-y divide-neutral-200/80 border-t border-neutral-200/80">
                  {group.items.map((skill, itemIdx) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between py-3 text-sm font-medium text-[#0A0A0A] transition-transform duration-150 group-hover:translate-x-0.5"
                    >
                      <span>{skill}</span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[11px] text-neutral-400 tabular-nums"
                      >
                        {String(itemIdx + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
