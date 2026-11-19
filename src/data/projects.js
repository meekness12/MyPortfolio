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
import ZenoImg from '../assets/zeno_blog_hero.webp';

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
  'Local-First': Cpu,
  'AI Vision': Cpu,
  'Analytics': Database,
};

export const projects = [
  {
    id: 'zeno',
    title: 'Zeno: AI Personal Finance & Wealth Command Center',
    shortName: 'Zeno',
    domain: 'zeno.kozza.app',
    tagline: 'Privacy-first zero-based budgeting, multi-asset net worth tracking & AI receipt intelligence',
    summary:
      'A personal financial command center and one of my crowning design achievements. Built for intentional wealth builders, Zeno combines proactive envelope budgeting (50/25/15/10 Wealth Framework), multi-asset balance sheet tracking (liquid cash, investments, debts), automated debt snowball payoff projections, and on-device receipt vision without mandatory third-party bank credential harvesting.',
    image: ZenoImg,
    liveUrl: 'https://zeno.kozza.app',
    githubUrl: null,
    isLive: true,
    badge: '✦ Best Design & Flagship',
    role: 'Lead Product Designer & Full-Stack Architect',
    period: '2025 — Present',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Local-First', 'AI Vision'],
    architecture: [
      { name: 'Envelope Allocation Engine', detail: 'Proactive 50/25/15/10 zero-based budgeting with Rwandan Franc (RF) multi-currency velocity gauges', icon: Cpu },
      { name: 'Multi-Asset Telemetry', detail: 'Holistic balance sheet aggregating liquid cash, equities, real estate, and liabilities in real time', icon: Database },
      { name: 'Debt Payoff Algorithms', detail: 'Automated Avalanche vs. Snowball trajectory engines projecting exact calendar debt-freedom dates', icon: Code2 },
      { name: 'Privacy-First AI Vision', detail: 'On-device multimodal receipt and invoice parsing with 0% bank scraping requirement', icon: Globe },
    ],
    features: [
      'Proactive Zero-Based Envelopes: Give every Rwandan Franc (RF) or dollar an explicit job before the month starts.',
      '0% Bank Scraping Privacy: Sovereign financial tracking requiring zero bank logins, passwords, or data broker leaks.',
      'AI Receipt & Invoice Vision: Instant computer-vision extraction of merchant, date, amount, and budget envelope category.',
      'Debt Snowball vs. Avalanche: Mathematical debt elimination engine calculating exact interest savings and freedom dates.',
    ],
  },
  {
    id: 'internbridge',
    title: 'InternBridge: Institutional Internship Management Platform',
    shortName: 'InternBridge',
    domain: 'internbridge-inky.vercel.app',
    tagline: 'Enterprise multi-tenant platform for university internship workflows & supervisor accreditation',
    summary:
      'An enterprise platform designed and engineered to digitize the entire academic internship lifecycle at Rwanda Polytechnic and higher education institutions. Implements strict Role-Based Access Control (RBAC), multi-tenant student-to-company placements, weekly digital logbooks signed by company mentors, and supervisor evaluation rubrics.',
    image: InternbridgeImg,
    liveUrl: 'https://internbridge-inky.vercel.app/',
    githubUrl: 'https://github.com/meekness12/internbridge',
    isLive: true,
    badge: '🟢 Enterprise Live Platform',
    role: 'Full-Stack Architect & Core Developer',
    period: '2023 — Present',
    tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker'],
    architecture: [
      { name: 'Backend Monolith Architecture', detail: 'Java 21 and Spring Boot 3 with layered Controller-Service-Repository pattern', icon: Code2 },
      { name: 'Security & RBAC Layer', detail: 'Spring Security with stateless JWT authentication and role-based route guards', icon: Cpu },
      { name: 'Relational Persistence', detail: 'PostgreSQL database managed with Hibernate / Spring Data JPA and Flyway', icon: Database },
      { name: 'Institutional Portal', detail: 'Responsive React SPA with role-tailored dashboards for students, supervisors, and mentors', icon: Globe },
    ],
    features: [
      'Multi-Role Authorization: Distinct permission boundaries for University Admins, Academic Supervisors, Industrial Mentors, and Students.',
      'Digital Logbook Verification: Real-time weekly task logs signed and reviewed digitally by company mentors.',
      'Normalized Relational Data Model: Strict referential integrity preventing placement overlaps and data collisions.',
      'Accreditation Velocity: Automated aggregation of academic scores and student evaluation rubrics for institutional audits.',
    ],
  },
  {
    id: 'talentlens',
    title: 'TalentLens: AI Screening Engine',
    shortName: 'TalentLens',
    domain: 'talent-lens-eight.vercel.app',
    tagline: 'AI resume screening engine with native Gemini 1.5 Flash OCR & MatchScore',
    summary:
      'Engineered with Team Arc Lab for the Umurava AI Hackathon to eliminate manual recruiter data entry. TalentLens evaluates unstructured multi-format resumes against granular job descriptions using multimodal LLMs, providing recruiters with an explainable MatchScore and specific gap analysis.',
    image: Portfolioimg,
    liveUrl: 'https://talent-lens-eight.vercel.app/dashboard',
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
    id: 'edgejournal',
    title: 'EdgeJournal: Professional Trading Journal & Risk Analytics',
    shortName: 'EdgeJournal',
    domain: 'edge-journal-tau.vercel.app',
    tagline: 'Advanced risk management, trade execution analytics & discipline tracking for traders',
    summary:
      'A specialized trading performance and risk management command center built for Forex, equities, and crypto traders. Features real-time position sizing, risk-to-reward ratio tracking, trade execution logging, PnL analytics, and psychological discipline tagging to eliminate emotional overtrading.',
    image: EdgejournalImg,
    liveUrl: 'https://edge-journal-tau.vercel.app/login',
    githubUrl: 'https://github.com/meekness12/EdgeJournal',
    isLive: true,
    badge: '🟢 Live Trading Platform',
    role: 'Sole Designer & Engineer',
    period: '2024 — Present',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Analytics'],
    architecture: [
      { name: 'Risk & Expectancy Engine', detail: 'Client-side position sizing and R-multiple calculations enforcing risk discipline', icon: Cpu },
      { name: 'Trade Execution Telemetry', detail: 'Granular trade logging capturing entry, exit, stop loss, fees, and market conditions', icon: Code2 },
      { name: 'Performance Analytics', detail: 'Win rate, profit factor, drawdown curves, and setup expectancy visual analytics', icon: Database },
      { name: 'Secure Trader Workspace', detail: 'Authenticated workspace with dark mode tokens and instant CSV statement trade import', icon: Globe },
    ],
    features: [
      'Dynamic Position Sizing: Automatically calculate exact lot and unit sizes based on risk tolerance per trade.',
      'Multi-Market Tracking: Unified journal supporting Forex pairs, equities, commodities, and crypto assets.',
      'Discipline & Psychology Tagging: Tag mistakes (FOMO, revenge trading, early exit) to build ruthless consistency.',
      'Expectancy & PnL Analytics: Comprehensive win/loss curves and risk-adjusted return metrics.',
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
