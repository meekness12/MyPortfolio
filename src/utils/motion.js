/**
 * High-Craft Motion & Animation Design Tokens
 * Grounded in Emil Kowalski's animation framework & Apple HIG motion ergonomics.
 */

// Premium front-loaded ease-out curve (fast initial response, silky coasting settle)
export const EASE_OUT_SMOOTH = [0.16, 1, 0.3, 1];

// Page View Transition (Micro-elevation with transform cleanup for sticky sidebar integrity)
export const pageViewVariants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: EASE_OUT_SMOOTH },
    transitionEnd: { transform: 'none' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};

// Scroll Reveal Variant for Content Blocks
export const scrollRevealVariants = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.4, ease: EASE_OUT_SMOOTH },
};

// Tactile Spring for Interactive Controls & Modals
export const SPRING_TACTILE = {
  type: 'spring',
  stiffness: 380,
  damping: 26,
};
