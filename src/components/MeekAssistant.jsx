import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';
import ArcReactor from './ArcReactor';
import { soundManager } from '../utils/SoundManager';

export default function MeekAssistant() {
    const [isListening, setIsListening] = useState(false);
    const [response, setResponse] = useState("System Ready");
    const [supported, setSupported] = useState(true);

    const [hasGreeted, setHasGreeted] = useState(false);

    // Speech Recognition Setup
    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            setSupported(false);
            setResponse("Voice Module Unavailable");
        } else {
            // Attempt auto-greet on mount
            const timer = setTimeout(() => {
                if (!hasGreeted) {
                    greetAndAsk();
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [hasGreeted, greetAndAsk]);

    const greetAndAsk = useCallback(() => {
        const greeting = "Welcome, Sir. I am MeekAssistant. What would you like to explore in the portfolio?";
        speak(greeting, () => {
            setHasGreeted(true);
            // Optional: Auto-start listening after greeting if desired, 
            // but browsers usually block 'start()' without direct user event.
            // We'll leave it to the user to click to reply to avoid errors.
            setResponse("Waiting for command...");
        });
    }, []);

    const startListening = () => {
        if (!supported) return;

        soundManager.play('click');

        // If we haven't greeted yet (e.g. auto-play blocked), greet first then listen
        if (!hasGreeted) {
            speak("I am listening. What do you need?", () => {
                setHasGreeted(true);
                runSpeechRecognition();
            });
            return;
        }

        runSpeechRecognition();
    };

    const runSpeechRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            setIsListening(true);
            setResponse("Listening...");
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            processCommand(command);
        };

        recognition.start();
    }

    const processCommand = (cmd) => {
        if (cmd.includes('home')) {
            scrollTo('#home');
            speak("Navigating to Home base.");
        } else if (cmd.includes('about') || cmd.includes('who are you')) {
            scrollTo('#about');
            speak("Pulling up developer dossier.");
        } else if (cmd.includes('project') || cmd.includes('work')) {
            scrollTo('#projects');
            speak("Accessing project database.");
        } else if (cmd.includes('contact') || cmd.includes('hire')) {
            scrollTo('#contact');
            speak("Opening communication protocols.");
        } else if (cmd.includes('hello') || cmd.includes('hi')) {
            speak("Greetings. MeekAssistant systems online.");
        } else {
            speak("I'm afraid I didn't catch that. Could you repeat?");
        }
    };

    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const speak = (text, onEndCallback) => {
        setResponse(text);
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        const techVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Samantha'));
        if (techVoice) utterance.voice = techVoice;

        utterance.pitch = 0.9;
        utterance.rate = 1.05;

        if (onEndCallback) {
            utterance.onend = onEndCallback;
        }

        window.speechSynthesis.speak(utterance);
    };

    // Drag constraints could be added here, but sticking to fixed position for now
    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
        >
            {/* Response Bubble */}
            <AnimatePresence>
                {(isListening || response) && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-dark/80 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-lg text-primary font-mono text-sm max-w-[200px] text-right shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                        role="status"
                        aria-live="polite"
                    >
                        {response}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Interactive Core */}
            <button
                onClick={startListening}
                className="group relative focus:outline-none"
                aria-label={isListening ? "Assistant is listening" : "Activate Voice Assistant"}
                aria-pressed={isListening}
            >
                <ArcReactor isActive={true} isListening={isListening} />

                {/* Hover Hint */}
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-primary font-mono whitespace-nowrap pointer-events-none" aria-hidden="true">
                    {isListening ? "LISTENING..." : "PUSH TO TALK"}
                </div>
            </button>
        </motion.div>
    );
}
