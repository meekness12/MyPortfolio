import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DitherWaveBackground from './DitherWaveBackground';

// -------------------------------------------------------------
// Push-Pin SVG Component (for Card 1 - shwn.design style)
// -------------------------------------------------------------
function PushPin() {
  return (
    <div className="absolute -top-3.5 left-5 z-30 pointer-events-none drop-shadow-md">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        {/* Soft cast shadow */}
        <ellipse cx="14" cy="22" rx="7" ry="3" fill="rgba(0,0,0,0.4)" filter="blur(1px)" />
        {/* Metal pin shaft */}
        <line x1="16" y1="18" x2="14" y2="24" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        {/* Transparent acrylic head outer */}
        <circle cx="16" cy="14" r="8" fill="rgba(255,255,255,0.7)" stroke="rgba(255,255,255,0.9)" strokeWidth="1" />
        {/* Cyan glass tint */}
        <circle cx="16" cy="14" r="5" fill="rgba(6,182,212,0.35)" />
        {/* White specular highlight */}
        <ellipse cx="14" cy="11" rx="3" ry="1.5" fill="white" transform="rotate(-30 14 11)" />
        {/* Pin center core */}
        <circle cx="16" cy="14" r="2" fill="#3B82F6" opacity="0.8" />
      </svg>
    </div>
  );
}

// -------------------------------------------------------------
// Binder Clip SVG Component (for Card 3 - shwn.design style)
// -------------------------------------------------------------
function BinderClip() {
  return (
    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-lg">
      <svg width="34" height="44" viewBox="0 0 36 46" fill="none">
        {/* Cast shadow */}
        <ellipse cx="18" cy="41" rx="9" ry="3" fill="rgba(0,0,0,0.45)" filter="blur(1px)" />
        {/* Chrome wire handles */}
        <path
          d="M 12,14 L 12,32 C 12,38 24,38 24,32 L 24,14"
          stroke="#E2E8F0"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Black steel clip body */}
        <rect x="6" y="2" width="24" height="15" rx="2" fill="#0F172A" stroke="#475569" strokeWidth="1" />
        {/* Steel highlight strip */}
        <line x1="8" y1="4" x2="28" y2="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Clip center gap */}
        <rect x="13" y="10" width="10" height="2" rx="0.5" fill="#020617" />
      </svg>
    </div>
  );
}

// -------------------------------------------------------------
// Card 1 Graphic: Cyan Dithered Orbital Sphere (TalentLens)
// -------------------------------------------------------------
function OrbitalGraphic() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl" />
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="sphereGradCluster" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#A5F3FC" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#083344" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="32" fill="url(#sphereGradCluster)" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" strokeDasharray="1 2" />
        <ellipse cx="50" cy="50" rx="46" ry="14" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(-25 50 50)" opacity="0.85" />
        <ellipse cx="50" cy="50" rx="40" ry="18" fill="none" stroke="#38BDF8" strokeWidth="1" transform="rotate(35 50 50)" opacity="0.6" />
      </svg>
    </div>
  );
}

// -------------------------------------------------------------
// Card 2 Graphic: Emerald Geometric Leaf Lattice (InternBridge)
// -------------------------------------------------------------
function LatticeGraphic() {
  return (
    <div className="w-24 h-24 relative flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl" />
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="leafGradCluster" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
        </defs>
        <path d="M 50,15 L 76,42 L 50,85 L 24,42 Z" fill="url(#leafGradCluster)" opacity="0.9" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
        <line x1="24" y1="42" x2="76" y2="42" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
        <line x1="37" y1="28" x2="63" y2="63" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="63" y1="28" x2="37" y2="63" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="50" y1="85" x2="50" y2="92" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// -------------------------------------------------------------
// Card 3 Graphic: Dot Matrix Pattern (Edge Journal)
// -------------------------------------------------------------
function DotMatrixGraphic() {
  return (
    <div className="w-28 h-20 relative flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <defs>
          <pattern id="dotPatternCluster" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#94A3B8" />
          </pattern>
        </defs>
        <circle cx="36" cy="30" r="14" fill="url(#dotPatternCluster)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="68" cy="24" r="14" fill="url(#dotPatternCluster)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="96" cy="38" r="14" fill="url(#dotPatternCluster)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="50" cy="54" r="14" fill="url(#dotPatternCluster)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <circle cx="82" cy="54" r="14" fill="url(#dotPatternCluster)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function FeaturedCardsCluster({ onCardClick, className = '' }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative w-full max-w-[620px] h-[370px] sm:h-[420px] flex items-center justify-center mx-auto my-2 select-none ${className}`}
    >
      {/* Interactive Dither Wave Capacitive Desk Mat */}
      <div className="absolute inset-1 sm:inset-2 rounded-3xl overflow-hidden pointer-events-none opacity-25 dark:opacity-35 border border-black/5 dark:border-white/10 z-0 shadow-inner">
        <DitherWaveBackground
          color={isDark ? '#0A0C10' : '#F8F9FA'}
          paperColor={isDark ? '#3B82F6' : '#64748B'}
          pixelSize={2.0}
          density={0.7}
          speed={0.6}
          interactive={true}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 via-transparent to-slate-100/30 dark:from-[#0A0C10]/60 dark:via-transparent dark:to-[#0A0C10]/30 pointer-events-none" />
      </div>

      {/* ---------------- CARD 1: TalentLens (Left / Pinned) ---------------- */}
      <motion.div
        onMouseEnter={() => setHoveredCard('talentlens')}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => onCardClick && onCardClick('talentlens')}
        initial={{ opacity: 0, scale: 0.9, rotate: -12 }}
        animate={{
          opacity: 1,
          scale: hoveredCard === 'talentlens' ? 1.05 : 1,
          rotate: hoveredCard === 'talentlens' ? -6 : -12,
          y: hoveredCard === 'talentlens' ? -10 : 0,
          zIndex: hoveredCard === 'talentlens' ? 35 : 10,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute left-2 sm:left-4 top-4 sm:top-6 w-[255px] sm:w-[290px] h-[160px] sm:h-[185px] rounded-2xl p-5 bg-[#0F1219] border border-white/15 shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden group hover:border-cyan-400/50"
      >
        <PushPin />
        
        {/* Card Graphic */}
        <div className="self-end -mr-2 -mt-2">
          <OrbitalGraphic />
        </div>

        {/* Card Label */}
        <div className="relative z-10">
          <h3 className="font-space font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
            TalentLens
          </h3>
          <p className="font-mono text-xs text-white/50">
            talentlens.ai
          </p>
        </div>

        {/* Brushed Texture Sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />
      </motion.div>

      {/* ---------------- CARD 2: InternBridge (Right) ---------------- */}
      <motion.div
        onMouseEnter={() => setHoveredCard('internbridge')}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => onCardClick && onCardClick('internbridge')}
        initial={{ opacity: 0, scale: 0.9, rotate: 9 }}
        animate={{
          opacity: 1,
          scale: hoveredCard === 'internbridge' ? 1.05 : 1,
          rotate: hoveredCard === 'internbridge' ? 3 : 9,
          y: hoveredCard === 'internbridge' ? -10 : 0,
          zIndex: hoveredCard === 'internbridge' ? 35 : 12,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute right-2 sm:right-4 top-8 sm:top-10 w-[255px] sm:w-[290px] h-[160px] sm:h-[185px] rounded-2xl p-5 bg-[#0F1219] border border-white/15 shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden group hover:border-emerald-400/50"
      >
        {/* Card Graphic */}
        <div className="self-end -mr-2 -mt-2">
          <LatticeGraphic />
        </div>

        {/* Card Label */}
        <div className="relative z-10">
          <h3 className="font-space font-bold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors">
            InternBridge
          </h3>
          <p className="font-mono text-xs text-white/50">
            internbridge.rw
          </p>
        </div>

        {/* Brushed Texture Sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />
      </motion.div>

      {/* ---------------- CARD 3: Edge Journal (Foreground / Clipped) ---------------- */}
      <motion.div
        onMouseEnter={() => setHoveredCard('edgejournal')}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => onCardClick && onCardClick('edgejournal')}
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{
          opacity: 1,
          scale: hoveredCard === 'edgejournal' ? 1.05 : 1,
          rotate: hoveredCard === 'edgejournal' ? 0 : -2,
          y: hoveredCard === 'edgejournal' ? -10 : 0,
          zIndex: hoveredCard === 'edgejournal' ? 35 : 20,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute bottom-4 sm:bottom-6 w-[265px] sm:w-[305px] h-[165px] sm:h-[190px] rounded-2xl p-5 bg-[#0F1219] border border-white/15 shadow-2xl cursor-pointer flex flex-col justify-between overflow-visible group hover:border-brand-blue/50"
      >
        <BinderClip />

        {/* Card Graphic */}
        <div className="self-end -mr-1 -mt-1">
          <DotMatrixGraphic />
        </div>

        {/* Card Label */}
        <div className="relative z-10 mb-2">
          <h3 className="font-space font-bold text-base sm:text-lg text-white group-hover:text-brand-blue transition-colors">
            Edge Journal
          </h3>
          <p className="font-mono text-xs text-white/50">
            edgejournal.dev
          </p>
        </div>

        {/* Brushed Texture Sheen */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}
