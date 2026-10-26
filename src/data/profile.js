/**
 * Developer Profile & Career History Control File
 * -----------------------------------------------
 * Centralizes roles, birth year (for dynamic age computation),
 * work experience, and verified social contact endpoints.
 */

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const profileConfig = {
  name: 'Meekness Bonheur',
  birthYear: 2005, // Dynamically calculates age automatically
  location: 'Kigali, Rwanda',
  headline: 'Full-Stack Developer',

  // Roles cycled in the typewriter hero animation
  roles: [
    'Frontend Engineer',
    'Full-Stack Developer',
    'UI/UX Designer',
    'Systems Thinker',
  ],

  // Verified social profiles
  socials: [
    { name: 'GitHub', icon: Github, url: 'https://github.com/meekness12' },
    { name: 'Twitter (X)', icon: Twitter, url: 'https://twitter.com/meek1hinker' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/meeknessbonheur/' },
    { name: 'Email', icon: Mail, url: 'mailto:meeknessbon@gmail.com' },
  ],

  // Career milestones and educational background
  experiences: [
    {
      id: 1,
      company: 'Umurava AI Hackathon',
      location: 'Remote / Hybrid',
      role: 'AI Systems Engineer (Team Arc Lab)',
      period: '2024',
      description:
        'Engineered TalentLens, an AI talent screening engine designed to evaluate unstructured resumes with transparent reasoning and native OCR, eliminating manual recruiter data entry.',
      responsibilities: [
        'Integrated Gemini 1.5 Flash for native multimodal document processing and zero-data-entry parsing.',
        'Architected a traceable MatchScore algorithm providing recruiters with explicit gap analysis.',
        'Built a resilient backend with TypeScript, Express, and MongoDB for batch resume uploads.',
        'Collaborated on prompt engineering pipelines to extract structured candidate profiles.',
      ],
      tools: ['Gemini 1.5 Flash', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'System Design'],
    },
    {
      id: 2,
      company: 'Rwanda Polytechnic',
      location: 'Kigali, Rwanda',
      role: 'Advanced Diploma in Information Technology',
      period: '2023 — Present',
      description:
        'Pursuing studies in software engineering, database modeling, and networking. Built academic management platforms and local network synchronization systems.',
      responsibilities: [
        'Engineered InternBridge, an academic internship management platform using Java 21, Spring Boot, and PostgreSQL.',
        'Implemented strict Role-Based Access Control (RBAC) and candidate tracking workflows.',
        'Built Classroom Resource Auto-Distribution System running over Local Area Network (LAN) socket connections.',
        'Maintained code quality through peer reviews and structured documentation.',
      ],
      tools: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'Tailwind CSS', 'Networking'],
    },
    {
      id: 3,
      company: 'Independent Software Engineering',
      location: 'Kigali, Rwanda',
      role: 'Full-Stack Developer & UI Designer',
      period: '2023 — Present',
      description:
        'Designing and developing client-focused web applications and open-source tools with high fidelity, accessibility, and clean architecture.',
      responsibilities: [
        'Designed high-fidelity user flows in Figma and translated them into responsive React applications.',
        'Developed digital platforms including Edge Journal and Police Driver’s License administrative systems.',
        'Focused on speed, keyboard navigation, and responsive ergonomics across all screen sizes.',
      ],
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git', 'Vite'],
    },
  ],
};
