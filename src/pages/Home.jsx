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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-light/70 uppercase tracking-wider">Available for work</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6 tracking-tighter">
              Hi, I'm <motion.span 
                className="text-white hover-target-meek inline-block cursor-none"
                whileHover={{ scale: 1.05, color: "#00F0FF" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Meekness
              </motion.span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-light/60 font-sans mb-8">
              Full-Stack System Architect & <span className="text-white/80">Frontend Specialist</span>
            </h2>

            <p className="text-light/60 text-lg max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed font-sans">
              Engineering high-fidelity digital systems with <span className="text-white">technical precision</span> and <span className="text-white">creative flair</span>. I bridge the gap between complex system architecture and premium user experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <MagneticButton>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-white text-dark rounded-full font-heading font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  View Work <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/cv.pdf"
                  className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-heading font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  Download CV <Download className="w-4 h-4" />
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