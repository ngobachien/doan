import { useEffect } from 'react';

// Hook quản lý hiệu ứng scroll
export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kiểm tra các phần tử khi component mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook quản lý lazy loading cho hình ảnh
export const useLazyImages = () => {
  useEffect(() => {
    const images = document.querySelectorAll('[data-src]');
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    images.forEach((img) => imageObserver.observe(img));

    return () => {
      images.forEach((img) => imageObserver.unobserve(img));
    };
  }, []);
};

// Hook quản lý navigation
export const useHomeNavigation = (onPageChange) => {
  const handleNavigation = (page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { handleNavigation };
};