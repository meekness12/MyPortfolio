import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);

        // Add event listeners for hover states on interactive elements
        const handleLinkHover = () => setIsHovering(true);
        const handleLinkLeave = () => setIsHovering(false);

        document.querySelectorAll('a, button, input, textarea, .hover-target').forEach(el => {
            el.addEventListener('mouseenter', handleLinkHover);
            el.addEventListener('mouseleave', handleLinkLeave);
        });

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.querySelectorAll('a, button, input, textarea, .hover-target').forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHover);
                el.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.5 : 1
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-secondary rounded-full pointer-events-none z-[9998] mix-blend-screen"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: clicked ? 0.8 : isHovering ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
            />
        </>
    );
}
