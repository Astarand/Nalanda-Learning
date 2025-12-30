'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [tab, setTab] = useState(1);

  useEffect(() => {
    // ✅ Apply data-background images
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((el) => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });

    // Initialize Swiper with delay to ensure DOM is ready
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        // Banner slider
        new window.Swiper('.banner__slider', {
          loop: true,
          parallax: true,
          autoplay: { delay: 10000 },
          pagination: { el: '.banner__slider .swiper-pagination', clickable: true },
          navigation: {
            nextEl: '.banner__slider .swiper-button-next',
            prevEl: '.banner__slider .swiper-button-prev',
          },
        });

        // Professional carousel
        new window.Swiper('.professional-carousel', {
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          effect: 'slide',
          speed: 800,
          pagination: {
            el: '.professional-carousel .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.professional-carousel .swiper-button-next',
            prevEl: '.professional-carousel .swiper-button-prev',
          },
        });
      }
    };

    // Initialize with a small delay
    setTimeout(initializeSwiper, 100);

    if (typeof window !== 'undefined') {
      if (window.WOW) {
        new window.WOW().init();
      }
      if (window.AOS) {
        window.AOS.refreshHard && window.AOS.refreshHard();
        window.AOS.init && window.AOS.init();
      }
    }
  }, []);

  return (
    <>
      {/* Banner- Area - Start */}
      <section className="banner-six-area">
        <div className="swiper banner-six__slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-bg" data-background="/images/banner/banner-image1.jpg" />
              <div className="banner-six__content">
                <h2 className="title" data-animation="fadeInUp" data-delay=".3s">
                  Shaping India's Future Through Early Learning
                </h2>
                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                  Government-certified training programmes designed to nurture young minds, aligned
                  with NEP 2020. Trusted by MEPSC, PSACWA, and over 2 million schools, we provide
                  transformative learning experiences for the next generation.
                </p>
                <a href="#" className="arry-btn" data-animation="fadeInUp" data-delay="1s">
                  <i className="fa-thin fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-bg" data-background="/images/banner/banner-image2.jpg" />
              <div className="banner-six__content">
                <h2 className="title" data-animation="fadeInUp" data-delay=".3s">
                  PSACWA Partnership: Shaping Educational Excellence
                </h2>
                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                  Working hand-in-hand with the Private School and Children Welfare Association to
                  strengthen school partnerships, enhance teacher capabilities, and deliver
                  meaningful learning outcomes nationwide.
                </p>
                <a
                  href="/psacwa"
                  className="arry-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
                  aria-label="Discover our work with PSACWA"
                >
                  <i className="fa-thin fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-bg" data-background="/images/banner/banner-image4.jpg" />
              <div className="banner-six__content">
                <h2 className="title" data-animation="fadeInUp" data-delay=".3s">
                  A single platform for efficient Pre-School Learning and Management
                </h2>
                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                  Integrated B2B SaaS platform designed for efficient Pre-School learning and
                  management, integrating curriculum delivery, teacher support, child progress
                  tracking, parent communication, and center operations.
                </p>
                <a
                  href="/mepsc"
                  className="arry-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
                  aria-label="View the MEPSC programme"
                >
                  <i className="fa-thin fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-bg" data-background="/images/banner/banner-image3.jpg" />
              <div className="banner-six__content">
                <h2 className="title" data-animation="fadeInUp" data-delay=".3s">
                  Government-Certified Training That Opens Doors
                </h2>
                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                  In partnership with MEPSC, we provide nationally recognised Early Childhood Care
                  and Education certification—creating pathways to meaningful careers in India's
                  growing preschool sector.
                </p>
                <a
                  href="/mepsc"
                  className="arry-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
                  aria-label="View the MEPSC programme"
                >
                  <i className="fa-thin fa-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner - Area - End */}

      {/* About-us area Start here */}
      <section className="professional-area pt-130 pb-130">
        <div className="container">
          <div className="row g-0">
            <div className="col-xl-6">
              <div className="professional__image imageLeftToRight wow">
                <div className="swiper professional-carousel">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src="/images/professional/professional-image-1.png"
                        alt="Teacher Training Program"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="/images/professional/professional-image-2.png"
                        alt="MEPSC Certification Program"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="/images/professional/professional-image-3.png"
                        alt="Global Teaching Opportunities"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="/images/professional/professional-image-4.png"
                        alt="Building Learning Communities"
                      />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="professional__content">
                <div className="section-header">
                  <h2>Safeguarding the Future</h2>
                  <h3>Our mission in the digital landscape</h3>
                  <p>
                    Nalanda Learning is India's leading Early Childhood Care and Education platform—
                    delivering NEP 2020-aligned curriculum, teacher training programmes, and school
                    management solutions. In partnership with MEPSC (a Sector Skill Council,
                    Ministry of Skill Development – Government of India) and PSACWA (Private School
                    and Children Welfare Association), we're transforming preschool education
                    nationwide.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <i className="fa-solid fa-check" /> MEPSC-certified ECCE programmes
                    </li>
                    <li>
                      <i className="fa-solid fa-check" /> NEP 2020-aligned curriculum delivery
                    </li>
                    <li>
                      <i className="fa-solid fa-check" /> Trusted by schools across India
                    </li>
                    <li>
                      <i className="fa-solid fa-check" /> Government-recognised skill training
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="professional__wrp">
            <div className="row g-5 g-xl-4">
              <div className="col-xl-4">
                <div className="professional__item">
                  <div className="icon">
                    <svg
                      width={87}
                      height={87}
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M32 10L4 22L32 34L60 22L32 10Z"
                          stroke="#121C27"
                          strokeWidth="2"
                          fill="#fff"
                        />
                        <path
                          d="M12 26V36C12 40 24 46 32 46C40 46 52 40 52 36V26"
                          stroke="#121C27"
                          strokeWidth="2"
                          fill="#fff"
                        />
                        <line x1="32" y1="34" x2="32" y2="50" stroke="#121C27" strokeWidth="2" />
                        <circle cx="32" cy="50" r="2" fill="#121C27" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">MEPSC Skill Training</h4>
                    <p className="text">
                      Delivering skill training in Early Childhood Care and Education through our
                      exclusive partnership with MEPSC—a Sector Skill Council under the Ministry of
                      Skill Development, Government of India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="professional__item">
                  <div className="icon">
                    <svg
                      width={91}
                      height={89}
                      viewBox="0 0 91 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="45.5"
                        cy="44.5"
                        rx="40"
                        ry="40"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="#fff"
                      />
                      <ellipse
                        cx="45.5"
                        cy="44.5"
                        rx="40"
                        ry="40"
                        stroke="#121C27"
                        strokeWidth="1"
                        fill="none"
                      />
                      <ellipse
                        cx="45.5"
                        cy="44.5"
                        rx="20"
                        ry="40"
                        stroke="#121C27"
                        strokeWidth="1"
                        fill="none"
                      />
                      <ellipse
                        cx="45.5"
                        cy="44.5"
                        rx="40"
                        ry="20"
                        stroke="#121C27"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path d="M5.5 44.5h80" stroke="#121C27" strokeWidth="1" />
                      <path d="M45.5 4.5v80" stroke="#121C27" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">PSACWA Partnerships</h4>
                    <p className="text">
                      Collaborating with the Private School and Children Welfare Association
                      (PSACWA) to strengthen early years education through school partnerships and
                      community outreach programmes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-xxl-3">
                <div className="professional__item-last">
                  <div className="icon">
                    <svg
                      width={87}
                      height={87}
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="16" r="6" stroke="#121C27" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="28" r="5" stroke="#121C27" strokeWidth="2" fill="none" />
                      <circle cx="36" cy="28" r="5" stroke="#121C27" strokeWidth="2" fill="none" />
                      <path
                        d="M24 22c-6 0-10 4-10 8v2h20v-2c0-4-4-8-10-8z"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M7 33c0-2.5 2.5-5 7-5"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M41 33c0-2.5-2.5-5-7-5"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h3 className="title">Building Learning Communities</h3>
                    <a
                      className="item-btn video-popup"
                      href="https://www.youtube.com/watch?v=UalTfOIDQ7M"
                    >
                      Our Impact{' '}
                      <svg
                        width={8}
                        height={11}
                        viewBox="0 0 8 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 10.5V0L8 4.5L0 10.5Z" fill="#121C27" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-us area end here */}

      {/* Horizontal accordion area start here */}
      <section className="hzAccordion-area pt-130 pb-130">
        <div className="container">
          <div className="section-header mb-60">
            <h2 className="wow splt-txt text-white" data-splitting>
              Our Services
            </h2>
          </div>
          <div className="hzAccordion__wrp">
            <div
              className="hzAccordion__item active wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="head">
                <h3 className="head-title">
                  <span className="title">MEPSC Partnership – National Programme</span>
                  <span className="number">01</span>
                </h3>
              </div>
              <div className="content">
                <div className="wrp">
                  <div className="content-wrp">
                    <p className="text">
                      In exclusive partnership with MEPSC—a Sector Skill Council under the Ministry
                      of Skill Development, Government of India—we deliver nationally recognised
                      Early Childhood Care and Education programmes aligned with NEP 2020 and NSQF
                      standards.
                    </p>
                    <a className="arry-btn" href="/mepsc">
                      <i className="fa-thin fa-arrow-up-right"></i>
                    </a>
                  </div>
                  <div className="shape">
                    <Image
                      src="/images/shape/hz-accordion-shape.png"
                      alt="shape"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/images/service/service-one-image1.jpg"
                      alt="image"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hzAccordion__item wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="head">
                <h3 className="head-title">
                  <span className="title">B2B SaaS Platform</span>
                  <span className="number">02</span>
                </h3>
              </div>
              <div className="content">
                <div className="wrp">
                  <div className="content-wrp">
                    <p className="text">
                      Our B2B SaaS platform empowers businesses to streamline operations, enhance
                      productivity, and drive growth through innovative software solutions. Designed
                      for scalability, our platform offers a range of tools for automation, data
                      analysis, customer relationship management, and more, enabling you to optimise
                      processes and scale seamlessly.
                    </p>
                    <a className="arry-btn" href="/services/saas-platform">
                      <i className="fa-thin fa-arrow-up-right"></i>
                    </a>
                  </div>
                  <div className="shape">
                    <Image
                      src="/images/shape/hz-accordion-shape.png"
                      alt="shape"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/images/service/service-one-image4.jpg"
                      alt="image"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hzAccordion__item wow fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="head">
                <h3 className="head-title">
                  <span className="title">PSACWA Collaboration – Community Outreach</span>
                  <span className="number">03</span>
                </h3>
              </div>
              <div className="content">
                <div className="wrp">
                  <div className="content-wrp">
                    <p className="text">
                      Working with the Private School and Children Welfare Association (PSACWA) to
                      strengthen early years education through school partnerships, teacher
                      development, and community programmes that enhance learning outcomes
                      nationwide.
                    </p>
                    <a className="arry-btn" href="/psacwa">
                      <i className="fa-thin fa-arrow-up-right"></i>
                    </a>
                  </div>
                  <div className="shape">
                    <Image
                      src="/images/shape/hz-accordion-shape.png"
                      alt="shape"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="image">
                    <Image
                      src="/images/service/service-one-image2.jpg"
                      alt="image"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Horizontal accordion area end here */}

      {/* Choose area start here */}
      <section className="choose-one-area bg-sub pt-100">
        <div className="row g-0">
          <div className="col-xl-7 order-2 order-xl-1">
            <div className="choose-one__wrp">
              <div className="section-header mb-50">
                <h2 className="wow splt-txt" data-splitting="">
                  Partnership-Driven Solutions <br /> Real-World Impact
                </h2>
              </div>
              <div className="choose__tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link${tab === 1 ? ' active' : ''}`}
                      type="button"
                      onClick={() => setTab(1)}
                    >
                      Why MEPSC Partnership Matters
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link${tab === 2 ? ' active' : ''}`}
                      type="button"
                      onClick={() => setTab(2)}
                    >
                      Why Choose Nalanda
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link${tab === 3 ? ' active' : ''}`}
                      type="button"
                      onClick={() => setTab(3)}
                    >
                      How Our Model Works
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content mt-50" id="myTabContent">
                <div
                  className={`tab-pane fade${tab === 1 ? ' show active' : ''}`}
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="choose-one__content">
                    <p className="mb-50">
                      With NEP 2020 prioritising early childhood education as the foundation for
                      India's educational transformation, skilled ECCE educators have become
                      essential. Our exclusive partnership with MEPSC ensures nationally recognised,
                      government-certified training that meets these critical needs.
                    </p>
                    <div className="item">
                      <div className="icon">
                        <h4>
                          Government <br /> Recognition
                        </h4>
                      </div>
                      <p>
                        MEPSC—a Sector Skill Council under the Ministry of Skill Development,
                        Government of India—provides the authoritative framework for our ECCE
                        programmes, ensuring national standards and career portability.
                      </p>
                    </div>
                    <div className="line" />
                    <div className="item">
                      <div className="icon">
                        <h4>
                          Scalable <br /> Impact
                        </h4>
                      </div>
                      <div>
                        <p>
                          Through strategic partnerships with PSACWA and state governments, we
                          deliver consistent, high-quality training that scales across urban and
                          rural contexts, bridging the educator skill gap nationwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${tab === 2 ? ' show active' : ''}`}
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="choose-twelve__content">
                    <p>
                      Nalanda Learning combines government-aligned curriculum, expert-led training,
                      and technology-enabled delivery to offer a truly integrated education
                      experience. From early childhood educators to institutional partnerships, we
                      ensure every learner has the tools to succeed.
                    </p>
                    <div className="list mt-30 mb-40">
                      <ul>
                        <li>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9972 5.87913 15.1534 3.84594 13.6537 2.34626C12.1541 0.846583 10.1209 0.00282218 8 0ZM12.47 5.80333L7.47 10.8033C7.4086 10.8656 7.33543 10.9151 7.25474 10.9488C7.17406 10.9826 7.08747 11 7 11C6.91254 11 6.82595 10.9826 6.74526 10.9488C6.66458 10.9151 6.59141 10.8656 6.53 10.8033L4.19667 8.47C4.07202 8.34535 4.00199 8.17628 4.00199 8C4.00199 7.82371 4.07202 7.65465 4.19667 7.53C4.32132 7.40535 4.49039 7.33532 4.66667 7.33532C4.84295 7.33532 5.01202 7.40535 5.13667 7.53L7 9.39L11.53 4.86333C11.6547 4.73868 11.8237 4.66865 12 4.66865C12.1763 4.66865 12.3453 4.73868 12.47 4.86333C12.5947 4.98798 12.6647 5.15705 12.6647 5.33333C12.6647 5.50962 12.5947 5.67868 12.47 5.80333Z"
                              fill="#121C27"
                            />
                            <path
                              d="M12.3273 5.98823L7.5926 10.6828C7.53446 10.7413 7.46517 10.7878 7.38876 10.8194C7.31236 10.8511 7.23036 10.8675 7.14754 10.8675C7.06472 10.8675 6.98272 10.8511 6.90632 10.8194C6.82991 10.7878 6.76062 10.7413 6.70248 10.6828L4.49295 8.49202C4.37491 8.37498 4.30859 8.21624 4.30859 8.05072C4.30859 7.88521 4.37491 7.72647 4.49295 7.60943C4.61098 7.49239 4.77108 7.42664 4.93801 7.42664C5.10494 7.42664 5.26503 7.49239 5.38307 7.60943L7.14754 9.35583L11.4372 5.10564C11.5552 4.9886 11.7153 4.92285 11.8823 4.92285C12.0492 4.92285 12.2093 4.9886 12.3273 5.10564C12.4454 5.22268 12.5117 5.38142 12.5117 5.54693C12.5117 5.71245 12.4454 5.87119 12.3273 5.98823Z"
                              fill="white"
                            />
                          </svg>
                          MEPSC-Certified ECCE Programmes
                        </li>
                        <li>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9972 5.87913 15.1534 3.84594 13.6537 2.34626C12.1541 0.846583 10.1209 0.00282218 8 0ZM12.47 5.80333L7.47 10.8033C7.4086 10.8656 7.33543 10.9151 7.25474 10.9488C7.17406 10.9826 7.08747 11 7 11C6.91254 11 6.82595 10.9826 6.74526 10.9488C6.66458 10.9151 6.59141 10.8656 6.53 10.8033L4.19667 8.47C4.07202 8.34535 4.00199 8.17628 4.00199 8C4.00199 7.82371 4.07202 7.65465 4.19667 7.53C4.32132 7.40535 4.49039 7.33532 4.66667 7.33532C4.84295 7.33532 5.01202 7.40535 5.13667 7.53L7 9.39L11.53 4.86333C11.6547 4.73868 11.8237 4.66865 12 4.66865C12.1763 4.66865 12.3453 4.73868 12.47 4.86333C12.5947 4.98798 12.6647 5.15705 12.6647 5.33333C12.6647 5.50962 12.5947 5.67868 12.47 5.80333Z"
                              fill="#121C27"
                            />
                            <path
                              d="M12.3273 5.98823L7.5926 10.6828C7.53446 10.7413 7.46517 10.7878 7.38876 10.8194C7.31236 10.8511 7.23036 10.8675 7.14754 10.8675C7.06472 10.8675 6.98272 10.8511 6.90632 10.8194C6.82991 10.7878 6.76062 10.7413 6.70248 10.6828L4.49295 8.49202C4.37491 8.37498 4.30859 8.21624 4.30859 8.05072C4.30859 7.88521 4.37491 7.72647 4.49295 7.60943C4.61098 7.49239 4.77108 7.42664 4.93801 7.42664C5.10494 7.42664 5.26503 7.49239 5.38307 7.60943L7.14754 9.35583L11.4372 5.10564C11.5552 4.9886 11.7153 4.92285 11.8823 4.92285C12.0492 4.92285 12.2093 4.9886 12.3273 5.10564C12.4454 5.22268 12.5117 5.38142 12.5117 5.54693C12.5117 5.71245 12.4454 5.87119 12.3273 5.98823Z"
                              fill="white"
                            />
                          </svg>
                          Technology-Enhanced Learning Platform
                        </li>
                        <li>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9972 5.87913 15.1534 3.84594 13.6537 2.34626C12.1541 0.846583 10.1209 0.00282218 8 0ZM12.47 5.80333L7.47 10.8033C7.4086 10.8656 7.33543 10.9151 7.25474 10.9488C7.17406 10.9826 7.08747 11 7 11C6.91254 11 6.82595 10.9826 6.74526 10.9488C6.66458 10.9151 6.59141 10.8656 6.53 10.8033L4.19667 8.47C4.07202 8.34535 4.00199 8.17628 4.00199 8C4.00199 7.82371 4.07202 7.65465 4.19667 7.53C4.32132 7.40535 4.49039 7.33532 4.66667 7.33532C4.84295 7.33532 5.01202 7.40535 5.13667 7.53L7 9.39L11.53 4.86333C11.6547 4.73868 11.8237 4.66865 12 4.66865C12.1763 4.66865 12.3453 4.73868 12.47 4.86333C12.5947 4.98798 12.6647 5.15705 12.6647 5.33333C12.6647 5.50962 12.5947 5.67868 12.47 5.80333Z"
                              fill="#121C27"
                            />
                            <path
                              d="M12.3273 5.98823L7.5926 10.6828C7.53446 10.7413 7.46517 10.7878 7.38876 10.8194C7.31236 10.8511 7.23036 10.8675 7.14754 10.8675C7.06472 10.8675 6.98272 10.8511 6.90632 10.8194C6.82991 10.7878 6.76062 10.7413 6.70248 10.6828L4.49295 8.49202C4.37491 8.37498 4.30859 8.21624 4.30859 8.05072C4.30859 7.88521 4.37491 7.72647 4.49295 7.60943C4.61098 7.49239 4.77108 7.42664 4.93801 7.42664C5.10494 7.42664 5.26503 7.49239 5.38307 7.60943L7.14754 9.35583L11.4372 5.10564C11.5552 4.9886 11.7153 4.92285 11.8823 4.92285C12.0492 4.92285 12.2093 4.9886 12.3273 5.10564C12.4454 5.22268 12.5117 5.38142 12.5117 5.54693C12.5117 5.71245 12.4454 5.87119 12.3273 5.98823Z"
                              fill="white"
                            />
                          </svg>
                          NEP 2020 & NSQF Alignment
                        </li>
                        <li></li>
                      </ul>
                      <ul>
                        <li>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9972 5.87913 15.1534 3.84594 13.6537 2.34626C12.1541 0.846583 10.1209 0.00282218 8 0ZM12.47 5.80333L7.47 10.8033C7.4086 10.8656 7.33543 10.9151 7.25474 10.9488C7.17406 10.9826 7.08747 11 7 11C6.91254 11 6.82595 10.9826 6.74526 10.9488C6.66458 10.9151 6.59141 10.8656 6.53 10.8033L4.19667 8.47C4.07202 8.34535 4.00199 8.17628 4.00199 8C4.00199 7.82371 4.07202 7.65465 4.19667 7.53C4.32132 7.40535 4.49039 7.33532 4.66667 7.33532C4.84295 7.33532 5.01202 7.40535 5.13667 7.53L7 9.39L11.53 4.86333C11.6547 4.73868 11.8237 4.66865 12 4.66865C12.1763 4.66865 12.3453 4.73868 12.47 4.86333C12.5947 4.98798 12.6647 5.15705 12.6647 5.33333C12.6647 5.50962 12.5947 5.67868 12.47 5.80333Z"
                              fill="#121C27"
                            />
                            <path
                              d="M12.3273 5.98823L7.5926 10.6828C7.53446 10.7413 7.46517 10.7878 7.38876 10.8194C7.31236 10.8511 7.23036 10.8675 7.14754 10.8675C7.06472 10.8675 6.98272 10.8511 6.90632 10.8194C6.82991 10.7878 6.76062 10.7413 6.70248 10.6828L4.49295 8.49202C4.37491 8.37498 4.30859 8.21624 4.30859 8.05072C4.30859 7.88521 4.37491 7.72647 4.49295 7.60943C4.61098 7.49239 4.77108 7.42664 4.93801 7.42664C5.10494 7.42664 5.26503 7.49239 5.38307 7.60943L7.14754 9.35583L11.4372 5.10564C11.5552 4.9886 11.7153 4.92285 11.8823 4.92285C12.0492 4.92285 12.2093 4.9886 12.3273 5.10564C12.4454 5.22268 12.5117 5.38142 12.5117 5.54693C12.5117 5.71245 12.4454 5.87119 12.3273 5.98823Z"
                              fill="white"
                            />
                          </svg>
                          PSACWA Community Partnerships
                        </li>
                        <li>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9972 5.87913 15.1534 3.84594 13.6537 2.34626C12.1541 0.846583 10.1209 0.00282218 8 0ZM12.47 5.80333L7.47 10.8033C7.4086 10.8656 7.33543 10.9151 7.25474 10.9488C7.17406 10.9826 7.08747 11 7 11C6.91254 11 6.82595 10.9826 6.74526 10.9488C6.66458 10.9151 6.59141 10.8656 6.53 10.8033L4.19667 8.47C4.07202 8.34535 4.00199 8.17628 4.00199 8C4.00199 7.82371 4.07202 7.65465 4.19667 7.53C4.32132 7.40535 4.49039 7.33532 4.66667 7.33532C4.84295 7.33532 5.01202 7.40535 5.13667 7.53L7 9.39L11.53 4.86333C11.6547 4.73868 11.8237 4.66865 12 4.66865C12.1763 4.66865 12.3453 4.73868 12.47 4.86333C12.5947 4.98798 12.6647 5.15705 12.6647 5.33333C12.6647 5.50962 12.5947 5.67868 12.47 5.80333Z"
                              fill="#121C27"
                            />
                            <path
                              d="M12.3273 5.98823L7.5926 10.6828C7.53446 10.7413 7.46517 10.7878 7.38876 10.8194C7.31236 10.8511 7.23036 10.8675 7.14754 10.8675C7.06472 10.8675 6.98272 10.8511 6.90632 10.8194C6.82991 10.7878 6.76062 10.7413 6.70248 10.6828L4.49295 8.49202C4.37491 8.37498 4.30859 8.21624 4.30859 8.05072C4.30859 7.88521 4.37491 7.72647 4.49295 7.60943C4.61098 7.49239 4.77108 7.42664 4.93801 7.42664C5.10494 7.42664 5.26503 7.49239 5.38307 7.60943L7.14754 9.35583L11.4372 5.10564C11.5552 4.9886 11.7153 4.92285 11.8823 4.92285C12.0492 4.92285 12.2093 4.9886 12.3273 5.10564C12.4454 5.22268 12.5117 5.38142 12.5117 5.54693C12.5117 5.71245 12.4454 5.87119 12.3273 5.98823Z"
                              fill="white"
                            />
                          </svg>
                          Measurable Learning Outcomes
                        </li>
                      </ul>
                    </div>
                    <a href="/about" className="btn-one" data-splitting="" data-text="About Us">
                      About Us
                    </a>
                  </div>
                </div>
                <div
                  className={`tab-pane fade${tab === 3 ? ' show active' : ''}`}
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <p>
                    Nalanda Learning integrates curriculum design, skill certification,
                    technology-enabled platforms, and institutional partnerships to deliver
                    scalable, outcome-focused education solutions across India.
                  </p>
                  <div className="work-ten__wrp">
                    <div className="work-ten__item text-start">
                      <div className="content">
                        <h4 className="title">01. Partnership & Programme Design</h4>
                        <p>
                          We collaborate with MEPSC and PSACWA to develop nationally recognised
                          curriculum frameworks, ensuring alignment with NEP 2020 and NSQF standards
                          for maximum credibility and career portability.
                        </p>
                      </div>
                    </div>
                    <div className="work-ten__item text-start">
                      <div className="content">
                        <h4 className="title">02. Technology-Enhanced Delivery</h4>
                        <p>
                          Teachers access training through our mobile-first LMS, featuring
                          interactive content, progress tracking, and bilingual support—enabling
                          flexible learning across urban and rural contexts.
                        </p>
                      </div>
                    </div>
                    <div className="work-ten__item text-start">
                      <div className="content">
                        <h4 className="title">03. Certification & Career Support</h4>
                        <p>
                          Upon programme completion, participants receive government-recognised
                          certificates and gain access to our placement network, connecting them
                          with schools, institutions, and career advancement opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/strategic-partners"
                    className="btn-one mt-50"
                    data-splitting=""
                    data-text="Learn More"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 order-1 order-xl-2">
            <div className="choose-one__image gsap__parallax">
              <img src="/images/choose/choose-one-image.jpg" alt="image" />
              <div className="choose-one__rectangle">
                <div className="item wow" />
                <div className="item-dark wow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Choose area end here */}

      {/* Eco-system area start here */}
      <section className="work-eleven-area pt-130 pb-130">
        <div className="container">
          <div className="section-header text-centre mb-50">
            <h6>HOW IT WORKS</h6>
            <h2 className="wow splt-txt" data-splitting="">
              How We Power Your <br />
              Education Journey
            </h2>
          </div>
          <div className="work-eleven__wrp">
            <div className="work-eleven__line">
              <img src="/images/shape/work-eleven-line.png" alt="shape" />
            </div>
            <div className="work-eleven__item have-margin">
              <div className="image">
                <img src="/images/work/work-ten-image1.png" alt="image" />
                <span className="number">1</span>
              </div>
              <div className="content">
                <h4 className="title">Partnership & Outreach</h4>
                <p>
                  We collaborate with MEPSC, PSACWA, schools, and state governments to identify
                  training needs and enrol educators into nationally recognised ECCE programmes
                  through targeted campaigns.
                </p>
              </div>
            </div>
            <div className="work-eleven__item">
              <div className="image">
                <img src="/images/work/work-ten-image2.png" alt="image" />
                <span className="number">2</span>
              </div>
              <div className="content">
                <h4 className="title">Training & Delivery</h4>
                <p>
                  Educators access comprehensive training through our technology-enhanced platform,
                  featuring NEP 2020-aligned curriculum, bilingual resources, and flexible delivery
                  formats to accommodate diverse learning contexts.
                </p>
              </div>
            </div>
            <div className="work-eleven__item have-margin">
              <div className="image">
                <img src="/images/work/work-ten-image3.png" alt="image" />
                <span className="number">3</span>
              </div>
              <div className="content">
                <h4 className="title">Certification & Impact</h4>
                <p>
                  Upon completion, participants receive government-recognised MEPSC certificates and
                  join our verified educator network, contributing to improved learning outcomes in
                  their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Eco-system area end here */}

      {/* Video area start here */}
      <div className="video-area">
        <div
          className="video__wrp"
          data-speed="0.3"
          data-parallax="scroll"
          data-image-src="/images/bg/video-bg.jpg"
        >
          <div className="video__btn">
            <div className="btn-video video-pulse">
              <a className="video-popup" href="/images/video/video.mp4">
                <i className="fa-solid fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Video area end here */}

      {/* Community area start here */}
      <section className="about-area">
        <div className="about__wrp">
          <div className="row g-0">
            <div className="col-lg-4">
              <div className="about__item about__content">
                <h4 className="colour-light wow splt-txt" data-splitting="">
                  Empowering Educators, Building Community.
                </h4>
                <ul>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                        fill="white"
                      />
                    </svg>
                    Access peer-to-peer learning & mentorship
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                        fill="white"
                      />
                    </svg>
                    Collaborate in forums & topic groups
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                        fill="white"
                      />
                    </svg>
                    Share success stories & classroom innovations
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.5C7.66563 7.39062 7.39062 7.66563 0.5 8C7.39062 8.33437 7.66563 8.60938 8 15.5C8.33437 8.60938 8.60938 8.33437 15.5 8C8.60938 7.66563 8.33437 7.39062 8 0.5Z"
                        fill="white"
                      />
                    </svg>
                    Explore curated lesson plans and tools
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn-two-light"
                  data-splitting=""
                  data-text="Join the Community"
                >
                  Join the Community
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about__item about__testimonial">
                <div>
                  <div className="icon mb-50">
                    <svg
                      width={24}
                      height={22}
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_99_7624)">
                        <path
                          d="M13.5302 16.2398C15.5748 11.7362 19.8683 12.1278 21.9164 14.5977C23.9644 17.0677 21.4017 20.254 19.1527 20.6456C16.9037 21.0373 13.3258 19.5686 13.332 14.6571C13.3404 8.11369 20.4386 1.84444 21.2186 1.29395"
                          stroke="white"
                          strokeWidth={3}
                          strokeLinecap="round"
                        />
                        <path
                          d="M1.53027 16.2398C3.57479 11.7362 7.8683 12.1278 9.91637 14.5977C11.9644 17.0677 9.4017 20.254 7.1527 20.6456C4.90373 21.0373 1.32581 19.5686 1.33204 14.6571C1.34034 8.11369 8.43857 1.84444 9.21857 1.29395"
                          stroke="white"
                          strokeWidth={3}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={24} height={22} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>
                    Through Nalanda's community platform, I connected with educators across India
                    and shared practical classroom ideas that truly made an impact. It feels like a
                    family that grows together.
                  </p>
                </div>
                <h4 className="title">
                  Meenakshi Sharma, <span>Primary Educator, Rajasthan</span>
                </h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about__item about__funfact">
                <h4 className="colour-light wow splt-txt mb-40" data-splitting="">
                  Connected Learning. Shared Growth.
                </h4>
                <div>
                  <ul>
                    <li className="icon">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 26.25C6.87138 26.25 6.74188 26.2211 6.62025 26.1634C6.31838 26.0173 6.125 25.7119 6.125 25.375V21H3.5C2.05275 21 0.875 19.8223 0.875 18.375V4.375C0.875 2.92775 2.05275 1.75 3.5 1.75H24.5C25.9473 1.75 27.125 2.92775 27.125 4.375V18.375C27.125 19.8223 25.9473 21 24.5 21H13.8696L7.54688 26.0584C7.3885 26.1852 7.19513 26.25 7 26.25ZM3.5 3.5C3.017 3.5 2.625 3.89287 2.625 4.375V18.375C2.625 18.8571 3.017 19.25 3.5 19.25H7C7.48387 19.25 7.875 19.6411 7.875 20.125V23.555L13.0156 19.4416C13.1714 19.3174 13.363 19.25 13.5625 19.25H24.5C24.983 19.25 25.375 18.8571 25.375 18.375V4.375C25.375 3.89287 24.983 3.5 24.5 3.5H3.5Z"
                          fill="white"
                        />
                        <path
                          d="M21 10.5H7C6.51613 10.5 6.125 10.108 6.125 9.625C6.125 9.142 6.51613 8.75 7 8.75H21C21.4839 8.75 21.875 9.142 21.875 9.625C21.875 10.108 21.4839 10.5 21 10.5Z"
                          fill="white"
                        />
                        <path
                          d="M14 14H7C6.51613 14 6.125 13.608 6.125 13.125C6.125 12.642 6.51613 12.25 7 12.25H14C14.4839 12.25 14.875 12.642 14.875 13.125C14.875 13.608 14.4839 14 14 14Z"
                          fill="white"
                        />
                      </svg>
                    </li>
                    <li>
                      <h3>
                        <span className="count">10</span>M<sup>+</sup>
                      </h3>
                    </li>
                  </ul>
                  <p className="text">teachers to be enrolled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__rectangle">
          <div className="item wow" />
          <div className="item-dark wow" />
        </div>
      </section>
      {/* community area end here */}

      {/* Blog area start here */}
      {/* <section className="blog-area pt-130 pb-130">
        <div className="container">
          <div className="section-header text-centre mb-50">
            <h2 className="wow splt-txt" data-splitting="">
              Check Latest Blog Post <br /> from Blog List
            </h2>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-4 wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="blog__item">
                <div className="blog__image">
                  <img src="images/blog/blog-image1.jpg" alt="image" />
                  <img src="images/blog/blog-image1.jpg" alt="image" />
                </div>
                <div className="blog__content">
                  <ul>
                    <li>Branding</li>
                    <li className="date">May 15, 2025</li>
                  </ul>
                  <h4>
                    <a href="news-details.html">
                      Creating innovative strategies for exceptional future outcomes.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog__item">
                <div className="blog__image">
                  <img src="images/blog/blog-image2.jpg" alt="image" />
                  <img src="images/blog/blog-image2.jpg" alt="image" />
                </div>
                <div className="blog__content">
                  <ul>
                    <li>Design Trends</li>
                    <li className="date">May 25, 2025</li>
                  </ul>
                  <h4>
                    <a href="news-details.html">
                      Stratify Agency transforms the way we work through the power of AI-driven
                      innovation.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="blog__item">
                <div className="blog__image">
                  <img src="images/blog/blog-image3.jpg" alt="image" />
                  <img src="images/blog/blog-image3.jpg" alt="image" />
                </div>
                <div className="blog__content">
                  <ul>
                    <li>Marketing</li>
                    <li className="date">May 30, 2025</li>
                  </ul>
                  <h4>
                    <a href="news-details.html">
                      Common UX pinpoints in Dashboard-related projects.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Blog area end here */}

      {/* Faq area start here */}
      <section className="faq-area bg-sub">
        <div className="row g-0 align-items-centre">
          <div className="col-xl-6">
            <div className="faq__item">
              <div className="section-header mb-30">
                <h6>To know more about us</h6>
                <h2 className="wow splt-txt" data-splitting="">
                  Frequently Asked Questions
                </h2>
              </div>
              <div
                className="faq__accordion wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is Nalanda Learning?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Nalanda Learning is an innovative educational platform offering a range of
                          training programmes designed to enhance the skills of educators,
                          professionals, and students. We provide personalised, tech-driven learning
                          experiences that empower individuals at all stages of their educational
                          journey, aligned with modern educational standards like NEP 2020.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What types of programmes does Nalanda Learning offer?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Nalanda Learning offers a variety of programmes that cater to different
                          learning needs:
                        </p>
                        <ul>
                          <li>
                            <strong>Teacher Training Programmes:</strong> Focused on enhancing
                            pedagogical skills.
                          </li>
                          <li>
                            <strong>Professional Development Courses:</strong> For skill-building in
                            various industries.
                          </li>
                          <li>
                            <strong>Early Childhood Education (ECE) Courses:</strong> Designed for
                            the development of young learners.
                          </li>
                          <li>
                            <strong>Technology-Enabled Learning:</strong> Leveraging digital tools
                            and platforms for a modern learning experience.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Are the programmes accredited or certified?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, Nalanda Learning’s programmes are accredited and recognised by
                          leading educational authorities and institutions. Many of our programmes
                          are aligned with NEP 2020 and adhere to recognised standards to ensure
                          high-quality learning and real-world applicability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How can I enrol in a programme with Nalanda Learning?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Enrolling in a programme with Nalanda Learning is easy! Simply visit our
                          website, browse through our programme offerings, and choose the course
                          that suits your learning goals. You can enrol directly online by filling
                          out the registration form and selecting your preferred payment method.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="faq__image gsap__parallax imageRightToLeft wow">
              <img src="/images/faq/faq-image.jpg" alt="image" />
            </div>
          </div>
        </div>
      </section>
      {/* Faq area end here */}
    </>
  );
}
