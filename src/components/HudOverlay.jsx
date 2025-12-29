import React, { useState, useEffect } from 'react';

export default function HudOverlay() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[50] p-6 hidden md:block">
            {/* Top Left Bracket */}
            <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl"></div>

            {/* Top Right Bracket */}
            <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-primary/30 rounded-tr-3xl"></div>

            {/* Bottom Left Bracket */}
            <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-primary/30 rounded-bl-3xl"></div>

            {/* Bottom Right Bracket */}
            <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-primary/30 rounded-br-3xl"></div>

            {/* System Status - Top Right */}
            <div className="absolute top-10 right-10 flex flex-col items-end gap-1 text-xs font-mono text-primary/60">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>SYS: ONLINE</span>
                </div>
                <div>CPU: OPTIMAL</div>
                <div>MEM: STABLE</div>
                <div>{time}</div>
            </div>

            {/* Decorative Compass Lines - Bottom Center */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-8 flex justify-center items-end gap-2 opacity-30">
                <div className="w-1 h-4 bg-primary"></div>
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-px h-2 bg-primary"></div>
                ))}
                <div className="w-1 h-4 bg-primary"></div>
                {[...Array(10)].map((_, i) => (
                    <div key={i + 10} className="w-px h-2 bg-primary"></div>
                ))}
                <div className="w-1 h-4 bg-primary"></div>
            </div>

        </div>
    );
}
