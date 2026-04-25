import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Preloader from './components/Preloader';
import MeekAssistant from './components/MeekAssistant';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-dark min-h-screen text-light font-sans relative overflow-x-hidden selection:bg-white/20 selection:text-white">
      
      {/* Subtle Premium Background Glow */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          <MeekAssistant />
          <main>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}