'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function B2BSaaSPage() {
  useEffect(() => {
    // Set page metadata
    document.title = 'B2B SaaS Platform - Complete Early Learning Solution | Nalanda Learning';

    // Add a small delay to ensure DOM is fully rendered
    const initializeInteractions = () => {
      // Book tabs functionality
      const bookTabs = document.querySelectorAll('.book-tab');
      const bookCarousels = document.querySelectorAll('.book-carousel');
      const bookContents = document.querySelectorAll('.book-content');

      console.log('Found tabs:', bookTabs.length);
      console.log('Found carousels:', bookCarousels.length);
      console.log('Found contents:', bookContents.length);

      bookTabs.forEach(tab => {
        tab.addEventListener('click', e => {
          e.preventDefault();
          const tabId = tab.getAttribute('data-tab');
          console.log('Tab clicked:', tabId);

          // Remove active class from all tabs, carousels, and contents
          bookTabs.forEach(t => t.classList.remove('active'));
          bookCarousels.forEach(c => c.classList.remove('active'));
          bookContents.forEach(c => c.classList.remove('active'));

          // Add active class to clicked tab and corresponding content
          tab.classList.add('active');
          const carousel = document.getElementById(`${tabId}-carousel`);
          const content = document.getElementById(`${tabId}-content`);

          if (carousel) carousel.classList.add('active');
          if (content) content.classList.add('active');
        });
      });

      // Carousel functionality
      const carousels = document.querySelectorAll('.book-carousel');
      carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.book-image');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentIndex = 0;

        console.log('Carousel images found:', images.length);

        const showImage = index => {
          images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
          });
        };

        if (prevBtn) {
          prevBtn.addEventListener('click', e => {
            e.preventDefault();
            currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
            console.log('Previous clicked, index:', currentIndex);
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener('click', e => {
            e.preventDefault();
            currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
            showImage(currentIndex);
            console.log('Next clicked, index:', currentIndex);
          });
        }
      });
    };

    // Initialize after a short delay
    setTimeout(initializeInteractions, 100);

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
      });
    });

    // Form submission handler
    const form = document.querySelector('.saas-contact-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your interest! We will contact you within 24 hours.');
      });
    }
  }, []);

  return (
    <>
      {/* Breadcrumb area start here */}
      <section
        className="breadcrumb-area"
        style={{
          backgroundImage: 'url(/images/banner/banner-inner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '120px 0 80px',
          position: 'relative',
        }}
      >
        <div className="container">
          <div className="breadcrumb__wrp">
            <div className="breadcrumb__item">
              <h1 className="title">B2B SaaS Platform</h1>
              <nav aria-label="Breadcrumb">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>B2B SaaS Platform</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

      {/* Introduction Section */}
      <section className="saas-introduction-section pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="introduction-content text-center">
                <div className="section-header mb-60">
                  <h1 className="intro-title">
                    Complete B2B SaaS Solution for{' '}
                    <span className="text-primary">Early Learning</span> as per NEP 2020
                  </h1>
                  <h3 className="intro-subtitle">
                    Empowering Schools with Integrated Learning Resources – Physical & Digital
                  </h3>
                  <p className="intro-description">
                    Nalanda Learning offers a robust B2B SaaS Platform that combines the best of
                    print and digital for preschools, kindergartens, and early education providers.
                    Our ecosystem blends age-appropriate books, interactive worksheets, and a
                    state-of-the-art Learning Management System (LMS) to deliver a seamless teaching
                    and learning experience through a Government of India Certified Pre-School
                    Facilitators and Caregivers Training Program.
                  </p>
                </div>

                <div className="introduction-images">
                  <div className="row g-4">
                    <div className="col-lg-4 col-md-4">
                      <div className="intro-image-card">
                        <img
                          src="/images/intro/physical-books.jpg"
                          alt="Physical Learning Books"
                          className="intro-image"
                        />
                        <div className="image-overlay">
                          <h5>Premium Books</h5>
                          <p>Age-appropriate physical learning materials</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="intro-image-card">
                        <img
                          src="/images/intro/digital-platform.jpg"
                          alt="Digital Learning Platform"
                          className="intro-image"
                        />
                        <div className="image-overlay">
                          <h5>Digital Platform</h5>
                          <p>Interactive LMS and content management</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="intro-image-card">
                        <img
                          src="/images/intro/teacher-training.jpg"
                          alt="Teacher Training Program"
                          className="intro-image"
                        />
                        <div className="image-overlay">
                          <h5>Certified Training</h5>
                          <p>Government certified teacher programs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Early Learning Books Section */}
      <section className="books-section pt-130 pb-80">
        <div className="container">
          <div className="section-header text-center mb-80">
            <h6>Premium Early Learning Books</h6>
            <h2>Expertly Crafted Educational Materials</h2>
            <p className="text mt-20">
              NCF-FS & NIPUN Bharat aligned curriculum with level-based kits for comprehensive early
              learning
            </p>
          </div>

          <div className="books-tabs-container">
            <div className="books-tabs">
              <button className="book-tab active" data-tab="playgroup">
                PlayGroup
              </button>
              <button className="book-tab" data-tab="nursery">
                Nursery
              </button>
              <button className="book-tab " data-tab="lower-kg">
                Lower KG
              </button>
              <button className="book-tab" data-tab="senior-kg">
                Upper KG
              </button>
            </div>

            <div className="books-content">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="book-carousel-container">
                    {/* 1. PlayGroup Carousel */}
                    <div className="book-carousel active" id="playgroup-carousel">
                      <div className="carousel-images">
                        <img
                          src="/images/playgroup-book-image/1.png"
                          alt="PlayGroup Book 1"
                          className="book-image active"
                        />
                        <img
                          src="/images/playgroup-book-image/2.png"
                          alt="PlayGroup Book 2"
                          className="book-image"
                        />
                        <img
                          src="/images/playgroup-book-image/3.png"
                          alt="PlayGroup Book 3"
                          className="book-image"
                        />
                        <img
                          src="/images/playgroup-book-image/4.png"
                          alt="PlayGroup Book 4"
                          className="book-image"
                        />
                      </div>
                      <div className="carousel-controls">
                        <button className="carousel-btn prev">
                          <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="carousel-btn next">
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    {/* 2. Nursery Carousel */}
                    <div className="book-carousel" id="nursery-carousel">
                      <div className="carousel-images">
                        <img
                          src="/images/nursery-book-image/5.png"
                          alt="Nursery Book 1"
                          className="book-image active"
                        />
                        <img
                          src="/images/nursery-book-image/6.png"
                          alt="Nursery Book 2"
                          className="book-image"
                        />
                        <img
                          src="/images/nursery-book-image/7.png"
                          alt="Nursery Book 3"
                          className="book-image"
                        />
                        <img
                          src="/images/nursery-book-image/8.png"
                          alt="Nursery Book 4"
                          className="book-image"
                        />
                        <img
                          src="/images/nursery-book-image/9.png"
                          alt="Nursery Book 5"
                          className="book-image"
                        />
                        <img
                          src="/images/nursery-book-image/10.png"
                          alt="Nursery Book 6"
                          className="book-image"
                        />
                      </div>
                      <div className="carousel-controls">
                        <button className="carousel-btn prev">
                          <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="carousel-btn next">
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    {/* 3. Lower KG Carousel */}
                    <div className="book-carousel" id="lower-kg-carousel">
                      <div className="carousel-images">
                        <img
                          src="/images/lower-kg-book-image/11.png"
                          alt="Lower KG Book 1"
                          className="book-image active"
                        />
                        <img
                          src="/images/lower-kg-book-image/12.png"
                          alt="Lower KG Book 2"
                          className="book-image"
                        />
                        <img
                          src="/images/lower-kg-book-image/13.png"
                          alt="Lower KG Book 3"
                          className="book-image"
                        />
                        <img
                          src="/images/lower-kg-book-image/14.png"
                          alt="Lower KG Book 4"
                          className="book-image"
                        />
                        <img
                          src="/images/lower-kg-book-image/15.png"
                          alt="Lower KG Book 5"
                          className="book-image"
                        />
                      </div>
                      <div className="carousel-controls">
                        <button className="carousel-btn prev">
                          <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="carousel-btn next">
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>

                    {/* 4. Upper KG (Senior KG) Carousel */}
                    <div className="book-carousel" id="senior-kg-carousel">
                      <div className="carousel-images">
                        <img
                          src="/images/senior-kg-book-image/16.png"
                          alt="Upper KG Book 1"
                          className="book-image active"
                        />
                        <img
                          src="/images/senior-kg-book-image/17.png"
                          alt="Upper KG Book 2"
                          className="book-image"
                        />
                        <img
                          src="/images/senior-kg-book-image/18.png"
                          alt="Upper KG Book 3"
                          className="book-image"
                        />
                        <img
                          src="/images/senior-kg-book-image/19.png"
                          alt="Upper KG Book 4"
                          className="book-image"
                        />
                      </div>
                      <div className="carousel-controls">
                        <button className="carousel-btn prev">
                          <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="carousel-btn next">
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="book-description">
                    {/* 1. PlayGroup Content */}
                    <div className="book-content active" id="playgroup-content">
                      <h3>PlayGroup Books</h3>
                      <p>
                        Designed for children aged 2-3 years, our PlayGroup books focus on sensory
                        development and basic cognitive skills through play-based learning.
                      </p>
                      <ul className="book-features">
                        <li>
                          <i className="fa-solid fa-check"></i> Sensory development activities
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Basic shape and color recognition
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Simple matching and sorting games
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Parent-child interaction guides
                        </li>
                      </ul>

                      <div className="buy-buttons-wrapper">
                        <Link
                          href="https://amazon.in/nalanda-playgroup"
                          className="amazon-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-brands fa-amazon"></i>
                          Buy on Amazon
                        </Link>
                        <Link
                          href="https://flipkart.com/nalanda-playgroup"
                          className="flipkart-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-shopping-cart"></i>
                          Buy on Flipkart
                        </Link>
                        <Link
                          href="https://mypustak.com/nalanda-playgroup"
                          className="mypustak-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-book"></i>
                          Buy on MyPustak
                        </Link>
                      </div>
                    </div>

                    {/* 2. Nursery Content */}
                    <div className="book-content" id="nursery-content">
                      <h3>Nursery Books</h3>
                      <p>
                        Perfect for children aged 3-4 years, our Nursery books introduce structured
                        learning while maintaining the joy of discovery and exploration.
                      </p>
                      <ul className="book-features">
                        <li>
                          <i className="fa-solid fa-check"></i> Structured learning approach
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Pre-writing and pre-math skills
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Social and emotional development
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Interactive storytelling elements
                        </li>
                      </ul>

                      <div className="buy-buttons-wrapper">
                        <Link
                          href="https://amazon.in/nalanda-nursery"
                          className="amazon-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-brands fa-amazon"></i>
                          Buy on Amazon
                        </Link>
                        <Link
                          href="https://flipkart.com/nalanda-nursery"
                          className="flipkart-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-shopping-cart"></i>
                          Buy on Flipkart
                        </Link>
                        <Link
                          href="https://mypustak.com/nalanda-nursery"
                          className="mypustak-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-book"></i>
                          Buy on MyPustak
                        </Link>
                      </div>
                    </div>

                    {/* 3. Lower KG Content */}
                    <div className="book-content" id="lower-kg-content">
                      <h3>Lower KG Books</h3>
                      <p>
                        Specially designed for children aged 4-5 years, our Lower KG books focus on
                        foundational skills development through engaging activities and colorful
                        illustrations.
                      </p>
                      <ul className="book-features">
                        <li>
                          <i className="fa-solid fa-check"></i> Age-appropriate learning activities
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Motor skills development exercises
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Basic alphabet and number
                          recognition
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Trilingual support
                          (English/Hindi/Bengali)
                        </li>
                      </ul>

                      <div className="buy-buttons-wrapper">
                        <Link
                          href="https://amazon.in/nalanda-lower-kg"
                          className="amazon-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-brands fa-amazon"></i>
                          Buy on Amazon
                        </Link>
                        <Link
                          href="https://flipkart.com/nalanda-lower-kg"
                          className="flipkart-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-shopping-cart"></i>
                          Buy on Flipkart
                        </Link>
                        <Link
                          href="https://mypustak.com/nalanda-lower-kg"
                          className="mypustak-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-book"></i>
                          Buy on MyPustak
                        </Link>
                      </div>
                    </div>

                    {/* 4. Upper KG (Senior KG) Content */}
                    <div className="book-content" id="senior-kg-content">
                      <h3>Upper KG Books</h3>
                      <p>
                        For children aged 5-6 years, our Upper KG books prepare students for formal
                        schooling with advanced pre-academic skills and school readiness activities.
                      </p>
                      <ul className="book-features">
                        <li>
                          <i className="fa-solid fa-check"></i> School readiness preparation
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Advanced reading and writing skills
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Mathematical concepts introduction
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Critical thinking development
                        </li>
                      </ul>
                      <div className="buy-buttons-wrapper">
                        <Link
                          href="https://amazon.in/nalanda-senior-kg"
                          className="amazon-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-brands fa-amazon"></i>
                          Buy on Amazon
                        </Link>
                        <Link
                          href="https://flipkart.com/nalanda-senior-kg"
                          className="flipkart-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-shopping-cart"></i>
                          Buy on Flipkart
                        </Link>
                        <Link
                          href="https://mypustak.com/nalanda-senior-kg"
                          className="mypustak-buy-btn"
                          target="_blank"
                        >
                          <i className="fa-solid fa-book"></i>
                          Buy on MyPustak
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customizable Worksheets Section */}
      <section className="worksheets-section-simple pt-130 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="worksheets-content-simple">
                <h6>Customizable Worksheets</h6>
                <h2>AI-Powered Adaptive Learning Materials</h2>
                <p className="worksheets-description">
                  Transform your teaching with intelligent worksheets that adapt to each child's
                  learning pace and provide detailed progress insights through advanced AI
                  technology.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="worksheets-image-simple">
                <img
                  src="/images/worksheet/worksheet-preview.jpg"
                  alt="Customizable Worksheets Preview"
                  className="simple-worksheet-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Platform & Value Proposition Merged Section */}
      <section className="platform-value-merged-section pt-130 pb-130">
        <div className="container">
          <div className="section-header text-center mb-80">
            <h6>Complete Digital Solution</h6>
            <h2>Transform Your School's Teaching Excellence</h2>
          </div>

          {/* Digital Platform Features */}
          <div className="digital-features-section mb-80">
            <div className="section-subheader text-center mb-60">
              <h3>Complete LMS + Content Engine</h3>
              <p>
                Comprehensive learning management system with rich content library, advanced
                analytics, and cross-platform accessibility.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="platform-feature-card">
                  <div className="feature-icon">
                    <i className="fa-solid fa-tachometer-alt"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Centralized Teacher Dashboard</h5>
                    <p>
                      Manage all classes, students, and content from one unified interface with
                      comprehensive control and monitoring capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="platform-feature-card">
                  <div className="feature-icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Interactive Student Spaces</h5>
                    <p>
                      Engaging learning environments tailored for young learners with
                      age-appropriate interfaces and activities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="platform-feature-card">
                  <div className="feature-icon">
                    <i className="fa-solid fa-database"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Extensive Content Repository</h5>
                    <p>
                      Thousands of educational resources, videos, and interactive games organized by
                      curriculum and learning objectives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="platform-feature-card">
                  <div className="feature-icon">
                    <i className="fa-solid fa-chart-bar"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Advanced Analytics & Reports</h5>
                    <p>
                      Detailed insights into learning progress and performance metrics with
                      actionable recommendations for improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="platform-feature-card">
                  <div className="feature-icon">
                    <i className="fa-solid fa-mobile-alt"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Cross-Platform Access</h5>
                    <p>
                      Available on web, mobile, and tablet for learning anywhere, anytime with
                      seamless synchronization across devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="platform-feature-card">
                  <div className="feature-icon">
                    <i className="fa-solid fa-shield-alt"></i>
                  </div>
                  <div className="feature-content">
                    <h5>Secure & Reliable</h5>
                    <p>
                      Enterprise-grade security with data protection, regular backups, and 99.9%
                      uptime guarantee for uninterrupted learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section pb-130">
        <div className="container">
          <div className="section-header text-center mb-80">
            <h6>Frequently Asked Questions</h6>
            <h2>Everything You Need to Know</h2>
            <p className="text mt-20">
              Get answers to common questions about our B2B SaaS platform and implementation process
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <div className="faq-item">
                  <div className="faq-question">
                    <h5>How does the platform integrate with existing school systems?</h5>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Our platform is designed with flexible APIs and integration capabilities that
                      work seamlessly with most existing school management systems. We provide
                      dedicated support during the integration process to ensure smooth
                      implementation.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h5>What training and support do you provide for teachers?</h5>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      We offer comprehensive training programs including live workshops, video
                      tutorials, and ongoing support. Our dedicated customer success team ensures
                      teachers are confident using all platform features.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h5>How is student data privacy and security handled?</h5>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      We maintain the highest standards of data security with encrypted storage,
                      secure access controls, and full compliance with educational data privacy
                      regulations. All student information is protected and never shared with third
                      parties.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h5>Can the content be customized for our school's specific needs?</h5>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Yes, our platform offers extensive customization options including branded
                      interfaces, custom worksheets, and tailored content that aligns with your
                      school's specific curriculum requirements and teaching methodologies.
                    </p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">
                    <h5>What is the implementation timeline for new schools?</h5>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="faq-answer">
                    <p>
                      Typical implementation takes 2-4 weeks depending on school size and
                      requirements. This includes system setup, data migration, teacher training,
                      and full platform deployment with ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="testimonials-section pt-130 pb-130">
        <div className="container">
          <div className="section-header text-center mb-80">
            <h6>Success Stories</h6>
            <h2>What Edupreneurs Say About Us</h2>
            <p className="text mt-20">
              Hear from educational leaders who have transformed their institutions with our
              platform
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <p>
                    "The integrated approach of physical books with digital tools has revolutionized
                    our teaching methodology. Our teachers are more confident and students are more
                    engaged than ever before."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="/images/testimonials/principal-1.jpg" alt="Dr. Priya Sharma" />
                  </div>
                  <div className="author-info">
                    <h5>Dr. Priya Sharma</h5>
                    <span>Principal, Little Scholars Academy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <p>
                    "The AI-driven progress reports have given us unprecedented insights into each
                    child's learning journey. Parents are amazed by the detailed feedback we can now
                    provide."
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="/images/testimonials/director-1.jpg" alt="Rajesh Kumar" />
                  </div>
                  <div className="author-info">
                    <h5>Rajesh Kumar</h5>
                    <span>Director, Bright Minds Preschool</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-card video-testimonial">
                <div className="video-placeholder">
                  <div className="play-button">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <img src="/images/testimonials/video-thumb-1.jpg" alt="Video Testimonial" />
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h5>Watch Success Story</h5>
                    <span>How Rainbow Kids School increased enrollment by 60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section id="contact" className="contact-form-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info">
                <div className="section-header mb-40">
                  <h6>Get Started Today</h6>
                  <h2>Request Your Personalized Demo</h2>
                  <p className="text mt-20">
                    Discover how our B2B SaaS platform can transform your institution's early
                    learning programs. Fill out the form and our education specialists will contact
                    you within 24 hours.
                  </p>
                </div>

                <div className="contact-benefits">
                  <div className="contact-benefit">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Free 30-day trial with full platform access</span>
                  </div>
                  <div className="contact-benefit">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Personalized onboarding and training</span>
                  </div>
                  <div className="contact-benefit">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Dedicated customer success manager</span>
                  </div>
                  <div className="contact-benefit">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Custom implementation roadmap</span>
                  </div>
                </div>
              </div>
              <div className="download-brochure-section mt-40">
                <Link
                  href="/brochure/nalanda-b2b-saas-brochure.pdf"
                  className="simple-download-btn text-center d-block mx-auto"
                  style={{ width: '350px' }}
                  target="_blank"
                >
                  <i className="fa-solid fa-download"></i>
                  &nbsp; Download Brochure
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-wrapper">
                <form className="saas-contact-form">
                  <div className="form-group">
                    <label htmlFor="institutionName">Institution Name *</label>
                    <input
                      type="text"
                      id="institutionName"
                      name="institutionName"
                      required
                      placeholder="Enter your school/institution name"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="contactName">Your Name *</label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          required
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="designation">Designation *</label>
                        <select id="designation" name="designation" required>
                          <option value="">Select designation</option>
                          <option value="principal">Principal</option>
                          <option value="director">Director</option>
                          <option value="owner">Owner</option>
                          <option value="coordinator">Academic Coordinator</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="studentCount">Number of Students</label>
                        <select id="studentCount" name="studentCount">
                          <option value="">Select range</option>
                          <option value="1-50">1-50 students</option>
                          <option value="51-100">51-100 students</option>
                          <option value="101-200">101-200 students</option>
                          <option value="201-500">201-500 students</option>
                          <option value="500+">500+ students</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          placeholder="City, State"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="requirements">Specific Requirements</label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows="4"
                      placeholder="Tell us about your specific needs, current challenges, or questions about our platform..."
                    ></textarea>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="newsletter" />
                      <span className="checkmark"></span>I would like to receive updates about new
                      features and educational resources
                    </label>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <i className="fa-solid fa-paper-plane"></i>
                    Request Demo & Free Trial
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
