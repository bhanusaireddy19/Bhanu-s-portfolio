import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { ProjectItem } from '../types/portfolio';
import { formatTechnologyLine } from '../utils/portfolioHelpers';
import { EditorialImage } from './EditorialImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.title} details`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-[#0A0A0A] transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            <X className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
            <EditorialImage
              src={project.image}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="aspect-[16/9] w-full object-cover grayscale"
            />
          </div>

          <h3
            id="project-modal-title"
            className="mt-6 font-display text-2xl font-semibold tracking-tight text-[#0A0A0A] sm:text-3xl"
          >
            {project.title}
          </h3>

          <p className="mt-2 text-xs font-medium text-neutral-500">
            {formatTechnologyLine(project.technologies)}
          </p>

          <p className="mt-5 text-base leading-relaxed text-neutral-700">
            {project.fullDescription}
          </p>

          <div className="mt-7 border-t border-neutral-200 pt-6">
            <h4 className="font-display text-sm font-semibold text-[#0A0A0A]">
              Key Engineering Highlights
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600"
                >
                  <span className="mt-0.5 font-mono text-xs text-neutral-400 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0A0A0A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 whitespace-nowrap shrink-0"
            >
              <span>View on GitHub</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-[#0A0A0A] transition-colors hover:border-[#0A0A0A] hover:bg-neutral-50 whitespace-nowrap shrink-0"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
