import React, { useRef, useState, useCallback } from 'react';

export default function ProjectCard3D({ children, className = '' }) {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState('');
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        );

        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 0.15,
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
        setGlare({ x: 50, y: 50, opacity: 0 });
    }, []);

    return (
        <div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
                transition: transform ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
            }}
        >
            {children}

            {/* Glare/shine effect */}
            <div
                className="absolute inset-0 rounded-xl pointer-events-none z-30"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 240, 255, ${glare.opacity}), transparent 60%)`,
                    transition: 'opacity 0.3s',
                }}
            />
        </div>
    );
}
