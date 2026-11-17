import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Folder,
  ArrowLeft,
  X,
  ZoomIn,
  Layers,
  Printer,
  Monitor,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SPRING_TACTILE } from '../utils/motion';
import { designCollections, designDisciplines } from '../data/designs';

export default function Designs() {
  const [activeDiscipline, setActiveDiscipline] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [copiedColor, setCopiedColor] = useState(null);

  const currentCategory = designCollections.find((c) => c.id === selectedCategory);

  const filteredCollections = activeDiscipline === 'all'
    ? designCollections
    : designCollections.filter((c) => c.discipline === activeDiscipline);

  // Gallery Navigation within Category
  const currentIndex = selectedImage && currentCategory
    ? currentCategory.items.findIndex((item) => item.id === selectedImage.id)
    : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentCategory && currentIndex >= 0 && currentIndex < currentCategory.items.length - 1;

  // Reset slide index whenever a new image/artwork is selected
  useEffect(() => {
    setActiveSlideIndex(0);
  }, [selectedImage]);

  const currentSlides = selectedImage?.slides || (selectedImage?.image ? [selectedImage.image] : []);
  const totalSlides = currentSlides.length;
  const isMultiSlide = totalSlides > 1;
  const currentArtworkSrc = isMultiSlide ? currentSlides[activeSlideIndex] : selectedImage?.image;

  const prevSlide = useCallback((e) => {
    e?.stopPropagation();
    setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const nextSlide = useCallback((e) => {
    e?.stopPropagation();
    setActiveSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    if (currentCategory && hasPrev) {
      setSelectedImage(currentCategory.items[currentIndex - 1]);
    }
  }, [currentCategory, hasPrev, currentIndex]);

  const goToNext = useCallback(() => {
    if (currentCategory && hasNext) {
      setSelectedImage(currentCategory.items[currentIndex + 1]);
    }
  }, [currentCategory, hasNext, currentIndex]);

  // Keyboard navigation: Escape to close, Left/Right arrows to browse slides or items
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        if (isMultiSlide && activeSlideIndex > 0) {
          setActiveSlideIndex((prev) => prev - 1);
        } else {
          goToPrev();
        }
      } else if (e.key === 'ArrowRight') {
        if (isMultiSlide && activeSlideIndex < totalSlides - 1) {
          setActiveSlideIndex((prev) => prev + 1);
        } else {
          goToNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext, isMultiSlide, activeSlideIndex, totalSlides]);

  const handleCopyColor = (color) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 1800);
    }
  };

  // Helper for adaptive preview stack styling per collection aspect ratio
  const getPreviewClasses = (aspectRatio) => {
    switch (aspectRatio) {
      case 'tall':
        return {
          left: 'w-20 sm:w-24 aspect-[9/16] -translate-x-11 sm:-translate-x-14 translate-y-1 -rotate-6 group-hover:-translate-y-5 group-hover:-rotate-10',
          center: 'w-22 sm:w-28 aspect-[9/16] -translate-y-3 rotate-0 group-hover:-translate-y-9 group-hover:scale-105',
          right: 'w-20 sm:w-24 aspect-[9/16] translate-x-11 sm:translate-x-14 translate-y-2 rotate-6 group-hover:-translate-y-4 group-hover:rotate-10',
        };
      case 'portrait':
        return {
          left: 'w-24 sm:w-30 aspect-[3/4] -translate-x-11 sm:-translate-x-14 translate-y-2 -rotate-6 group-hover:-translate-y-5 group-hover:-rotate-10',
          center: 'w-28 sm:w-34 aspect-[3/4] -translate-y-2 rotate-0 group-hover:-translate-y-8 group-hover:scale-105',
          right: 'w-24 sm:w-30 aspect-[3/4] translate-x-11 sm:translate-x-14 translate-y-3 rotate-6 group-hover:-translate-y-4 group-hover:rotate-10',
        };
      case 'square':
        return {
          left: 'w-24 sm:w-32 aspect-square -translate-x-11 sm:-translate-x-14 translate-y-2 -rotate-6 group-hover:-translate-y-5 group-hover:-rotate-10',
          center: 'w-28 sm:w-36 aspect-square -translate-y-2 rotate-0 group-hover:-translate-y-8 group-hover:scale-105',
          right: 'w-24 sm:w-32 aspect-square translate-x-11 sm:translate-x-14 translate-y-3 rotate-6 group-hover:-translate-y-4 group-hover:rotate-10',
        };
      case 'landscape':
      default:
        return {
          left: 'w-36 sm:w-44 aspect-[16/10] -translate-x-11 sm:-translate-x-14 translate-y-3 -rotate-6 group-hover:-translate-y-5 group-hover:-rotate-10',
          center: 'w-40 sm:w-48 aspect-[16/10] -translate-y-1 rotate-0 group-hover:-translate-y-8 group-hover:scale-105',
          right: 'w-36 sm:w-44 aspect-[16/10] translate-x-11 sm:translate-x-14 translate-y-4 rotate-6 group-hover:-translate-y-4 group-hover:rotate-10',
        };
    }
  };

  // Helper for adaptive drill-down grid columns and thumbnail ratios
  const getGridClasses = (aspectRatio) => {
    switch (aspectRatio) {
      case 'tall':
        return {
          container: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full',
          thumbnail: 'aspect-[9/16] w-full overflow-hidden bg-slate-900 relative',
        };
      case 'portrait':
        return {
          container: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 w-full',
          thumbnail: 'aspect-[3/4] w-full overflow-hidden bg-slate-900 relative',
        };
      case 'square':
        return {
          container: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full',
          thumbnail: 'aspect-square w-full overflow-hidden bg-slate-900 relative',
        };
      case 'landscape':
      default:
        return {
          container: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full',
          thumbnail: 'aspect-[16/10] w-full overflow-hidden bg-slate-900 relative',
        };
    }
  };

  const isVerticalMedia = selectedImage?.aspectRatio === 'tall' || selectedImage?.aspectRatio === 'portrait';

  return (
    <section className="w-full min-h-screen relative z-20 pt-28 md:pt-36 pb-32 flex flex-col items-center">
      <div className="w-full max-w-[880px] px-4 sm:px-6 relative z-10">
        
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            /* ========================================================= */
            /* 1. MAIN DESIGN ARCHIVE VIEW (FOLDER CARDS GRID + TABS)   */
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
              <div className="mb-8 sm:mb-10 text-center max-w-xl mx-auto">
                <h1 className="font-instrument font-bold text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-3">
                  Design Archive
                </h1>
                <p className="font-sans text-slate-500 dark:text-white/60 text-sm sm:text-base leading-relaxed">
                  Explore multidisciplinary work across UI/UX engineering and print media.
                </p>
              </div>

              {/* Tactile Segmented Discipline Filter Pill */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/5 dark:border-white/10 mb-10 sm:mb-12">
                {designDisciplines.map((d) => {
                  const isActive = activeDiscipline === d.id;
                  const count = d.id === 'all'
                    ? designCollections.length
                    : designCollections.filter((c) => c.discipline === d.id).length;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActiveDiscipline(d.id)}
                      className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-space rounded-full transition-colors duration-150 cursor-pointer active:scale-[0.97] ${
                        isActive
                          ? 'text-slate-900 dark:text-white font-medium'
                          : 'text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeDisciplinePill"
                          className="absolute inset-0 rounded-full bg-white dark:bg-[#1B1F2D] shadow-sm border border-black/5 dark:border-white/10"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {d.id === 'ui-ux' && <Monitor size={14} className="opacity-70" />}
                        {d.id === 'graphic-print' && <Printer size={14} className="opacity-70" />}
                        {d.id === 'all' && <Layers size={14} className="opacity-70" />}
                        {d.label}
                        <span
                          className={`text-[11px] font-mono px-1.5 py-0.5 rounded-full transition-colors ${
                            isActive
                              ? 'bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/15 dark:text-brand-cyan font-semibold'
                              : 'opacity-60'
                          }`}
                        >
                          {count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 2-Column Skeuomorphic Folder Cards Grid */}
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[820px]"
              >
                {filteredCollections.map((cat, idx) => {
                  const previewClasses = getPreviewClasses(cat.aspectRatio);
                  const isPrint = cat.discipline === 'graphic-print';

                  return (
                    <motion.div
                      layout
                      key={cat.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group cursor-pointer relative w-full h-[320px] sm:h-[350px] rounded-[28px] overflow-hidden bg-white dark:bg-[#141721] border border-black/10 dark:border-white/10 hover:border-brand-blue/40 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between active:scale-[0.99]"
                    >
                      {/* Top Subtle Gradient Backplate */}
                      <div
                        className={`absolute top-0 inset-x-0 h-40 pointer-events-none transition-opacity duration-300 ${
                          isPrint
                            ? 'bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent dark:from-cyan-600/15 dark:via-emerald-600/5 dark:to-transparent'
                            : 'bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-600/15 dark:via-indigo-600/5 dark:to-transparent'
                        }`}
                      />

                      {/* Stacked Preview Mockup Sheets Peeking Out of Pocket */}
                      <div className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center overflow-visible pt-6">
                        {/* Left Preview Card */}
                        <div
                          className={`absolute rounded-xl overflow-hidden shadow-md border border-black/10 dark:border-white/15 bg-slate-900 transition-all duration-300 ease-out z-[1] ${previewClasses.left}`}
                        >
                          <img
                            src={cat.previews[0]}
                            alt={`${cat.name} preview 1`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Center/Back Preview Card (Stands taller on hover) */}
                        <div
                          className={`absolute rounded-xl overflow-hidden shadow-xl border border-black/10 dark:border-white/15 bg-slate-900 transition-all duration-300 ease-out z-[2] ${previewClasses.center}`}
                        >
                          <img
                            src={cat.previews[1]}
                            alt={`${cat.name} preview 2`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Right Preview Card */}
                        <div
                          className={`absolute rounded-xl overflow-hidden shadow-md border border-black/10 dark:border-white/15 bg-slate-900 transition-all duration-300 ease-out z-[1] ${previewClasses.right}`}
                        >
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
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`inline-block w-2 h-2 rounded-full ${
                                  isPrint ? 'bg-brand-cyan' : 'bg-brand-blue'
                                }`}
                              />
                              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40">
                                {cat.collectionLabel}
                              </span>
                            </div>
                            <h2 className="font-instrument font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                              {cat.name}
                            </h2>
                          </div>

                          {/* Bottom Row: Folder Icon + Items Count Badge */}
                          <div className="flex items-center justify-between pt-2">
                            <Folder
                              size={18}
                              className="text-slate-400 dark:text-white/40 group-hover:text-slate-700 dark:group-hover:text-white transition-colors"
                            />
                            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-slate-500 dark:text-white/60">
                              {cat.items.length} works
                            </span>
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ) : (
            /* ========================================================= */
            /* 2. CATEGORY DRILL-DOWN VIEW (ADAPTIVE MOCKUP GRID)       */
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
                <span>Back to Archive</span>
              </button>

              {/* Category Discipline Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    currentCategory?.discipline === 'graphic-print'
                      ? 'bg-brand-cyan'
                      : 'bg-brand-blue'
                  }`}
                />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-white/50">
                  {currentCategory?.collectionLabel}
                </span>
              </div>

              {/* Category Heading */}
              <h1 className="font-instrument font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight mb-2">
                {currentCategory?.name}
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-500 dark:text-white/60 max-w-xl mb-10 leading-relaxed">
                {currentCategory?.description}
              </p>

              {/* Adaptive Grid of Mockup Cards */}
              {(() => {
                const gridClasses = getGridClasses(currentCategory?.aspectRatio);
                return (
                  <div className={gridClasses.container}>
                    {currentCategory?.items.map((item, idx) => {
                      const itemRatio = item.aspectRatio || currentCategory?.aspectRatio;
                      const thumbClass = itemRatio === 'tall'
                        ? 'aspect-[9/16] w-full overflow-hidden bg-slate-900 relative'
                        : itemRatio === 'portrait'
                        ? 'aspect-[3/4] w-full overflow-hidden bg-slate-900 relative'
                        : itemRatio === 'square'
                        ? 'aspect-square w-full overflow-hidden bg-slate-900 relative'
                        : gridClasses.thumbnail;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.05 }}
                          onClick={() => setSelectedImage(item)}
                          className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-[#141721] border border-black/10 dark:border-white/10 hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 shadow-soft hover:shadow-soft-hover transition-all duration-300 relative flex flex-col active:scale-[0.98]"
                        >
                          {/* Thumbnail Image */}
                          <div className={thumbClass}>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            
                            {/* Zoom Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                              <div className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-lg">
                                <ZoomIn size={16} />
                              </div>
                            </div>

                            {/* Multi-slide indicator badge */}
                            {item.slides && item.slides.length > 1 && (
                              <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono shadow-sm">
                                <Layers size={11} className="text-brand-cyan" />
                                <span>{item.slides.length} slides</span>
                              </div>
                            )}
                          </div>

                          {/* Concise Caption */}
                          <div className="p-3.5 flex flex-col justify-between flex-1">
                            <div>
                              <h3 className="font-space font-medium text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-[11px] text-slate-400 dark:text-white/40 mt-1 line-clamp-1">
                                {item.category}
                              </p>
                            </div>
                            {item.specs && (
                              <span className="text-[10px] font-mono text-slate-400 dark:text-white/30 mt-2 line-clamp-1">
                                {item.specs.split('•')[0]}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ========================================================= */}
      {/* 3. GALLERY EXHIBITION LIGHTBOX MODAL                      */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-xl p-3 sm:p-6 md:p-10"
          >
            {/* Top-Right Floating Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[130] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              <X size={20} />
            </button>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className={`relative w-full max-h-[92dvh] overflow-hidden bg-white dark:bg-[#121520] rounded-3xl border border-black/10 dark:border-white/15 shadow-2xl flex flex-col ${
                isVerticalMedia
                  ? 'max-w-5xl md:h-[84vh] md:flex-row'
                  : 'max-w-4xl max-h-[88vh]'
              }`}
            >
              {/* ------------------------------------------------------- */}
              {/* STUDIO GALLERY CANVAS (Image Viewport)                  */}
              {/* ------------------------------------------------------- */}
              <div
                className={`relative bg-[#07090F] dark:bg-[#05070C] flex items-center justify-center overflow-hidden shrink-0 ${
                  isVerticalMedia
                    ? 'w-full md:w-[56%] lg:w-[60%] h-[46vh] sm:h-[52vh] md:h-full p-4 sm:p-6 md:p-8'
                    : 'w-full h-[45vh] sm:h-[55vh] p-4 sm:p-8'
                }`}
              >
                {/* Subtle Radial Gallery Spotlight */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />

                {/* The Artwork with Natural Proportions and Gallery Depth */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src={currentArtworkSrc}
                    alt={selectedImage.title}
                    className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] rounded-lg transition-all duration-300"
                  />

                  {/* Multi-Slide Navigation Arrows directly on canvas */}
                  {isMultiSlide && (
                    <>
                      <button
                        onClick={prevSlide}
                        disabled={activeSlideIndex === 0}
                        aria-label="Previous slide"
                        className={`absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full backdrop-blur-md border transition-all ${
                          activeSlideIndex > 0
                            ? 'bg-black/60 text-white border-white/20 hover:bg-black/90 hover:scale-110 active:scale-95 cursor-pointer shadow-lg'
                            : 'bg-black/20 text-white/20 border-white/5 cursor-not-allowed opacity-0 pointer-events-none'
                        }`}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextSlide}
                        disabled={activeSlideIndex === totalSlides - 1}
                        aria-label="Next slide"
                        className={`absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full backdrop-blur-md border transition-all ${
                          activeSlideIndex < totalSlides - 1
                            ? 'bg-black/60 text-white border-white/20 hover:bg-black/90 hover:scale-110 active:scale-95 cursor-pointer shadow-lg'
                            : 'bg-black/20 text-white/20 border-white/5 cursor-not-allowed opacity-0 pointer-events-none'
                        }`}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Top Badge for Multi-Slide items */}
                {isMultiSlide && (
                  <div className="absolute top-3 sm:top-4 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white shadow-md">
                    <Layers size={13} className="text-brand-cyan mr-0.5" />
                    <span className="text-xs font-mono font-medium">Slide {activeSlideIndex + 1} of {totalSlides}</span>
                  </div>
                )}

                {/* Bottom Slide Indicators for Multi-Slide items */}
                {isMultiSlide && (
                  <div className="absolute bottom-12 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-auto">
                    {currentSlides.map((_, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlideIndex(sIdx);
                        }}
                        aria-label={`Jump to slide ${sIdx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeSlideIndex === sIdx
                            ? 'w-6 bg-brand-cyan shadow-sm'
                            : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Canvas Footer Bar: Index counter and Quick Navigation */}
                <div className="absolute bottom-3 inset-x-4 sm:inset-x-6 z-20 flex items-center justify-between pointer-events-none">
                  {/* Item Index Counter */}
                  <span className="pointer-events-auto text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/60 text-white/70 backdrop-blur-md border border-white/10 shadow-sm">
                    {currentIndex + 1} of {currentCategory?.items.length || 1}
                  </span>

                  {/* Previous / Next Quick Arrows for Canvas */}
                  <div className="pointer-events-auto flex items-center gap-1.5">
                    <button
                      onClick={goToPrev}
                      disabled={!hasPrev}
                      aria-label="Previous artwork"
                      className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                        hasPrev
                          ? 'bg-black/60 text-white border-white/20 hover:bg-black/80 hover:scale-105 active:scale-95 cursor-pointer'
                          : 'bg-black/30 text-white/30 border-white/5 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={goToNext}
                      disabled={!hasNext}
                      aria-label="Next artwork"
                      className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                        hasNext
                          ? 'bg-black/60 text-white border-white/20 hover:bg-black/80 hover:scale-105 active:scale-95 cursor-pointer'
                          : 'bg-black/30 text-white/30 border-white/5 cursor-not-allowed'
                      }`}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------- */}
              {/* CURATORIAL INSPECTOR PANEL (Metadata & Specs)           */}
              {/* ------------------------------------------------------- */}
              <div
                className={`flex flex-col justify-between bg-white dark:bg-[#121520] overflow-y-auto ${
                  isVerticalMedia
                    ? 'w-full md:w-[44%] lg:w-[40%] p-6 sm:p-7 md:p-8 border-t md:border-t-0 md:border-l border-black/10 dark:border-white/10'
                    : 'w-full p-5 sm:p-7 border-t border-black/10 dark:border-white/10'
                }`}
              >
                {/* Top Section */}
                <div>
                  {/* Discipline & Category Pills */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${
                        selectedImage.discipline === 'graphic-print'
                          ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                          : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      }`}
                    >
                      {selectedImage.discipline === 'graphic-print'
                        ? 'Graphic & Print'
                        : 'Digital UI/UX'}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-white/40 font-mono">
                      {selectedImage.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-space font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight mb-3">
                    {selectedImage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed mb-5">
                    {selectedImage.description}
                  </p>

                  {/* Multi-Slide Interactive Thumbnail Strip */}
                  {isMultiSlide && (
                    <div className="mb-5 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 font-semibold flex items-center gap-1.5">
                          <Layers size={13} className="text-brand-cyan" />
                          <span>Campaign Slides ({totalSlides})</span>
                        </span>
                        <span className="text-[11px] font-mono font-medium text-brand-blue dark:text-brand-cyan">
                          Slide {activeSlideIndex + 1}
                        </span>
                      </div>
                      <div className="grid grid-cols-6 gap-1.5">
                        {currentSlides.map((slideSrc, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => setActiveSlideIndex(sIdx)}
                            className={`aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer ${
                              activeSlideIndex === sIdx
                                ? 'border-brand-blue dark:border-brand-cyan ring-2 ring-brand-blue/30 dark:ring-brand-cyan/30 scale-105 shadow-sm'
                                : 'border-black/10 dark:border-white/10 opacity-60 hover:opacity-100 hover:scale-102'
                            }`}
                          >
                            <img src={slideSrc} alt={`Slide ${sIdx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Palette Tokens Swatches */}
                  {selectedImage.colors && selectedImage.colors.length > 0 && (
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 font-semibold">
                          Palette Tokens
                        </span>
                        {copiedColor && (
                          <span className="text-[10px] font-mono text-emerald-500 animate-pulse font-medium">
                            Copied {copiedColor}!
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {selectedImage.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => handleCopyColor(color)}
                            title={`Click to copy ${color}`}
                            className="group relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-black/10 dark:border-white/15 bg-slate-50 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-2xs shrink-0"
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-[11px] font-mono text-slate-700 dark:text-white/80">
                              {color}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Print & Technical Specifications Banner */}
                  {selectedImage.specs && (
                    <div className="mb-5 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col gap-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 font-semibold">
                        Technical Specifications
                      </span>
                      <span className="text-xs font-mono text-slate-800 dark:text-white/90 font-medium">
                        {selectedImage.specs}
                      </span>
                    </div>
                  )}

                  {/* Software Tools Pills */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 block mb-2">
                      Tools &amp; Stack
                    </span>
                    <div className="flex gap-1.5 flex-wrap">
                      {selectedImage.tools?.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-slate-700 dark:text-white/80 border border-black/5 dark:border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation & Keyboard Hint */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-slate-400 dark:text-white/40">
                  <span className="hidden sm:inline font-mono text-[11px]">
                    Use <kbd className="px-1.5 py-0.5 rounded bg-black/[0.05] dark:bg-white/10 font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-black/[0.05] dark:bg-white/10 font-mono">→</kbd> keys or <kbd className="px-1.5 py-0.5 rounded bg-black/[0.05] dark:bg-white/10 font-mono">ESC</kbd>
                  </span>

                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      onClick={goToPrev}
                      disabled={!hasPrev}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-space font-medium transition-all ${
                        hasPrev
                          ? 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 active:scale-95 cursor-pointer'
                          : 'opacity-40 cursor-not-allowed text-slate-400'
                      }`}
                    >
                      <ChevronLeft size={14} />
                      <span>Prev</span>
                    </button>
                    <button
                      onClick={goToNext}
                      disabled={!hasNext}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-space font-medium transition-all ${
                        hasNext
                          ? 'bg-brand-blue text-white hover:bg-blue-600 active:scale-95 cursor-pointer shadow-sm'
                          : 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-white/10 text-slate-400'
                      }`}
                    >
                      <span>Next</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
