import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ChevronDown,
  Layers,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import GitHubCalendarWidget from '../components/GitHubCalendarWidget';
import TechMarquee from '../components/TechMarquee';
import FeaturedCardsCluster from '../components/FeaturedCardsCluster';
import DitherWaveBackground from '../components/DitherWaveBackground';
import EditorialSidebar from '../components/EditorialSidebar';
import { scrollRevealVariants } from '../utils/motion';

import BannerImg from '../assets/banner.jpg';
import ProfilePic from '../assets/pic.png';
import Policeimg from '../assets/Police.jpg';
import Portfolioimg from '../assets/Portfolio.jpg';
import InternbridgeImg from '../assets/internbridge.png';
import EdgejournalImg from '../assets/edgejournal.png';

const roles = [
  'Frontend Engineer',
  'Full-Stack Developer',
  'System Builder',
  'Creative Coder'
];

export default function Home({ onViewChange }) {
  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [typingState, setTypingState] = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  // Experience accordion state
  const [expandedExp, setExpandedExp] = useState(1);

  // Banner mode: 'dither' | 'skyline'
  const [bannerMode, setBannerMode] = useState('dither');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (typingState === 'typing') {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => setTypingState('pausing'), 1400);
      }
    } else if (typingState === 'pausing') {
      timer = setTimeout(() => setTypingState('deleting'), 900);
    } else if (typingState === 'deleting') {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTypingState('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, typingState, roleIndex]);

  const experiences = [
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
  ];

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/meekness12' },
    { name: 'Twitter (X)', icon: Twitter, url: 'https://twitter.com/meek1hinker' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, url: 'mailto:meeknessbon@gmail.com' },
  ];

  return (
    <div className="w-full flex justify-center pt-20 sm:pt-28 pb-24 px-4 sm:px-6 relative z-10">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-start justify-center gap-8 xl:gap-10">
        
        {/* Desktop Sticky Left Editorial Marginalia (NOW + FIELD NOTE) */}
        <div className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start z-20">
          <EditorialSidebar layout="column" />
        </div>

        {/* Main Central Content Column */}
        <div className="w-full max-w-[880px] flex-1 flex flex-col items-center gap-10">
        
        {/* Outer Card with Dashed Border (Matching Palakonweb Screenshot) */}
        <div className="w-full border border-dashed border-black/15 dark:border-white/20 rounded-3xl p-4 sm:p-7 bg-white dark:bg-dark-surface shadow-soft">
          
          {/* Panoramic Cover Banner (Option A: Interactive Dither Wave with Skyline Toggle) */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 dark:bg-dark-surface2 shadow-sm group">
            {bannerMode === 'dither' ? (
              <div className="w-full h-full relative">
                <DitherWaveBackground
                  color={isDark ? '#0A0C10' : '#F8F9FA'}
                  paperColor={isDark ? '#3B82F6' : '#64748B'}
                  pixelSize={2.4}
                  density={0.72}
                  speed={0.85}
                  interactive={true}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 pointer-events-none" />
              </div>
            ) : (
              <div className="w-full h-full relative">
                <img
                  src={BannerImg}
                  alt="Profile Cover Banner"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            )}

            {/* Toggle Badge: Switch between Living Dither Wave & Twilight Skyline */}
            <button
              onClick={() => setBannerMode((prev) => (prev === 'dither' ? 'skyline' : 'dither'))}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1 rounded-full bg-black/60 dark:bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-medium hover:bg-black/85 flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              title="Click to toggle banner mode"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${bannerMode === 'dither' ? 'bg-cyan-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{bannerMode === 'dither' ? '⚡ Dither Wave' : '🏙️ Skyline'}</span>
            </button>
          </div>

          {/* Overlapping Avatar & Action Buttons Row */}
          <div className="relative -mt-10 sm:-mt-16 mb-5 px-1 sm:px-5 flex flex-wrap sm:flex-nowrap items-end justify-between gap-3">
            
            {/* Circular Avatar with thick border */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-dark-surface overflow-hidden shadow-md bg-white dark:bg-dark-surface2 shrink-0">
              <img
                src={ProfilePic}
                alt="Meekness Bonheur"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Action Buttons Aligned to Bottom Right of Banner */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
              <button
                onClick={() => onViewChange('designs')}
                className="glare-button px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 flex items-center gap-1.5 shadow-soft transition-all cursor-pointer shrink-0"
              >
                <span>View Designs</span>
                <ArrowRight size={14} />
              </button>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glare-button px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-dark-surface border border-black/10 dark:border-white/15 text-slate-800 dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04] flex items-center gap-1.5 shadow-soft transition-all cursor-pointer shrink-0"
              >
                <span>View Resume</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Identity & Typewriter Block */}
          <div className="px-2 sm:px-5 mb-8">
            <h1 className="font-instrument font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
              <span>Meekness Bonheur</span>
              <span className="inline-flex text-brand-blue shrink-0" title="Verified Developer">
                <CheckCircle2 size={22} className="fill-brand-blue text-white" />
              </span>
            </h1>

            {/* Typewriter Role Line */}
            <div className="font-instrument text-2xl sm:text-3xl text-brand-blue dark:text-brand-cyan font-medium my-1 flex items-center">
              <span>{currentText}</span>
              <span className="w-[2px] h-[1em] bg-brand-blue dark:bg-brand-cyan ml-1 animate-pulse" />
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-white/50 font-sans">
              20, Kigali, Rwanda
            </p>
          </div>

          {/* "Who is Meekness?" Section */}
          <div className="px-2 sm:px-5 pt-8 border-t border-black/5 dark:border-white/10">
            <h2 className="font-instrument font-bold italic text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
              Who is Meekness?
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-white/70 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I design and build software products that feel{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  effortless to use and enjoyable to interact with
                </strong>
                . From the first wireframe and database schema to the final line of production code, I enjoy shaping digital experiences where{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  thoughtful design and engineering work as one
                </strong>
                .
              </p>
              <p>
                Currently pursuing my{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Advanced Diploma in IT
                </strong>{' '}
                at{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Rwanda Polytechnic
                </strong>
                , I spend most of my time designing interfaces, building them with{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  modern frontend tools (React, TypeScript, Tailwind)
                </strong>
                , and{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  obsessing over the little details
                </strong>{' '}
                that make software fast, reliable, and memorable.
              </p>
            </div>
          </div>

        </div>

        {/* Mobile & Tablet Inline Dual-Card Cluster (< lg) */}
        <div className="block lg:hidden w-full">
          <EditorialSidebar layout="grid" />
        </div>

        {/* GitHub Contribution Calendar Heatmap */}
        <motion.div
          variants={scrollRevealVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-40px' }}
          className="w-full"
        >
          <GitHubCalendarWidget username="meekness12" />
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          variants={scrollRevealVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-40px' }}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/40">
              Stack & Technologies
            </span>
          </div>
          <TechMarquee />
        </motion.div>

        {/* Work Experience Accordion */}
        <motion.div
          variants={scrollRevealVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-40px' }}
          className="w-full"
        >
          <div className="mb-6 px-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 block mb-1">
              Career & Journey
            </span>
            <h3 className="font-space font-bold text-2xl text-slate-900 dark:text-white">
              Work Experience
            </h3>
          </div>

          <div className="dashed-border-anim rounded-2xl w-full">
            <div className="bg-white dark:bg-dark-surface rounded-2xl divide-y divide-black/5 dark:divide-white/10 transition-colors duration-150">
              {experiences.map((exp) => {
                const isExpanded = expandedExp === exp.id;
                return (
                  <div key={exp.id}>
                    <button
                      onClick={() => setExpandedExp(isExpanded ? null : exp.id)}
                      className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 p-5 md:p-6 text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors duration-150 cursor-pointer"
                    >
                      <div>
                        <h4 className="font-space font-semibold text-base sm:text-lg text-slate-900 dark:text-white">
                          {exp.company}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-white/50">
                          {exp.role} · {exp.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-slate-500 dark:text-white/50">
                          {exp.period}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-slate-400 dark:text-white/40 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-brand-blue' : ''
                          }`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 pt-1 flex flex-col gap-4 border-t border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01]">
                            <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                              {exp.description}
                            </p>

                            <ul className="flex flex-col gap-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-white/70">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {exp.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="text-xs font-mono font-medium text-slate-700 dark:text-white/80 bg-black/[0.04] dark:bg-white/10 rounded-full px-3 py-1"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Featured Projects Tactile Cards Cluster */}
        <motion.div
          variants={scrollRevealVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-40px' }}
          className="w-full"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6 px-1">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 block mb-1">
                Featured Work
              </span>
              <h3 className="font-space font-bold text-2xl text-slate-900 dark:text-white">
                Selected Systems & Projects
              </h3>
            </div>

            <button
              onClick={() => onViewChange('projects')}
              className="text-xs font-semibold text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Tactile 3-Cards Physical Stage (shwn.design style) */}
          <div className="w-full bg-slate-50/50 dark:bg-dark-surface/40 border border-black/5 dark:border-white/5 rounded-3xl p-3 sm:p-6 shadow-inner flex flex-col items-center">
            <FeaturedCardsCluster
              onCardClick={(projectId) => onViewChange('projects', projectId)}
            />
            
            <p className="text-xs font-sans text-slate-400 dark:text-white/40 mt-3 text-center">
              Click any card to inspect full architectural case study and live demo
            </p>
          </div>
        </motion.div>

        {/* Social Connect Strip */}
        <motion.div
          variants={scrollRevealVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-40px' }}
          className="w-full flex flex-col items-center text-center pt-8 border-t border-black/5 dark:border-white/10"
        >
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 mb-4">
            Connect & Socials
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glare-button flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-dark-surface border border-black/10 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-white hover:border-brand-blue/50 shadow-soft transition-all"
                >
                  <Icon size={15} />
                  <span>{s.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        </div>

      </div>
    </div>
  );
}