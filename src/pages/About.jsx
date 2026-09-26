import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Sparkles, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend & UI Craft',
      skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5 & CSS3', 'Vite'],
    },
    {
      title: 'Backend & Architecture',
      skills: ['Java 21', 'Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'RBAC & Auth'],
    },
    {
      title: 'Design & Tools',
      skills: ['Figma', 'UI/UX Design', 'Git & GitHub', 'System Design', 'Responsive Layouts'],
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: 'IT Student',
      subtitle: 'Rwanda Polytechnic',
      description: 'Pursuing Advanced Diploma in Information Technology, focusing on software engineering and network systems.',
    },
    {
      icon: Sparkles,
      title: 'AI Hackathon Finalist',
      subtitle: 'Umurava AI Hackathon 2024',
      description: 'Engineered TalentLens, integrating Gemini 1.5 Flash for automated OCR and resume screening pipelines.',
    },
    {
      icon: Heart,
      title: 'Design-Minded Dev',
      subtitle: 'User Experience First',
      description: 'Belief that great software should feel natural, responsive, and respectful of the user’s time.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-3">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-dark-text dark:text-light-text tracking-tight mb-6">
              Engineering with care,{' '}
              <span className="font-serif italic font-normal text-accent">
                designed for people.
              </span>
            </h2>
          </div>

          {/* Main Grid: Story + Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            {/* Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-dark-muted dark:text-light-muted leading-relaxed font-normal">
              <p>
                I'm <strong className="text-dark-text dark:text-light-text font-medium">Meekness Bonheur</strong>, a frontend developer and IT student at <strong className="text-dark-text dark:text-light-text font-medium">Rwanda Polytechnic</strong> in Kigali. I spend my days designing interfaces, coding responsive web applications, and experimenting with software systems.
              </p>
              <p>
                I believe the best digital products strike a balance between <strong className="text-dark-text dark:text-light-text font-medium">human ergonomics</strong> and <strong className="text-dark-text dark:text-light-text font-medium">solid engineering</strong>. Whether building an internship management system like <em>InternBridge</em> or an AI resume screening engine during the <em>Umurava AI Hackathon</em>, I focus on building things that actually work smoothly for real people.
              </p>
              <p>
                When I’m not writing code or tweaking Figma components, I enjoy exploring video editing, studying software architectures, and following the latest developments in generative AI and modern web standards.
              </p>
            </div>

            {/* Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-warm-200 dark:border-dark-border shadow-sm hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-warm-100 dark:bg-dark-bg text-accent shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-base text-dark-text dark:text-light-text">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-accent mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-sm text-dark-muted dark:text-light-muted leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Core Skills Categorized Grid */}
          <div className="pt-12 border-t border-warm-200 dark:border-dark-border">
            <h3 className="text-2xl font-sans font-bold text-dark-text dark:text-light-text mb-8">
              Skills & Technologies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-warm-200 dark:border-dark-border"
                >
                  <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-dark-text dark:text-light-text mb-4">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-warm-100 dark:bg-dark-bg text-dark-text/90 dark:text-light-text/90 border border-warm-200 dark:border-dark-border hover:border-accent/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}