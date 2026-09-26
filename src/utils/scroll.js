import Lenis from 'lenis';

/**
 * Singleton smooth scroll manager powered by Lenis 1.3+
 * Ensures 100% preservation of sticky elements, native mobile touch physics,
 * and automatic fallback for prefers-reduced-motion.
 */

let lenisInstance = null;
let rafId = null;

export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;

  // If already initialized, return existing instance
  if (lenisInstance) return lenisInstance;

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return null;
  }

  lenisInstance = new Lenis({
    lerp: 0.09, // Silky deceleration, responsive and not sluggish
    duration: 1.2,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0, // Retains 100% native touchscreen swipe fidelity
    smoothWheel: true,
    infinite: false,
  });

  function raf(time) {
    if (lenisInstance) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
  }

  rafId = requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToTop({ immediate = false } = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate });
  } else if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' });
  }
}

export function scrollToTarget(target, { offset = 0, immediate = false } = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, immediate });
  } else if (typeof document !== 'undefined') {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: immediate ? 'instant' : 'smooth' });
    }
  }
}

export function destroySmoothScroll() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
