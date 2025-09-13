'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../lib/blogData';

export default function BlogPage() {
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

  return (
    <>
      {/* Breadcrumb area start here */}
      <section className="breadcrumb-area" data-background="/images/banner/banner-inner.jpg">
        <div className="container">
          <div className="breadcrumb__wrp">
            <div className="breadcrumb__item">
              <h1 className="title">Blog & Insights</h1>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <i className="fa-light fa-angle-right" />
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

    </>
  );
}
