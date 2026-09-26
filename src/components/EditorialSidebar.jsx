import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const FIELD_NOTES = [
  {
    id: '#014',
    quote: 'Good software shouldn’t make people think about the software.',
    date: '26.09.26',
    author: 'Meekness',
  },
  {
    id: '#015',
    quote: 'Performance isn’t an optimization pass. On metered 3G data, it’s the difference between accessibility and exclusion.',
    date: '14.08.25',
    author: 'Meekness',
  },
  {
    id: '#016',
    quote: 'A product can be technically impressive and still feel completely lifeless. Craft is what gives it a pulse.',
    date: '20.05.25',
    author: 'Meekness',
  },
];

export default function EditorialSidebar({ layout = 'column' }) {
  const [activeNoteIndex, setActiveNoteIndex] = useState(0);

  const activeNote = FIELD_NOTES[activeNoteIndex];

  const handlePrevNote = () => {
    setActiveNoteIndex((prev) => (prev === 0 ? FIELD_NOTES.length - 1 : prev - 1));
  };

  const handleNextNote = () => {
    setActiveNoteIndex((prev) => (prev === FIELD_NOTES.length - 1 ? 0 : prev + 1));
  };

  return (
    <aside
      className={
        layout === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'
          : 'flex flex-col gap-4 w-full'
      }
    >
      {/* ========================================================================= */}
      {/* CARD 1 — STATUS / NOW (ana.sh Double-Border Bezel Chassis)                */}
      {/* ========================================================================= */}
      <div className="rounded-[18px] p-1 bg-white dark:bg-[#12151c] border border-black/10 dark:border-white/10 shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all group">
        <div className="rounded-[14px] p-4 sm:p-5 bg-gray-50/70 dark:bg-[#181b24]/50 border border-black/5 dark:border-white/5 flex flex-col justify-between h-full gap-4 transition-colors">
          
          <div>
            {/* Standardized ana.sh Header Bar */}
            <div className="flex items-center justify-between w-full mb-3.5">
              <div className="flex items-center gap-1.5">
                <Radio size={14} className="text-slate-400 dark:text-neutral-500" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-neutral-500">
                  STATUS
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 dark:text-neutral-500">
                Kigali · Sep 2026
              </span>
            </div>

            {/* Primary Status Item (ana.sh Hero Line) */}
            <div className="mb-3.5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-sans font-semibold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                  Building Zeno
                </span>
              </div>
              <p className="font-sans text-xs text-slate-500 dark:text-neutral-400 leading-relaxed pl-4">
                Fast offline-first developer canvas with instant local sync.
              </p>
            </div>

            {/* Hairline Divider Rule */}
            <div className="border-t border-black/5 dark:border-white/5 my-3" />

            {/* Secondary Activity Micro-Specs */}
            <div className="space-y-2.5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-0.5">
                  Learning
                </span>
                <p className="font-sans text-xs text-slate-700 dark:text-neutral-300 font-medium">
                  Spring Boot Concurrency & PostgreSQL
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-0.5">
                  Exploring
                </span>
                <p className="font-sans text-xs text-slate-700 dark:text-neutral-300 font-medium">
                  Local-First Architecture & Multimodal AI
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Timestamp Anchor */}
          <div className="pt-2 text-[10px] font-mono text-slate-400 dark:text-neutral-500">
            01°57'S 30°03'E · Rwanda
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CARD 2 — FIELD NOTE (ana.sh Double-Border Bezel Chassis)                  */}
      {/* ========================================================================= */}
      <div className="rounded-[18px] p-1 bg-white dark:bg-[#12151c] border border-black/10 dark:border-white/10 shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all group">
        <div className="rounded-[14px] p-4 sm:p-5 bg-gray-50/70 dark:bg-[#181b24]/50 border border-black/5 dark:border-white/5 flex flex-col justify-between h-full gap-4 transition-colors">
          
          <div>
            {/* Standardized ana.sh Header Bar */}
            <div className="flex items-center justify-between w-full mb-3.5">
              <div className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-slate-400 dark:text-neutral-500" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-neutral-500">
                  FIELD NOTE <span className="font-normal">{activeNote.id}</span>
                </span>
              </div>

              {/* Micro-stepper (‹ 1 / 3 ›) */}
              <div className="flex items-center gap-1 text-xs font-mono text-slate-400 dark:text-neutral-500">
                <button
                  onClick={handlePrevNote}
                  aria-label="Previous note"
                  className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={13} />
                </button>
                <span className="text-[10px]">
                  {activeNoteIndex + 1}/{FIELD_NOTES.length}
                </span>
                <button
                  onClick={handleNextNote}
                  aria-label="Next note"
                  className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>

            {/* Aphorism Body in Instrument Serif */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNote.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="py-1"
              >
                <blockquote className="font-instrument text-base sm:text-lg text-slate-800 dark:text-neutral-200 italic leading-snug">
                  “{activeNote.quote}”
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Signature & Date */}
          <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-neutral-500">
            <span>— {activeNote.author} · Kigali</span>
            <span>{activeNote.date}</span>
          </div>
        </div>
      </div>

      {/* Subtle Signature Line */}
      <p className="text-[10px] font-mono text-slate-400 dark:text-neutral-500 text-center tracking-tight col-span-full pt-1">
        made in Kigali · updated occasionally
      </p>
    </aside>
  );
}
