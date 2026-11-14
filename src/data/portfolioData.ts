import projectOpticalImg from '../assets/images/project_neural_vision_1794635126477.jpg';
import projectDataImg from '../assets/images/project_data_topology_1794635126956.jpg';
import projectNlpImg from '../assets/images/project_nlp_interface_1794635126965.jpg';
import projectComputeImg from '../assets/images/project_autonomous_edge_1794635127827.jpg';
import type { PortfolioConfig } from '../types/portfolio';

const PROFILE_PHOTO_PATH =
  '/assets/aistudio/c3b8f74e-3fd3-45ab-9e81-aabe7633f728.tmp_e367b0cf.png';

/**
 * Central Portfolio Data Configuration
 * Update personal details, photography, projects, education, and social links here.
 */
export const PORTFOLIO_DATA: PortfolioConfig = {
  identity: {
    initials: 'BS',
    fullName: 'Bhanu Sai',
    roleLabel: 'AI Engineering Student',
    headlinePrefix: 'Hello, I’m',
    tagline:
      'Building intelligent solutions through technology, creativity and innovation.',
    location: 'Joy University · B.Tech. Artificial Intelligence',
    heroImage: PROFILE_PHOTO_PATH,
    heroImageAlt: 'Black-and-white portrait photograph of Bhanu Sai',
  },
  navigation: [
    { id: 'about', label: 'About Me', href: '#about' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  stats: [
    {
      id: 'projects',
      value: '04',
      label: 'Projects Completed',
      context: 'Artificial Intelligence, data analysis & web systems',
    },
    {
      id: 'technologies',
      value: '11',
      label: 'Technologies Learned',
      context: 'Python, C, JavaScript & modern tooling',
    },
    {
      id: 'certifications',
      value: '05',
      label: 'Certifications',
      context: 'Verified technical & hackathon credentials',
    },
  ],
  about: {
    heading: 'A Little About Me',
    lead: 'Pursuing a B.Tech. in Artificial Intelligence at Joy University (Class of 2026), focused on bridging rigorous Artificial Intelligence foundations with clean, human-centered software.',
    paragraphs: [
      'My academic journey in Artificial Intelligence grew out of a fascination with how mathematical structures and clean code can turn raw, unstructured information into reliable decisions. Starting with core systems programming in C and Python, I developed a strong appreciation for algorithmic clarity before diving deeper into data analysis and intelligent software.',
      'When approaching complex engineering problems, I break systems down to first principles: understand the underlying data distribution, prototype lean baselines quickly, measure real-world edge cases, and wrap every workflow inside an interface that feels effortless to use. My goal is to engineer practical AI-ready software and full-stack tools that solve measurable everyday challenges.',
    ],
    image: PROFILE_PHOTO_PATH,
    imageAlt: 'Black-and-white profile photograph of Bhanu Sai',
    highlights: [
      {
        id: 'education',
        index: '01',
        title: 'Academic Foundation',
        description:
          'B.Tech. candidate specializing in Artificial Intelligence at Joy University, combining theory with lab research.',
      },
      {
        id: 'ai-focus',
        index: '02',
        title: 'AI & Data Curiosity',
        description:
          'Exploring algorithmic reasoning, exploratory data analysis, and structured analytical workflows.',
      },
      {
        id: 'craft',
        index: '03',
        title: 'Software Craft',
        description:
          'Writing clean, maintainable code across Python, C, and modern frontend standards with HTML, CSS, and JavaScript.',
      },
      {
        id: 'problem-solving',
        index: '04',
        title: 'First-Principles Approach',
        description:
          'Deconstructing ambiguous problems into testable hypotheses, structured pipelines, and resilient user interfaces.',
      },
    ],
  },
  skills: {
    heading: 'My Technical Expertise',
    subheading:
      'Core languages, web foundations, analytical domains, and everyday engineering tools.',
    categories: [
      {
        id: 'programming',
        index: '01',
        category: 'Programming',
        description: 'Foundational logic, memory models, and algorithmic problem solving.',
        items: ['Python', 'C', 'JavaScript'],
      },
      {
        id: 'frontend',
        index: '02',
        category: 'Frontend',
        description: 'Semantic markup, responsive layouts, and interactive browser interfaces.',
        items: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        id: 'ai',
        index: '03',
        category: 'AI',
        description: 'Pattern discovery, statistical reasoning, and applied machine intelligence.',
        items: ['Artificial Intelligence', 'Data Analysis'],
      },
      {
        id: 'tools',
        index: '04',
        category: 'Tools',
        description: 'Version control, collaborative workflows, and daily development environment.',
        items: ['Git', 'GitHub', 'VS Code'],
      },
    ],
  },
  projects: {
    heading: 'Selected Works',
    subheading:
      'Representative Artificial Intelligence, data analysis, and frontend engineering studies. Replace or extend entries directly in portfolio configuration.',
    categories: ['All', 'AI', 'Data Analysis', 'Frontend'],
    items: [
      {
        id: 'pathcraft-astar-solver',
        title: 'PathCraft — A* & Heuristic Graph Search Visualizer',
        category: 'AI',
        year: '2026',
        featured: true,
        shortDescription:
          'Interactive Artificial Intelligence search solver implementing A*, Dijkstra, and greedy best-first pathfinding over weighted spatial grids.',
        fullDescription:
          'PathCraft explores classical Artificial Intelligence state-space search and heuristic optimization. Built with Python search logic and a browser visualization layer, it compares admissible heuristics, obstacle avoidance, and node-expansion efficiency across dynamic grid topologies.',
        highlights: [
          'Implements A*, Greedy Best-First, and Breadth-First Search with step-by-step trace inspection',
          'Compares Manhattan, Euclidean, and Chebyshev heuristic bounds across weighted obstacles',
          'Clean modular solver engineered in Python with an interactive JavaScript grid debugger',
        ],
        technologies: ['Python', 'Artificial Intelligence', 'HTML', 'JavaScript'],
        image: projectOpticalImg,
        imageAlt: 'Monochrome studio photography of optical glass lenses and parallel light refraction paths',
        githubUrl: 'https://github.com/settings/admin',
        liveUrl: 'https://github.com/settings/admin',
      },
      {
        id: 'campus-energy-telemetry',
        title: 'Strata — Multivariate Student & Campus Data Explorer',
        category: 'Data Analysis',
        year: '2026',
        shortDescription:
          'Exploratory data analysis suite transforming raw CSV behavioral and academic datasets into clean statistical summaries and trend reports.',
        fullDescription:
          'Strata cleans, normalizes, and correlates multi-table observational datasets using Python statistical workflows, surfacing attendance patterns, study load correlations, and outlier flags without visual clutter.',
        highlights: [
          'Automated missing-value imputation and outlier diagnostics in Python',
          'Correlation matrix breakdowns exported to clean interactive web tables',
          'Reproducible notebook pipeline tracked with Git version history',
        ],
        technologies: ['Python', 'Data Analysis', 'HTML', 'CSS'],
        image: projectDataImg,
        imageAlt: 'Layered frosted glass plates with minimalist geometric grid lines',
        githubUrl: 'https://github.com/settings/admin',
      },
      {
        id: 'editorial-brief-parser',
        title: 'LexisGrid — Minimalist Document Triage & Research Reader',
        category: 'Frontend',
        year: '2025',
        shortDescription:
          'Keyboard-first browser reading and structured note workspace crafted with semantic HTML, modern CSS grid systems, and vanilla JavaScript.',
        fullDescription:
          'Designed for technical literature review, LexisGrid organizes research abstracts, key definitions, and study tasks into a Swiss-grid workspace with zero distraction and instant client-side filtering.',
        highlights: [
          'Zero-dependency responsive grid architecture built with semantic HTML5 and CSS3',
          'Keyboard-navigable filtering and instant local workspace persistence',
          'High-contrast editorial typography tuned for long-form technical reading',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
        image: projectNlpImg,
        imageAlt: 'Overhead monochrome photo of a laptop displaying a clean typographic grid beside a pen',
        githubUrl: 'https://github.com/settings/admin',
        liveUrl: 'https://github.com/settings/admin',
      },
      {
        id: 'logicgate-csp-planner',
        title: 'LogicGate — Constraint Satisfaction & Rule-Based AI Planner',
        category: 'AI',
        year: '2025',
        shortDescription:
          'Deterministic Artificial Intelligence scheduling and constraint-satisfaction engine written in C and Python to resolve multi-resource timetables.',
        fullDescription:
          'LogicGate models university lab and compute-slot allocation as a formal Constraint Satisfaction Problem (CSP). Using backtracking with forward checking, Minimum Remaining Values (MRV) heuristics, and propositional rule validation, it computes conflict-free schedules deterministically.',
        highlights: [
          'Backtracking CSP solver with Minimum Remaining Values (MRV) variable ordering in C',
          'Propositional constraint validator and conflict report generator written in Python',
          'Deterministic execution benchmarked across multi-room scheduling constraints',
        ],
        technologies: ['C', 'Python', 'Artificial Intelligence', 'Git'],
        image: projectComputeImg,
        imageAlt: 'Minimalist monochrome studio photograph of an anodized aluminum compute module',
        githubUrl: 'https://github.com/settings/admin',
      },
    ],
  },
  education: {
    heading: 'My Learning Journey',
    subheading: 'Academic progression, formal specialization, and foundational coursework.',
    entries: [
      {
        id: 'joy-university-btech',
        period: 'Academic Year 2026 · In Progress',
        institution: 'Joy University',
        degree: 'B.Tech.',
        specialization: 'Artificial Intelligence',
        academicYear: '2026',
        summary:
          'Undergraduate engineering curriculum focused on artificial intelligence theory, statistical data modeling, core computer science, and practical software architecture.',
        coursework: [
          'Artificial Intelligence & Search Algorithms',
          'Data Structures & Algorithms in C',
          'Statistical Data Analysis with Python',
          'Linear Algebra, Probability & Optimization',
          'Web Technologies (HTML, CSS, JavaScript)',
          'Database Systems & Software Engineering',
        ],
      },
      {
        id: 'foundations-systems',
        period: 'Core Engineering Track',
        institution: 'Independent Lab & Studio Practice',
        degree: 'Applied Systems & Frontend Craft',
        specialization: 'Python, C & Web Foundations',
        academicYear: '2025 — 2026',
        summary:
          'Self-directed engineering sprints translating classroom theory into reproducible repositories, clean documentation, and accessible web interfaces.',
        coursework: [
          'Version Control & Collaborative Git Workflows',
          'Exploratory Data Cleaning & Visualization',
          'Responsive Swiss-Grid Interface Architecture',
        ],
      },
    ],
  },
  credentials: {
    heading: 'Certifications & Achievements',
    subheading: 'Technical certifications, workshops, hackathons, and academic milestones.',
    items: [
      {
        id: 'cert-ai-foundations',
        type: 'Certification',
        year: '2026',
        title: 'Foundations of Artificial Intelligence & Algorithmic Reasoning',
        issuer: 'Technical Certification Track',
        summary:
          'Covered search algorithms, knowledge representation, logical inference, and ethical AI design principles.',
        credentialCode: 'AI-2026',
      },
      {
        id: 'cert-python-data',
        type: 'Certification',
        year: '2025',
        title: 'Python for Data Analysis & Scientific Computing',
        issuer: 'Applied Data Curriculum',
        summary:
          'Completed structured modules on array computation, tabular data cleaning, exploratory analysis, and reproducible reporting.',
        credentialCode: 'PY-DA-25',
      },
      {
        id: 'workshop-web-systems',
        type: 'Workshop',
        year: '2025',
        title: 'Modern Frontend Architecture & Version Control Intensive',
        issuer: 'University Engineering Workshop',
        summary:
          'Hands-on build sprint covering semantic HTML5, modern CSS layout systems, JavaScript interactivity, and GitHub pull-request reviews.',
        credentialCode: 'WS-FE-25',
      },
      {
        id: 'hackathon-ai-sprint',
        type: 'Hackathon',
        year: '2026',
        title: 'Campus AI Innovation Hackathon — Prototype Finalist',
        issuer: 'Joy University Innovation Forum',
        summary:
          'Designed and pitched an intelligent data-triage assistant prototype within a 24-hour cross-disciplinary engineering sprint.',
        credentialCode: 'HK-2026',
      },
      {
        id: 'academic-merit',
        type: 'Academic Achievement',
        year: '2026',
        title: 'B.Tech. Artificial Intelligence — Core Lab Distinction',
        issuer: 'Joy University',
        summary:
          'Recognized for consistent technical execution across algorithmic programming in C, Python data labs, and team project presentations.',
        credentialCode: 'JU-AI-26',
      },
    ],
  },
  contact: {
    heading: 'Let’s Build Something Together.',
    subheading:
      'Open to Artificial Intelligence internships, collaborative engineering projects, hackathons, and research conversations.',
    email: 'bhanusaireddy19@gmail.com',
    phone: '9703049449',
    linkedinLabel: 'linkedin.com/in/bhanu-sai-a1002344b',
    linkedinUrl: 'https://www.linkedin.com/in/bhanu-sai-a1002344b',
    githubLabel: 'github.com/settings/admin',
    githubUrl: 'https://github.com/settings/admin',
  },
  footer: {
    copyright: '© 2026 Bhanu Sai. All rights reserved.',
    note: 'B.Tech. Artificial Intelligence · Joy University',
  },
};
