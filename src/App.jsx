import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import HudOverlay from './components/HudOverlay';
import MeekAssistant from './components/MeekAssistant';
import { AnimatePresence } from 'framer-motion';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-dark min-h-screen text-light font-space selection:bg-primary selection:text-dark cursor-none relative overflow-x-hidden">
      <CustomCursor />
      <HudOverlay />

      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <MeekAssistant />
          <main>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}