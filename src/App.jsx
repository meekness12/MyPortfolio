import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SplashIntro from './components/SplashIntro';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Designs from './pages/Designs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { pageViewVariants } from './utils/motion';
import { initSmoothScroll, destroySmoothScroll, scrollToTop } from './utils/scroll';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'projects' | 'designs' | 'blog' | 'contact'

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Initialize Lenis smooth scroll on mount
  useEffect(() => {
    initSmoothScroll();
    return () => {
      destroySmoothScroll();
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleViewChange = (view, projectId = null) => {
    setCurrentView(view);
    if (projectId) {
      setSelectedProjectId(projectId);
    } else if (view !== 'projects') {
      setSelectedProjectId(null);
    }
    scrollToTop({ immediate: true });
  };

  return (
    <>
      {/* 1-Second Signature Splash Screen (Matching Palakonweb Qe) */}
      {showSplash && <SplashIntro onComplete={() => setShowSplash(false)} />}

      <div
        className={`relative w-full min-h-screen bg-light-bg text-slate-900 dark:bg-dark-bg dark:text-[#EDEDED] font-sans transition-colors duration-150 selection:bg-brand-blue/20 selection:text-brand-blue ${
          showSplash ? 'h-screen overflow-hidden pointer-events-none' : ''
        }`}
      >
        {/* Subtle Radial Tech Glows */}
        <div className="fixed inset-0 pointer-events-none z-[-2] bg-light-bg dark:bg-dark-bg transition-colors duration-150" />
        <div className="fixed top-0 right-0 w-[75vw] h-[75vh] pointer-events-none z-[-1] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_70%)]" />

        {/* Top Header Blur Strip */}
        {!showSplash && (
          <div className="fixed top-0 left-0 w-full h-14 md:h-16 backdrop-blur-md bg-white/20 dark:bg-black/25 z-40 pointer-events-none transition-colors duration-150" />
        )}

        {/* Navigation */}
        <Navbar
          currentView={currentView}
          onViewChange={handleViewChange}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Main View Container with Animated Transitions (Matching Palakonweb tm) */}
        <main className="relative z-10 w-full flex flex-col items-center min-h-screen">
          <div className="flex-1 w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              {currentView === 'home' && (
                <motion.div
                  key="home"
                  className="w-full flex flex-col items-center"
                  variants={pageViewVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Home onViewChange={handleViewChange} />
                </motion.div>
              )}

              {currentView === 'projects' && (
                <motion.div
                  key="projects"
                  className="w-full flex flex-col items-center"
                  variants={pageViewVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Projects
                    initialProjectId={selectedProjectId}
                    onClearInitialProject={() => setSelectedProjectId(null)}
                  />
                </motion.div>
              )}

              {currentView === 'designs' && (
                <motion.div
                  key="designs"
                  className="w-full flex flex-col items-center"
                  variants={pageViewVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Designs />
                </motion.div>
              )}

              {currentView === 'blog' && (
                <motion.div
                  key="blog"
                  className="w-full flex flex-col items-center"
                  variants={pageViewVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Blog />
                </motion.div>
              )}

              {currentView === 'contact' && (
                <motion.div
                  key="contact"
                  className="w-full flex flex-col items-center"
                  variants={pageViewVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Footer onNavigate={handleViewChange} />
        </main>
      </div>
    </>
  );
}