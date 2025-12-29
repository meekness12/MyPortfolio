import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../utils/SoundManager';

export default function MagneticButton({ children, className = "", onClick }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseOver = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
        soundManager.play('hover');
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    }

    const handleClick = (e) => {
        soundManager.play('click');
        if (onClick) onClick(e);
    }

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            className={`relative inline-block ${className}`}
            onMouseMove={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
