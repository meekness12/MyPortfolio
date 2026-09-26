import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiVite,
  SiExpress,
  SiMongodb,
  SiDocker
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'Java', icon: SiJavascript, color: '#F89820' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#888888' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
];

export default function TechMarquee() {
  return (
    <div className="w-full py-6 overflow-hidden relative select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] animate-marquee">
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 mx-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-dark-surface border border-black/5 dark:border-white/10 shadow-sm shrink-0 hover:border-brand-blue/40 transition-colors"
            >
              <Icon size={15} style={{ color: tech.color }} />
              <span className="text-xs font-medium text-slate-700 dark:text-white/80 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
