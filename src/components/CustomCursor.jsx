import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMeekHovering, setIsMeekHovering] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);

        const handleHoverStart = (e) => {
            setIsHovering(true);
            if (e.target.classList.contains('hover-target-meek')) {
                setIsMeekHovering(true);
            }
        };

        const handleHoverEnd = () => {
            setIsHovering(false);
            setIsMeekHovering(false);
        };

        const updateListeners = () => {
            document.querySelectorAll('a, button, input, textarea, .hover-target, .hover-target-meek').forEach(el => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        updateListeners();
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        // Re-run listener attachment periodically or on DOM changes if needed
        const observer = new MutationObserver(updateListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            observer.disconnect();
            document.querySelectorAll('a, button, input, textarea, .hover-target, .hover-target-meek').forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <div className="hidden md:block">
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isMeekHovering ? 3.5 : isHovering ? 2.5 : 1,
                    backgroundColor: isMeekHovering ? "#00F0FF" : "#FFFFFF",
                    opacity: isMeekHovering ? 0.8 : isHovering ? 0.5 : 1
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[9998] mix-blend-screen"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: clicked ? 0.8 : isMeekHovering ? 2 : isHovering ? 1.5 : 1,
                    borderColor: isMeekHovering ? "#00F0FF" : "#a1a1aa",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
            />
        </div>
    );
}
