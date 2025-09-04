'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// World-class GallerySection component
function GallerySection() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      alt: 'Workshop Session',
      caption: 'Grand Opening Night',
    },
    {
      src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      alt: 'Team Collaboration',
      caption: 'Ribbon Cutting Ceremony',
    },
    {
      src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      alt: 'Student Activity',
      caption: 'First Customers Arrive',
    },
    {
      src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
      alt: 'Award Ceremony',
      caption: 'Evening Ambience',
    },
    {
      src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      alt: 'Classroom Innovation',
      caption: 'Outdoor Decor',
    },
    {
      src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
      alt: 'Outdoor Learning',
      caption: 'Family Gathering',
    },
    {
      src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
      alt: 'Teacher Training',
      caption: 'Live Music Night',
    },
    {
      src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      alt: 'Community Event',
      caption: 'Late Night Crowd',
    },
    // Add more images as needed
  ];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openLightbox = (idx) => {
    setCurrentIdx(idx);
    setLightboxOpen(true);
  };
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
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">Our Gallery</h2>
        <div className="gallery-underline"></div>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div
              className="gallery-card"
              key={idx}
              onClick={() => openLightbox(idx)}
              tabIndex={0}
              role="button"
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(idx);
              }}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gallery-card-caption">
                <h5>{img.caption}</h5>
                {/* <p>Optional description here</p> */}
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((img) => ({
            src: img.src,
            alt: img.alt,
            description: img.caption,
          }))}
          index={currentIdx}
          render={{
            slide: ({ slide }) => (
              <img
                src={slide.src}
                alt={slide.alt}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '80vh',
                  margin: 'auto',
                  display: 'block',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
              />
            ),
          }}
        />
      </div>
    </section>
  );
}

export default function AchievementsPage() {
  return (
    <>
      {/* Breadcrumb area start here */}
      <section
        className="breadcrumb-area position-relative py-5"
        style={{
          background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
          backgroundImage: "url('/images/banner/banner-inner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '260px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div className="breadcrumb__wrp d-flex flex-column align-items-center justify-content-center">
            <div className="breadcrumb__item text-center">
              <h1
                className="title mb-3"
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '2.8rem',
                  letterSpacing: '1px',
                  textShadow: '0 2px 8px rgba(30,60,114,0.2)',
                }}
              >
                Our Achivements
              </h1>
              <ul
                className="breadcrumb list-inline d-flex align-items-center justify-content-center gap-2 mb-0"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '30px',
                  padding: '8px 24px',
                }}
              >
                <li className="list-inline-item">
                  <Link
                    href="/"
                    className="text-white text-decoration-none fw-semibold"
                    style={{ transition: 'color 0.2s' }}
                  >
                    Home
                  </Link>
                </li>
                <li className="list-inline-item" style={{ color: '#fff' }}>
                  <i className="fa fa-angle-right" />
                </li>
                <li className="list-inline-item text-white fw-semibold">Achivements</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="position-absolute"
          style={{
            right: 0,
            bottom: 0,
            width: '120px',
            height: '120px',
            background: 'rgba(255,255,255,0.08)',
            borderTopLeftRadius: '60px',
            zIndex: 0,
          }}
        />
        <div
          className="position-absolute"
          style={{
            left: 0,
            top: 0,
            width: '80px',
            height: '80px',
            background: 'rgba(255,255,255,0.10)',
            borderBottomRightRadius: '40px',
            zIndex: 0,
          }}
        />
      </section>
      {/* Breadcrumb area end here */}

      {/* Achivemnet area start here */}
      <section className="choose-four-area pt-60 pb-130">
        <div className="container">
          <div className="choose-four__wrp">
            <div className="section-header text-center mb-50">
              <h2 className="wow splt-txt" data-splitting="">
                Building the Future of Education
                <br />
                Let’s Transform Education Together.
              </h2>
            </div>
            <div className="choose-four__video mb-100">
              <img src="/images/choose/choose-four-image.jpg" alt="image" />
              <div className="choose-four__video-btn">
                <div className="btn-video video-pulse">
                  <a className="video-popup" href="https://www.youtube.com/watch?v=9Voo7WPQqfU">
                    <i className="fa-sharp fa-solid fa-play" />
                  </a>
                </div>
                <h4>Click to Watch</h4>
              </div>
              <h2 className="title">WATCH VIDEO</h2>
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="choose-four-left">
                  <div className="item">
                    <h2 className="info">
                      <span className="count">10</span>M+
                    </h2>
                    <h3 className="wow text-white mt-20 splt-txt" data-splitting="">
                      Nearly 10 million teachers to be enrolled
                    </h3>
                    <p className="text-white mt-15">
                      Nalanda Learning has played a pivotal role in shaping India’s educational
                      landscape, nearly 10 million teachers to be enrolled. Join us as we continue
                      to make an impact with innovative, scalable learning solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-four-right">
                  <div className="progress-area">
                    <div className="progress__title mb-1">
                      <h4>Improved Learning Outcomes</h4>
                      <span>
                        <span className="progress-count">95</span>%
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration=".55s"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-area mt-50">
                    <div className="progress__title mb-1">
                      <h4>Certified Educators</h4>
                      <span>
                        <span className="progress-count">92</span>%
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration=".85s"
                        role="progressbar"
                        style={{ width: '92%' }}
                        aria-valuenow={92}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-area mt-50">
                    <div className="progress__title mb-1">
                      <h4>Partnerships with Educational Bodies</h4>
                      <span>
                        <span className="progress-count">80</span>%
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration=".60s"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <p className="text mt-50">
                    Nalanda Learning provides a holistic approach to education through expert
                    consultancy and specialised training. We focus on data-driven analysis,
                    personalised teacher training programmes, and strategic educational solutions,
                    creating impactful opportunities for educators and institutions to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choose-four__bg">
          <img src="/images/bg/choose-four-bg-image.jpg" alt="bg-image" />
        </div>
        <div className="choose-four__rectangle">
          <div className="item wow" />
          <div className="item-dark wow" />
        </div>
      </section>
      {/* Acvimeny area end here */}

      {/* Video Showcase Section Start */}
      <section className="video-showcase-section position-relative py-5">
        {/* Decorative shapes */}
        <div className="video-showcase-shape-1" />
        <div className="video-showcase-shape-2" />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3 video-showcase-title">
                <span className="video-showcase-title-gradient">Video Showcase</span>
              </h2>
              <p className="text-muted video-showcase-desc">
                Explore our curated collection of educational and inspirational videos, designed to
                empower and enlighten.
              </p>
              <div className="video-showcase-underline" />
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                src: 'https://www.youtube.com/embed/ysz5S6PUM-U',
                title: 'Inspiring Educators',
              },
              {
                src: 'https://www.youtube.com/embed/jNQXAC9IVRw',
                title: 'Learning Journeys',
              },
              {
                src: 'https://www.youtube.com/embed/tgbNymZ7vqY',
                title: 'Innovative Classrooms',
              },
              {
                src: 'https://www.youtube.com/embed/ScMzIvxBSi4',
                title: 'Student Success Stories',
              },
              {
                src: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
                title: 'Modern Teaching Tools',
              },
              {
                src: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
                title: 'Empowering Teachers',
              },
              {
                src: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
                title: 'Transforming Education',
              },
              {
                src: 'https://www.youtube.com/embed/LXb3EKWsInQ',
                title: 'Digital Learning',
              },
              {
                src: 'https://www.youtube.com/embed/e-ORhEE9VVg',
                title: 'Community Impact',
              },
              {
                src: 'https://www.youtube.com/embed/9bZkp7q19f0',
                title: 'Global Perspectives',
              },
              {
                src: 'https://www.youtube.com/embed/OPf0YbXqDm0',
                title: 'Future of Learning',
              },
              {
                src: 'https://www.youtube.com/embed/60ItHLz5WEA',
                title: 'Education for All',
              },
            ].map((video, idx) => (
              <div className="col-lg-3 col-md-6 d-flex" key={idx}>
                <div className="card border-0 shadow-lg w-100 h-100 d-flex flex-column video-showcase-card">
                  <div className="position-relative video-showcase-card-media">
                    <div className="video-overlay" />
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="video-showcase-iframe"
                    ></iframe>
                    <div className="video-play-icon d-flex align-items-center justify-content-center">
                      <span className="video-play-icon-inner">
                        <i className="fa fa-play" style={{ marginLeft: 4 }} />
                      </span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center video-showcase-card-body">
                    <h6 className="card-title mb-1 text-center video-showcase-card-title">
                      {video.title}
                    </h6>
                    <div className="video-showcase-card-underline" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Video Showcase Section End */}

      {/* Image Gallery Section Start */}
      <GallerySection />
      {/* Image Gallery Section End */}

      {/* Testimonial area start here */}
      <section className="testimonial-area bg-sub pt-130 pb-130">
        <div className="testimonial__shape">
          <img src="/images/shape/testimonial-shape.png" alt="shape" />
        </div>
        <div className="testimonial__image animation__arryLeftRight">
          <img
            className="wow bounceInRight"
            src="/images/testimonial/testimonial-image.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="testimonial__wrp">
            <div className="section-header mb-50">
              <h6>Celebrating Success with Nalanda Learning</h6>
              <h2 className="wow splt-txt" data-splitting="">
                Empowering children and educators <br /> to achieve more, together.
              </h2>
            </div>
            <div className="row g-5 g-lg-4 align-items-end">
              <div className="col-lg-9 col-xxl-8">
                <div className="swiper testimonial__slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial__item">
                        <div className="icon">
                          <svg
                            width={27}
                            height={25}
                            viewBox="0 0 27 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_356_27918)">
                              <path
                                d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect width={27} height={25} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p>
                          Nalanda Learning has transformed the way our teachers engage with
                          students. The interactive curriculum and support have made a real
                          difference in our classrooms.
                        </p>
                        <div className="info">
                          <h4>Priya Sharma</h4>
                          <span>Principal, Little Stars School</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__item">
                        <div className="icon">
                          <svg
                            width={27}
                            height={25}
                            viewBox="0 0 27 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_356_27918)">
                              <path
                                d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect width={27} height={25} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p>
                          As a parent, I have seen my child grow more confident and curious thanks
                          to Nalanda Learning’s innovative approach. The resources are engaging and
                          easy to use at home.
                        </p>
                        <div className="info">
                          <h4>Rahul Mehta</h4>
                          <span>Parent</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__item">
                        <div className="icon">
                          <svg
                            width={27}
                            height={25}
                            viewBox="0 0 27 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_356_27918)">
                              <path
                                d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect width={27} height={25} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p>
                          The training and support from Nalanda Learning have empowered our teachers
                          to deliver lessons more effectively. Our students are more engaged than
                          ever!
                        </p>
                        <div className="info">
                          <h4>Anita Das</h4>
                          <span>Teacher, Bright Minds Academy</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__item">
                        <div className="icon">
                          <svg
                            width={27}
                            height={25}
                            viewBox="0 0 27 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_356_27918)">
                              <path
                                d="M15.223 18.4547C17.5231 13.3369 22.3533 13.7819 24.6574 16.5886C26.9614 19.3954 24.0784 23.0162 21.5483 23.4612C19.0181 23.9063 14.993 22.2374 15 16.6561C15.0094 9.22041 22.9949 2.09627 23.8724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                              <path
                                d="M1.72301 18.4547C4.0231 13.3369 8.8533 13.7819 11.1574 16.5886C13.4614 19.3954 10.5784 23.0162 8.04825 23.4612C5.51816 23.9063 1.493 22.2374 1.50001 16.6561C1.50935 9.22041 9.49485 2.09627 10.3724 1.4707"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect width={27} height={25} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p>
                          We are grateful to Nalanda Learning for their continuous innovation and
                          dedication. Our school community has benefited immensely from their
                          programs.
                        </p>
                        <div className="info">
                          <h4>Sunil Kumar</h4>
                          <span>Director, Happy Kids School</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xxl-2">
                <div className="testimonial__review">
                  <h5>Average Rating</h5>
                  <h2>4.9</h2>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <h5>
                    (30+) School & Parent <br />
                    reviews
                  </h5>
                  <div className="testimonial__slider-arry">
                    <button className="arry-prev testimonial__arry-prev">
                      <i className="fa-light fa-arrow-left-long" />
                    </button>
                    <button className="arry-next testimonial__arry-next">
                      <i className="fa-light fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial area end here */}
    </>
  );
}
