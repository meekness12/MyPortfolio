import React from 'react';
import { motion } from 'framer-motion';

export default function ArcReactor({ isActive, isListening }) {
    return (
        <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary shadow-[0_0_15px_#00F0FF]"
                animate={{
                    rotate: 360,
                    scale: isListening ? [1, 1.1, 1] : 1
                }}
                transition={{
                    rotate: { duration: 10, ease: "linear", repeat: Infinity },
                    scale: { duration: 0.5, repeat: Infinity }
                }}
            />

            {/* Inner Ring */}
            <motion.div
                className="absolute inset-2 rounded-full border border-secondary shadow-[0_0_10px_#7000FF]"
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 15, ease: "linear", repeat: Infinity
                }}
            />

            {/* Core */}
            <motion.div
                className={`w-4 h-4 rounded-full ${isActive ? 'bg-white shadow-[0_0_20px_#ffffff]' : 'bg-primary/50'}`}
                animate={{
                    opacity: isActive ? [0.5, 1, 0.5] : 1
                }}
                transition={{
                    duration: 2, repeat: Infinity
                }}
            />

            {/* Reactor Details */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <div
                    key={deg}
                    className="absolute w-1 h-3 bg-primary/80"
                    style={{
                        transform: `rotate(${deg}deg) translateY(-24px)`,
                        transformOrigin: "center 24px"
                    }}
                />
            ))}
        </div>
    );
}
