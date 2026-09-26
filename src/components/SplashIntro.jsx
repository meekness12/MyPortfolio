import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashIntro({ onComplete }) {
  const [stage, setStage] = useState('writing');

  useEffect(() => {
    const t1 = setTimeout(() => setStage('holding'), 450);
    const t2 = setTimeout(() => setStage('revealing'), 650);
    const t3 = setTimeout(() => {
      setStage('done');
      setTimeout(onComplete, 200);
    }, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-light-bg dark:bg-dark-bg overflow-hidden pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Signature logo writing animation */}
            <motion.div
              className="overflow-hidden whitespace-nowrap"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              <span className="font-signature text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white px-4 py-2 block">
                meekness
              </span>
            </motion.div>

            {/* Subtle high-tech accent line */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent mt-1"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: stage === 'writing' ? 60 : 140, opacity: [0, 1, 0.8] }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
