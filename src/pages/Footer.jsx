import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 pb-28 sm:pb-32 md:pb-14 flex flex-col items-center justify-center bg-white/70 dark:bg-dark-surface/50 border-t border-black/5 dark:border-white/10 transition-colors duration-150 overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />

      {/* Main Content (Matching Palakonweb $e) */}
      <div className="flex flex-col items-center text-center mb-8 px-6 relative z-10 max-w-xl mx-auto">
        <p className="font-instrument italic text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
          Have an idea or project?<br />
          Let's build something together.
        </p>

        <button
          onClick={() => {
            if (onNavigate) {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="glare-button group flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-medium text-sm hover:shadow-soft-hover transition-all duration-150 shadow-soft"
        >
          <span>Let's Talk</span>
          <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Signature Credit */}
      <p className="relative z-10 text-xs sm:text-sm text-slate-500 dark:text-white/50 text-center mb-6">
        Made with <span className="text-brand-blue font-bold">⚡</span> and craft by{' '}
        <span className="font-signature text-xl text-slate-900 dark:text-white ml-1">
          meekness
        </span>
      </p>

      {/* Subtle tech footer mark */}
      <div className="relative z-10 flex items-center gap-3 text-[11px] font-mono text-slate-400 dark:text-white/30">
        <span>Kigali, Rwanda 🇷🇼</span>
        <span>·</span>
        <span>© {year}</span>
      </div>
    </footer>
  );
}
