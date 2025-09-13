'use client';
import { useEffect } from 'react';

export default function TermsClient() {
  useEffect(() => {
    // Apply data-background images
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((el) => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  // This component only handles client-side effects
  return null;
}
