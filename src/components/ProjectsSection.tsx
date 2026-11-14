import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectCategory, ProjectItem } from '../types/portfolio';
import {
  filterProjectsByCategory,
  formatTechnologyLine,
} from '../utils/portfolioHelpers';
import { EditorialImage } from './EditorialImage';
import { ProjectModal } from './ProjectModal';
import { Reveal } from './Reveal';

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects = filterProjectsByCategory(projects.items, selectedCategory);

  return (
    <section id="portfolio" className="border-b border-neutral-200 bg-[#FAFAFA] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] text-neutral-500">
              03 · Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#0A0A0A] sm:text-4xl text-balance">
              {projects.heading}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
              {projects.subheading}
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-neutral-200 bg-white p-1 self-start lg:self-auto"
          >
            {projects.categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isSelected}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A] ${
                    isSelected
                      ? 'bg-[#0A0A0A] text-white'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-[#0A0A0A]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <p
          className="mb-6 text-xs text-neutral-500 tabular-nums"
          data-testid="project-count"
        >
          Showing {visibleProjects.length}{' '}
          {visibleProjects.length === 1 ? 'project' : 'projects'}
          {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
        </p>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {visibleProjects.map((project, index) => {
            const isHeroFeature = selectedCategory === 'All' && index === 0;
            const isCompanion = selectedCategory === 'All' && index === 1;
            const colSpanClass = isHeroFeature
              ? 'lg:col-span-7'
              : isCompanion
                ? 'lg:col-span-5'
                : 'lg:col-span-6';

            return (
              <Reveal
                key={project.id}
                delayMs={(index % 2) * 60}
                className={colSpanClass}
              >
                <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:border-neutral-400 hover:shadow-sm">
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    aria-label={`Inspect ${project.title} details`}
                    className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0A0A0A]"
                  >
                    <div className="overflow-hidden bg-neutral-100">
                      <EditorialImage
                        src={project.image}
                        alt={project.imageAlt}
                        fallbackTitle={project.title}
                        className={`w-full object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                          isHeroFeature ? 'aspect-[16/9]' : 'aspect-[4/3]'
                        }`}
                      />
                    </div>

                    <div className="px-6 pt-6">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{project.year}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-[#0A0A0A] group-hover:underline group-hover:underline-offset-4 sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                        {project.shortDescription}
                      </p>
                    </div>
                  </button>
                </div>

                <div className="px-6 pb-6 pt-5">
                  <p className="border-t border-neutral-200/80 pt-4 text-xs font-medium text-neutral-500">
                    {formatTechnologyLine(project.technologies)}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-[#0A0A0A] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                    >
                      <span>Project Overview</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="inline-flex min-h-[40px] items-center gap-1 text-xs font-medium text-neutral-600 transition-colors hover:text-[#0A0A0A]"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="inline-flex min-h-[40px] items-center gap-1 text-xs font-medium text-[#0A0A0A] transition-colors hover:text-neutral-600"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
