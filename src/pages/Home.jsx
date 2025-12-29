import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import image1 from '../assets/image1.svg';
import MagneticButton from '../components/MagneticButton';
import TextScramble from '../components/TextScramble';
// import './Home.css'; // Deprecated

export default function Home() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

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
                  href="/resume.pdf"
                  className="group relative px-8 py-3 bg-dark-100 rounded-md border border-white/10 text-light transition-all hover:bg-white/5 hover:border-white/30 flex items-center gap-2 font-space"
                >
                  Download CV <Download className="w-4 h-4 group-hover:animate-bounce" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Holographic Circles */}
            <div className="absolute inset-0 border border-primary/30 rounded-full animate-spin-slow [--tw-duration:10s]" />
            <div className="absolute inset-4 border border-secondary/30 rounded-full animate-spin-slow [--tw-duration:15s] flex-row-reverse" />
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-2xl" />

            <img
              src={image1}
              alt="Futuristic Developer Illustration"
              className="relative w-full h-full object-contain p-8 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] animate-float"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}