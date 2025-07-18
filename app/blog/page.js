'use client';
import { useEffect } from 'react';

export default function BlogPage() {
  useEffect(() => {
    // ✅ Apply data-background images
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((el) => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);
  return (
    <>
      <div
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Blog</h1>
        <p>Coming Soon</p>
      </div>
    </>
  );
}
