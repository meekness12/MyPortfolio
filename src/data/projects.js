/**
 * Projects Architecture & Showcase Dataset
 * -----------------------------------------
 * Add, edit, or toggle the live status of your software systems here.
 */

import { Cpu, Database, Globe, Code2 } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiDocker,
} from 'react-icons/si';

import Policeimg from '../assets/Police.jpg';
import Portfolioimg from '../assets/Portfolio.jpg';
import InternbridgeImg from '../assets/internbridge.png';
import EdgejournalImg from '../assets/edgejournal.png';
import ClassroomImg from '../assets/classroom.png';

export const words = ['built', 'engineered', 'shipped'];

export const techIconMap = {
  'Java 21': SiSpringboot,
  'Spring Boot': SiSpringboot,
  'PostgreSQL': SiPostgresql,
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'TypeScript': SiTypescript,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'MongoDB': SiMongodb,
  'JavaScript': SiJavascript,
  'Figma': SiFigma,
  'Docker': SiDocker,
};

export const projects = [
  {
    id: 'talentlens',
    title: 'TalentLens: AI Screening Engine',
    shortName: 'TalentLens',
    domain: 'talentlens.ai',
    tagline: 'AI resume screening engine with native Gemini 1.5 Flash OCR & MatchScore',
    summary:
      'Engineered with Team Arc Lab for the Umurava AI Hackathon to eliminate manual recruiter data entry. TalentLens evaluates unstructured multi-format resumes against granular job descriptions using multimodal LLMs, providing recruiters with an explainable MatchScore and specific gap analysis.',
    image: Portfolioimg,
    liveUrl: 'https://talent-lens-eight.vercel.app',
    githubUrl: 'https://github.com/Jacksonsod/talent-lens',
    isLive: true,
    badge: '⚡ Hackathon Winner',
    role: 'Lead AI Systems & Backend Engineer',
    period: '2024 (Umurava AI Hackathon)',
    tech: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'],
    architecture: [
      { name: 'AI Reasoning Pipeline', detail: 'Gemini 1.5 Flash multimodal document OCR parsing without regex schemas', icon: Cpu },
      { name: 'Backend API Service', detail: 'Express and TypeScript server handling batch resume uploads and queueing', icon: Code2 },
      { name: 'Database & Buffer Storage', detail: 'MongoDB Atlas candidate profiles and cloud buffer document storage', icon: Database },
      { name: 'Recruiter Client', detail: 'React 18 interface with instant MatchScore gap breakdown and query filtering', icon: Globe },
    ],
    features: [
      'Zero-Data-Entry OCR: Native multimodal processing of PDF and image resumes with high extraction accuracy.',
      'Traceable MatchScore: Algorithmic formula breaking down requirement matches, partial overlaps, and missing credentials.',
      'Batch Candidate Uploads: Resilient backend buffer supporting simultaneous multi-resume submission.',
      'Actionable Gap Analysis: Automated generation of recruiter probe questions targeting candidate resume gaps.',
    ],
  },
  {
    id: 'internbridge',
    title: 'InternBridge: Internship Management Platform',
    shortName: 'InternBridge',
    domain: 'internbridge.rw',
    tagline: 'Enterprise multi-tenant platform for university internship workflows',
    summary:
      'An enterprise platform designed and engineered to digitize the entire academic internship lifecycle at Rwanda Polytechnic. Implements strict Role-Based Access Control (RBAC), multi-tenant student-to-company placements, weekly digital logbooks, and supervisor evaluation pipelines.',
    image: InternbridgeImg,
    liveUrl: 'https://github.com/meekness12/internbridge',
    githubUrl: 'https://github.com/meekness12/internbridge',
    isLive: true,
    badge: '🟢 Enterprise Live',
    role: 'Full-Stack Architect & Core Developer',
    period: '2023 — Present',
    tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker'],
    architecture: [
      { name: 'Backend Monolith Architecture', detail: 'Java 21 and Spring Boot 3 with layered Controller-Service-Repository pattern', icon: Code2 },
      { name: 'Security & RBAC Layer', detail: 'Spring Security with stateless JWT authentication and role-based route guards', icon: Cpu },
      { name: 'Relational Persistence', detail: 'PostgreSQL database managed with Hibernate / Spring Data JPA and Flyway', icon: Database },
      { name: 'Client Portal', detail: 'Responsive React SPA with role-tailored dashboards for students and mentors', icon: Globe },
    ],
    features: [
      'Multi-Role Authorization: Distinct permission boundaries for University Admins, Academic Supervisors, Industrial Mentors, and Students.',
      'Digital Logbook Verification: Real-time weekly task logs signed and reviewed digitally by company mentors.',
      'Normalized Relational Data Model: Strict referential integrity preventing placement overlaps and data collisions.',
      'Performance Reporting: Automated aggregation of academic scores and student evaluation rubrics.',
    ],
  },
  {
    id: 'edgejournal',
    title: 'Edge Journal: Focus Workspace',
    shortName: 'Edge Journal',
    domain: 'edgejournal.dev',
    tagline: 'Distraction-free digital writing and markdown publication platform',
    summary:
      'A lightning-fast, minimalist writing environment created for engineers, thinkers, and technical writers who value speed, clean typographic hierarchy, and zero distraction. Features markdown syntax parsing, auto-save state, and offline persistence.',
    image: EdgejournalImg,
    liveUrl: 'https://github.com/meekness12/EdgeJournal',
    githubUrl: 'https://github.com/meekness12/EdgeJournal',
    isLive: false,
    badge: 'Completed',
    role: 'Sole Designer & Engineer',
    period: '2023 — 2024',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    architecture: [
      { name: 'Client-Side Markdown Engine', detail: 'AST document parsing for instantaneous formatted preview toggling', icon: Code2 },
      { name: 'Offline Storage', detail: 'IndexedDB and LocalStorage persistence ensuring no lost drafts', icon: Database },
      { name: 'Typography Tokens', detail: 'Curated serif and monospace typographic system with calibrated leading', icon: Globe },
    ],
    features: [
      'Zen Mode: User interface chrome fades away as keystrokes begin, leaving pure text.',
      'Markdown Syntax Highlighting: Clean inline code blocks and typography hierarchy.',
      'Tagging & Categorization: Instant search and filtering across written personal archives.',
    ],
  },
  {
    id: 'police-system',
    title: 'Police Driving License System',
    shortName: 'Police Portal',
    domain: 'police.gov.rw',
    tagline: 'Digital licensing platform for Rwanda National Police',
    summary:
      'A streamlined administrative application designed for Rwanda National Police to handle driver’s license applications, approvals, and applicant record management with transparent status audits and exam schedule allocation.',
    image: Policeimg,
    liveUrl: 'https://github.com/meekness12/Police-System-License-App',
    githubUrl: 'https://github.com/meekness12/Police-System-License-App',
    isLive: false,
    badge: 'Completed',
    role: 'Frontend Developer & UI Designer',
    period: '2023',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
    architecture: [
      { name: 'Administrative Client', detail: 'React component library built with accessibility and high visual contrast', icon: Globe },
      { name: 'Workflow State Machine', detail: 'Multi-stage applicant lifecycle from document intake to final license issuance', icon: Code2 },
    ],
    features: [
      'Accessible Form Ergonomics: High-contrast data entry for public administrative clerks.',
      'Biometric & Exam Verification: Direct visual tracking of theory and practical driving results.',
      'Audit Logging: Immutable action tracking on applicant approvals and denials.',
    ],
  },
  {
    id: 'classroom-system',
    title: 'Classroom Resource Distribution',
    shortName: 'Classroom LAN',
    domain: 'classroom.lan',
    tagline: 'Local-area network distribution protocol for educational nodes',
    summary:
      'A socket-networked application built to automate and synchronize the delivery of educational resources and files across a Local Area Network (LAN) in classroom environments without requiring internet connectivity.',
    image: ClassroomImg,
    liveUrl: 'https://github.com/meekness12/Classroom-Resource-Auto-Distribution-System-On-Lan',
    githubUrl: 'https://github.com/meekness12/Classroom-Resource-Auto-Distribution-System-On-Lan',
    isLive: false,
    badge: 'Completed',
    role: 'Systems & Network Engineer',
    period: '2023',
    tech: ['Java 21', 'Spring Boot'],
    architecture: [
      { name: 'Socket Transport Layer', detail: 'Raw Java TCP/IP socket connections with chunked binary broadcasting', icon: Code2 },
      { name: 'LAN Node Discovery', detail: 'Multicast broadcast discovering active student workstations automatically', icon: Cpu },
    ],
    features: [
      'Zero-Internet Operation: Fully autonomous local classroom sync regardless of external connection.',
      'SHA-256 Checksum Validation: Guaranteed data integrity across distributed student machines.',
      'Teacher Broadcasting Console: One-click batch distribution of lecture material to 50+ nodes.',
    ],
  },
];
