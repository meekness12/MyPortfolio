import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import TextScramble from '../components/TextScramble';

const HeroScene = lazy(() => import('../components/3d/HeroScene'));

export default function Home() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20">

      <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-mono mb-4 tracking-widest text-lg">
              <TextScramble text="SYSTEM ONLINE //" />
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow"><TextScramble text="Meekness" /></span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-light/80 font-space mb-8">
              <span className="border-r-4 border-primary animate-pulse">Frontend Developer</span>
            </h2>

            <p className="text-light/60 text-lg max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Architecting futuristic digital experiences with <span className="text-primary">React</span> and <span className="text-secondary">Modern CSS</span>. Building the web of tomorrow, today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <MagneticButton>
                <a
                  href="#projects"
                  className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-md border border-primary text-primary transition-all hover:shadow-[0_0_20px_#00F0FF] flex items-center gap-2 font-orbitron tracking-wider"
                >
                  <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                  View Work <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/cv.pdf"
                  className="group relative px-8 py-3 bg-dark-100/50 backdrop-blur-sm rounded-md border border-white/10 text-light transition-all hover:bg-white/5 hover:border-white/30 flex items-center gap-2 font-space"
                >
                  Download CV <Download className="w-4 h-4 group-hover:animate-bounce" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* 3D Hero Scene */}
        <motion.div
          className="flex-1 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg aspect-square">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 border-t-2 border-primary rounded-full animate-spin" />
              </div>
            }>
              <HeroScene />
            </Suspense>
          </div>
        </motion.div>

      </div>
    </section>
  );
}