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
    title: 'Zeno: Personal Finance & Wealth Management Platform',
    shortName: 'Zeno',
    domain: 'zeno.kozza.app',
    tagline: 'Privacy-first zero-based budgeting, multi-asset net worth tracking & AI receipt scanning',
    summary:
      'A privacy-first personal finance platform and my flagship design achievement. Built for intentional wealth builders, Zeno combines zero-based envelope budgeting (50/25/15/10 framework), multi-asset balance sheet tracking (liquid cash, investments, liabilities), automated debt payoff schedules, and on-device receipt scanning in Rwandan Francs (RWF) without requiring third-party bank login access.',
    image: ZenoImg,
    liveUrl: 'https://zeno.kozza.app',
    githubUrl: null,
    isLive: true,
    badge: '✦ Best Design & Flagship',
    role: 'Lead Product Designer & Full-Stack Architect',
    period: '2025 — Present',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Local-First', 'AI Vision'],
    architecture: [
      { name: 'Envelope Allocation Engine', detail: 'Zero-based 50/25/15/10 monthly budgeting with dynamic category progress and multi-currency support', icon: Cpu },
      { name: 'Multi-Asset Balance Sheet', detail: 'Real-time net worth tracking across liquid cash, investments, and liabilities', icon: Database },
      { name: 'Debt Payoff Calculator', detail: 'Interactive Avalanche and Snowball payoff models calculating exact monthly timelines and interest savings', icon: Code2 },
      { name: 'Client-Side Receipt OCR', detail: 'On-device multimodal parsing extracting merchant, amount, date, and category without third-party bank scraping', icon: Globe },
    ],
    features: [
      'Zero-Based Monthly Envelopes: Allocate every Franc or dollar to essentials, investing, and savings before spending begins.',
      'Bank-Independent Privacy: 100% self-managed financial tracking with zero bank credentials, passwords, or scraping APIs.',
      'AI Receipt Parsing: Rapid extraction of merchant name, transaction date, line items, and envelope category from receipts.',
      'Snowball & Avalanche Payoff: Realistic debt elimination schedules comparing total interest costs and debt-free targets.',
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
      { name: 'Spring Boot REST Architecture', detail: 'Java 21 backend with structured Controller-Service-Repository layers and DTO validation', icon: Code2 },
      { name: 'Security & RBAC Layer', detail: 'Spring Security with stateless JWT authentication and role-based route guards', icon: Cpu },
      { name: 'Relational Persistence', detail: 'PostgreSQL database managed with Hibernate / Spring Data JPA and Flyway', icon: Database },
      { name: 'Institutional Portal', detail: 'Responsive React SPA with role-tailored dashboards for students, supervisors, and mentors', icon: Globe },
    ],
    features: [
      'Multi-Role Authorization: Distinct permission boundaries for University Admins, Academic Supervisors, Industrial Mentors, and Students.',
      'Digital Logbook Verification: Real-time weekly task logs signed and reviewed digitally by company mentors.',
      'Normalized Relational Data Model: Strict referential integrity preventing placement overlaps and data collisions.',
      'Supervisor Evaluation & Grading: Standardized rubrics and automated grade aggregation for end-of-internship academic reviews.',
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
      { name: 'Multimodal AI Extraction', detail: 'Gemini 1.5 Flash parsing structured candidate profiles from multi-format resume documents', icon: Cpu },
      { name: 'Backend API Service', detail: 'Express and TypeScript server handling batch resume uploads and queueing', icon: Code2 },
      { name: 'Database & Buffer Storage', detail: 'MongoDB Atlas candidate profiles and cloud buffer document storage', icon: Database },
      { name: 'Recruiter Client', detail: 'React 18 interface with instant MatchScore gap breakdown and query filtering', icon: Globe },
    ],
    features: [
      'Direct Document Ingestion: Multimodal parsing of PDF and image resumes with high extraction accuracy without manual forms.',
      'Transparent Match Breakdown: Weighted scoring criteria showing matched qualifications, transferable skills, and missing requirements.',
      'Batch Candidate Uploads: Resilient backend buffer supporting simultaneous multi-resume submission.',
      'Actionable Gap Analysis: Automated generation of recruiter probe questions targeting candidate resume gaps.',
    ],
  },
  {
    id: 'edgejournal',
    title: 'EdgeJournal: Professional Trading Journal & Risk Analytics',
    shortName: 'EdgeJournal',
    domain: 'edge-journal-tau.vercel.app',
    tagline: 'Risk management, trade execution logging & discipline tracking for traders',
    summary:
      'A performance tracking and risk management workspace built for Forex, equities, and crypto traders. Features real-time position sizing, risk-to-reward ratio tracking, trade execution logging, PnL analytics, and psychological discipline tagging to eliminate emotional overtrading.',
    image: EdgejournalImg,
    liveUrl: 'https://edge-journal-tau.vercel.app/login',
    githubUrl: 'https://github.com/meekness12/EdgeJournal',
    isLive: true,
    badge: '🟢 Live Trading Platform',
    role: 'Sole Designer & Engineer',
    period: '2024 — Present',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Analytics'],
    architecture: [
      { name: 'Risk & Lot-Sizing Engine', detail: 'Client-side position sizing and R-multiple calculations enforcing risk discipline', icon: Cpu },
      { name: 'Trade Execution Journal', detail: 'Granular trade logging capturing entry, exit, stop loss, fees, and market conditions', icon: Code2 },
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
    tagline: 'Local-area network file distribution system for offline classroom labs',
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
      { name: 'TCP Socket Distribution Layer', detail: 'Raw Java TCP/IP socket connections with chunked binary file transfer', icon: Code2 },
      { name: 'Multicast LAN Discovery', detail: 'Multicast UDP broadcast discovering active student workstations on the local subnet', icon: Cpu },
    ],
    features: [
      'Zero-Internet Operation: Fully autonomous local classroom sync regardless of external connection.',
      'SHA-256 Checksum Validation: Guaranteed data integrity across distributed student machines.',
      'Teacher Broadcasting Console: One-click batch distribution of lecture material to 50+ nodes.',
    ],
  },
];
