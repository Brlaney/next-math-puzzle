import { AnimationProps } from 'framer-motion';

export const mainPathVariant: AnimationProps = {
  transition: { duration: 6, ease: 'easeInOut' },
  variants: { visible: { pathLength: 1 }, hidden: { pathLength: 0 } },
};

export const shapeVariations: AnimationProps = {
  transition: { delay: 0, duration: 2, ease: 'easeIn' },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: { delay: 0, duration: 4 },
    },
    hidden: { fillOpacity: 0, pathLength: 0 },
  },
};

const easing = [0.6, 0.01, -0.05, 0.9];

export const fadeInUp = {
  initial: {
    y: -200,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.45
    }
  }
};
