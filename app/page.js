'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const consultLeftRef = useRef(null);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Swiper) {
      new window.Swiper('.banner__slider', {
        loop: true,
        parallax: true,
        autoplay: { delay: 4000 },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
    // WOW.js or AOS re-init for animation on scroll
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
              <div
                className="slide-bg"
                data-background="images/banner/banner-image1.jpg"
              />
              <div className="banner-six__content">
                <h1
                  className="title"
                  data-animation="fadeInUp"
                  data-delay=".3s"
                >
                  Shaping India’s Future Through Early Learning
                </h1>
                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                  Government-certified training programs designed to nurture
                  young minds, aligned with NEP 2020. Trusted by MEPSC, PSACWA,
                  and over 2 million schools, we provide transformative learning
                  experiences for the next generation.
                </p>
                <a
                  href="#"
                  className="arry-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
                >
                  <i className="fa-thin fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="slide-bg"
                data-background="images/banner/banner-image2.jpg"
              />
              <div className="banner-six__content">
                <h1
                  className="title"
                  data-animation="fadeInUp"
                  data-delay=".3s"
                >
                  We Are Creating a Gateway to Global Classrooms
                </h1>
                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                  We help teachers secure placements in the UK, Europe, and
                  beyond, offering visa support, training, and relocation
                  assistance for a smooth transition to global classrooms.
                </p>

                <a
                  href="#"
                  className="arry-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
                >
                  <i className="fa-thin fa-arrow-up-right" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="slide-bg"
                data-background="images/banner/banner-image3.jpg"
              />
              <div className="banner-six__content">
                <h1
                  className="title"
                  data-animation="fadeInUp"
                  data-delay=".3s"
                >
                  Transforming Learning with Smart Technology
                </h1>
                <p className="text" data-animation="fadeInUp" data-delay=".5s">
                  AI-driven LMS, real-time analytics, and automated job matching
                  — powering your learning ecosystem with seamless integration,
                  scalable solutions, and next-gen tools for educational
                  institutions and businesses.
                </p>
                <a
                  href="#"
                  className="arry-btn"
                  data-animation="fadeInUp"
                  data-delay="1s"
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
                <img
                  src="images/professional/professional-image.jpg"
                  alt="image"
                />
                <div className="content">
                  <ul>
                    <li className="icon">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.64714 6.41667C6.64714 4.01592 8.60055 2.0625 11.0013 2.0625C13.4021 2.0625 15.3555 4.01592 15.3555 6.41667C15.3555 8.81742 13.4021 10.7708 11.0013 10.7708C8.60055 10.7708 6.64714 8.81742 6.64714 6.41667ZM13.7513 12.1458H8.2513C5.34547 12.1458 2.98047 14.5108 2.98047 17.4167C2.98047 18.8073 4.11072 19.9375 5.5013 19.9375H16.5013C17.8919 19.9375 19.0221 18.8073 19.0221 17.4167C19.0221 14.5108 16.6571 12.1458 13.7513 12.1458Z"
                          fill="#121C27"
                        />
                      </svg>
                    </li>
                    <li className="info">
                      <h3>
                        <span className="count">30</span>k+
                      </h3>
                      <p>Teachers Trained</p>
                    </li>
                  </ul>
                  <ul className="last-item">
                    <li className="icon">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.9799 1.5C7.57997 1.5 4.00781 5.07216 4.00781 9.47208C4.00781 13.872 7.57997 17.4442 11.9799 17.4442C16.3798 17.4442 19.952 13.872 19.952 9.47208C19.952 5.07216 16.3798 1.5 11.9799 1.5ZM11.9799 6.7692C11.7574 6.51816 11.5196 6.33192 11.2808 6.19776C10.3431 5.67096 9.33029 5.89152 8.69669 6.42264C7.76453 7.20408 7.59485 8.76168 8.52269 10.3243C9.07061 11.298 10.4391 12.2988 11.6005 12.9478C11.8364 13.0795 12.1234 13.0795 12.3593 12.9478C13.5248 12.2964 14.899 11.2908 15.4431 10.3138C16.3649 8.76168 16.1953 7.20408 15.2631 6.42264C14.6295 5.89152 13.6167 5.67096 12.679 6.19776C12.4402 6.33192 12.2025 6.51816 11.9799 6.76944V6.7692Z"
                          fill="#121C27"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.0331 16.5996C15.608 17.6208 13.8624 18.222 11.9775 18.222C10.0925 18.222 8.347 17.6208 6.92188 16.5996V21.7219C6.92188 22.0145 7.08603 22.2823 7.34692 22.4151C7.60755 22.5478 7.92052 22.523 8.15716 22.351L11.9775 19.5727L15.7978 22.351C16.0344 22.523 16.3474 22.5478 16.6083 22.4151C16.8689 22.2823 17.0331 22.0145 17.0331 21.7219V16.5996Z"
                          fill="#121C27"
                        />
                      </svg>
                    </li>
                    <li className="info">
                      <h3>
                        <span className="count">2</span>L+
                      </h3>
                      <p>Schools Reached via PSACWA</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="professional__content">
                <div className="section-header">
                  <h2>
                    A national mission to empower teachers and transform
                    classrooms.
                  </h2>
                  <p>
                    Nalanda Learning is India's most integrated education impact
                    platform — connecting early childhood teacher training,
                    global teaching careers, and AI-powered learning
                    infrastructure to deliver real results. With backing from
                    MEPSC, PSACWA, and nvoco, we're shaping the future of
                    learning.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <i className="fa-solid fa-check" /> MEPSC-certified ECCE
                      programs
                    </li>
                    <li>
                      <i className="fa-solid fa-check" /> Over 30,000 teachers
                      trained
                    </li>
                    <li>
                      <i className="fa-solid fa-check" /> Trusted by 2L+ schools
                      across India
                    </li>
                  </ul>
                  <a
                    href="/about"
                    className="btn-one mt-50"
                    data-text="Discover More"
                  >
                    Discover More
                  </a>
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
                        {/* Graduation cap base */}
                        <path
                          d="M32 10L4 22L32 34L60 22L32 10Z"
                          stroke="#121C27"
                          strokeWidth="2"
                          fill="#fff"
                        />
                        {/* Cap band */}
                        <path
                          d="M12 26V36C12 40 24 46 32 46C40 46 52 40 52 36V26"
                          stroke="#121C27"
                          strokeWidth="2"
                          fill="#fff"
                        />
                        {/* Tassel */}
                        <line
                          x1="32"
                          y1="34"
                          x2="32"
                          y2="50"
                          stroke="#121C27"
                          strokeWidth="2"
                        />
                        <circle cx="32" cy="50" r="2" fill="#121C27" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">Educator Skilling at Scale</h4>
                    <p className="text">
                      We train teachers across ECCE, K–12, and vocational
                      streams with MEPSC-certified programs, bridging skill gaps
                      at the grassroots level.
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
                      {/* Globe outline */}
                      <ellipse
                        cx="45.5"
                        cy="44.5"
                        rx="40"
                        ry="40"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="#fff"
                      />
                      {/* Longitude lines */}
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
                      {/* Latitude lines */}
                      <path d="M5.5 44.5h80" stroke="#121C27" strokeWidth="1" />
                      <path d="M45.5 4.5v80" stroke="#121C27" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">Global Mobility for Educators</h4>
                    <p className="text">
                      Our nvoco program connects qualified Indian teachers to
                      international teaching opportunities in the UK, UAE, and
                      Asia.
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
                      {/* Community icon: three people */}
                      <circle
                        cx="24"
                        cy="16"
                        r="6"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="12"
                        cy="28"
                        r="5"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="36"
                        cy="28"
                        r="5"
                        stroke="#121C27"
                        strokeWidth="2"
                        fill="none"
                      />
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
                      our Impact{' '}
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
                  <span className="title">
                    MEPSC-Certified Teacher Training Programs
                  </span>{' '}
                  <span className="number">01</span>
                </h3>
              </div>
              <div className="content">
                <div className="wrp">
                  <div className="content-wrp">
                    <p className="text">
                      MEPSC-certified Early Childhood Care and Education (ECCE)
                      programs for Anganwadi, pre-primary, and K–12 educators —
                      fully aligned with NEP 2020 and NSQF standards.
                    </p>
                    <a className="arry-btn" href="#">
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
                  <span className="title"> Enrich - Your Learning Journey</span>{' '}
                  <span className="number">02</span>
                </h3>
              </div>
              <div className="content">
                <div className="wrp">
                  <div className="content-wrp">
                    <p className="text">
                      Enrich offers transformative programs designed to enhance
                      professional skills, deepen knowledge, and promote
                      personal growth. Through immersive learning experiences,
                      we empower individuals to unlock their full potential and
                      excel in their careers and life goals.
                    </p>
                    <a
                      className="arry-btn"
                      href="/services/strategic-planning-development"
                    >
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
            <div
              className="hzAccordion__item wow fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="head">
                <h3 className="head-title">
                  <span className="title">
                    Little Laureates - Nurturing Young Minds
                  </span>{' '}
                  <span className="number">03</span>
                </h3>
              </div>
              <div className="content">
                <div className="wrp">
                  <div className="content-wrp">
                    <p className="text">
                      Little Laureates is dedicated to laying the foundation for
                      a lifelong love of learning. Our programs are designed to
                      foster creativity, curiosity, and critical thinking in
                      young minds, helping children develop essential skills in
                      a fun and engaging way. Tailored to early childhood
                      development, we provide an enriching environment where
                      children can thrive.
                    </p>
                    <a
                      className="arry-btn"
                      href="/services/operational-efficiency-optimization"
                    >
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
                      src="/images/service/service-one-image3.jpg"
                      alt="image"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hzAccordion__item last-child wow fadeInLeft"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="head">
                <h3 className="head-title">
                  <span className="title">B2B SaaS Platform</span>{' '}
                  <span className="number">04</span>
                </h3>
              </div>
              <div className="content">
                <div className="wrp">
                  <div className="content-wrp">
                    <p className="text">
                      Our B2B SaaS platform empowers businesses to streamline
                      operations, enhance productivity, and drive growth through
                      innovative software solutions. Designed for scalability,
                      our platform offers a range of tools for automation, data
                      analysis, customer relationship management, and more,
                      enabling you to optimize processes and scale seamlessly.
                    </p>
                    <a
                      className="arry-btn"
                      href="/services/tailored-consulting-solutions-advisory"
                    >
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
          </div>
        </div>
      </section>
      {/* Horizontal accordion area end here */}

      {/* Choose area start here */}
      <section className="choose-one-area bg-sub pt-130">
        <div className="row g-0">
          <div className="col-xl-7 order-2 order-xl-1">
            <div className="choose-one__wrp">
              <div className="section-header mb-50">
                <h2 className="wow splt-txt" data-splitting="">
                  Integrated Education Solutions <br /> Real-World Impact
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
                      Why Teacher Training Matters
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link${tab === 2 ? ' active' : ''}`}
                      type="button"
                      onClick={() => setTab(2)}
                    >
                      Why Choose Us
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
                      With India's push toward universal preschool under NEP
                      2020, training educators at scale has become a national
                      mission. Yet access to certified, high-quality training
                      remains limited — that's where Nalanda steps in.
                    </p>
                    <div className="item">
                      <div className="icon">
                        <svg
                          width={52}
                          height={52}
                          viewBox="0 0 52 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.6713 12.399H9.86984C9.43759 12.399 9.08984 12.0513 9.08984 11.619V7.82301C9.08984 6.62376 10.0648 5.64551 11.2673 5.64551H13.5651C13.9973 5.64551 14.3451 5.99326 14.3451 6.42551C14.3451 6.85776 13.9973 7.20551 13.5651 7.20551H11.2673C10.9261 7.20551 10.6498 7.48176 10.6498 7.82301V10.839H24.8913V7.82301C24.8913 7.48176 24.6151 7.20551 24.2738 7.20551H21.9761C21.5438 7.20551 21.1961 6.85776 21.1961 6.42551C21.1961 5.99326 21.5438 5.64551 21.9761 5.64551H24.2738C25.4731 5.64551 26.4513 6.62051 26.4513 7.82301V11.619C26.4513 12.048 26.1036 12.399 25.6713 12.399Z"
                            fill="#121C27"
                          />
                          <path
                            d="M33.7211 48.7309H1.81906C1.38681 48.7309 1.03906 48.3832 1.03906 47.9509V8.97043C1.03906 8.53818 1.38681 8.19043 1.81906 8.19043H9.86931C10.3016 8.19043 10.6493 8.53818 10.6493 8.97043C10.6493 9.40268 10.3016 9.75043 9.86931 9.75043H2.59906V47.1677H32.9411V42.1724C32.9411 41.7402 33.2888 41.3924 33.7211 41.3924C34.1533 41.3924 34.5011 41.7402 34.5011 42.1724V47.9477C34.5011 48.3799 34.1501 48.7309 33.7211 48.7309Z"
                            fill="#121C27"
                          />
                          <path
                            d="M33.7209 16.1139C33.2886 16.1139 32.9409 15.7662 32.9409 15.3339V9.75043H25.6706C25.2384 9.75043 24.8906 9.40268 24.8906 8.97043C24.8906 8.53818 25.2384 8.19043 25.6706 8.19043H33.7209C34.1531 8.19043 34.5009 8.53818 34.5009 8.97043V15.3339C34.5009 15.7662 34.1499 16.1139 33.7209 16.1139Z"
                            fill="#121C27"
                          />
                          <path
                            d="M21.9787 8.87253H13.5612C13.129 8.87253 12.7812 8.52478 12.7812 8.09253V4.69953C12.7812 3.90978 13.4215 3.26953 14.2112 3.26953H21.3287C22.1185 3.26953 22.7587 3.90978 22.7587 4.69953V8.09253C22.7587 8.52153 22.4077 8.87253 21.9787 8.87253ZM14.3412 7.31253H21.1987V4.82953H14.3412V7.31253Z"
                            fill="#121C27"
                          />
                          <path
                            d="M23.2126 19.9194H13.6706C13.2384 19.9194 12.8906 19.5716 12.8906 19.1394C12.8906 18.7071 13.2384 18.3594 13.6706 18.3594H23.2094C23.6416 18.3594 23.9894 18.7071 23.9894 19.1394C23.9894 19.5716 23.6416 19.9194 23.2126 19.9194Z"
                            fill="#121C27"
                          />
                          <path
                            d="M7.32525 20.6245C7.127 20.6245 6.9255 20.5497 6.77275 20.397L5.55725 19.1782C5.25175 18.8727 5.25175 18.3787 5.55725 18.0765C5.86275 17.771 6.35675 17.771 6.659 18.0765L7.32525 18.7427L9.59375 16.4742C9.89925 16.1687 10.3933 16.1687 10.6955 16.4742C11.001 16.7797 11.001 17.2737 10.6955 17.576L7.8745 20.397C7.725 20.5465 7.52675 20.6245 7.32525 20.6245Z"
                            fill="#121C27"
                          />
                          <path
                            d="M19.3256 27.4819H13.6706C13.2384 27.4819 12.8906 27.1341 12.8906 26.7019C12.8906 26.2696 13.2384 25.9219 13.6706 25.9219H19.3256C19.7579 25.9219 20.1056 26.2696 20.1056 26.7019C20.1056 27.1341 19.7579 27.4819 19.3256 27.4819Z"
                            fill="#121C27"
                          />
                          <path
                            d="M7.32525 28.187C7.11725 28.187 6.919 28.1057 6.77275 27.9595L5.55725 26.7407C5.25175 26.4352 5.25175 25.9412 5.55725 25.639C5.86275 25.3367 6.35675 25.3335 6.659 25.639L7.32525 26.3052L9.59375 24.0367C9.89925 23.7312 10.3933 23.7312 10.6955 24.0367C11.001 24.3422 11.001 24.8362 10.6955 25.1385L7.8745 27.9595C7.7315 28.1057 7.53325 28.187 7.32525 28.187Z"
                            fill="#121C27"
                          />
                          <path
                            d="M20.3461 35.0483H13.6706C13.2384 35.0483 12.8906 34.7005 12.8906 34.2683C12.8906 33.836 13.2384 33.4883 13.6706 33.4883H20.3461C20.7784 33.4883 21.1261 33.836 21.1261 34.2683C21.1261 34.7005 20.7784 35.0483 20.3461 35.0483Z"
                            fill="#121C27"
                          />
                          <path
                            d="M7.32459 35.7534C7.12634 35.7534 6.92484 35.6786 6.77209 35.5259L5.55334 34.3071C5.24784 34.0016 5.24784 33.5076 5.55334 33.2054C5.85884 32.9031 6.35284 32.8999 6.65509 33.2054L7.32134 33.8716L9.58984 31.6031C9.89534 31.2976 10.3893 31.2976 10.6916 31.6031C10.9938 31.9086 10.9971 32.4026 10.6916 32.7049L7.87059 35.5259C7.72434 35.6754 7.52609 35.7534 7.32459 35.7534Z"
                            fill="#121C27"
                          />
                          <path
                            d="M22.6471 42.6108H13.6706C13.2384 42.6108 12.8906 42.263 12.8906 41.8308C12.8906 41.3985 13.2384 41.0508 13.6706 41.0508H22.6471C23.0794 41.0508 23.4271 41.3985 23.4271 41.8308C23.4271 42.263 23.0794 42.6108 22.6471 42.6108Z"
                            fill="#121C27"
                          />
                          <path
                            d="M7.32459 43.3159C7.11659 43.3159 6.91834 43.2347 6.77209 43.0884L5.55334 41.8697C5.24784 41.5642 5.24784 41.0701 5.55334 40.7679C5.85884 40.4624 6.35284 40.4624 6.65509 40.7679L7.32134 41.4341L9.58984 39.1656C9.89534 38.8601 10.3893 38.8601 10.6916 39.1656C10.9938 39.4711 10.9971 39.9651 10.6916 40.2674L7.87059 43.0884C7.73084 43.2347 7.53259 43.3159 7.32459 43.3159Z"
                            fill="#121C27"
                          />
                          <path
                            d="M32.6354 42.9983C30.7114 42.9983 28.8459 42.6213 27.0909 41.877C25.3944 41.1588 23.8701 40.1318 22.5636 38.8253C21.2571 37.5188 20.2301 35.9945 19.5119 34.298C18.7676 32.543 18.3906 30.6775 18.3906 28.7535C18.3906 26.8295 18.7676 24.964 19.5119 23.209C20.2301 21.5125 21.2571 19.9883 22.5636 18.6818C23.8701 17.3753 25.3944 16.3483 27.0909 15.63C28.8459 14.8858 30.7114 14.5088 32.6354 14.5088C34.5594 14.5088 36.4249 14.8858 38.1799 15.63C39.8764 16.3483 41.4006 17.3753 42.7071 18.6818C44.0136 19.9883 45.0406 21.5125 45.7589 23.209C46.5031 24.964 46.8801 26.8295 46.8801 28.7535C46.8801 30.6775 46.5031 32.543 45.7589 34.298C45.0406 35.9945 44.0136 37.5188 42.7071 38.8253C41.4006 40.1318 39.8764 41.1588 38.1799 41.877C36.4216 42.6213 34.5561 42.9983 32.6354 42.9983ZM32.6354 16.072C25.6414 16.072 19.9506 21.7628 19.9506 28.7568C19.9506 35.7508 25.6414 41.4383 32.6354 41.4383C39.6294 41.4383 45.3201 35.7475 45.3201 28.7535C45.3201 21.7628 39.6294 16.072 32.6354 16.072Z"
                            fill="#121C27"
                          />
                          <path
                            d="M32.6348 38.4737C30.0381 38.4737 27.5973 37.463 25.7611 35.6267C23.9248 33.7905 22.9141 31.3497 22.9141 28.753C22.9141 26.1562 23.9248 23.7155 25.7611 21.8792C27.5973 20.043 30.0381 19.0322 32.6348 19.0322C35.2316 19.0322 37.6723 20.043 39.5086 21.8792C41.3448 23.7155 42.3556 26.1562 42.3556 28.753C42.3556 31.3497 41.3448 33.7905 39.5086 35.6267C37.6723 37.463 35.2316 38.4737 32.6348 38.4737ZM32.6348 20.5955C30.4541 20.5955 28.4066 21.4437 26.8661 22.9842C25.3256 24.5247 24.4773 26.5755 24.4773 28.753C24.4773 30.9337 25.3256 32.9812 26.8661 34.5217C28.4066 36.0622 30.4573 36.9105 32.6348 36.9105C34.8156 36.9105 36.8631 36.0622 38.4036 34.5217C39.9441 32.9812 40.7923 30.9305 40.7923 28.753C40.7923 26.5722 39.9441 24.5247 38.4036 22.9842C36.8631 21.4437 34.8156 20.5955 32.6348 20.5955Z"
                            fill="#121C27"
                          />
                          <path
                            d="M32.6349 33.9495C31.9394 33.9495 31.2699 33.8195 30.6459 33.5595C30.0187 33.2995 29.4532 32.9192 28.9624 32.4285C28.4717 31.9377 28.0914 31.3722 27.8314 30.745C27.5714 30.1177 27.4414 29.4482 27.4414 28.756C27.4414 28.0637 27.5714 27.391 27.8314 26.767C28.0914 26.1397 28.4717 25.5742 28.9624 25.0835C29.4532 24.5927 30.0187 24.2125 30.6459 23.9525C31.2732 23.6925 31.9427 23.5625 32.6349 23.5625C33.3304 23.5625 33.9999 23.6925 34.6239 23.9525C35.2512 24.2125 35.8167 24.5927 36.3074 25.0835C36.7982 25.5742 37.1784 26.1397 37.4384 26.767C37.6984 27.3942 37.8284 28.0637 37.8284 28.756C37.8284 29.4515 37.6984 30.121 37.4384 30.745C37.1784 31.3722 36.7982 31.9377 36.3074 32.4285C35.8167 32.9192 35.2512 33.2995 34.6239 33.5595C33.9999 33.8195 33.3304 33.9495 32.6349 33.9495ZM32.6349 25.1193C32.1474 25.1193 31.6794 25.2102 31.2407 25.3922C30.8052 25.5742 30.4087 25.8408 30.0642 26.1853C29.7197 26.5298 29.4532 26.9263 29.2712 27.3618C29.0892 27.7973 28.9982 28.2652 28.9982 28.756C28.9982 29.2435 29.0892 29.7115 29.2712 30.1502C29.4532 30.5858 29.7197 30.9823 30.0642 31.3268C30.4087 31.6713 30.8052 31.9377 31.2407 32.1197C31.6762 32.3017 32.1442 32.3927 32.6349 32.3927C33.1224 32.3927 33.5937 32.3017 34.0292 32.1197C34.4647 31.9377 34.8612 31.6713 35.2057 31.3268C35.5502 30.9823 35.8167 30.5858 35.9987 30.1502C36.1807 29.7148 36.2717 29.2467 36.2717 28.756C36.2717 28.2652 36.1807 27.8005 35.9987 27.3618C35.8167 26.9263 35.5502 26.5298 35.2057 26.1853C34.8612 25.8408 34.4647 25.5742 34.0292 25.3922C33.5904 25.2102 33.1224 25.1193 32.6349 25.1193Z"
                            fill="#121C27"
                          />
                          <path
                            d="M32.6371 29.5361C32.4388 29.5361 32.2373 29.4613 32.0846 29.3086C31.7791 29.0031 31.7791 28.5091 32.0846 28.2068L44.7693 15.5221C45.0748 15.2166 45.5688 15.2166 45.8711 15.5221C46.1766 15.8276 46.1766 16.3216 45.8711 16.6238L33.1863 29.3086C33.0368 29.4581 32.8353 29.5361 32.6371 29.5361Z"
                            fill="#121C27"
                          />
                          <path
                            d="M45.3204 16.8517C45.1156 16.8517 44.9141 16.7705 44.7679 16.6242C44.6119 16.4682 44.5274 16.2505 44.5404 16.0262L44.6834 13.6082C44.6931 13.4165 44.7744 13.2377 44.9109 13.1012L47.3549 10.6605C47.5824 10.433 47.9301 10.368 48.2259 10.5012C48.5216 10.6345 48.7036 10.9367 48.6841 11.2585L48.5931 12.799L50.1336 12.708C50.4586 12.6885 50.7576 12.8705 50.8909 13.1662C51.0241 13.462 50.9591 13.8097 50.7316 14.0372L48.2876 16.4812C48.1511 16.6177 47.9724 16.6957 47.7806 16.7087L45.3626 16.8517C45.3529 16.8517 45.3366 16.8517 45.3204 16.8517ZM46.2271 13.9982L46.1524 15.243L47.3971 15.1682L48.1804 14.385L47.8131 14.4077C47.5889 14.4207 47.3744 14.3395 47.2151 14.1802C47.0591 14.0242 46.9746 13.8065 46.9876 13.5822L47.0104 13.215L46.2271 13.9982Z"
                            fill="#121C27"
                          />
                        </svg>
                        <h4>
                          Mission <br /> Statement
                        </h4>
                      </div>
                      <p>
                        At Nalanda Learning, our mission is to empower educators
                        and learners by delivering scalable, certified, and
                        digitally-enabled education solutions. We believe that
                        every teacher we train becomes a catalyst for change —
                        from early childhood to lifelong learning, from
                        classroom to career.
                      </p>
                    </div>
                    <div className="line" />
                    <div className="item">
                      <div className="icon">
                        <svg
                          width={51}
                          height={51}
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.78906 36.125C8.62963 36.125 9.45133 35.8757 10.1502 35.4087C10.8491 34.9418 11.3939 34.278 11.7156 33.5014C12.0372 32.7248 12.1214 31.8703 11.9574 31.0459C11.7934 30.2214 11.3886 29.4642 10.7943 28.8698C10.1999 28.2754 9.44262 27.8707 8.6182 27.7067C7.79378 27.5427 6.93924 27.6268 6.16266 27.9485C5.38607 28.2702 4.72231 28.8149 4.25532 29.5138C3.78832 30.2127 3.53906 31.0344 3.53906 31.875C3.54029 33.0018 3.98846 34.0821 4.78522 34.8788C5.58198 35.6756 6.66227 36.1238 7.78906 36.125ZM7.78906 29.0417C8.34944 29.0417 8.89724 29.2078 9.36318 29.5192C9.82912 29.8305 10.1923 30.273 10.4067 30.7907C10.6212 31.3085 10.6773 31.8781 10.568 32.4278C10.4586 32.9774 10.1888 33.4822 9.79253 33.8785C9.39628 34.2747 8.89143 34.5446 8.34182 34.6539C7.79221 34.7632 7.22252 34.7071 6.70479 34.4927C6.18707 34.2782 5.74456 33.9151 5.43323 33.4491C5.1219 32.9832 4.95573 32.4354 4.95573 31.875C4.95648 31.1238 5.25523 30.4036 5.78642 29.8724C6.31761 29.3412 7.03785 29.0424 7.78906 29.0417Z"
                            fill="#121C27"
                          />
                          <path
                            d="M40.1654 7.99889C40.0322 7.86805 39.8527 7.79512 39.666 7.79597C39.4793 7.79681 39.3004 7.87137 39.1684 8.0034C39.0363 8.13544 38.9618 8.31428 38.9609 8.50101C38.9601 8.68774 39.033 8.86724 39.1639 9.00047L41.2889 11.1255C41.3761 11.2126 41.4845 11.2754 41.6034 11.3078C41.7223 11.3402 41.8476 11.341 41.967 11.3101C42.0863 11.2792 42.1955 11.2178 42.2838 11.1318C42.3721 11.0458 42.4364 10.9382 42.4704 10.8197C42.4842 10.7727 43.8379 6.14224 46.3565 4.88328C46.5241 4.79899 46.6514 4.65167 46.7105 4.47363C46.7696 4.29559 46.7557 4.10138 46.6718 3.93359C46.5879 3.76581 46.4409 3.63814 46.263 3.57861C46.0851 3.51908 45.8909 3.53254 45.7229 3.61603C43.4955 4.72972 42.1072 7.68966 41.4867 9.32005L40.1654 7.99889Z"
                            fill="#121C27"
                          />
                          <path
                            d="M41.7891 14.875C43.4793 14.8732 45.0997 14.2009 46.2948 13.0058C47.49 11.8106 48.1622 10.1902 48.1641 8.5C48.1634 7.96422 48.0967 7.43057 47.9655 6.91109C47.9199 6.72892 47.8037 6.57235 47.6426 6.47584C47.4814 6.37932 47.2886 6.35076 47.1064 6.39644C46.9242 6.44212 46.7677 6.5583 46.6711 6.71942C46.5746 6.88054 46.5461 7.0734 46.5918 7.25557C46.6942 7.66248 46.7465 8.0804 46.7474 8.5C46.7474 9.48067 46.4566 10.4393 45.9118 11.2547C45.3669 12.0701 44.5926 12.7056 43.6865 13.0809C42.7805 13.4562 41.7836 13.5544 40.8217 13.3631C39.8599 13.1717 38.9764 12.6995 38.283 12.0061C37.5896 11.3126 37.1173 10.4291 36.926 9.46732C36.7347 8.5055 36.8329 7.50854 37.2082 6.60253C37.5834 5.69651 38.219 4.92213 39.0344 4.3773C39.8498 3.83247 40.8084 3.54167 41.7891 3.54167C42.2087 3.54261 42.6266 3.59488 43.0335 3.69731C43.2157 3.74299 43.4085 3.71443 43.5696 3.61791C43.7308 3.5214 43.8469 3.36483 43.8926 3.18265C43.9383 3.00048 43.9097 2.80762 43.8132 2.6465C43.7167 2.48538 43.5601 2.36921 43.378 2.32352C42.8585 2.19238 42.3248 2.12571 41.7891 2.125C40.0983 2.125 38.4768 2.79665 37.2813 3.99219C36.0857 5.18774 35.4141 6.80924 35.4141 8.5C35.4141 10.1908 36.0857 11.8123 37.2813 13.0078C38.4768 14.2033 40.0983 14.875 41.7891 14.875Z"
                            fill="#121C27"
                          />
                          <path
                            d="M12.7483 29.7499C12.8951 29.75 13.0382 29.7043 13.1578 29.6191L33.6615 15.0681L33.3031 16.8608C33.2662 17.045 33.3041 17.2363 33.4082 17.3926C33.5124 17.5489 33.6744 17.6575 33.8586 17.6944C33.9045 17.7037 33.9514 17.7084 33.9983 17.7082C34.1619 17.7081 34.3204 17.6513 34.4469 17.5475C34.5734 17.4437 34.66 17.2993 34.6921 17.1389L35.4004 13.5972C35.4011 13.5938 35.3998 13.5905 35.4004 13.5871C35.4081 13.5266 35.408 13.4655 35.4001 13.405C35.4013 13.3736 35.4006 13.3421 35.3978 13.3107C35.3874 13.2804 35.375 13.2508 35.3607 13.2221C35.3435 13.1645 35.3191 13.1093 35.2879 13.0579L35.2835 13.048C35.2594 13.0214 35.2332 12.9967 35.2051 12.9743C35.1376 12.8848 35.04 12.8227 34.9304 12.7995C34.9028 12.7856 34.8742 12.7736 34.845 12.7637L31.3033 12.0554C31.1193 12.0191 30.9285 12.0573 30.7727 12.1615C30.6168 12.2657 30.5086 12.4274 30.4718 12.6112C30.435 12.7951 30.4726 12.986 30.5763 13.1422C30.6801 13.2983 30.8415 13.407 31.0252 13.4444L32.9571 13.8307L12.3374 28.4639C12.2148 28.551 12.1231 28.6747 12.0755 28.8173C12.0279 28.9599 12.0269 29.1139 12.0727 29.2571C12.1184 29.4003 12.2086 29.5253 12.33 29.6138C12.4515 29.7024 12.598 29.7501 12.7483 29.7499Z"
                            fill="#121C27"
                          />
                          <path
                            d="M47.457 47.4587H46.0404V17.0003C46.0404 16.9073 46.0221 16.8152 45.9866 16.7292C45.951 16.6432 45.8988 16.5651 45.833 16.4993C45.7672 16.4336 45.6891 16.3814 45.6032 16.3458C45.5172 16.3102 45.4251 16.2919 45.332 16.292H38.2487C38.1557 16.2919 38.0635 16.3102 37.9776 16.3458C37.8916 16.3814 37.8135 16.4336 37.7477 16.4993C37.6819 16.5651 37.6298 16.6432 37.5942 16.7292C37.5586 16.8152 37.5403 16.9073 37.5404 17.0003V47.4587H34.707V25.5003C34.7071 25.4073 34.6888 25.3152 34.6532 25.2292C34.6176 25.1432 34.5655 25.0651 34.4997 24.9993C34.4339 24.9336 34.3558 24.8814 34.2698 24.8458C34.1839 24.8102 34.0917 24.7919 33.9987 24.792H26.9154C26.8223 24.7919 26.7302 24.8102 26.6442 24.8458C26.5583 24.8814 26.4802 24.9336 26.4144 24.9993C26.3486 25.0651 26.2964 25.1432 26.2608 25.2292C26.2253 25.3152 26.207 25.4073 26.207 25.5003V47.4587H23.3737V34.0003C23.3738 33.9073 23.3555 33.8152 23.3199 33.7292C23.2843 33.6432 23.2321 33.5651 23.1664 33.4993C23.1006 33.4336 23.0225 33.3814 22.9365 33.3458C22.8505 33.3102 22.7584 33.2919 22.6654 33.292H15.582C15.489 33.2919 15.3969 33.3102 15.3109 33.3458C15.2249 33.3814 15.1468 33.4336 15.081 33.4993C15.0153 33.5651 14.9631 33.6432 14.9275 33.7292C14.8919 33.8152 14.8736 33.9073 14.8737 34.0003V47.4587H12.0404V38.2503C12.0404 38.1573 12.0221 38.0652 11.9866 37.9792C11.951 37.8932 11.8988 37.8151 11.833 37.7493C11.7672 37.6836 11.6891 37.6314 11.6032 37.5958C11.5172 37.5602 11.4251 37.5419 11.332 37.542H4.2487C4.15566 37.5419 4.06353 37.5602 3.97757 37.5958C3.8916 37.6314 3.8135 37.6836 3.74771 37.7493C3.68193 37.8151 3.62975 37.8932 3.59418 37.9792C3.5586 38.0652 3.54031 38.1573 3.54036 38.2503V47.4587C3.3525 47.4587 3.17234 47.5333 3.0395 47.6661C2.90666 47.799 2.83203 47.9791 2.83203 48.167C2.83203 48.3549 2.90666 48.535 3.0395 48.6679C3.17234 48.8007 3.3525 48.8753 3.54036 48.8753H47.457C47.6449 48.8753 47.8251 48.8007 47.9579 48.6679C48.0907 48.535 48.1654 48.3549 48.1654 48.167C48.1654 47.9791 48.0907 47.799 47.9579 47.6661C47.8251 47.5333 47.6449 47.4587 47.457 47.4587ZM38.957 17.7087H44.6237V47.4587H38.957V17.7087ZM27.6237 26.2087H33.2904V47.4587H27.6237V26.2087ZM16.2904 34.7087H21.957V47.4587H16.2904V34.7087ZM4.95703 38.9587H10.6237V47.4587H4.95703V38.9587Z"
                            fill="#121C27"
                          />
                        </svg>
                        <h4>
                          Our <br /> Commitment
                        </h4>
                      </div>
                      <div>
                        <p>
                          We are committed to transforming education by
                          investing in the people who shape it — teachers,
                          trainers, and institutions. Through technology,
                          partnerships, and purpose-driven programs, Nalanda
                          ensures every learner and educator has the opportunity
                          to thrive in a future-ready ecosystem.
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
                      At Nalanda Learning, we bring together government-aligned
                      curriculum, expert-led training, and AI-powered delivery
                      to offer a truly integrated education experience. Whether
                      it's empowering early childhood educators or enabling
                      global teaching careers, we ensure that every learner has
                      the tools to succeed.
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
                          MEPSC-Certified ECCE Programs
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
                          AI-Powered LMS & Analytics
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
                          30K+ Teachers Trained Nationwide
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
                          CSR & State Government Partnerships
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
                          Global Career Mobility via nvoco
                        </li>
                      </ul>
                    </div>
                    <a
                      href="/about"
                      className="btn-one"
                      data-splitting=""
                      data-text="About Us"
                    >
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
                    Nalanda Learning connects the dots from training to
                    placement — integrating curriculum design, skill
                    certification, AI-powered platforms, and job-matching
                    support. Our process is scalable, technology-driven, and
                    outcome-focused.
                  </p>
                  <div className="work-ten__wrp">
                    <div className="work-ten__item text-start">
                      <div className="content">
                        <h4 className="title">01. Enrollment & Orientation</h4>
                        <p>
                          We onboard aspiring teachers and partner schools
                          through our national campaigns, enabling access to
                          certified training under MEPSC guidelines.
                        </p>
                      </div>
                    </div>
                    <div className="work-ten__item text-start">
                      <div className="content">
                        <h4 className="title">02. Training & Certification</h4>
                        <p>
                          Teachers undergo guided training via mobile-first LMS,
                          in-person modules, or hybrid delivery. Programs are
                          NSQF-aligned and digitally certified.
                        </p>
                      </div>
                    </div>
                    <div className="work-ten__item text-start">
                      <div className="content">
                        <h4 className="title">03. Placement & Progression</h4>
                        <p>
                          After certification, candidates are automatically
                          profiled and connected to job opportunities, both
                          domestically and abroad through our nvoco network.
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
              <img src="images/choose/choose-one-image.jpg" alt="image" />
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
          <div className="section-header text-center mb-50">
            <h6>HOW IT WORKS</h6>
            <h2 className="wow splt-txt" data-splitting="">
              How We Power Your <br />
              Education Journey
            </h2>
          </div>
          <div className="work-eleven__wrp">
            <div className="work-eleven__line">
              <img src="images/shape/work-eleven-line.png" alt="shape" />
            </div>
            <div className="work-eleven__item have-margin">
              <div className="image">
                <img src="images/work/work-ten-image1.png" alt="image" />
                <span className="number">1</span>
              </div>
              <div className="content">
                <h4 className="title">Outreach & Enrollment</h4>
                <p>
                  We connect with schools, CSR partners, and governments to
                  enroll teachers into MEPSC-certified programs via digital and
                  on-ground campaigns.
                </p>
              </div>
            </div>
            <div className="work-eleven__item">
              <div className="image">
                <img src="images/work/work-ten-image2.png" alt="image" />
                <span className="number">2</span>
              </div>
              <div className="content">
                <h4 className="title">Training & Delivery</h4>
                <p>
                  Learners access guided training through our AI-powered LMS,
                  in-person sessions, or hybrid formats — all aligned to NEP
                  2020 and NSQF standards.
                </p>
              </div>
            </div>
            <div className="work-eleven__item have-margin">
              <div className="image">
                <img src="images/work/work-ten-image3.png" alt="image" />
                <span className="number">3</span>
              </div>
              <div className="content">
                <h4 className="title">Certification & Assessment</h4>
                <p>
                  Each participant undergoes real-time assessment, earns digital
                  credentials, and becomes part of our verified teacher network.
                </p>
              </div>
            </div>
            <div className="work-eleven__item">
              <div className="image">
                <img src="images/work/work-ten-image4.png" alt="image" />
                <span className="number">4</span>
              </div>
              <div className="content">
                <h4 className="title">Placement & Progression</h4>
                <p>
                  Qualified teachers are placed in schools or international
                  roles via our nvoco platform — bridging training to
                  employment.
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
          data-image-src="images/bg/video-bg.jpg"
        >
          <div className="video__btn">
            <div className="btn-video video-pulse">
              <a className="video-popup" href="images/video/video.mp4">
                <i className="fa-sharp fa-light fa-play" />
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
                <h4 className="color-light wow splt-txt" data-splitting="">
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
                    Through Nalanda's community platform, I connected with
                    educators across India and shared practical classroom ideas
                    that truly made an impact. It feels like a family that grows
                    together.
                  </p>
                </div>
                <h4 className="title">
                  eenakshi Sharma, <span>Primary Educator, Rajasthan</span>
                </h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about__item about__funfact">
                <h4
                  className="color-light wow splt-txt mb-40"
                  data-splitting=""
                >
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
                        <span className="count">50</span>k<sup>+</sup>
                      </h3>
                    </li>
                  </ul>
                  <p className="text">
                    Active educators engaging, learning & growing
                  </p>
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
          <div className="section-header text-center mb-50">
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
                      Creating innovative strategies for exceptional future
                      outcomes.
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
                      Stratify Agency transforms the way we work through the
                      power of AI-driven innovation.
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
        <div className="row g-0 align-items-center">
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
                          Nalanda Learning is an innovative educational platform
                          offering a range of training programs designed to
                          enhance the skills of educators, professionals, and
                          students. We provide personalized, tech-driven
                          learning experiences that empower individuals at all
                          stages of their educational journey, aligned with
                          modern educational standards like NEP 2020.
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
                        What types of programs does Nalanda Learning offer?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Nalanda Learning offers a variety of programs that
                          cater to different learning needs:
                        </p>
                        <ul>
                          <li>
                            <strong>Teacher Training Programs:</strong> Focused
                            on enhancing pedagogical skills.
                          </li>
                          <li>
                            <strong>Professional Development Courses:</strong>{' '}
                            For skill-building in various industries.
                          </li>
                          <li>
                            <strong>
                              Early Childhood Education (ECE) Courses:
                            </strong>{' '}
                            Designed for the development of young learners.
                          </li>
                          <li>
                            <strong>Technology-Enabled Learning:</strong>{' '}
                            Leveraging digital tools and platforms for a modern
                            learning experience.
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
                        Are the programs accredited or certified?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, Nalanda Learning’s programs are accredited and
                          recognized by leading educational authorities and
                          institutions. Many of our programs are aligned with
                          NEP 2020 and adhere to recognized standards to ensure
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
                        How can I enroll in a program with Nalanda Learning?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Enrolling in a program with Nalanda Learning is easy!
                          Simply visit our website, browse through our program
                          offerings, and choose the course that suits your
                          learning goals. You can enroll directly online by
                          filling out the registration form and selecting your
                          preferred payment method.
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
              <img src="images/faq/faq-image.jpg" alt="image" />
            </div>
          </div>
        </div>
      </section>
      {/* Faq area end here */}
    </>
  );
}
