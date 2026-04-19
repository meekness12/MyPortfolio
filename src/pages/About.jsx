import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Code,
  Paintbrush,
  GitBranch,
  Film,
  School,
  Lightbulb,
  FileCode,
  Figma,
  Cpu,
  Zap
} from 'lucide-react';

const SkillSphere = lazy(() => import('../components/3d/SkillSphere'));

export default function About() {
  const skills = [
    { icon: FileCode, name: "HTML & CSS", level: 90 },
    { icon: Code, name: "JavaScript", level: 85 },
    { icon: Cpu, name: "React.js", level: 88 },
    { icon: Figma, name: "UI Design", level: 80 },
    { icon: GitBranch, name: "Git", level: 75 },
    { icon: Film, name: "Video Editing", level: 70 },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
            About <span className="text-white/40">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Main Info Card */}
          <motion.div
            className="flex-1 glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Profile</h3>
              </div>

              <p className="text-light/70 mb-8 leading-relaxed font-sans text-lg">
                IT student at <strong className="text-white font-semibold">Rwanda Polytechnic</strong> and <strong className="text-white font-semibold">Frontend Developer</strong> with 2+ years of experience. Not just coding, but engineering digital experiences. I blend technical precision with creative flair to build web apps that feel alive.
              </p>

              <div className="p-6 bg-dark-100/40 rounded-xl border border-white/5 mb-8 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <School className="w-5 h-5 text-white/70" />
                  <h4 className="text-lg font-bold font-heading text-white">Education</h4>
                </div>
                <p className="text-light/80 font-sans">Advanced Diploma in IT</p>
                <p className="text-light/50 text-sm font-sans">Rwanda Polytechnic</p>
              </div>

              <div className="relative">
                <Zap className="absolute -left-6 top-0 w-4 h-4 text-white/50" />
                <p className="text-light/80 italic pl-4 border-l-2 border-white/20 font-sans">
                  "Passionate about creating clean, functional interfaces that solve real problems."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills — 3D Sphere + Grid */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              Core Skills
            </h3>

            {/* 3D Skill Sphere */}
            <div className="hidden lg:block mb-8">
              <Suspense fallback={
                <div className="w-full h-[400px] flex items-center justify-center">
                  <div className="w-16 h-16 border-t-2 border-primary rounded-full animate-spin" />
                </div>
              }>
                <SkillSphere />
              </Suspense>
            </div>

            {/* Fallback skills grid (always visible on mobile, hidden on lg) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-100/80 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-primary/50 hover:bg-dark-200/80 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-5 h-5 text-light group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-space font-bold text-light/90">{skill.name}</span>
                  </div>
                  <div className="w-full h-1.5 bg-dark-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="/cv.pdf"
                download
                className="group relative px-8 py-3 bg-secondary/10 backdrop-blur-sm border border-secondary text-secondary rounded overflow-hidden transition-all hover:bg-secondary hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2 font-orbitron font-bold">
                  <Download className="w-4 h-4 group-hover:animate-bounce" /> Download CV
                </span>
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}