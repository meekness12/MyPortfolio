import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';

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
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('splash_shown');
    }
    return true;
  });

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splash_shown', '1');
  };

  const handleViewChange = (view, projectId = null) => {
    const routes = {
      home: '/',
      projects: '/projects',
      designs: '/designs',
      blog: '/blog',
      contact: '/contact',
    };

    if (projectId) {
      navigate(`/projects/${projectId}`);
    } else {
      navigate(routes[view] || '/');
    }
    scrollToTop({ immediate: true });
  };

  // Derive currentView from pathname for Navbar and visual indicator active state
  const currentView = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith('/projects')) return 'projects';
    if (path.startsWith('/designs')) return 'designs';
    if (path.startsWith('/blog')) return 'blog';
    if (path === '/contact') return 'contact';
    return 'home';
  }, [location.pathname]);

  const topLevelSection = location.pathname.split('/')[1] || 'home';

  return (
    <>
      {/* 1-Second Signature Splash Screen (Matching Palakonweb Qe) */}
      {showSplash && <SplashIntro onComplete={handleSplashComplete} />}

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
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Main View Container with Animated Transitions (Matching Palakonweb tm) */}
        <main className="relative z-10 w-full flex flex-col items-center min-h-screen">
          <div className="flex-1 w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={topLevelSection}
                className="w-full flex flex-col items-center"
                variants={pageViewVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Routes location={location}>
                  <Route path="/" element={<Home onViewChange={handleViewChange} />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:projectId" element={<Projects />} />
                  <Route path="/designs" element={<Designs />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </div>

          <Footer onNavigate={handleViewChange} />
        </main>
      </div>
    </>
  );
}