// Framer Motion animation variants for consistent animations across the site

// For staggered container animations
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

// Fade in animations from different directions
export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut"
      }
    }
  };
};

// Zoom in animation
export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut"
      }
    }
  };
};

// Slide in animation
export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut"
      }
    }
  };
};

// Text variants for paragraph animations
export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay
      }
    }
  };
};

// Text container for staggered text animations
export const textContainer = {
  hidden: {
    opacity: 0
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 }
  })
};

// Individual letter animation for text
export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn"
    }
  }
};

// Card flip animation
export const flipCard = {
  hidden: {
    rotateY: 180,
    opacity: 0
  },
  show: {
    rotateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.4
    }
  }
};

// Scale animation for elements that grow from center
export const scaleVariant = (delay: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};
