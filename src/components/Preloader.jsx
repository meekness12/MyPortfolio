import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundManager } from '../utils/SoundManager';

const messages = [
    "INITIALIZING...",
    "LOADING CORE MODULES...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED."
];

export default function Preloader({ onComplete }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        soundManager.play('boot');

        // Auto-advance messages
        const timer = setInterval(() => {
            setIndex(prev => {
                if (prev >= messages.length - 1) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800); // Slight delay after last message
                    return prev;
                }
                return prev + 1;
            });
        }, 800);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-dark z-[10000] flex items-center justify-center overflow-hidden font-mono"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="text-center relative">
                {/* Spinner */}
                <div className="w-24 h-24 border-t-4 border-l-4 border-primary rounded-full animate-spin mb-8 mx-auto shadow-[0_0_20px_#00F0FF]" />

                {/* Dynamic Text */}
                <div className="h-8">
                    <AnimatePresence mode='wait'>
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-primary tracking-[0.2em] font-bold"
                        >
                            {messages[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-dark-200 mt-8 mx-auto rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-secondary shadow-[0_0_10px_#7000FF]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.2, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 z-[-1] opacity-20 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </motion.div>
    );
}

