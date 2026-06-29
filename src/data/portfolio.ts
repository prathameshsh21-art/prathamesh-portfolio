export const PROFILE = {
  name: 'Prathamesh Virupaksh Kumbar',
  shortName: 'Prathamesh',
  roles: ['Software Developer', 'AI & ML Student', 'Problem Solver'],
  university: 'CMR University',
  cgpa: '8.50',
  github: 'https://github.com/prathameshsh21-art',
  githubHandle: '@prathameshsh21-art',
  linkedin: 'https://www.linkedin.com/in/prathamesh21-kumbar',
  linkedinHandle: 'prathamesh21-kumbar',
  email: 'prathamesh.sh21@gmail.com',
  location: 'Bengaluru, India',
  resume: '/prathameshResume.pdf',
  image: '/images/image.png',
  headline: 'Building Intelligent Solutions with Java & AI',
  stats: [
    { label: 'Projects', value: '2+' },
    { label: 'CGPA', value: '8.50' },
    { label: 'Certifications', value: '3+' },
  ],
  aboutStats: [
    { label: 'CGPA', value: 8.5, decimals: 2, suffix: '', icon: 'Target' },
    { label: 'Projects', value: 2, decimals: 0, suffix: '+', icon: 'FolderGit2' },
    { label: 'Certifications', value: 3, decimals: 0, suffix: '+', icon: 'BadgeCheck' },
  ],
};

export const ABOUT_LINES = [
  'A builder at the intersection of software engineering and intelligent systems.',
  'Currently engineering my craft at CMR University, where I translate curiosity for AI & ML into working code — from DBMS internals to natural-language pipelines.',
  'I care about clean abstractions, observable systems, and shipping things that actually run.',
];

export const SKILLS = [
  { name: 'Java', category: 'Programming Language', icon: 'Code' },
  { name: 'Python', category: 'Programming Language', icon: 'Code' },
  { name: 'SQL', category: 'Database', icon: 'Database' },
  { name: 'DBMS', category: 'Database', icon: 'Database' },
  { name: 'HTML', category: 'Web', icon: 'Globe' },
  { name: 'CSS', category: 'Web', icon: 'Globe' },
  { name: 'JavaScript', category: 'Web', icon: 'Globe' },
  { name: 'Git', category: 'Tools', icon: 'GitBranch' },
  { name: 'GitHub', category: 'Tools', icon: 'Github' },
  { name: 'Object Oriented Programming', category: 'Paradigm', icon: 'Boxes' },
] as const;

export const PROJECTS = [
  {
    title: 'Student Attendance Recovery System',
    description:
      'Designed a database-driven attendance management system with authentication, data validation, and reporting features. Improved record retrieval efficiency and reduced manual data-entry errors.',
    tech: ['Java', 'SQL', 'DBMS'],
    accent: 'primary',
    icon: 'Fingerprint',
  },
  {
    title: 'Grammar and Spell Corrector',
    description:
      'Built an NLP-based application to detect and correct grammar and spelling mistakes. Implemented text preprocessing and tokenization using NLTK. Validated on 200+ sentences with high accuracy.',
    tech: ['Python', 'NLTK', 'NLP'],
    accent: 'secondary',
    icon: 'SpellCheck',
  },
] as const;

export const EDUCATION = [
  {
    period: '2022 — 2026',
    title: 'Bachelor of Technology',
    org: 'CMR University',
    detail: 'Computer Science Engineering · Artificial Intelligence & Machine Learning',
    metric: 'CGPA: 8.50',
    status: 'active',
  },
  {
    period: '2020 — 2022',
    title: 'Second PUC',
    org: 'R D PU College, Chikodi, Belagavi',
    detail: 'Pre-University Education',
    metric: 'Percentage: 81.7%',
    status: 'done',
  },
];

export const LEARNING = {
  current: ['HTML', 'CSS', 'JavaScript', 'React (Upcoming)', 'Data Structures & Algorithms', 'Advanced Java'],
  goal: 'Building modern full-stack web applications.',
};

export const CERTIFICATIONS = [
  {
    title: 'Python Programming',
    issuer: 'Coursera · 2025',
    icon: 'Code',
    accent: 'primary',
  },
  {
    title: 'SQL for Beginners',
    issuer: 'Scaler · 2025',
    icon: 'Database',
    accent: 'primary',
  },
  {
    title: 'Intro to AI & Machine Learning',
    issuer: 'Great Learning · 2024',
    icon: 'BrainCircuit',
    accent: 'secondary',
  },
];
