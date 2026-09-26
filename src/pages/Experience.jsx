import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Github, Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(0);

  const experiences = [
    {
      company: "Umurava AI Hackathon",
      role: "AI Systems Engineer (Team Arc Lab)",
      period: "2024",
      location: "Kigali, Rwanda · Remote / Hybrid",
      summary: "Engineered TalentLens, an AI talent screening engine designed to evaluate unstructured resumes with transparent reasoning and automated OCR.",
      achievements: [
        "Integrated Gemini 1.5 Flash for native multimodal document processing, converting unstructured PDFs into structured profiles.",
        "Architected a 'Zero-Data-Entry' pipeline eliminating manual recruiter data entry.",
        "Developed a traceable MatchScore algorithm providing recruiters with explicit gap analysis and scoring rationale.",
        "Built a resilient backend with TypeScript, Node.js, and MongoDB handling batch resume processing."
      ],
      tools: ["Gemini 1.5 Flash", "TypeScript", "Node.js", "Express", "MongoDB", "System Design"],
      links: [
        { label: "Live Demo", url: "https://talent-lens-eight.vercel.app" },
        { label: "GitHub", url: "https://github.com/Jacksonsod/talent-lens" }
      ]
    },
    {
      company: "Rwanda Polytechnic",
      role: "Advanced Diploma in Information Technology",
      period: "2023 — Present",
      location: "Kigali, Rwanda",
      summary: "Undergraduate studies in software engineering, database administration, and networking. Built academic management systems and collaborative network tools.",
      achievements: [
        "Architected InternBridge, an academic internship management system utilizing Java 21, Spring Boot, and PostgreSQL.",
        "Built Classroom Resource Auto-Distribution System running over Local Area Network (LAN) socket connections.",
        "Maintained strong focus on software engineering best practices, data structures, and relational database normalization."
      ],
      tools: ["Java 21", "Spring Boot", "PostgreSQL", "React", "Linux", "Networking"],
      links: []
    },
    {
      company: "Independent Web Development",
      role: "Frontend Developer & UI Designer",
      period: "2023 — Present",
      location: "Kigali, Rwanda",
      summary: "Designing and developing responsive, accessible web applications with a focus on polished user experience and clean code architecture.",
      achievements: [
        "Crafted custom user interfaces in Figma and developed component libraries in React with Tailwind CSS.",
        "Built Edge Journal, police license management platforms, and personal software tools.",
        "Collaborated with peers to refine frontend workflows and code review practices."
      ],
      tools: ["React", "Tailwind CSS", "JavaScript", "Figma", "Git & GitHub"],
      links: []
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-3">
              Journey & Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-dark-text dark:text-light-text tracking-tight">
              Real-world{' '}
              <span className="font-serif italic font-normal text-accent">
                experience & education.
              </span>
            </h2>
          </div>

          {/* Accordion List */}
          <div className="rounded-3xl bg-white dark:bg-dark-card border border-warm-200 dark:border-dark-border divide-y divide-warm-200 dark:divide-dark-border shadow-sm overflow-hidden">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === index;
              return (
                <div key={exp.company} className="transition-colors">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : index)}
                    className="w-full p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left hover:bg-warm-100/50 dark:hover:bg-dark-cardHover transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-sans font-bold text-lg sm:text-xl text-dark-text dark:text-light-text">
                          {exp.role}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-warm-100 dark:bg-dark-bg text-dark-muted dark:text-light-muted border border-warm-200 dark:border-dark-border">
                          {exp.company}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-dark-muted dark:text-light-muted flex items-center gap-2">
                        <MapPin size={13} /> {exp.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-dark-muted dark:text-light-muted shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {exp.period}
                      </span>
                      <div
                        className={`p-1.5 rounded-full bg-warm-100 dark:bg-dark-bg border border-warm-200 dark:border-dark-border transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-accent' : ''
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </button>

                  {/* Expandable Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 space-y-5 border-t border-warm-200/50 dark:border-dark-border/50 bg-warm-50/30 dark:bg-dark-bg/20">
                          <p className="text-sm text-dark-muted dark:text-light-muted leading-relaxed font-normal">
                            {exp.summary}
                          </p>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-dark-text dark:text-light-text mb-2.5">
                              Key Highlights
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-dark-muted dark:text-light-muted">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tools & Links */}
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-warm-200/60 dark:border-dark-border/60">
                            <div className="flex flex-wrap gap-1.5">
                              {exp.tools.map((t) => (
                                <span
                                  key={t}
                                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-warm-100 dark:bg-dark-card border border-warm-200 dark:border-dark-border text-dark-text/90 dark:text-light-text/90"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            {exp.links.length > 0 && (
                              <div className="flex items-center gap-3">
                                {exp.links.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-dark-text dark:text-light-text hover:text-accent transition-colors"
                                  >
                                    <ExternalLink size={13} /> {link.label}
                                  </a>
                                ))}
                              </div>
                            )}
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
      </div>
    </section>
  );
}
