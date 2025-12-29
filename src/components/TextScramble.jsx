import React, { useEffect, useState } from 'react';

const CHARS = '-_~=+|?<>[]{}!@#$%^&*()';

export default function TextScramble({ text, className = "" }) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);

    // Scramble on mount
    useEffect(() => {
        scramble();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1 / 2; // Speed of decoding
        }, 30);
    };

    return (
        <span
            className={`inline-block cursor-default ${className}`}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
}
