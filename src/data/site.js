import {
  BarChart3,
  BrainCircuit,
  Code2,
  FileCode2,
  Hammer,
  MessageSquareText,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

/**
 * Single source of truth for the portfolio's content.
 * Edit this file only — components stay untouched.
 */

export const PROFILE = {
  name: 'Brahimi Ahcen Oueiss',
  handle: 'oueiss',
  school: 'ESI — Higher National School of Computer Science',
  country: 'Algeria',
  email: 'oa_brahimi@esi.dz',
  github: 'https://github.com/oueissbrahimi',
  // No LinkedIn URL exists in the project yet. Paste yours here and the
  // button appears everywhere automatically (Contact + Footer).
  linkedin: '',
};

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const INTERESTS = [
  {
    icon: Code2,
    title: 'Software engineering & web development',
    text: 'Designing and shipping clean, responsive interfaces and the services behind them.',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial intelligence & machine learning',
    text: 'Exploring how models learn and how to apply them to real problems, computer vision included.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & ethical hacking',
    text: "Learning how systems break so I can build ones that don't, through CTFs and web security.",
  },
  {
    icon: Hammer,
    title: 'Practical projects & problem-solving',
    text: 'I learn best by building: real constraints, small steps, working results.',
  },
];

// Tags only: no invented proficiency levels.
export const SKILLS = [
  {
    icon: Code2,
    title: 'Programming & Development',
    blurb: 'Languages and frameworks I build with.',
    items: [
      'Python',
      'Java',
      'C / C++',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Django',
      'Laravel',
      'PHP',
      'Vite',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Data',
    blurb: 'Learning systems and vision.',
    items: ['Machine Learning', 'Computer Vision', 'OpenCV', 'Python AI ecosystem'],
  },
  {
    icon: Wrench,
    title: 'Cybersecurity & Tools',
    blurb: 'Security mindset, daily tooling.',
    items: ['Linux', 'Git & GitHub', 'Networking', 'CTF', 'Web Security', 'OWASP Top 10'],
  },
];

export const PROJECT = {
  name: 'ESICodeHub',
  tag: 'Team project · ESI 2CP · 2025–2026',
  description:
    'A collaborative academic platform where ESI students submit code and professors review it, with plagiarism detection built in to keep assignments honest.',
  // Repo used: team repository. Change here if you contributed through another one.
  repo: 'https://github.com/P2CP25-050/esicodehub',
  preview: {
    src: '/esicodehub-preview.webp',
    width: 1600,
    height: 778,
    alt: 'ESICodeHub professor insights page showing AI detection summary and an assignment performance table.',
    caption: 'Professor Insights: AI detection and assignment performance.',
  },
  contribution: 'Frontend development and UI/UX design.',
  features: [
    { icon: FileCode2, label: 'Code submissions' },
    { icon: ScanSearch, label: 'Plagiarism detection' },
    { icon: Sparkles, label: 'AI-generated references' },
    { icon: MessageSquareText, label: 'Professor feedback' },
    { icon: MessagesSquare, label: 'Discussion forum' },
    { icon: BarChart3, label: 'Insights & analytics' },
  ],
  // Taken from the repo's frontend/package.json, backend requirements and README.
  stack: {
    Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Monaco Editor', 'Framer Motion', 'SWR'],
    Backend: ['Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'JWT', 'Docker'],
  },
};
