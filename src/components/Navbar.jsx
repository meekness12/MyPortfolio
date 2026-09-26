import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  FolderKanban,
  LayoutGrid,
  BookOpen,
  MessageSquare,
  Sun,
  Moon,
} from 'lucide-react';

/**
 * Standardized Theme Toggle Switch (matching palakonweb.in pe component)
 */
function ThemeToggle({ theme, onToggle, size = 'md' }) {
  const isDark = theme === 'dark';
  const width = size === 'sm' ? 44 : 52;
  const height = size === 'sm' ? 24 : 28;
  const knobSize = size === 'sm' ? 18 : 22;
  const padding = (height - knobSize) / 2;

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="relative flex items-center rounded-full border border-black/10 dark:border-white/15 bg-black/[0.06] dark:bg-white/10 transition-colors duration-150 cursor-pointer"
      style={{ width, height, padding }}
    >
      <motion.span
        className="flex items-center justify-center rounded-full bg-white dark:bg-dark-surface3 shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
        style={{ width: knobSize, height: knobSize }}
        animate={{ x: isDark ? width - knobSize - padding * 2 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
      >
        {isDark ? (
          <Moon size={knobSize * 0.6} className="text-white/90" />
        ) : (
          <Sun size={knobSize * 0.6} className="text-[#E8A33D]" />
        )}
      </motion.span>
    </button>
  );
}

export default function Navbar({ currentView, onViewChange, theme, onToggleTheme }) {
  const navItems = [
    { name: 'Home', view: 'home', icon: Home },
    { name: 'Projects', view: 'projects', icon: FolderKanban },
    { name: 'Designs', view: 'designs', icon: LayoutGrid },
    { name: 'Blog', view: 'blog', icon: BookOpen },
  ];

  const mobileNavItems = [
    ...navItems,
    { name: 'Talk', view: 'contact', icon: MessageSquare },
  ];

  const handleNav = (view) => {
    onViewChange(view);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleHomeClick = () => {
    onViewChange('home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      {/* Top Left Signature Logo (matching palakonweb.in layout) */}
      <button
        onClick={handleHomeClick}
        className="fixed top-3 left-6 md:top-4 md:left-10 z-50 hover:opacity-70 transition-opacity duration-150 cursor-pointer"
        aria-label="Navigate to Home"
      >
        <span className="font-signature text-xl md:text-2xl text-black dark:text-white">
          meekness
        </span>
      </button>

      {/* Mobile Top Right Theme Toggle */}
      <div className="md:hidden fixed top-3 right-6 z-50">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} size="sm" />
      </div>

      {/* Desktop Top Right Navigation (matching palakonweb.in minimalist borderless floating bar) */}
      <nav className="hidden md:flex fixed top-4 right-10 md:right-12 z-50 items-center gap-8">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.name}
              onClick={() => handleNav(item.view)}
              className={`group relative font-medium text-sm transition-colors duration-150 cursor-pointer ${
                isActive
                  ? 'text-black dark:text-white'
                  : 'text-slate-500 dark:text-white/70 hover:text-black dark:hover:text-white'
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand-blue dark:bg-brand-cyan transition-all duration-150 ease-out ${
                  isActive
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}
              />
            </button>
          );
        })}

        {/* let's talk CTA */}
        <button
          onClick={() => handleNav('contact')}
          className={`group relative font-medium text-sm transition-colors duration-150 cursor-pointer ${
            currentView === 'contact'
              ? 'text-black dark:text-white'
              : 'text-slate-500 dark:text-white/70 hover:text-black dark:hover:text-white'
          }`}
        >
          let's talk
          <span
            className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand-blue dark:bg-brand-cyan transition-all duration-150 ease-out ${
              currentView === 'contact'
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
            }`}
          />
        </button>

        {/* Desktop Theme Toggle */}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} size="md" />
      </nav>

      {/* Mobile Floating Bottom Dock (matching palakonweb.in) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1.5 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5 dark:border-white/10 rounded-[32px] p-1.5 transition-colors duration-150">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.view;
            return (
              <motion.button
                layout
                key={item.name}
                aria-label={item.name}
                onClick={() => handleNav(item.view)}
                className={`group relative flex items-center justify-center h-11 rounded-[24px] transition-colors duration-150 overflow-hidden cursor-pointer ${
                  isActive
                    ? 'px-4 bg-black/10 dark:bg-white/10 gap-2'
                    : 'w-12 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <motion.div layout className="shrink-0 flex items-center justify-center">
                  <Icon
                    size={18}
                    strokeWidth={isActive ? 2 : 1.75}
                    className={`transition-colors duration-150 ${
                      isActive
                        ? 'text-black dark:text-white'
                        : 'text-black/40 dark:text-white/50 group-hover:text-black/80 dark:group-hover:text-white/90'
                    }`}
                  />
                </motion.div>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, scale: 0.8 }}
                      animate={{ opacity: 1, width: 'auto', scale: 1 }}
                      exit={{ opacity: 0, width: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="font-medium text-xs whitespace-nowrap text-black dark:text-white origin-left"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}
