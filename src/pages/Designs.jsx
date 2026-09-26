import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Folder,
  MoreHorizontal,
  ArrowLeft,
  X,
  ZoomIn,
  Sparkles,
  ExternalLink,
  Layers
} from 'lucide-react';

// Assets
import HeroCubeImg from '../assets/hero_cube.jpg';
import ProductDashboardImg from '../assets/product_dashboard.jpg';
import PortfolioImg from '../assets/Portfolio.jpg';
import PoliceImg from '../assets/Police.jpg';
import InternbridgeImg from '../assets/internbridge.png';
import EdgejournalImg from '../assets/edgejournal.png';
import ClassroomImg from '../assets/classroom.png';
import BannerImg from '../assets/banner.jpg';

// Design Archive Collections
const collections = [
  {
    id: 'heros',
    name: 'Heros',
    collectionLabel: 'Collection',
    description: 'Hero sections, bold typography, 3D holographic focal points, and immersive dark mode layouts.',
    // 3 preview images fanning out of the folder
    previews: [PortfolioImg, HeroCubeImg, EdgejournalImg],
    items: [
      {
        id: 'hero-1',
        title: 'Escape the Reality — Holographic 3D Space',
        category: 'Hero Exploration',
        description: 'Dark obsidian hero section with a glowing floating holographic cube, clean geometric typography, and glassmorphic pill buttons.',
        image: HeroCubeImg,
        tools: ['Figma', 'React', 'Tailwind CSS', 'WebGL'],
      },
      {
        id: 'hero-2',
        title: 'Thoughts Get Clearer — Minimalist White Space',
        category: 'Editorial Hero',
        description: 'Focus-first editorial hero with generous typographic margins, subtle mesh gradient, and markdown publication layout.',
        image: EdgejournalImg,
        tools: ['React', 'CSS3', 'Typography Tokens'],
      },
      {
        id: 'hero-3',
        title: 'TalentLens AI — Candidate Screening Hero',
        category: 'AI Platform Hero',
        description: 'Zero-data-entry AI talent evaluation portal with instant multimodal OCR preview and MatchScore transparency.',
        image: PortfolioImg,
        tools: ['Gemini 1.5 Flash', 'TypeScript', 'Tailwind CSS'],
      },
      {
        id: 'hero-4',
        title: 'Synapse Analytics — Executive Control Hero',
        category: 'SaaS Platform Hero',
        description: 'High-density telemetry dashboard hero featuring real-time conversion graphs and glowing cyan activity metrics.',
        image: ProductDashboardImg,
        tools: ['React', 'Framer Motion', 'ChartJS'],
      },
      {
        id: 'hero-5',
        title: 'Police Administration — National Service Hero',
        category: 'Enterprise Hero',
        description: 'High-contrast institutional interface for driver license applications, biometric verification, and exam bookings.',
        image: PoliceImg,
        tools: ['Material UI', 'React', 'Figma'],
      },
      {
        id: 'hero-6',
        title: 'InternBridge — Academic Placement Hero',
        category: 'Education Platform',
        description: 'Multi-tenant internship coordination portal connecting university administrators, supervisors, and students.',
        image: InternbridgeImg,
        tools: ['Java 21', 'Spring Boot', 'Tailwind CSS'],
      },
      {
        id: 'hero-7',
        title: 'Classroom LAN — Protocol Sync Hero',
        category: 'Network Protocol',
        description: 'Local area network synchronization dashboard with active node topology and socket connection indicators.',
        image: ClassroomImg,
        tools: ['Java Socket', 'LAN Protocol', 'Desktop UI'],
      },
      {
        id: 'hero-8',
        title: 'Twilight Developer Architecture Hub',
        category: 'Personal Brand Hero',
        description: 'Panoramic twilight city skyline panoramic cover celebrating nocturnal engineering and clean systems.',
        image: BannerImg,
        tools: ['Figma', 'Digital Art', 'Responsive CSS'],
      },
    ],
  },
  {
    id: 'product-pages',
    name: 'Product Pages',
    collectionLabel: 'Collection',
    description: 'Complex SaaS workflows, multi-tenant portals, admin panels, and data telemetry dashboards.',
    previews: [InternbridgeImg, ProductDashboardImg, PoliceImg],
    items: [
      {
        id: 'prod-1',
        title: 'Synapse Analytics — Executive Dashboard',
        category: 'Product Page',
        description: 'Complete SaaS analytics view with interactive multi-curve revenue projections, conversion funnels, and churn rates.',
        image: ProductDashboardImg,
        tools: ['React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        id: 'prod-2',
        title: 'TalentLens — MatchScore Reasoner & Parser',
        category: 'Product Workflow',
        description: 'Recruiter evaluation workspace breaking down candidate resumes into explicit requirement matches and skill gaps.',
        image: PortfolioImg,
        tools: ['Gemini 1.5 Flash', 'TypeScript', 'MongoDB'],
      },
      {
        id: 'prod-3',
        title: 'InternBridge — Supervisor Lifecycle Portal',
        category: 'Enterprise App',
        description: 'Role-Based Access Control portal managing company placements, student logbooks, and academic approvals.',
        image: InternbridgeImg,
        tools: ['Spring Boot', 'PostgreSQL', 'React'],
      },
      {
        id: 'prod-4',
        title: 'Police Driver Examination & License Management',
        category: 'Administrative System',
        description: 'Enterprise applicant registry with identity verification, exam scheduling, and biometric card validation.',
        image: PoliceImg,
        tools: ['React', 'REST APIs', 'Figma'],
      },
      {
        id: 'prod-5',
        title: 'Classroom LAN Auto-Distribution Console',
        category: 'Desktop Tool',
        description: 'Resource dispatching and grading interface functioning autonomously over local classroom networks.',
        image: ClassroomImg,
        tools: ['Java 21', 'Sockets', 'Network Architecture'],
      },
      {
        id: 'prod-6',
        title: 'Edge Journal — Workspace & Focus Mode',
        category: 'Productivity App',
        description: 'Clean distraction-free Markdown document editor with dark mode tokens and instant preview toggle.',
        image: EdgejournalImg,
        tools: ['React', 'Vite', 'Tailwind CSS'],
      },
    ],
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    collectionLabel: 'Collection',
    description: 'High-converting product landing pages, developer platform showcases, and technical portfolio architectures.',
    previews: [EdgejournalImg, HeroCubeImg, BannerImg],
    items: [
      {
        id: 'land-1',
        title: 'Synthesis Reality — Immersive Developer Tooling',
        category: 'Landing Page',
        description: 'High-impact dark mode SaaS landing page for spatial computing developer SDKs and futuristic 3D platforms.',
        image: HeroCubeImg,
        tools: ['React', 'WebGL', 'Tailwind CSS'],
      },
      {
        id: 'land-2',
        title: 'Edge Journal — Distraction-Free Writing',
        category: 'Landing Page',
        description: 'Product landing page emphasizing simplicity, speed, offline-first persistence, and fluid keyboard shortcuts.',
        image: EdgejournalImg,
        tools: ['React', 'Tailwind CSS', 'Framer Motion'],
      },
      {
        id: 'land-3',
        title: 'InternBridge — Academic Placement Platform',
        category: 'Landing Page',
        description: 'Modern university portal landing page guiding students through application cycles and corporate partnerships.',
        image: InternbridgeImg,
        tools: ['React', 'Spring Boot', 'Tailwind CSS'],
      },
      {
        id: 'land-4',
        title: 'Synapse Data — Cloud Intelligence Infrastructure',
        category: 'Landing Page',
        description: 'Developer documentation and landing page for high-throughput stream processing and automated event tracking.',
        image: ProductDashboardImg,
        tools: ['React', 'Next.js', 'Tailwind CSS'],
      },
      {
        id: 'land-5',
        title: 'Meekness Bonheur — Engineering Portfolio Architecture',
        category: 'Personal Portfolio',
        description: 'High-performance portfolio architecture with 5-view navigation, live GitHub graph, and skeuomorphic archives.',
        image: BannerImg,
        tools: ['React', 'Framer Motion', 'Tailwind CSS'],
      },
    ],
  },
  {
    id: 'cards',
    name: 'Cards',
    collectionLabel: 'Collection',
    description: 'Micro-components, biometric credentials, telemetry cards, and tactile UI components.',
    previews: [PoliceImg, ProductDashboardImg, PortfolioImg],
    items: [
      {
        id: 'card-1',
        title: 'National Driver’s License Biometric ID Card',
        category: 'Component & Credential',
        description: 'Official digital ID verification card mockup with holographic seal, QR validation, and status indicators.',
        image: PoliceImg,
        tools: ['Figma', 'CSS Grid', 'SVG'],
      },
      {
        id: 'card-2',
        title: 'Synapse Metric Widget & Real-Time Pulse',
        category: 'Data Widget',
        description: 'Compact telemetry stat cards with smooth sparkline indicators, live percentage badges, and glow borders.',
        image: ProductDashboardImg,
        tools: ['React', 'Tailwind CSS', 'SVG'],
      },
      {
        id: 'card-3',
        title: 'TalentLens MatchScore Breakdown Card',
        category: 'AI Metric Card',
        description: 'Interactive score meter displaying AI candidate fit percentages, key strengths, and missing prerequisites.',
        image: PortfolioImg,
        tools: ['Gemini 1.5 Flash', 'TypeScript', 'Tailwind CSS'],
      },
      {
        id: 'card-4',
        title: 'Classroom LAN Peer Sync Node Card',
        category: 'Network Status Card',
        description: 'Card displaying connected student workstations, latency indicators, and local file distribution progress.',
        image: ClassroomImg,
        tools: ['Java Socket', 'React', 'CSS'],
      },
      {
        id: 'card-5',
        title: 'Holographic Synthesis Token Card',
        category: 'Tactile Card',
        description: 'Interactive glassmorphic card with dynamic iridescent reflection based on cursor proximity.',
        image: HeroCubeImg,
        tools: ['CSS 3D', 'Framer Motion', 'Tailwind CSS'],
      },
    ],
  },
];

export default function Designs() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Esc key listener for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentCategory = collections.find((c) => c.id === selectedCategory);

  return (
    <section className="w-full min-h-screen relative z-20 pt-28 md:pt-36 pb-32 flex flex-col items-center">
      <div className="w-full max-w-[880px] px-4 sm:px-6 relative z-10">
        
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            /* ========================================================= */
            /* 1. MAIN DESIGN ARCHIVE VIEW (FOLDER CARDS GRID)           */
            /* ========================================================= */
            <motion.div
              key="archive-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              {/* Header */}
              <div className="mb-12 sm:mb-16 text-center max-w-xl mx-auto">
                <h1 className="font-instrument font-bold text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3">
                  Design Archive
                </h1>
                <p className="font-sans text-slate-500 dark:text-white/60 text-sm sm:text-base leading-relaxed">
                  Explore my work across different categories.
                </p>
              </div>

              {/* 2-Column Folder Cards Grid (Matching Palakonweb Screenshots) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[820px]">
                {collections.map((cat, idx) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer relative w-full h-[320px] sm:h-[350px] rounded-[28px] overflow-hidden bg-white dark:bg-[#141721] border border-black/10 dark:border-white/10 hover:border-brand-blue/40 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Top Subtle Gradient Backplate */}
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent dark:from-blue-600/15 dark:via-cyan-600/5 dark:to-transparent pointer-events-none" />

                    {/* Stacked Preview Mockup Sheets Peeking Out of Pocket */}
                    <div className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center overflow-visible pt-6">
                      {/* Left Preview Card */}
                      <div className="absolute w-36 sm:w-44 aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-black/10 dark:border-white/15 bg-slate-900 -translate-x-11 sm:-translate-x-14 translate-y-3 -rotate-6 group-hover:-translate-y-5 group-hover:-rotate-10 transition-all duration-300 ease-out z-[1]">
                        <img
                          src={cat.previews[0]}
                          alt={`${cat.name} preview 1`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Center/Back Preview Card (Stands taller on hover) */}
                      <div className="absolute w-40 sm:w-48 aspect-[16/10] rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/15 bg-slate-900 -translate-y-1 rotate-0 group-hover:-translate-y-8 group-hover:scale-105 transition-all duration-300 ease-out z-[2]">
                        <img
                          src={cat.previews[1]}
                          alt={`${cat.name} preview 2`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Right Preview Card */}
                      <div className="absolute w-36 sm:w-44 aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-black/10 dark:border-white/15 bg-slate-900 translate-x-11 sm:translate-x-14 translate-y-4 rotate-6 group-hover:-translate-y-4 group-hover:rotate-10 transition-all duration-300 ease-out z-[1]">
                        <img
                          src={cat.previews[2]}
                          alt={`${cat.name} preview 3`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Skeuomorphic Folder Flap (Foreground Pocket with Left Raised Tab) */}
                    <div className="relative z-10 w-full h-[165px] sm:h-[180px] mt-auto">
                      {/* Custom SVG Bezier Folder Silhouette with Raised Left Tab */}
                      <svg
                        viewBox="0 0 400 220"
                        fill="none"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full drop-shadow-sm"
                      >
                        <path
                          d="M 0,28 C 0,12 12,0 28,0 L 144,0 C 158,0 166,10 174,20 C 180,28 188,28 200,28 L 372,28 C 388,28 400,40 400,56 L 400,192 C 400,208 388,220 372,220 L 28,220 C 12,220 0,208 0,192 Z"
                          className="fill-white dark:fill-[#141721] stroke-black/10 dark:stroke-white/10"
                          strokeWidth="1.5"
                        />
                      </svg>

                      {/* Folder Flap Content Overlay */}
                      <div className="relative z-10 w-full h-full flex flex-col justify-between pt-10 pb-5 px-6 sm:px-7">
                        <div>
                          <h2 className="font-instrument font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                            {cat.name}
                          </h2>
                          <p className="text-xs text-slate-400 dark:text-white/40 font-sans tracking-wide mt-1">
                            {cat.collectionLabel}
                          </p>
                        </div>

                        {/* Bottom Row: Folder Icon + Three Dots */}
                        <div className="flex items-center justify-between pt-2">
                          <Folder
                            size={18}
                            className="text-slate-400 dark:text-white/40 group-hover:text-slate-700 dark:group-hover:text-white transition-colors"
                          />
                          <MoreHorizontal
                            size={18}
                            className="text-slate-400 dark:text-white/40 group-hover:text-slate-700 dark:group-hover:text-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ========================================================= */
            /* 2. CATEGORY DRILL-DOWN VIEW (Matching Screenshot 3)       */
            /* ========================================================= */
            <motion.div
              key="category-detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-start"
            >
              {/* Back Navigation Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors mb-6 cursor-pointer group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </button>

              {/* Category Heading */}
              <h1 className="font-instrument font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight mb-2">
                {currentCategory?.name}
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-400 dark:text-white/50 mb-10">
                Hover to preview, click any image to view in fullscreen
              </p>

              {/* Responsive Grid of Mockup Cards (Matching Screenshot 3) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
                {currentCategory?.items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    onClick={() => setSelectedImage(item)}
                    className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-[#141721] border border-black/10 dark:border-white/10 hover:border-brand-blue/50 shadow-soft hover:shadow-soft-hover transition-all duration-300 relative flex flex-col"
                  >
                    {/* Thumbnail Image */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-[#1B1F2D] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Zoom Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                        <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                          <ZoomIn size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Concise Caption */}
                    <div className="p-3.5 flex flex-col justify-between flex-1">
                      <h3 className="font-space font-medium text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 dark:text-white/40 mt-1 line-clamp-1">
                        {item.category}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ========================================================= */}
      {/* 3. FULLSCREEN LIGHTBOX MODAL                              */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-[#141721] rounded-3xl overflow-hidden border border-black/10 dark:border-white/20 shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Large Image Canvas */}
              <div className="max-h-[72vh] overflow-hidden bg-black/90 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[72vh] w-auto object-contain"
                />
              </div>

              {/* Metadata Info Footer */}
              <div className="p-6 sm:p-7 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#141721]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-brand-blue dark:text-brand-cyan uppercase tracking-wider font-semibold">
                    {selectedImage.category}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {selectedImage.tools?.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-slate-500 dark:text-white/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-space font-bold text-xl text-slate-900 dark:text-white mb-2">
                  {selectedImage.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
