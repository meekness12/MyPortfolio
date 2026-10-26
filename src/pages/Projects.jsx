import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/scroll';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  ArrowLeft,
  Layers,
  Sparkles,
  CheckCircle2,
  Calendar,
  User,
  Cpu,
  Database,
  Globe,
  Code2,
  ArrowDown
} from 'lucide-react';
import FeaturedCardsCluster from '../components/FeaturedCardsCluster';
import { projects, words, techIconMap } from '../data/projects';

export default function Projects({ initialProjectId = null, onClearInitialProject }) {
  const { projectId: routeProjectId } = useParams();
  const navigate = useNavigate();

  const activeProjectId = routeProjectId || initialProjectId;

  const [wordIndex, setWordIndex] = useState(0);
  const [viewMode, setViewMode] = useState(activeProjectId ? 'detail' : 'featured');
  const [selectedProjectId, setSelectedProjectId] = useState(activeProjectId || null);

  useEffect(() => {
    if (activeProjectId) {
      setSelectedProjectId(activeProjectId);
      setViewMode('detail');
    } else if (!routeProjectId && !initialProjectId) {
      setViewMode((prev) => (prev === 'detail' ? 'featured' : prev));
      setSelectedProjectId(null);
    }
  }, [activeProjectId, routeProjectId, initialProjectId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const openProjectDetail = (id) => {
    setSelectedProjectId(id);
    setViewMode('detail');
    navigate(`/projects/${id}`);
    scrollToTop({ immediate: true });
  };

  const handleBackToFeatured = () => {
    setViewMode('featured');
    setSelectedProjectId(null);
    if (onClearInitialProject) onClearInitialProject();
    navigate('/projects');
    scrollToTop({ immediate: true });
  };

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section className="w-full relative z-20 pt-28 md:pt-36 pb-32 flex flex-col items-center">
      <div className="w-full max-w-[880px] px-4 sm:px-6 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. HEADER (Title & Text Kept As Requested)                */}
        {/* ========================================================= */}
        <div className="mb-12 md:mb-14 flex flex-col items-center text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-blue dark:text-brand-cyan font-semibold mb-3 block">
            Selected Work
          </span>

          <h1 className="font-instrument font-bold text-slate-800 dark:text-white text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3">
            <span>Things I've</span>
            <span className="relative inline-flex items-center justify-center min-w-[125px] sm:min-w-[155px] border border-dashed border-slate-700/30 dark:border-white/30 rounded-xl px-3 py-0.5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-brand-blue dark:text-brand-cyan"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="font-sans text-slate-500 dark:text-white/60 text-sm sm:text-base max-w-lg leading-relaxed">
            A selection of software systems and platforms that combine thoughtful design, clean engineering, and dependable performance.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. THREE-VIEW STATE ROUTER                                */}
        {/* ========================================================= */}
        <AnimatePresence mode="wait">
          
          {/* ------------------------------------------------------- */}
          {/* VIEW A: FEATURED 3-CARDS CLUSTER (shwn.design Style)    */}
          {/* ------------------------------------------------------- */}
          {viewMode === 'featured' && (
            <motion.div
              key="featured-cards-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col items-center"
            >
              {/* Spacious Tactile Stage */}
              <FeaturedCardsCluster onCardClick={openProjectDetail} />

              {/* Action Button: Show All Projects Below Cards */}
              <div className="mt-8 flex flex-col items-center">
                <button
                  onClick={() => {
                    setViewMode('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="glare-button px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-dark-surface border border-black/10 dark:border-white/15 text-slate-900 dark:text-white hover:border-brand-blue/50 shadow-soft hover:shadow-soft-hover flex items-center gap-2 transition-all cursor-pointer group"
                >
                  <span>View All Projects ({projects.length})</span>
                  <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ------------------------------------------------------- */}
          {/* VIEW B: ALL PROJECTS LIST / ARCHIVE                     */}
          {/* ------------------------------------------------------- */}
          {viewMode === 'all' && (
            <motion.div
              key="all-projects-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col items-start"
            >
              {/* Back to Featured Switcher */}
              <button
                onClick={() => {
                  setViewMode('featured');
                  scrollToTop({ immediate: true });
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors mb-8 cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Featured Cards</span>
              </button>

              <div className="flex items-center justify-between w-full mb-8 pb-4 border-b border-black/10 dark:border-white/10">
                <h2 className="font-instrument font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  All Systems & Applications ({projects.length})
                </h2>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {projects.map((p, index) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="dashed-border-anim rounded-2xl w-full h-full shadow-soft hover:shadow-soft-hover transition-all flex flex-col"
                  >
                    <div className="relative flex flex-col bg-white dark:bg-dark-surface rounded-[15px] overflow-hidden h-full">
                      
                      {/* Mockup Header - Click opens detail */}
                      <div
                        onClick={() => openProjectDetail(p.id)}
                        className="group relative block overflow-hidden pt-6 px-5 sm:px-6 bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-dark-surface2 dark:via-dark-surface dark:to-dark-surface cursor-pointer border-b border-black/5 dark:border-white/5"
                      >
                        <div className="w-full rounded-t-xl overflow-hidden bg-white/30 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm transition-transform duration-300 origin-top group-hover:scale-[1.03]">
                          <img src={p.image} alt={p.title} className="w-full h-44 object-cover object-top block" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-6 sm:p-7">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3
                            onClick={() => openProjectDetail(p.id)}
                            className="font-space font-bold text-slate-900 dark:text-white text-lg sm:text-xl leading-snug cursor-pointer hover:text-brand-blue transition-colors"
                          >
                            {p.title}
                          </h3>

                          {p.isLive ? (
                            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 rounded-full px-2.5 py-0.5 shrink-0 bg-emerald-500/10 border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Live
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono text-slate-400 dark:text-white/40 shrink-0">
                              Completed
                            </span>
                          )}
                        </div>

                        <p className="font-sans font-medium text-brand-blue dark:text-brand-cyan text-xs mb-3">
                          {p.tagline}
                        </p>

                        <p className="font-sans text-slate-600 dark:text-white/60 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                          {p.summary}
                        </p>

                        {/* Tech stack badge list */}
                        <div className="flex flex-wrap gap-1.5 pt-4 mt-auto border-t border-black/5 dark:border-white/10">
                          {p.tech.map((t) => {
                            const Icon = techIconMap[t];
                            return (
                              <span
                                key={t}
                                className="flex items-center gap-1 text-[11px] font-mono text-slate-600 dark:text-white/70 bg-black/[0.03] dark:bg-white/[0.06] rounded-md px-2.5 py-1"
                              >
                                {Icon && <Icon size={12} />}
                                <span>{t}</span>
                              </span>
                            );
                          })}
                        </div>

                        {/* Detail Trigger & Links */}
                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-black/5 dark:border-white/10 text-xs font-semibold">
                          <button
                            onClick={() => openProjectDetail(p.id)}
                            className="text-brand-blue dark:text-brand-cyan hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <span>Detailed Case Study</span>
                            <ArrowUpRight size={14} />
                          </button>

                          <div className="flex items-center gap-2">
                            {p.isLive && (
                              <a
                                href={p.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white transition-colors"
                                title="Open Live Demo"
                              >
                                <ExternalLink size={15} />
                              </a>
                            )}
                            <a
                              href={p.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white transition-colors"
                              title="GitHub Repository"
                            >
                              <Github size={15} />
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ------------------------------------------------------- */}
          {/* VIEW C: DEDICATED PROJECT DETAIL VIEW                   */}
          {/* ------------------------------------------------------- */}
          {viewMode === 'detail' && selectedProject && (
            <motion.div
              key={`project-detail-${selectedProject.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col items-start"
            >
              {/* Back to Projects Button */}
              <button
                onClick={handleBackToFeatured}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors mb-8 cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Projects</span>
              </button>

              {/* Hero Banner Mockup */}
              <div className="w-full aspect-[21/10] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-900 border border-black/10 dark:border-white/10 shadow-xl mb-8 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Metadata Header */}
              <div className="w-full flex flex-col gap-4 pb-8 mb-8 border-b border-black/10 dark:border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 font-semibold">
                      {selectedProject.shortName}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-white/40">
                      {selectedProject.period}
                    </span>
                  </div>

                  {/* External Action Links */}
                  <div className="flex items-center gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="glare-button px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 flex items-center gap-1.5 shadow-soft transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="glare-button px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-dark-surface border border-black/10 dark:border-white/15 text-slate-800 dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04] flex items-center gap-1.5 shadow-soft transition-all"
                    >
                      <Github size={14} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                <h2 className="font-instrument font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
                  {selectedProject.title}
                </h2>

                <p className="font-sans text-brand-blue dark:text-brand-cyan text-sm sm:text-base font-medium">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Deep Technical Content */}
              <div className="w-full space-y-10">
                
                {/* 1. Problem & Architecture Overview */}
                <div className="space-y-4">
                  <h3 className="font-instrument font-bold italic text-2xl text-slate-900 dark:text-white">
                    Project Overview & Motivation
                  </h3>
                  <p className="text-slate-600 dark:text-white/70 text-sm sm:text-base leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                {/* 2. Architecture Blueprint */}
                {selectedProject.architecture && (
                  <div className="space-y-4">
                    <h3 className="font-instrument font-bold italic text-2xl text-slate-900 dark:text-white">
                      Technical Architecture Blueprint
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.architecture.map((arch) => {
                        const Icon = arch.icon;
                        return (
                          <div
                            key={arch.name}
                            className="p-5 rounded-2xl bg-white dark:bg-dark-surface border border-black/10 dark:border-white/10 shadow-soft"
                          >
                            <div className="flex items-center gap-2.5 mb-2">
                              <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue dark:text-brand-cyan">
                                <Icon size={16} />
                              </div>
                              <h4 className="font-space font-semibold text-sm text-slate-900 dark:text-white">
                                {arch.name}
                              </h4>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-white/60 leading-relaxed">
                              {arch.detail}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Core Features */}
                {selectedProject.features && (
                  <div className="space-y-4">
                    <h3 className="font-instrument font-bold italic text-2xl text-slate-900 dark:text-white">
                      Key Engineering Capabilities
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedProject.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-dark-surface border border-black/5 dark:border-white/10"
                        >
                          <CheckCircle2 size={16} className="text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-white/80 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Full Technology Stack */}
                <div className="space-y-4 pt-4 border-t border-black/10 dark:border-white/10">
                  <h3 className="font-instrument font-bold italic text-xl text-slate-900 dark:text-white">
                    Technologies & Dependencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => {
                      const Icon = techIconMap[t];
                      return (
                        <span
                          key={t}
                          className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-white/80 bg-white dark:bg-dark-surface border border-black/10 dark:border-white/10 rounded-lg px-3 py-1.5 shadow-sm"
                        >
                          {Icon && <Icon size={14} className="text-brand-blue dark:text-brand-cyan" />}
                          <span>{t}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Bottom Navigation: Back to Featured */}
              <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 w-full flex justify-between items-center">
                <button
                  onClick={handleBackToFeatured}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Projects</span>
                </button>

                <button
                  onClick={() => {
                    setViewMode('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-semibold text-brand-blue dark:text-brand-cyan hover:underline cursor-pointer"
                >
                  Browse all {projects.length} projects →
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
