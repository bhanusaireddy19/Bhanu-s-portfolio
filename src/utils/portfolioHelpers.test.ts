import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjectsByCategory,
  formatTechnologyLine,
  hasContactFormErrors,
  validateContactForm,
} from './portfolioHelpers';
import type { ProjectItem } from '../types/portfolio';

const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Heuristic Search Solver',
    category: 'AI',
    year: '2026',
    shortDescription: 'AI project',
    fullDescription: 'Full AI project description',
    highlights: ['H1'],
    technologies: ['Python', 'Artificial Intelligence'],
    image: '/img1.jpg',
    imageAlt: 'Img 1',
    githubUrl: 'https://github.com/settings/admin',
  },
  {
    id: 'p2',
    title: 'Data Explorer',
    category: 'Data Analysis',
    year: '2026',
    shortDescription: 'Data project',
    fullDescription: 'Full data project description',
    highlights: ['H2'],
    technologies: ['Python', 'Data Analysis'],
    image: '/img2.jpg',
    imageAlt: 'Img 2',
    githubUrl: 'https://github.com/settings/admin',
  },
  {
    id: 'p3',
    title: 'Grid Reader',
    category: 'Frontend',
    year: '2025',
    shortDescription: 'Frontend project',
    fullDescription: 'Full frontend project description',
    highlights: ['H3'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/img3.jpg',
    imageAlt: 'Img 3',
    githubUrl: 'https://github.com/settings/admin',
  },
];

test('filterProjectsByCategory returns all items when All is selected', () => {
  const result = filterProjectsByCategory(SAMPLE_PROJECTS, 'All');
  assert.equal(result.length, 3);
});

test('filterProjectsByCategory filters accurately by specific category', () => {
  const ai = filterProjectsByCategory(SAMPLE_PROJECTS, 'AI');
  assert.equal(ai.length, 1);
  assert.equal(ai[0].id, 'p1');

  const data = filterProjectsByCategory(SAMPLE_PROJECTS, 'Data Analysis');
  assert.equal(data.length, 1);
  assert.equal(data[0].id, 'p2');

  const frontend = filterProjectsByCategory(SAMPLE_PROJECTS, 'Frontend');
  assert.equal(frontend.length, 1);
  assert.equal(frontend[0].id, 'p3');
});

test('formatTechnologyLine joins technologies with clean typographic middots', () => {
  assert.equal(
    formatTechnologyLine(['Python', 'C', 'JavaScript']),
    'Python · C · JavaScript'
  );
});

test('validateContactForm catches missing required fields and invalid email/phone', () => {
  const emptyErrors = validateContactForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  assert.equal(hasContactFormErrors(emptyErrors), true);
  assert.ok(emptyErrors.name);
  assert.ok(emptyErrors.email);
  assert.ok(emptyErrors.message);
  assert.equal(emptyErrors.phone, undefined);

  const invalidFormat = validateContactForm({
    name: 'Bhanu',
    email: 'invalid-email',
    phone: '123',
    message: 'Short',
  });
  assert.ok(invalidFormat.email);
  assert.ok(invalidFormat.phone);
  assert.ok(invalidFormat.message);
});

test('validateContactForm passes on valid contact submission', () => {
  const valid = validateContactForm({
    name: 'Ananya Rao',
    email: 'ananya@example.com',
    phone: '9703049449',
    message: 'Interested in collaborating on an Artificial Intelligence project.',
  });
  assert.equal(hasContactFormErrors(valid), false);
});
