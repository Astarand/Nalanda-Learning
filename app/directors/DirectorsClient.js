'use client';
import { useEffect } from 'react';

export default function DirectorsClient() {
  useEffect(() => {
    // Apply data-background images
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((el) => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });

    // Initialize animations
    if (typeof window !== 'undefined') {
      if (window.WOW) {
        new window.WOW().init();
      }
    }
  }, []);

  // This component only handles client-side effects
  return null;
}
