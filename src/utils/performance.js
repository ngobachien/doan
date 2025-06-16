// Performance optimization utilities

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for frequent events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Optimized IntersectionObserver for animations
export const createOptimizedObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px 0px -50px 0px',
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry);
        // Unobserve after triggering to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  return observer;
};

// Preload images for better performance
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Lazy load images
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Optimize scroll performance
export const optimizeScroll = () => {
  let ticking = false;

  const updateScrollPosition = () => {
    // Your scroll logic here
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Add hardware acceleration to element
export const addHardwareAcceleration = (element) => {
  if (element) {
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
  }
};

// Remove hardware acceleration
export const removeHardwareAcceleration = (element) => {
  if (element) {
    element.style.transform = '';
    element.style.backfaceVisibility = '';
    element.style.perspective = '';
  }
};

// Optimize animations based on device capabilities
export const getOptimizedAnimationDuration = () => {
  // Check device performance indicators
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
  const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
  
  if (prefersReducedMotion() || isSlowConnection || isLowEndDevice) {
    return 0.1; // Very fast animations
  }
  
  return 0.3; // Normal animation duration
};

// Batch DOM operations
export const batchDOMOperations = (operations) => {
  requestAnimationFrame(() => {
    operations.forEach(operation => operation());
  });
};

// Memory cleanup utility
export const cleanupEventListeners = (element, events) => {
  events.forEach(({ event, handler }) => {
    element.removeEventListener(event, handler);
  });
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Optimize CSS animations
export const optimizeAnimations = () => {
  const animatedElements = document.querySelectorAll('[class*="animate"], [class*="transition"]');
  
  animatedElements.forEach(element => {
    // Add will-change for better performance
    element.style.willChange = 'transform, opacity';
    
    // Remove will-change after animation
    element.addEventListener('animationend', () => {
      element.style.willChange = 'auto';
    }, { once: true });
    
    element.addEventListener('transitionend', () => {
      element.style.willChange = 'auto';
    }, { once: true });
  });
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Optimize animations
  optimizeAnimations();
  
  // Lazy load images
  lazyLoadImages();
  
  // Optimize scroll
  optimizeScroll();
  
  // Add passive event listeners where possible
  const passiveEvents = ['scroll', 'wheel', 'touchstart', 'touchmove'];
  passiveEvents.forEach(event => {
    document.addEventListener(event, () => {}, { passive: true });
  });
};

// Export default object with all utilities
const performanceUtils = {
  debounce,
  throttle,
  createOptimizedObserver,
  preloadImage,
  lazyLoadImages,
  optimizeScroll,
  prefersReducedMotion,
  addHardwareAcceleration,
  removeHardwareAcceleration,
  getOptimizedAnimationDuration,
  batchDOMOperations,
  cleanupEventListeners,
  measurePerformance,
  optimizeAnimations,
  initPerformanceOptimizations
};

export default performanceUtils;
