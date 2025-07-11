'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function StrategicPartnersPage() {
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
                Stategic Partners
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
                  <a
                    href="/"
                    className="text-white text-decoration-none fw-semibold"
                    style={{ transition: 'color 0.2s' }}
                  >
                    Home
                  </a>
                </li>
                <li className="list-inline-item" style={{ color: '#fff' }}>
                  <i className="fa fa-angle-right" />
                </li>
                <li className="list-inline-item text-white fw-semibold">
                  Stategic Partners
                </li>
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

      {/* Choose area start here */}
      <section className="choose-area pt-130 pb-130">
        <div className="container">
          <div className="row g-5 g-xxl-0">
            <div className="col-lg-6">
              <div className="choose__image imageUpToDown wow gsap__parallax">
                <img src="images/choose/choose-image.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-right">
                <div className="section-header">
                  <h2 className="wow splt-txt" data-splitting="">
                    We’re Building the Future Together – Join Us.
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    At Nalanda Learning, we believe in building a better future
                    through education and innovation. We work hand-in-hand with
                    our partners and educators to create lasting impact and
                    drive positive change in the world of learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="choose__wrp">
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-4 wow fadeInLeft"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="choose__item">
                  <div className="icon mb-20">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width={50}
                        height={50}
                        fill="url(#pattern0_1095_35666)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1095_35666"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_1095_35666"
                            transform="scale(0.0163934)"
                          />
                        </pattern>
                        <image
                          id="image0_1095_35666"
                          width={61}
                          height={61}
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <span className="hover-link-light text-white">
                        Global Growth
                      </span>
                    </h4>
                    <p className="text">
                      We aim to bring transformative educational solutions to
                      underserved regions worldwide.
                    </p>
                  </div>
                  <a href="page-about.html" className="arrow-btn mt-20">
                    <i className="fa-thin fa-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="choose__item light">
                  <div className="icon mb-20">
                    <svg
                      width={69}
                      height={50}
                      viewBox="0 0 69 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width={69}
                        height={50}
                        fill="url(#pattern0_1095_35651)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1095_35651"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_1095_35651"
                            transform="matrix(0.0135135 0 0 0.0186486 0 -0.00351351)"
                          />
                        </pattern>
                        <image
                          id="image0_1095_35651"
                          width={74}
                          height={54}
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <span className="hover-link ">
                        Professional Excellence
                      </span>
                    </h4>
                    <p className="text">
                      We focus on continuous improvement and delivering value to
                      our partners and educators.``
                    </p>
                  </div>
                  <a href="page-about.html" className="arrow-btn mt-20">
                    <i className="fa-thin fa-arrow-up-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="choose__item">
                  <div className="icon mb-20">
                    <svg
                      width={69}
                      height={50}
                      viewBox="0 0 69 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width={69}
                        height={50}
                        fill="url(#pattern0_1095_35636)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_1095_35636"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_1095_35636"
                            transform="matrix(0.0133333 0 0 0.0184 0 -0.1348)"
                          />
                        </pattern>
                        <image
                          id="image0_1095_35636"
                          width={75}
                          height={69}
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <span className="hover-link-light text-white">
                        Business Acumen
                      </span>
                    </h4>
                    <p className="text">
                      Our strategic approach empowers educators to thrive and
                      organizations to grow.
                    </p>
                  </div>
                  <a href="page-about.html" className="arrow-btn mt-20">
                    <i className="fa-thin fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Choose area end here */}

      {/* Feature area start here */}
      <section className="feature-ten-area pb-60">
        <div className="container">
          <div className="feature-ten__wrp">
            <div className="row g-5 align-items-center">
              <div className="col-xl-5">
                <div className="feature-ten__content">
                  <div className="section-header">
                    <h2 className="wow splt-txt" data-splitting="">
                      Our Key Services to Empower Global Learning
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      We are dedicated to improving global education standards
                      and creating sustainable learning ecosystems worldwide.
                      Through our expert services, we aim to transform education
                      by offering cutting-edge technology, personalized learning
                      experiences, and global teacher support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="feature-ten-right">
                  <div
                    className="feature-ten__item wow fadeInDown mb-20"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1095_32612)">
                            <path
                              d="M35.0298 21.3327C31.8237 21.0529 28.6666 20.3637 25.6356 19.2819C25.2268 19.1248 24.7743 19.1248 24.3656 19.2819C21.3336 20.3623 18.1762 21.0515 14.9698 21.3327C14.0396 21.4253 13.3315 22.2088 13.3331 23.1436V28.1736C13.3219 32.1713 14.5441 36.0752 16.8331 39.3527C18.711 42.0388 21.2512 44.194 24.2073 45.6094C24.7067 45.8449 25.2853 45.8449 25.7848 45.6094C32.4545 42.364 36.6815 35.5909 36.6664 28.1736V23.1436C36.668 22.2088 35.96 21.4253 35.0298 21.3327ZM34.9998 28.1736C35.0168 34.9477 31.1604 41.1356 25.0714 44.1044C25.0259 44.1252 24.9736 44.1252 24.9281 44.1044C22.2325 42.8132 19.9165 40.8471 18.2048 38.3969C16.1094 35.4003 14.9902 31.83 14.9998 28.1736V23.1436C15 23.0639 15.0619 22.998 15.1414 22.9927C18.4915 22.697 21.7899 21.9739 24.9564 20.8411H25.0398C28.2063 21.9749 31.5051 22.698 34.8556 22.9927C34.9348 22.9984 34.9962 23.0642 34.9964 23.1436L34.9998 28.1736Z"
                              fill="#121C27"
                            />
                            <path
                              d="M41.3493 9.2571C40.622 6.59438 38.7345 4.40061 36.2102 3.28398C33.6858 2.16735 30.7929 2.24654 28.3335 3.4996C25.3208 0.42589 20.8606 -0.739519 16.7294 0.467586C12.5983 1.67469 9.46721 5.05822 8.58346 9.27043C3.54201 9.98992 -0.152051 14.3854 0.0068929 19.4754C0.165837 24.5655 4.12694 28.7219 9.20346 29.1254C9.57129 38.537 15.6385 46.774 24.5176 49.9163C24.8287 50.028 25.169 50.028 25.4801 49.9163C34.3425 46.7508 40.4004 38.5278 40.7968 29.1254C45.8872 28.7203 49.8537 24.5435 49.9957 19.439C50.1376 14.3345 46.4093 9.94368 41.3493 9.25626V9.2571ZM25.0001 48.3188C16.5062 45.2714 10.8384 37.2211 10.8335 28.1971V19.7054C10.8325 19.5351 10.9674 19.395 11.1376 19.3896C13.706 19.2904 20.1843 18.8321 24.8568 16.6979C24.9018 16.6774 24.9507 16.6666 25.0001 16.6663C25.0499 16.6667 25.099 16.6775 25.1443 16.6979C29.816 18.8321 36.2943 19.2904 38.8626 19.3896C39.0329 19.395 39.1678 19.5351 39.1668 19.7054V28.1971C39.1451 37.2158 33.4834 45.2574 25.0001 48.3188ZM40.8335 27.4571V19.7071C40.8364 18.6403 39.9922 17.7636 38.926 17.7263C36.4568 17.6313 30.2385 17.1946 25.8368 15.1846C25.3061 14.9403 24.695 14.9403 24.1643 15.1846C19.7618 17.1946 13.5435 17.6313 11.0743 17.7263C10.0087 17.7636 9.1648 18.6392 9.1668 19.7054V27.4554C4.88821 27.007 1.65416 23.3755 1.70255 19.0737C1.75094 14.772 5.06588 11.2141 9.35346 10.8621C9.742 10.8337 10.059 10.5399 10.1168 10.1546C10.7064 6.30687 13.4752 3.15094 17.2135 2.06572C20.9518 0.980489 24.9802 2.1632 27.5385 5.0971C27.8049 5.40569 28.2555 5.47621 28.6035 5.26376C29.7755 4.54366 31.1246 4.16367 32.5001 4.16626C36.0714 4.17328 39.1456 6.69003 39.8576 10.1896C39.9316 10.5568 40.2415 10.8296 40.6151 10.8563C44.9218 11.1789 48.2683 14.7384 48.3251 19.0567C48.3819 23.3751 45.1302 27.0213 40.8335 27.4571Z"
                              fill="#121C27"
                            />
                            <path
                              d="M29.5838 25.9457C29.3929 25.8342 29.1655 25.8032 28.9517 25.8595C28.7379 25.9157 28.5552 26.0547 28.4438 26.2457L23.1588 35.3123L21.423 33.5765C21.096 33.2607 20.5763 33.2652 20.2548 33.5866C19.9334 33.9081 19.9289 34.4278 20.2447 34.7548L22.7447 37.2548C22.9009 37.4111 23.1128 37.4989 23.3338 37.499C23.3695 37.4989 23.4051 37.4966 23.4405 37.4923C23.697 37.4593 23.9236 37.309 24.0538 37.0857L29.8872 27.0857C29.9983 26.8943 30.0288 26.6666 29.9719 26.4527C29.915 26.2389 29.7754 26.0565 29.5838 25.9457Z"
                              fill="#121C27"
                            />
                            <path
                              d="M9.47634 12.5264C6.01179 12.802 3.33899 15.6909 3.33301 19.1664C3.33301 19.6267 3.7061 19.9998 4.16634 19.9998C4.62658 19.9998 4.99967 19.6267 4.99967 19.1664C5.00258 16.5626 7.00337 14.3968 9.59884 14.1881C10.049 14.1439 10.3818 13.7486 10.3485 13.2975C10.3152 12.8463 9.92815 12.5041 9.47634 12.5264Z"
                              fill="#121C27"
                            />
                            <path
                              d="M19.9999 3.33301C15.891 3.34978 12.4016 6.34569 11.7632 10.4047C11.7303 10.6234 11.7856 10.8462 11.9171 11.0241C12.0485 11.202 12.2453 11.3203 12.464 11.353C12.5052 11.3589 12.5467 11.362 12.5882 11.3622C13.0008 11.3622 13.3513 11.0602 13.4124 10.6522C13.9233 7.40658 16.7143 5.01166 19.9999 4.99967C20.4601 4.99967 20.8332 4.62658 20.8332 4.16634C20.8332 3.7061 20.4601 3.33301 19.9999 3.33301Z"
                              fill="#121C27"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1095_32612">
                              <rect width={50} height={50} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h5 className="title">
                        <span>
                          National Early Childhood Teacher Training (NELTT)
                        </span>
                      </h5>
                    </div>
                    <a href="page-service-details.html" className="arry-btn">
                      <i className="fa-regular fa-arrow-up-right" />
                    </a>
                  </div>
                  <div
                    className="feature-ten__item wow fadeInDown mb-20"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1095_32625)">
                            <path
                              d="M24.724 33.3388C24.9563 33.4758 25.2561 33.4731 25.485 33.3297L32.1741 29.135C32.3877 29.0011 32.5174 28.7669 32.5174 28.5147V21.5918C32.5228 21.5563 32.5262 21.5205 32.5262 21.4838C32.5262 21.2313 32.3961 20.9967 32.1821 20.8628L25.4843 16.6777C25.247 16.5293 24.9456 16.5293 24.708 16.6777L18.0101 20.8628C17.7988 20.9952 17.666 21.2363 17.666 21.4854V28.5147C17.666 28.7669 17.7961 29.0015 18.0097 29.1354L24.7076 33.33C24.7129 33.3331 24.7186 33.3354 24.724 33.3388ZM25.8283 31.3853V26.0748L31.0526 22.8106V28.1092L25.8283 31.3853ZM25.0959 18.1624L30.4079 21.4816L25.0959 24.8049L19.7805 21.4838L25.0959 18.1624ZM19.1309 22.8053L24.3639 26.0748V31.3864L19.1309 28.1092V22.8053Z"
                              fill="#121C27"
                            />
                            <path
                              d="M0.441361 12.5743L7.13922 16.7689C7.37268 16.915 7.6832 16.9147 7.91666 16.7686L14.6057 12.5739C14.8194 12.44 14.9491 12.2058 14.9491 11.9536V5.02995C14.9544 4.99485 14.9578 4.95899 14.9578 4.92275C14.9578 4.67022 14.8278 4.43523 14.6138 4.30172L7.9159 0.116605C7.11481 -0.383885 6.33852 0.858184 7.1396 1.35867L12.8395 4.92046L7.52756 8.24422L2.21215 4.92275L4.68446 3.3778C5.48593 2.87731 4.70964 1.63486 3.90855 2.13535L0.441743 4.30172C0.231171 4.43333 0.0976562 4.67442 0.0976562 4.92275V11.9536C0.0976562 12.2058 0.227356 12.4404 0.441361 12.5743ZM1.56212 6.24379L1.67847 6.31665L6.79514 9.51375V14.8254L1.56212 11.5481V6.24379ZM8.25998 14.8242V9.51375L13.4842 6.24951V11.5485L8.25998 14.8242Z"
                              fill="#121C27"
                            />
                            <path
                              d="M35.5781 12.5748L42.2759 16.7695C42.509 16.916 42.8203 16.9148 43.0534 16.7691L49.7425 12.5745C49.9561 12.4406 50.0858 12.2063 50.0858 11.9542V5.03126C50.0911 4.99578 50.0946 4.95992 50.0946 4.9233C50.0946 4.67077 49.9645 4.43616 49.7505 4.30227L43.0526 0.117153C42.8153 -0.0312386 42.514 -0.0312386 42.2763 0.117153L35.5788 4.30227C35.3679 4.43388 35.2344 4.67496 35.2344 4.9233V11.9542C35.2344 12.2063 35.3645 12.4409 35.5781 12.5748ZM36.6992 6.24433L41.9322 9.5143V14.8259L36.6992 11.5487V6.24433ZM43.3967 14.8248V9.5143L48.6213 6.25006V11.5491L43.3967 14.8248ZM42.6647 1.60184L47.9766 4.92101L42.6643 8.24477L37.3489 4.9233L42.6647 1.60184Z"
                              fill="#121C27"
                            />
                            <path
                              d="M14.6138 37.4234L7.9159 33.2382C7.67824 33.0899 7.37688 33.0899 7.1396 33.2382L0.441743 37.4234C0.231171 37.555 0.0976562 37.7957 0.0976562 38.0444V45.0749C0.0976562 45.3274 0.227356 45.562 0.441361 45.6959L7.13922 49.8906C7.37268 50.0367 7.6832 50.0363 7.91704 49.8902L14.6061 45.6956C14.8198 45.5617 14.9495 45.3271 14.9495 45.0749V38.1516C14.9544 38.1165 14.9578 38.0806 14.9578 38.0444C14.9578 37.7919 14.8278 37.5573 14.6138 37.4234ZM7.52756 34.7229L12.8395 38.0421L7.52756 41.3659L2.21215 38.0444L7.52756 34.7229ZM1.56212 39.3654L1.67847 39.4383L6.79514 42.6354V47.947L1.56212 44.6694V39.3654ZM8.25998 47.9462V42.6354L13.4842 39.3712V44.6702L8.25998 47.9462Z"
                              fill="#121C27"
                            />
                            <path
                              d="M49.7505 37.4234L43.0526 33.2382C42.815 33.0899 42.5136 33.0899 42.2763 33.2382L35.5785 37.4234C35.3679 37.555 35.2344 37.7957 35.2344 38.0444V45.0749C35.2344 45.3274 35.3645 45.562 35.5781 45.6959L42.2759 49.8906C42.7547 50.1889 43.3967 49.8383 43.3967 49.2699V42.6354L48.6213 39.3712V44.6698L45.7996 46.4394C45.4566 46.6542 45.3533 47.1062 45.5684 47.4488C45.7832 47.7917 46.2352 47.8951 46.5778 47.6803L49.7425 45.6956C49.9561 45.5617 50.0858 45.3271 50.0858 45.0749V38.1524C50.0911 38.1169 50.0946 38.0806 50.0946 38.0444C50.0946 37.7919 49.9645 37.5573 49.7505 37.4234ZM42.6647 34.7229L47.9766 38.0421L42.6643 41.3659L37.3489 38.0444L42.6647 34.7229ZM36.6992 39.3654L41.9322 42.6354V47.947L36.6992 44.6694V39.3654Z"
                              fill="#121C27"
                            />
                            <path
                              d="M18.5287 8.79357H31.6139C32.5588 8.79357 32.5588 7.3291 31.6139 7.3291H18.5287C17.5842 7.3291 17.5842 8.79357 18.5287 8.79357Z"
                              fill="#121C27"
                            />
                            <path
                              d="M31.6627 41.2139H18.5775C17.633 41.2139 17.633 42.6787 18.5775 42.6787H31.6627C32.6076 42.6787 32.6076 41.2139 31.6627 41.2139Z"
                              fill="#121C27"
                            />
                            <path
                              d="M41.8916 20.6227V29.3535C41.8916 29.7578 42.2193 30.0855 42.6236 30.0855C43.0284 30.0855 43.3561 29.7578 43.3561 29.3535V20.6227C43.3561 19.6778 41.8916 19.6778 41.8916 20.6227Z"
                              fill="#121C27"
                            />
                            <path
                              d="M6.83496 20.655V29.3857C6.83496 29.79 7.16303 30.1181 7.56738 30.1181C7.97212 30.1181 8.29981 29.79 8.29981 29.3857V20.655C8.29981 19.7101 6.83496 19.7101 6.83496 20.655Z"
                              fill="#121C27"
                            />
                            <path
                              d="M35.4721 15.245L32.1716 17.4285C31.5761 17.8222 31.8733 18.7717 32.5763 18.7717C32.7148 18.7717 32.8552 18.7324 32.9795 18.65L36.28 16.4664C37.0677 15.9454 36.2598 14.7235 35.4721 15.245Z"
                              fill="#121C27"
                            />
                            <path
                              d="M17.2115 18.65C17.3359 18.7324 17.4759 18.7717 17.6147 18.7717C18.3174 18.7717 18.6149 17.8222 18.0195 17.4285L14.719 15.245C13.9312 14.7235 13.1233 15.9454 13.911 16.4664L17.2115 18.65Z"
                              fill="#121C27"
                            />
                            <path
                              d="M14.3164 35.3722C14.4553 35.3722 14.5953 35.3329 14.7197 35.2505L18.0201 33.0674C18.8083 32.5463 17.9999 31.3241 17.2122 31.8455L13.9117 34.0291C13.3162 34.4227 13.6138 35.3722 14.3164 35.3722Z"
                              fill="#121C27"
                            />
                            <path
                              d="M32.1719 33.067L35.4724 35.2506C35.5968 35.333 35.7368 35.3723 35.8756 35.3723C36.5783 35.3723 36.8758 34.4228 36.2804 34.0291L32.9799 31.8456C32.1921 31.3241 31.3838 32.5459 32.1719 33.067Z"
                              fill="#121C27"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1095_32625">
                              <rect width={50} height={50} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h5 className="title">
                        <span>
                          National Vocational and Educational Commission
                          Organization
                        </span>
                      </h5>
                    </div>
                    <a href="page-service-details.html" className="arry-btn">
                      <i className="fa-regular fa-arrow-up-right" />
                    </a>
                  </div>
                  <div
                    className="feature-ten__item wow fadeInDown mb-20"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1095_32645)">
                            <path
                              d="M25 20.833C26.4834 20.833 27.9334 20.3931 29.1668 19.569C30.4001 18.7449 31.3614 17.5736 31.9291 16.2031C32.4968 14.8327 32.6453 13.3247 32.3559 11.8698C32.0665 10.415 31.3522 9.0786 30.3033 8.02971C29.2544 6.98082 27.918 6.26651 26.4632 5.97712C25.0083 5.68773 23.5003 5.83626 22.1299 6.40391C20.7594 6.97157 19.5881 7.93287 18.764 9.16623C17.9399 10.3996 17.5 11.8497 17.5 13.333C17.5022 15.3215 18.2931 17.2278 19.6991 18.6339C21.1052 20.0399 23.0116 20.8308 25 20.833ZM25 7.49968C26.1537 7.49968 27.2815 7.8418 28.2408 8.48277C29.2001 9.12375 29.9478 10.0348 30.3893 11.1007C30.8308 12.1666 30.9463 13.3395 30.7212 14.471C30.4962 15.6026 29.9406 16.642 29.1248 17.4578C28.309 18.2736 27.2696 18.8292 26.138 19.0543C25.0065 19.2793 23.8336 19.1638 22.7677 18.7223C21.7018 18.2808 20.7907 17.5331 20.1498 16.5738C19.5088 15.6146 19.1667 14.4867 19.1667 13.333C19.1684 11.7865 19.7836 10.3038 20.8772 9.21017C21.9707 8.11659 23.4534 7.50144 25 7.49968Z"
                              fill="#121C27"
                            />
                            <path
                              d="M24.9997 17.5003C25.8238 17.5003 26.6293 17.256 27.3146 16.7981C27.9998 16.3403 28.5338 15.6895 28.8492 14.9282C29.1645 14.1668 29.2471 13.329 29.0863 12.5208C28.9255 11.7125 28.5287 10.9701 27.946 10.3874C27.3632 9.80466 26.6208 9.40783 25.8126 9.24706C25.0043 9.08628 24.1665 9.1688 23.4052 9.48416C22.6438 9.79953 21.9931 10.3336 21.5352 11.0188C21.0774 11.704 20.833 12.5096 20.833 13.3337C20.8343 14.4383 21.2737 15.4974 22.0549 16.2785C22.836 17.0596 23.895 17.499 24.9997 17.5003ZM24.9997 10.8337C25.4941 10.8337 25.9775 10.9803 26.3886 11.255C26.7997 11.5297 27.1202 11.9201 27.3094 12.377C27.4986 12.8338 27.5481 13.3364 27.4516 13.8214C27.3552 14.3063 27.1171 14.7518 26.7674 15.1014C26.4178 15.4511 25.9724 15.6892 25.4874 15.7856C25.0024 15.8821 24.4998 15.8326 24.043 15.6434C23.5862 15.4541 23.1957 15.1337 22.921 14.7226C22.6463 14.3115 22.4997 13.8281 22.4997 13.3337C22.4997 12.6706 22.7631 12.0347 23.2319 11.5659C23.7007 11.0971 24.3366 10.8337 24.9997 10.8337Z"
                              fill="#121C27"
                            />
                            <path
                              d="M49.9998 31.667C49.9988 31.3206 49.8894 30.9832 49.6871 30.7019C49.4848 30.4207 49.1996 30.2098 48.8714 30.0987L40.4406 27.0837L48.8723 24.0679C49.2008 23.9577 49.4863 23.7471 49.6886 23.4658C49.891 23.1846 49.9998 22.8469 49.9998 22.5004C49.9998 22.1539 49.891 21.8162 49.6886 21.5349C49.4863 21.2537 49.2008 21.0431 48.8723 20.9329L35.7889 16.2495C35.8114 16.1662 35.8398 16.0829 35.8598 15.9995L37.3989 15.5287C37.6392 15.4568 37.8524 15.3145 38.0111 15.1202C38.1697 14.9259 38.2665 14.6885 38.2889 14.4387C38.3223 14.0745 38.3381 13.7054 38.3381 13.3337C38.3381 12.962 38.3223 12.5929 38.2889 12.2287C38.2664 11.9787 38.1695 11.7412 38.0107 11.5468C37.8519 11.3524 37.6385 11.2099 37.3981 11.1379L35.8548 10.667C35.586 9.56574 35.149 8.51251 34.5589 7.54455L35.3148 6.12788C35.4346 5.90683 35.4853 5.6549 35.4604 5.40471C35.4354 5.15451 35.3359 4.91756 35.1748 4.72455C34.9403 4.44399 34.6903 4.17232 34.4248 3.90955C34.1592 3.64677 33.8873 3.39677 33.6089 3.15955C33.416 2.99914 33.1796 2.90009 32.9299 2.87514C32.6803 2.85019 32.4289 2.90048 32.2081 3.01955L30.7848 3.77621C29.818 3.18615 28.7663 2.74825 27.6664 2.47788L27.1964 0.938712C27.1235 0.698691 26.9807 0.485845 26.7862 0.327329C26.5918 0.168813 26.3546 0.0718156 26.1048 0.0487118C25.3696 -0.0175394 24.6299 -0.0175394 23.8948 0.0487118C23.6449 0.0716001 23.4075 0.168633 23.2132 0.327359C23.0188 0.486085 22.8763 0.699265 22.8039 0.939545L22.3331 2.47788C21.2322 2.74741 20.1793 3.18475 19.2114 3.77455L17.7898 3.01871C17.5684 2.89937 17.3164 2.84901 17.0661 2.8741C16.8159 2.8992 16.5789 2.99861 16.3856 3.15955C16.1056 3.39288 15.8339 3.64288 15.5714 3.90955C15.3089 4.17621 15.0581 4.44371 14.8214 4.72371C14.6602 4.91648 14.5605 5.15318 14.5353 5.40321C14.51 5.65324 14.5603 5.9051 14.6798 6.12621L15.4364 7.54871C14.8488 8.51593 14.4132 9.56762 14.1448 10.667L12.6056 11.1379C12.3653 11.2098 12.1521 11.3521 11.9935 11.5464C11.8348 11.7407 11.738 11.9781 11.7156 12.2279C11.6823 12.592 11.6664 12.9612 11.6664 13.3329C11.6664 13.7045 11.6823 14.0737 11.7156 14.4362C11.7379 14.6865 11.8348 14.9243 11.9935 15.119C12.1523 15.3138 12.3658 15.4564 12.6064 15.5287L14.1448 15.9987C14.1648 16.082 14.1931 16.1654 14.2156 16.2487L1.12726 20.9329C0.798779 21.0431 0.513209 21.2537 0.310888 21.5349C0.108568 21.8162 -0.00027925 22.1539 -0.00027925 22.5004C-0.00027925 22.8469 0.108568 23.1846 0.310888 23.4658C0.513209 23.7471 0.798779 23.9577 1.12726 24.0679L9.55893 27.0837L1.12726 30.0987C0.798582 30.2089 0.512836 30.4196 0.310388 30.7011C0.10794 30.9825 -0.000976563 31.3204 -0.000976562 31.667C-0.000976562 32.0137 0.10794 32.3516 0.310388 32.633C0.512836 32.9145 0.798582 33.1252 1.12726 33.2354L8.3931 35.8337L1.12726 38.4329C0.798582 38.5431 0.512836 38.7538 0.310388 39.0352C0.10794 39.3166 -0.000976562 39.6545 -0.000976562 40.0012C-0.000976563 40.3479 0.10794 40.6858 0.310388 40.9672C0.512836 41.2486 0.798582 41.4593 1.12726 41.5695L24.4006 49.8954C24.7869 50.0354 25.2101 50.0354 25.5964 49.8954L48.8714 41.5695C49.2001 41.4593 49.4859 41.2486 49.6883 40.9672C49.8908 40.6858 49.9997 40.3479 49.9997 40.0012C49.9997 39.6545 49.8908 39.3166 49.6883 39.0352C49.4859 38.7538 49.2001 38.5431 48.8714 38.4329L41.6073 35.8337L48.8723 33.2354C49.2003 33.1242 49.4853 32.9132 49.6875 32.632C49.8896 32.3508 49.9988 32.0134 49.9998 31.667ZM13.3539 14.0145C13.3398 13.7895 13.3331 13.562 13.3331 13.3337C13.3331 13.1054 13.3398 12.8787 13.3539 12.6529L15.0956 12.1204C15.2399 12.0765 15.3697 11.9943 15.4709 11.8824C15.5722 11.7706 15.6412 11.6334 15.6706 11.4854C15.9127 10.256 16.3978 9.08739 17.0973 8.04788C17.1813 7.92252 17.2297 7.77669 17.2374 7.62596C17.245 7.47523 17.2116 7.32525 17.1406 7.19205L16.2831 5.58371C16.4331 5.41705 16.5881 5.25038 16.7506 5.08788C16.9131 4.92538 17.0773 4.76955 17.2506 4.62038L18.8631 5.47788C18.9964 5.54871 19.1464 5.58202 19.2971 5.57424C19.4479 5.56646 19.5937 5.51789 19.7189 5.43371C20.7564 4.73291 21.9229 4.24566 23.1506 4.00038C23.2984 3.97114 23.4355 3.90238 23.5473 3.80142C23.6591 3.70046 23.7415 3.57108 23.7856 3.42705L24.3189 1.68455C24.7724 1.65621 25.2272 1.65621 25.6806 1.68455L26.2139 3.42705C26.2581 3.57108 26.3404 3.70046 26.4522 3.80142C26.5641 3.90238 26.7012 3.97114 26.8489 4.00038C28.0777 4.24252 29.2459 4.72756 30.2848 5.42705C30.41 5.51122 30.5558 5.55979 30.7066 5.56757C30.8573 5.57535 31.0073 5.54205 31.1406 5.47121L32.7498 4.61705C32.9164 4.76621 33.0831 4.92288 33.2456 5.08455C33.4081 5.24621 33.5631 5.41121 33.7131 5.58038L32.8589 7.19205C32.7878 7.32535 32.7543 7.47549 32.7619 7.62638C32.7695 7.77728 32.8181 7.92326 32.9023 8.04871C33.6035 9.08744 34.09 10.2559 34.3331 11.4854C34.3625 11.6334 34.4315 11.7706 34.5328 11.8824C34.634 11.9943 34.7638 12.0765 34.9081 12.1204L36.6498 12.6529C36.6639 12.8779 36.6706 13.1054 36.6706 13.3337C36.6706 13.562 36.6639 13.7887 36.6498 14.0145L34.9081 14.547C34.7638 14.5909 34.634 14.6732 34.5328 14.785C34.4315 14.8968 34.3625 15.0341 34.3331 15.182C34.091 16.4114 33.6059 17.58 32.9064 18.6195C32.8224 18.7449 32.774 18.8907 32.7663 19.0415C32.7587 19.1922 32.7921 19.3422 32.8631 19.4754L33.7164 21.0837C33.5664 21.2504 33.4114 21.417 33.2489 21.5837C33.0864 21.7504 32.9223 21.902 32.7531 22.0512L31.1406 21.1937C31.0073 21.1229 30.8573 21.0896 30.7066 21.0974C30.5558 21.1051 30.41 21.1537 30.2848 21.2379C29.246 21.9383 28.0779 22.4241 26.8489 22.667C26.7012 22.6963 26.5641 22.7651 26.4522 22.866C26.3404 22.967 26.2581 23.0963 26.2139 23.2404L25.6806 24.9829C25.2272 25.0112 24.7724 25.0112 24.3189 24.9829L23.7856 23.2404C23.7415 23.0963 23.6591 22.967 23.5473 22.866C23.4355 22.7651 23.2984 22.6963 23.1506 22.667C21.9214 22.4248 20.753 21.9395 19.7139 21.2395C19.5886 21.1555 19.4427 21.1071 19.292 21.0994C19.1413 21.0918 18.9913 21.1253 18.8581 21.1962L17.2498 22.0495C17.0831 21.9012 16.9164 21.7445 16.7498 21.5829C16.5831 21.4212 16.4323 21.2562 16.2823 21.0829L17.1398 19.4712C17.2109 19.3379 17.2444 19.1878 17.2368 19.0369C17.2292 18.886 17.1806 18.74 17.0964 18.6145C16.3966 17.5755 15.9116 16.4071 15.6698 15.1779C15.6404 15.0299 15.5714 14.8927 15.4701 14.7808C15.3688 14.669 15.2391 14.5868 15.0948 14.5429L13.3539 14.0145ZM14.7706 17.8212C14.9658 18.2691 15.1902 18.7036 15.4423 19.122L14.6864 20.5387C14.5666 20.7598 14.5159 21.0117 14.5408 21.2619C14.5658 21.5121 14.6653 21.749 14.8264 21.942C15.0609 22.2226 15.3109 22.4943 15.5764 22.757C15.842 23.0198 16.1139 23.2698 16.3923 23.507C16.5853 23.6672 16.8217 23.766 17.0713 23.7909C17.3209 23.8159 17.5722 23.7658 17.7931 23.647L19.2156 22.8904C20.1821 23.4804 21.2336 23.9186 22.3331 24.1895L22.8031 25.7287C22.8757 25.9687 23.0184 26.1815 23.2127 26.3399C23.407 26.4983 23.6442 26.5951 23.8939 26.6179C24.2581 26.6512 24.6273 26.667 24.9989 26.667C25.3706 26.667 25.7398 26.6512 26.1039 26.6179C26.3539 26.5951 26.5913 26.4981 26.7857 26.3394C26.98 26.1806 27.1225 25.9674 27.1948 25.727L27.6648 24.1895C28.7657 23.92 29.8186 23.4827 30.7864 22.8929L32.2081 23.6487C32.4294 23.7683 32.6815 23.8188 32.9318 23.7937C33.1821 23.7686 33.4191 23.669 33.6123 23.5079C33.8923 23.2745 34.1639 23.0245 34.4264 22.7579C34.6889 22.4912 34.9398 22.2237 35.1764 21.9437C35.3377 21.751 35.4374 21.5142 35.4626 21.2642C35.4879 21.0142 35.4375 20.7623 35.3181 20.5412L34.5614 19.1187C34.8133 18.7002 35.0374 18.2657 35.2323 17.8179L48.3106 22.5004L24.9639 30.8237L1.68893 22.5004L14.7706 17.8212ZM48.3106 40.0004L24.9639 48.3262L1.68893 40.0004L10.8664 36.717L24.4014 41.5579C24.7878 41.6979 25.2109 41.6979 25.5973 41.5579L39.1331 36.7187L48.3106 40.0004ZM24.9639 39.9904L1.68893 31.667L12.0331 27.9687L24.4014 32.3929C24.7878 32.5329 25.2109 32.5329 25.5973 32.3929L37.9664 27.9687L48.3106 31.667L24.9639 39.9904Z"
                              fill="#121C27"
                            />
                            <path
                              d="M22.792 35.8826L13.4728 32.5493C13.2668 32.4826 13.0428 32.4987 12.8485 32.5943C12.6541 32.6898 12.5046 32.8573 12.4316 33.0612C12.3586 33.265 12.3678 33.4893 12.4573 33.6865C12.5468 33.8838 12.7096 34.0384 12.9111 34.1176L22.2303 37.451C22.3203 37.4835 22.4154 37.5002 22.5111 37.5001C22.7072 37.4999 22.8969 37.4304 23.0469 37.3041C23.1969 37.1777 23.2975 37.0026 23.331 36.8094C23.3646 36.6161 23.3289 36.4173 23.2303 36.2478C23.1317 36.0783 22.9765 35.949 22.792 35.8826Z"
                              fill="#121C27"
                            />
                            <path
                              d="M22.792 44.2156L13.4728 40.8823C13.2668 40.8156 13.0428 40.8317 12.8485 40.9273C12.6541 41.0228 12.5046 41.1903 12.4316 41.3942C12.3586 41.5981 12.3678 41.8224 12.4573 42.0196C12.5468 42.2168 12.7096 42.3714 12.9111 42.4506L22.2303 45.784C22.3203 45.8166 22.4154 45.8332 22.5111 45.8331C22.7072 45.8329 22.8969 45.7634 23.0469 45.6371C23.1969 45.5107 23.2975 45.3356 23.331 45.1424C23.3646 44.9492 23.3289 44.7503 23.2303 44.5808C23.1317 44.4113 22.9765 44.282 22.792 44.2156Z"
                              fill="#121C27"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1095_32645">
                              <rect width={50} height={50} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h5 className="title">
                        <span>Galileo & Obrizum</span>
                      </h5>
                    </div>
                    <a href="page-service-details.html" className="arry-btn">
                      <i className="fa-regular fa-arrow-up-right" />
                    </a>
                  </div>
                  <div
                    className="feature-ten__item wow fadeInDown"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon">
                        <svg
                          width={50}
                          height={50}
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1095_32657)">
                            <path
                              d="M49.022 46.0938H31.5429C31.0035 46.0938 30.5664 46.531 30.5664 47.0702C30.5664 47.6095 31.0036 48.0467 31.5429 48.0467H49.022C49.5613 48.0467 49.9984 47.6095 49.9984 47.0702C49.9984 46.531 49.5612 46.0938 49.022 46.0938Z"
                              fill="#121C27"
                            />
                            <path
                              d="M18.3599 46.0938H0.978418C0.439062 46.0938 0.00195312 46.531 0.00195312 47.0702C0.00195312 47.6095 0.43916 48.0467 0.978418 48.0467H18.3599C18.8992 48.0467 19.3363 47.6095 19.3363 47.0702C19.3363 46.531 18.8991 46.0938 18.3599 46.0938Z"
                              fill="#121C27"
                            />
                            <path
                              d="M25.3858 19.9766H17.8183C17.2789 19.9766 16.8418 20.4138 16.8418 20.953C16.8418 21.4924 17.279 21.9295 17.8183 21.9295H25.3858C25.9252 21.9295 26.3623 21.4923 26.3623 20.953C26.3623 20.4138 25.9251 19.9766 25.3858 19.9766Z"
                              fill="#121C27"
                            />
                            <path
                              d="M32.9871 20.2627C32.8055 20.0811 32.5535 19.9766 32.2968 19.9766C32.039 19.9766 31.787 20.0811 31.6064 20.2627C31.4238 20.4443 31.3203 20.6963 31.3203 20.953C31.3203 21.2099 31.4238 21.4618 31.6064 21.6434C31.7881 21.825 32.0391 21.9295 32.2968 21.9295C32.5536 21.9295 32.8056 21.825 32.9871 21.6434C33.1687 21.4617 33.2732 21.2098 33.2732 20.953C33.2732 20.6963 33.1687 20.4443 32.9871 20.2627Z"
                              fill="#121C27"
                            />
                            <path
                              d="M29.576 20.2627C29.3934 20.0811 29.1424 19.9766 28.8847 19.9766C28.6278 19.9766 28.3759 20.0811 28.1943 20.2627C28.0127 20.4443 27.9082 20.6963 27.9082 20.953C27.9082 21.2108 28.0127 21.4618 28.1943 21.6434C28.377 21.825 28.6279 21.9295 28.8847 21.9295C29.1414 21.9295 29.3935 21.825 29.576 21.6434C29.7576 21.4617 29.8611 21.2098 29.8611 20.953C29.8611 20.6963 29.7576 20.4443 29.576 20.2627Z"
                              fill="#121C27"
                            />
                            <path
                              d="M25.3858 27.7881H17.8183C17.2789 27.7881 16.8418 28.2253 16.8418 28.7646C16.8418 29.3038 17.279 29.741 17.8183 29.741H25.3858C25.9252 29.741 26.3623 29.3038 26.3623 28.7646C26.3623 28.2253 25.9251 27.7881 25.3858 27.7881Z"
                              fill="#121C27"
                            />
                            <path
                              d="M32.9871 28.0732C32.8055 27.8916 32.5535 27.7871 32.2968 27.7871C32.039 27.7871 31.788 27.8916 31.6064 28.0732C31.4238 28.2549 31.3203 28.5068 31.3203 28.7636C31.3203 29.0214 31.4238 29.2724 31.6064 29.4539C31.7881 29.6355 32.0391 29.74 32.2968 29.74C32.5536 29.74 32.8056 29.6355 32.9871 29.4539C33.1687 29.2723 33.2732 29.0203 33.2732 28.7636C33.2732 28.5068 33.1687 28.2549 32.9871 28.0732Z"
                              fill="#121C27"
                            />
                            <path
                              d="M29.576 28.0732C29.3934 27.8916 29.1424 27.7871 28.8847 27.7871C28.6278 27.7871 28.3759 27.8916 28.1943 28.0732C28.0127 28.2549 27.9082 28.5068 27.9082 28.7636C27.9082 29.0203 28.0127 29.2724 28.1943 29.4539C28.376 29.6355 28.6279 29.74 28.8847 29.74C29.1425 29.74 29.3935 29.6355 29.576 29.4539C29.7576 29.2723 29.8611 29.0203 29.8611 28.7636C29.8611 28.5068 29.7576 28.2549 29.576 28.0732Z"
                              fill="#121C27"
                            />
                            <path
                              d="M25.3858 35.5996H17.8183C17.2789 35.5996 16.8418 36.0368 16.8418 36.5761C16.8418 37.1153 17.279 37.5525 17.8183 37.5525H25.3858C25.9252 37.5525 26.3623 37.1153 26.3623 36.5761C26.3623 36.0368 25.9251 35.5996 25.3858 35.5996Z"
                              fill="#121C27"
                            />
                            <path
                              d="M32.9871 35.8857C32.8045 35.7041 32.5535 35.5996 32.2968 35.5996C32.039 35.5996 31.788 35.7041 31.6055 35.8857C31.4238 36.0674 31.3203 36.3193 31.3203 36.5761C31.3203 36.8328 31.4238 37.0849 31.6055 37.2664C31.7881 37.448 32.0391 37.5525 32.2968 37.5525C32.5536 37.5525 32.8056 37.448 32.9871 37.2664C33.1687 37.0848 33.2732 36.8328 33.2732 36.5761C33.2732 36.3193 33.1687 36.0674 32.9871 35.8857Z"
                              fill="#121C27"
                            />
                            <path
                              d="M29.575 35.8857C29.3934 35.7041 29.1424 35.5996 28.8847 35.5996C28.6278 35.5996 28.3759 35.7041 28.1943 35.8857C28.0128 36.0674 27.9082 36.3193 27.9082 36.5761C27.9082 36.8328 28.0127 37.0849 28.1943 37.2664C28.376 37.448 28.6279 37.5525 28.8847 37.5525C29.1425 37.5525 29.3935 37.448 29.575 37.2664C29.7576 37.0848 29.8611 36.8328 29.8611 36.5761C29.8611 36.3193 29.7576 36.0674 29.575 35.8857Z"
                              fill="#121C27"
                            />
                            <path
                              d="M37.707 28.9033C37.707 27.3078 36.9378 25.8889 35.7507 24.9974C36.9377 24.1059 37.707 22.6869 37.707 21.0914C37.707 18.3992 35.5168 16.209 32.8246 16.209H17.2008C14.5086 16.209 12.3184 18.3992 12.3184 21.0914C12.3184 22.6869 13.0876 24.1059 14.2747 24.9974C13.0877 25.8889 12.3184 27.3078 12.3184 28.9033C12.3184 30.4988 13.0876 31.9178 14.2747 32.8093C13.0877 33.7008 12.3184 35.1197 12.3184 36.7152C12.3184 39.4074 14.5086 41.5977 17.2008 41.5977H24.0238V44.3083C22.8873 44.7114 22.0709 45.7968 22.0709 47.0698C22.0708 48.6852 23.385 49.9993 25.0003 49.9993C26.6156 49.9993 27.9298 48.6852 27.9298 47.0698C27.9298 45.7969 27.1134 44.7114 25.9769 44.3083V41.5977H32.8247C35.5169 41.5977 37.7071 39.4074 37.7071 36.7152C37.7071 35.1197 36.9379 33.7008 35.7508 32.8093C36.9377 31.9178 37.707 30.4988 37.707 28.9033ZM14.2712 21.0915C14.2712 19.4762 15.5854 18.162 17.2007 18.162H32.8245C34.4398 18.162 35.754 19.4762 35.754 21.0915C35.754 22.7068 34.4398 24.021 32.8245 24.021H17.2007C15.5854 24.0209 14.2712 22.7067 14.2712 21.0915ZM25.0003 48.0464C24.4618 48.0464 24.0238 47.6083 24.0238 47.0699C24.0238 46.5314 24.4619 46.0935 25.0003 46.0935C25.5387 46.0935 25.9768 46.5315 25.9768 47.0699C25.9768 47.6083 25.5388 48.0464 25.0003 48.0464ZM35.754 36.7152C35.754 38.3306 34.4398 39.6447 32.8245 39.6447H17.2007C15.5854 39.6447 14.2712 38.3306 14.2712 36.7152C14.2712 35.0999 15.5854 33.7857 17.2007 33.7857H32.8245C34.4398 33.7858 35.754 35.1 35.754 36.7152ZM32.8245 31.8328H17.2007C15.5854 31.8328 14.2712 30.5187 14.2712 28.9033C14.2712 27.288 15.5854 25.9738 17.2007 25.9738H32.8245C34.4398 25.9738 35.754 27.288 35.754 28.9033C35.754 30.5187 34.4398 31.8328 32.8245 31.8328Z"
                              fill="#121C27"
                            />
                            <path
                              d="M47.9018 15.1206C46.6479 13.3006 44.9354 11.8782 42.9302 10.9855C40.4725 4.39658 34.1661 0 27.0996 0C22.9878 0 19.0254 1.49482 15.9426 4.20898C13.1238 6.69053 11.2186 10.0252 10.5133 13.6792C10.3617 13.6724 10.2104 13.6689 10.0598 13.6689C4.51387 13.6689 0.00195312 18.1809 0.00195312 23.7268C0.00195312 26.1401 0.869727 28.474 2.44541 30.2983C4.00449 32.1033 6.15449 33.2986 8.49951 33.6642C8.55049 33.6721 8.60107 33.676 8.65107 33.676C9.12402 33.676 9.53955 33.3316 9.61475 32.8498C9.69785 32.3169 9.33311 31.8177 8.80029 31.7346C4.83379 31.1163 1.95488 27.7486 1.95488 23.7269C1.95488 19.2578 5.59063 15.622 10.0598 15.622C10.436 15.622 10.8176 15.6486 11.1939 15.7014C11.4514 15.7373 11.7121 15.6693 11.9189 15.5125C12.126 15.3557 12.2619 15.1229 12.2968 14.8656C13.2952 7.5042 19.6591 1.95303 27.0995 1.95303C33.4798 1.95303 39.1591 6.00478 41.2317 12.0353C41.3239 12.3036 41.5283 12.5185 41.7916 12.6241C45.5904 14.1484 48.0451 17.7782 48.0451 21.8714C48.0451 26.5826 44.7009 30.6863 40.0933 31.6292C39.5648 31.7373 39.2243 32.2533 39.3324 32.7816C39.4405 33.3101 39.9563 33.6505 40.4849 33.5425C45.9973 32.4146 49.9981 27.5061 49.9981 21.8714C49.9981 19.4456 49.2732 17.1112 47.9018 15.1206Z"
                              fill="#121C27"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1095_32657">
                              <rect width={50} height={50} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h5 className="title">
                        <span>AI powerd teacher Training Portal</span>
                      </h5>
                    </div>
                    <a href="page-service-details.html" className="arry-btn">
                      <i className="fa-regular fa-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature area end here */}

      {/* Service area start here */}
      <section className="service-three-area pb-40">
        <div className="container">
          <div className="col-xl-6 mx-auto">
            <h3 className="text-center pb-30">Key Point Where we Focus</h3>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <a
                href="page-service-details.html"
                className="service-three__item"
              >
                <div className="icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.0005 53.3342C29.6951 53.3342 29.4551 53.0942 29.4551 52.7887C29.4551 52.4833 29.6951 52.2433 30.0005 52.2433C42.2623 52.2433 52.2441 42.2614 52.2441 29.9996C52.2441 17.7378 42.2623 7.75595 30.0005 7.75595C29.6951 7.75595 29.4551 7.51595 29.4551 7.2105C29.4551 6.90504 29.6951 6.66504 30.0005 6.66504C42.8841 6.66504 53.3351 17.116 53.3351 29.9996C53.3351 36.1851 50.8805 42.1196 46.506 46.4942C42.1314 50.8905 36.1969 53.3451 30.0005 53.3342Z"
                      fill="#4B535D"
                    />
                    <path
                      d="M30.0005 48.8835C29.6951 48.8835 29.4551 48.6435 29.4551 48.338C29.4551 48.0326 29.6951 47.7926 30.0005 47.7926C39.8078 47.7926 47.7932 39.8071 47.7932 29.9998C47.7932 20.1926 39.8078 12.2071 30.0005 12.2071C29.6951 12.2071 29.4551 11.9671 29.4551 11.6617C29.4551 11.3562 29.6951 11.1162 30.0005 11.1162C40.4187 11.1162 48.8841 19.5926 48.8841 29.9998C48.8841 40.4071 40.4187 48.8835 30.0005 48.8835Z"
                      fill="#4B535D"
                    />
                    <path
                      d="M30.0005 44.4438C29.6951 44.4438 29.4551 44.2038 29.4551 43.8983C29.4551 43.5929 29.6951 43.3529 30.0005 43.3529C37.3751 43.3529 43.3532 37.3747 43.3532 30.0002C43.3532 22.6256 37.3751 16.6583 30.0005 16.6583C29.6951 16.6583 29.4551 16.4183 29.4551 16.1129C29.4551 15.8074 29.6951 15.5674 30.0005 15.5674C37.9641 15.5674 44.4441 22.0474 44.4441 30.0111C44.4441 37.9747 37.9641 44.4438 30.0005 44.4438Z"
                      fill="#4B535D"
                    />
                    <path
                      d="M29.9991 57.7746C14.6609 57.7746 2.22461 45.3383 2.22461 30.0001C2.22461 29.6946 2.46461 29.4546 2.77006 29.4546H20.5518C20.8573 29.4546 21.0973 29.6946 21.0973 30.0001C21.0973 34.9201 25.09 38.9019 29.9991 38.9019C34.9082 38.9019 38.9009 34.9092 38.9009 30.0001C38.9009 25.0801 34.9192 21.0983 29.9991 21.0983C29.6936 21.0983 29.4536 20.8583 29.4536 20.5528C29.4536 20.2474 29.6936 20.0074 29.9991 20.0074C35.5191 20.0074 39.9918 24.4801 39.9918 30.0001C39.9918 35.5201 35.5191 39.9928 29.9991 39.9928C24.6864 39.9928 20.3118 35.8474 20.0173 30.5455H3.31552C3.61006 45.011 15.4682 56.6837 29.9991 56.6837C44.7155 56.6837 56.6828 44.7165 56.6828 30.0001C56.6828 15.2837 44.7155 3.3165 29.9991 3.3165C29.6936 3.3165 29.4536 3.0765 29.4536 2.77105C29.4536 2.46559 29.6936 2.22559 29.9991 2.22559C45.3373 2.22559 57.7737 14.6728 57.7737 30.011C57.7737 37.3746 54.85 44.4437 49.6355 49.6474C44.4427 54.8619 37.3736 57.7964 29.9991 57.7746Z"
                      fill="#4B535D"
                    />
                    <path
                      d="M30.0005 35.5526C29.6951 35.5526 29.4551 35.3126 29.4551 35.0071C29.4551 34.7016 29.6951 34.4616 30.0005 34.4616C32.466 34.4616 34.4623 32.4653 34.4623 30.0107C34.4623 27.5453 32.466 25.5489 30.0114 25.5489C29.706 25.5489 29.466 25.3089 29.466 25.0035C29.466 24.698 29.706 24.458 30.0114 24.458C33.0769 24.458 35.5641 26.9453 35.5641 29.9998C35.5532 33.0653 33.066 35.5526 30.0005 35.5526Z"
                      fill="#4B535D"
                    />
                  </svg>
                </div>
                <h5>High-Impact Teacher Training</h5>
              </a>
            </div>
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <a href="#0" className="service-three__item active">
                <div className="icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_356_27498)">
                      <path
                        d="M30 0.703125C38.3203 0.703125 45.8203 3.98438 51.2109 9.25781C56.6016 14.5312 60 21.9141 60 30C60 38.0859 56.6016 45.4688 51.2109 50.7422C45.8203 56.0156 38.3203 59.2969 30 59.2969C21.6797 59.2969 14.1797 56.0156 8.78906 50.7422C3.39844 45.4688 0 38.0859 0 30C0 21.9141 3.39844 14.5312 8.78906 9.25781C14.1797 3.98438 21.6797 0.703125 30 0.703125ZM50.2734 10.3125C45 5.15625 37.8516 2.10938 30 2.10938C22.1484 2.10938 15 5.15625 9.72656 10.3125C4.57031 15.3516 1.40625 22.2656 1.40625 30C1.40625 37.7344 4.57031 44.6484 9.72656 49.6875C15 54.8438 22.1484 57.8906 30 57.8906C37.8516 57.8906 45 54.8438 50.2734 49.6875C55.4297 44.6484 58.5938 37.7344 58.5938 30C58.5938 22.2656 55.4297 15.3516 50.2734 10.3125Z"
                        fill="#4B535D"
                      />
                      <path
                        d="M30 5.74219C29.6484 5.74219 29.2969 5.97656 29.2969 6.32812C29.2969 6.79688 29.6484 7.03125 30 7.03125H46.5234C46.875 7.03125 47.2266 6.79688 47.2266 6.32812C47.2266 5.97656 46.875 5.74219 46.5234 5.74219H30ZM30 11.6016C29.6484 11.6016 29.2969 11.9531 29.2969 12.3047C29.2969 12.6562 29.6484 13.0078 30 13.0078H52.9688C53.4375 13.0078 53.6719 12.6562 53.6719 12.3047C53.6719 11.9531 53.4375 11.6016 52.9688 11.6016H30ZM30 17.4609C29.6484 17.4609 29.2969 17.8125 29.2969 18.1641C29.2969 18.5156 29.6484 18.8672 30 18.8672H56.7188C57.0703 18.8672 57.4219 18.5156 57.4219 18.1641C57.4219 17.8125 57.0703 17.4609 56.7188 17.4609H30ZM30 23.4375C29.6484 23.4375 29.2969 23.6719 29.2969 24.1406C29.2969 24.4922 29.6484 24.7266 30 24.7266H58.7109C59.0625 24.7266 59.4141 24.4922 59.4141 24.1406C59.4141 23.6719 59.0625 23.4375 58.7109 23.4375H30ZM30 29.2969C29.6484 29.2969 29.2969 29.6484 29.2969 30C29.2969 30.3516 29.6484 30.7031 30 30.7031H59.2969C59.6484 30.7031 60 30.3516 60 30C60 29.6484 59.6484 29.2969 59.2969 29.2969H30ZM30 35.2734C29.6484 35.2734 29.2969 35.5078 29.2969 35.8594C29.2969 36.3281 29.6484 36.5625 30 36.5625H58.7109C59.0625 36.5625 59.4141 36.3281 59.4141 35.8594C59.4141 35.5078 59.0625 35.2734 58.7109 35.2734H30ZM30 41.1328C29.6484 41.1328 29.2969 41.4844 29.2969 41.8359C29.2969 42.1875 29.6484 42.5391 30 42.5391H56.7188C57.0703 42.5391 57.4219 42.1875 57.4219 41.8359C57.4219 41.4844 57.0703 41.1328 56.7188 41.1328H30ZM30 46.9922C29.6484 46.9922 29.2969 47.3438 29.2969 47.6953C29.2969 48.0469 29.6484 48.3984 30 48.3984H52.9688C53.4375 48.3984 53.6719 48.0469 53.6719 47.6953C53.6719 47.3438 53.4375 46.9922 52.9688 46.9922H30ZM30 52.9688C29.6484 52.9688 29.2969 53.2031 29.2969 53.6719C29.2969 54.0234 29.6484 54.2578 30 54.2578H46.5234C46.875 54.2578 47.2266 54.0234 47.2266 53.6719C47.2266 53.2031 46.875 52.9688 46.5234 52.9688H30Z"
                        fill="#4B535D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_356_27498">
                        <rect width={60} height={60} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h5 className="text-white">Global Educational Networks</h5>
              </a>
            </div>
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <a
                href="page-service-details.html"
                className="service-three__item"
              >
                <div className="icon">
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_356_27483)">
                      <path
                        d="M39.2534 18.5076C40.2236 18.8061 41.1937 19.1046 42.0146 19.4777C42.3131 19.627 42.8355 19.4777 42.9848 19.03C43.134 18.6568 42.9848 18.2091 42.537 18.0598C41.6415 17.6867 40.6713 17.3882 39.6266 17.0897C39.2534 16.9404 38.8057 17.2389 38.731 17.6121C38.5818 18.0598 38.8803 18.433 39.2534 18.5076ZM27.6116 16.7165C28.5818 16.7165 29.5519 16.7912 30.5967 16.9404C31.1191 16.9404 31.343 16.6419 31.4176 16.2688C31.4176 15.8957 31.1191 15.5225 30.746 15.4479C29.7758 15.3733 28.731 15.2986 27.7609 15.224C27.3131 15.224 27.0146 15.5225 27.0146 15.9703C26.8654 16.418 27.2385 16.7165 27.6116 16.7165ZM21.6415 16.7912C21.7161 16.7912 21.7161 16.7912 21.6415 16.7912C22.6116 16.7166 23.6564 16.7165 24.6266 16.7165C25.0743 16.7165 25.3728 16.3434 25.3728 15.9703C25.3728 15.5971 24.9997 15.224 24.6266 15.224C23.6564 15.224 22.6116 15.224 21.6415 15.2986C21.2684 15.2986 20.8952 15.6718 20.8952 16.0449V16.1195C20.9698 16.4927 21.2684 16.7912 21.6415 16.7912ZM10.1489 18.6568C11.0445 18.3583 12.0146 18.1345 12.9848 17.9106C13.134 17.9106 13.2086 17.836 13.3579 17.6867V17.7613C13.3579 18.1345 13.5818 18.433 13.9549 18.5076C14.3281 18.5822 14.7012 18.3583 14.7758 17.9106C14.8504 17.4628 14.9251 17.0897 14.9997 16.7165V16.7912C15.0743 17.1643 15.3728 17.3882 15.746 17.3882H15.8952C16.8654 17.2389 17.8355 17.0897 18.8057 17.0151C19.1788 16.9404 19.5519 16.6419 19.4773 16.1942C19.4773 15.821 19.1042 15.5225 18.6564 15.5225C17.6116 15.5971 16.6415 15.7464 15.6713 15.8957C15.4475 15.9703 15.2236 16.1195 15.0743 16.3434C15.1489 15.8957 15.2236 15.4479 15.3728 15.0748C15.4475 14.627 15.1489 14.2539 14.7758 14.1792C14.4027 14.1046 13.9549 14.3285 13.8803 14.7763C13.731 15.4479 13.5818 16.1942 13.5072 16.9404C13.3579 16.6419 13.0594 16.4927 12.6863 16.5673C11.7161 16.7912 10.6713 17.0897 9.77577 17.3136C9.40264 17.4628 9.17876 17.9106 9.25339 18.2837C9.32801 18.5822 9.70115 18.8061 10.1489 18.6568ZM4.8504 20.9703C5.59667 20.5225 6.41756 20.0748 7.38771 19.627C7.76085 19.4777 7.9101 19.03 7.76085 18.6568C7.61159 18.2837 7.16383 18.1345 6.7907 18.2837C5.74592 18.7315 4.8504 19.1792 4.02951 19.7016C3.65637 19.9255 3.58174 20.4479 3.80562 20.7464C4.02951 21.1195 4.47727 21.2688 4.8504 20.9703Z"
                        fill="#4B535D"
                      />
                      <path
                        d="M49.6268 24.9999C49.6268 11.4178 38.582 0.373047 24.9999 0.373047C11.4178 0.373047 0.373047 11.4178 0.373047 24.9999C0.373047 38.582 11.4178 49.6268 24.9999 49.6268C38.582 49.6268 49.6268 38.582 49.6268 24.9999ZM47.8357 21.2686C46.5671 19.9999 45.373 19.4775 45.2984 19.4029C44.9253 19.179 44.4775 19.3283 44.3283 19.7014C44.1044 20.0745 44.2536 20.5223 44.6268 20.7462C45.5223 21.2686 46.2686 21.791 46.8656 22.388C47.1641 22.6865 47.6865 22.6865 47.985 22.2387C48.0596 22.8357 48.1342 23.5074 48.1342 24.1044C48.0596 24.3283 48.2089 25.1492 48.1342 24.9999C48.1342 27.7611 43.8059 30.5969 36.7163 32.1641C37.0148 29.9253 37.2387 27.5372 37.2387 24.9999C37.2387 22.4626 37.0895 20.0745 36.7163 17.7611C37.0148 17.6865 37.2387 17.4626 37.2387 17.2387C37.3133 16.791 37.0895 16.4178 36.6417 16.3432C36.5671 16.3432 36.4924 16.3432 36.4178 16.2686C35.2984 9.99991 32.9104 4.99991 29.9253 2.38797C39.1044 4.4029 46.2686 11.8656 47.8357 21.2686ZM20.8954 2.23872C20.8954 2.31335 20.9701 2.4626 20.9701 2.53723C21.1939 2.91036 21.6417 2.98499 22.0148 2.76111C22.8357 2.23872 23.6566 1.94021 24.4775 1.86558C30.4477 1.71633 33.582 10.1492 34.776 15.9701C33.582 15.7462 33.7313 15.8208 33.6566 15.7462C33.1342 15.7462 32.8357 16.0447 32.8357 16.4178C32.8357 16.9402 33.1342 17.2387 33.5074 17.2387C34.1044 17.3133 34.6268 17.388 35.1492 17.5372C35.5223 19.8507 35.7462 22.388 35.7462 24.9999C35.7462 27.6119 35.5223 30.0745 35.1492 32.4626C32.1641 32.985 28.7313 33.2835 24.9999 33.2835C21.2686 33.2835 17.8357 32.985 14.776 32.388C14.6268 32.0895 14.3283 31.8656 13.9551 31.9402C13.8059 31.9402 13.6566 32.0895 13.582 32.1641C6.26857 30.5969 1.86558 27.7611 1.86558 24.9253C1.86558 24.179 2.16409 23.4327 2.76111 22.6865C3.05961 22.388 2.98499 21.8656 2.68648 21.6417C2.53723 21.4924 2.31335 21.4924 2.16409 21.4924C3.582 11.791 11.1939 3.95514 20.8954 2.23872ZM2.16409 28.7313C4.32827 30.8954 8.35812 32.6119 13.582 33.7313C13.7313 34.4775 13.8805 35.1492 14.0298 35.8208C14.1044 36.1939 14.5522 36.4925 14.9253 36.3432C15.373 36.2686 15.5969 35.8208 15.4477 35.4477C15.2984 34.9999 15.2238 34.4775 15.1492 33.9551C18.1342 34.4775 21.4924 34.776 24.9999 34.776C28.5074 34.776 31.8656 34.4775 34.8507 33.9551C33.2089 42.1641 29.3283 48.0596 24.9999 48.0596C24.179 48.0596 23.2835 47.8357 22.4626 47.388C22.0895 47.1641 21.6417 47.388 21.4924 47.6865V47.7611C11.5671 46.3432 3.80588 38.582 2.16409 28.7313ZM29.9253 47.6119C32.985 44.9999 35.2984 39.9999 36.4178 33.7313C41.5671 32.6865 45.5969 30.8954 47.7611 28.7313C46.2686 38.1342 39.1044 45.5969 29.9253 47.6119Z"
                        fill="#4B535D"
                      />
                      <path
                        d="M17.3141 40.97C16.941 40.1491 16.5678 39.1789 16.2693 38.2834C16.1201 37.9103 15.6723 37.6864 15.2992 37.8356C14.926 37.9849 14.7022 38.358 14.8514 38.8058C15.1499 39.7759 15.5231 40.7461 15.9708 41.6416C16.1201 42.0147 16.5678 42.164 16.941 42.0147C17.2395 41.7909 17.4634 41.4177 17.3141 40.97ZM20.3738 45.8207C19.7768 45.1491 19.1798 44.4028 18.6574 43.5819C18.4335 43.2088 17.9857 43.1341 17.6126 43.358C17.2395 43.5819 17.1648 44.0297 17.3887 44.4028C17.9857 45.373 18.5828 46.1938 19.2544 46.8655C19.5529 47.164 20.0007 47.164 20.2992 46.8655C20.5977 46.567 20.6723 46.1192 20.3738 45.8207ZM13.5081 24.5521C13.9559 24.5521 14.2544 24.2536 14.2544 23.8058C14.2544 22.8356 14.329 21.8655 14.4037 20.8953C14.4037 20.5222 14.1051 20.1491 13.732 20.0744C13.3589 19.9998 12.9857 20.373 12.9111 20.7461C12.8365 21.7162 12.7619 22.6864 12.7619 23.7312C12.6872 23.8804 12.9111 24.5521 13.5081 24.5521ZM15.1499 12.761C15.5231 12.9103 15.9708 12.6864 16.1201 12.2386C16.4186 11.2685 16.7171 10.373 17.0902 9.47739C17.2395 9.02963 17.0902 8.6565 16.7171 8.50724C16.344 8.35799 15.8962 8.50724 15.7469 8.88038C15.3738 9.7759 15.0007 10.7461 14.7022 11.7909C14.5529 12.0894 14.7022 12.6118 15.1499 12.761ZM14.329 26.7162C14.329 26.3431 13.9559 25.97 13.5828 25.97C13.2096 25.97 12.8365 26.3431 12.8365 26.7162C12.8365 27.6864 12.9111 28.7312 13.0604 29.7013C13.0604 30.0744 13.3589 30.4476 13.8066 30.4476C14.329 30.4476 14.6275 29.9252 14.5529 29.6267C14.4037 28.7312 14.329 27.761 14.329 26.7162ZM17.3141 7.16396C17.6872 7.38784 18.135 7.23859 18.3589 6.86545C18.8813 5.96993 19.4037 5.22366 20.0007 4.55202C20.2992 4.25351 20.2246 3.80575 19.926 3.50725C19.6275 3.28336 19.1051 3.28336 18.8813 3.58187C18.2096 4.32814 17.6126 5.14904 17.0902 6.11919C16.8663 6.49232 17.0156 7.01471 17.3141 7.16396Z"
                        fill="#4B535D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_356_27483">
                        <rect width={50} height={50} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h5>Educational Consulting</h5>
              </a>
            </div>
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <a
                href="page-service-details.html"
                className="service-three__item"
              >
                <div className="icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6768 11.1353L16.3065 9.03891L18.7166 7.65105L19.8422 9.88664L17.6768 11.1353ZM29.9916 7.48254V4.98047L27.2168 5.13199L27.4909 7.6193L29.9916 7.48254ZM24.7774 8.0884L24.1999 5.65242L21.5304 6.44414L22.3772 8.79949L24.7774 8.0884ZM35.3914 5.56441L32.6437 5.11969L32.3821 7.60699L34.8533 8.00766L35.3914 5.56441ZM9.255 21.1405L6.95004 20.1559L5.99836 22.7678L8.39859 23.4911L9.255 21.1405ZM11.8707 16.596L9.85934 15.1056L8.3277 17.4243L10.493 18.6825L11.8707 16.596ZM7.7673 26.169L5.2984 25.7463L4.98047 28.5047L7.48113 28.6513L7.7673 26.169ZM15.4649 12.7747L13.8502 10.864L11.8264 12.7673L13.642 14.4898L15.4649 12.7747ZM50.5835 20.8083L52.8713 19.787L51.5944 17.3168L49.4337 18.5873L50.5835 20.8083ZM40.9066 7.4727L38.335 6.40254L37.503 8.76281L39.8128 9.72551L40.9066 7.4727ZM52.5166 31.0433L55.0195 31.1557L54.995 28.3826L52.4946 28.5413L52.5166 31.0433ZM52.1518 25.8122L54.6134 25.3504L53.9477 22.6505L51.5525 23.3835L52.1518 25.8122ZM49.8813 14.7855L48.0707 12.677L46.2625 14.4093L47.8946 16.3077L49.8813 14.7855ZM45.8222 10.6075L43.5735 8.97293L42.2133 11.0742L44.2391 12.5452L45.8222 10.6075ZM42.5631 48.6962L43.9601 50.7731L46.1793 49.097L44.5597 47.1888L42.5631 48.6962ZM32.7954 52.3441L33.1036 54.829L35.8443 54.333L35.262 51.8994L32.7954 52.3441ZM37.8946 51.0956L38.7731 53.4388L41.3223 52.3196L40.187 50.089L37.8946 51.0956ZM46.5488 45.2855L48.3888 46.9861L50.1604 44.8457L48.1465 43.3601L46.5488 45.2855ZM47.5301 30C47.5301 39.6707 39.6758 47.5137 29.9916 47.5137C20.3071 47.5137 12.4528 39.6707 12.4528 30C12.4528 20.3295 20.3071 12.4863 29.9916 12.4863C39.6757 12.4863 47.5301 20.3295 47.5301 30ZM45.0245 30C45.0245 21.7221 38.2809 14.9883 29.9916 14.9883C21.702 14.9883 14.9584 21.722 14.9584 30C14.9584 38.278 21.702 45.0118 29.9916 45.0118C38.2809 45.0118 45.0245 38.278 45.0245 30ZM51.6698 36.2159L54.0799 36.9049L54.6966 34.1927L52.2253 33.7773L51.6698 36.2159ZM49.644 41.0511L51.8264 42.2802L53.0573 39.7879L50.7499 38.8082L49.644 41.0511ZM8.41559 36.5627L6.01793 37.2909L6.97465 39.9004L9.27703 38.9109L8.41559 36.5627ZM11.8707 47.2767L13.8991 49.1776L15.5088 47.2597L13.6812 45.5494L11.8707 47.2767ZM27.2779 54.8755L29.9914 55.0195V52.5176L27.547 52.3856L27.2779 54.8755ZM7.48594 31.4025L4.98527 31.5564L5.30824 34.3148L7.77727 33.8873L7.48594 31.4025ZM10.52 41.3639L8.35699 42.6295L9.89613 44.9459L11.905 43.4482L10.52 41.3639ZM16.3579 50.9954L18.7705 52.3759L19.8961 50.1402L17.7232 48.8966L16.3579 50.9954ZM21.5893 53.578L24.2586 54.3622L24.8312 51.9263L22.4284 51.2202L21.5893 53.578Z"
                      fill="#4B535D"
                    />
                  </svg>
                </div>
                <h5>Auto and Smart Mobility</h5>
              </a>
            </div>
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <a
                href="page-service-details.html"
                className="service-three__item"
              >
                <div className="icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M53.7866 29.4159C53.6421 29.4145 53.5031 29.36 53.3961 29.2627C53.2891 29.1655 53.2217 29.0323 53.2066 28.8885C52.6817 23.2042 50.1857 17.8823 46.1507 13.8441C42.1158 9.80598 36.7959 7.30577 31.112 6.77633C30.9664 6.75092 30.8358 6.67174 30.7459 6.55448C30.656 6.43723 30.6135 6.29048 30.6268 6.14335C30.6401 5.99621 30.7082 5.85944 30.8176 5.76017C30.927 5.6609 31.0697 5.60639 31.2174 5.60744C37.1727 6.16005 42.7473 8.77742 46.9764 13.0065C51.2055 17.2356 53.8229 22.8102 54.3755 28.7655C54.3828 28.8464 54.3732 28.9279 54.3475 29.005C54.3217 29.082 54.2803 29.1529 54.2258 29.2132C54.1713 29.2734 54.105 29.3218 54.0309 29.3551C53.9568 29.3885 53.8767 29.4062 53.7954 29.4071L53.7866 29.4159ZM28.8269 56.8364C14.6772 56.8364 3.16406 45.3233 3.16406 31.1736C3.16406 24.7315 5.55457 18.5795 9.90494 13.8336C14.2004 9.13836 20.0911 6.21185 26.4276 5.62502C26.5762 5.62152 26.7206 5.67436 26.8319 5.77292C26.9432 5.87148 27.013 6.00847 27.0275 6.15641C27.042 6.30434 26.9999 6.45227 26.9099 6.57051C26.8198 6.68875 26.6883 6.76855 26.5419 6.7939C20.4578 7.33369 14.7984 10.1392 10.6851 14.6546C6.57174 19.1699 4.30464 25.0656 4.33295 31.1736C4.33993 37.6676 6.92277 43.8937 11.5148 48.4857C16.1068 53.0777 22.3329 55.6605 28.8269 55.6675C34.9349 55.6958 40.8306 53.4287 45.3459 49.3154C49.8613 45.2021 52.6668 39.5427 53.2066 33.4586C53.232 33.3131 53.3112 33.1824 53.4284 33.0926C53.5457 33.0027 53.6924 32.9602 53.8396 32.9734C53.9867 32.9867 54.1235 33.0548 54.2227 33.1642C54.322 33.2736 54.3765 33.4164 54.3755 33.5641C53.7872 39.9021 50.8573 45.7932 46.1581 50.0867C41.4122 54.4371 35.2602 56.8364 28.8269 56.8364Z"
                      fill="#4B535D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M51.5638 31.7527H31.1742C31.0315 31.7352 30.9002 31.6661 30.805 31.5584C30.7097 31.4508 30.6572 31.312 30.6572 31.1683C30.6572 31.0245 30.7097 30.8858 30.805 30.7781C30.9002 30.6705 31.0315 30.6014 31.1742 30.5838H51.5638C51.7065 30.6014 51.8378 30.6705 51.933 30.7781C52.0283 30.8858 52.0809 31.0245 52.0809 31.1683C52.0809 31.312 52.0283 31.4508 51.933 31.5584C51.8378 31.6661 51.7065 31.7352 51.5638 31.7527ZM28.7749 53.9528C28.6187 53.9528 28.4689 53.8908 28.3585 53.7803C28.2481 53.6699 28.1861 53.5201 28.1861 53.364V51.8523C28.1759 51.7696 28.1834 51.6856 28.2081 51.6059C28.2329 51.5263 28.2742 51.4528 28.3295 51.3904C28.3847 51.3279 28.4526 51.2779 28.5286 51.2437C28.6047 51.2094 28.6871 51.1917 28.7705 51.1917C28.8539 51.1917 28.9363 51.2094 29.0124 51.2437C29.0884 51.2779 29.1563 51.3279 29.2115 51.3904C29.2668 51.4528 29.3081 51.5263 29.3329 51.6059C29.3576 51.6856 29.3651 51.7696 29.3549 51.8523V53.364C29.3549 53.6892 29.0913 53.9528 28.7749 53.9528ZM28.7749 48.7939C28.6202 48.7939 28.4718 48.7331 28.3616 48.6245C28.2514 48.516 28.1884 48.3685 28.1861 48.2138V46.7022C28.1759 46.6194 28.1834 46.5354 28.2081 46.4558C28.2329 46.3762 28.2742 46.3027 28.3295 46.2402C28.3847 46.1778 28.4526 46.1278 28.5286 46.0935C28.6047 46.0593 28.6871 46.0415 28.7705 46.0415C28.8539 46.0415 28.9363 46.0593 29.0124 46.0935C29.0884 46.1278 29.1563 46.1778 29.2115 46.2402C29.2668 46.3027 29.3081 46.3762 29.3329 46.4558C29.3576 46.5354 29.3651 46.6194 29.3549 46.7022V48.2138C29.3549 48.539 29.0913 48.7939 28.7749 48.7939ZM28.7749 43.6437C28.6202 43.6438 28.4718 43.5829 28.3616 43.4744C28.2514 43.3659 28.1884 43.2183 28.1861 43.0637V41.5521C28.1759 41.4693 28.1834 41.3853 28.2081 41.3057C28.2329 41.226 28.2742 41.1525 28.3295 41.0901C28.3847 41.0276 28.4526 40.9776 28.5286 40.9434C28.6047 40.9091 28.6871 40.8914 28.7705 40.8914C28.8539 40.8914 28.9363 40.9091 29.0124 40.9434C29.0884 40.9776 29.1563 41.0276 29.2115 41.0901C29.2668 41.1525 29.3081 41.226 29.3329 41.3057C29.3576 41.3853 29.3651 41.4693 29.3549 41.5521V43.0637C29.3549 43.3801 29.0913 43.6437 28.7749 43.6437ZM28.7749 38.4936C28.6202 38.4936 28.4718 38.4328 28.3616 38.3243C28.2514 38.2157 28.1884 38.0682 28.1861 37.9136V36.4019C28.1759 36.3191 28.1834 36.2352 28.2081 36.1555C28.2329 36.0759 28.2742 36.0024 28.3295 35.9399C28.3847 35.8775 28.4526 35.8275 28.5286 35.7932C28.6047 35.759 28.6871 35.7413 28.7705 35.7413C28.8539 35.7413 28.9363 35.759 29.0124 35.7932C29.0884 35.8275 29.1563 35.8775 29.2115 35.9399C29.2668 36.0024 29.3081 36.0759 29.3329 36.1555C29.3576 36.2352 29.3651 36.3191 29.3549 36.4019V37.9136C29.3549 38.2299 29.0913 38.4936 28.7749 38.4936ZM28.8276 29.415C28.7503 29.415 28.6737 29.3997 28.6023 29.3701C28.5308 29.3405 28.4659 29.2972 28.4112 29.2425C28.3566 29.1878 28.3132 29.1229 28.2836 29.0515C28.254 28.98 28.2388 28.9034 28.2388 28.8261V8.4365C28.2388 8.28033 28.3008 8.13056 28.4112 8.02013C28.5217 7.9097 28.6715 7.84766 28.8276 7.84766C28.9838 7.84766 29.1336 7.9097 29.244 8.02013C29.3544 8.13056 29.4165 8.28033 29.4165 8.4365V28.8261C29.4165 29.1513 29.1528 29.415 28.8276 29.415Z"
                      fill="#4B535D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.827 4.33295C28.3608 4.33295 27.9137 4.51813 27.5841 4.84777C27.2545 5.17741 27.0693 5.62449 27.0693 6.09067C27.0693 6.55685 27.2545 7.00394 27.5841 7.33357C27.9137 7.66321 28.3608 7.8484 28.827 7.8484C29.2932 7.8484 29.7403 7.66321 30.0699 7.33357C30.3995 7.00394 30.5847 6.55685 30.5847 6.09067C30.5847 5.62449 30.3995 5.17741 30.0699 4.84777C29.7403 4.51813 29.2932 4.33295 28.827 4.33295ZM28.827 9.02608C28.0485 9.02608 27.3019 8.71681 26.7514 8.16632C26.2009 7.61582 25.8916 6.86919 25.8916 6.09067C25.8916 5.31216 26.2009 4.56552 26.7514 4.01503C27.3019 3.46453 28.0485 3.15527 28.827 3.15527C29.6055 3.15527 30.3522 3.46453 30.9027 4.01503C31.4531 4.56552 31.7624 5.31216 31.7624 6.09067C31.7624 6.86919 31.4531 7.61582 30.9027 8.16632C30.3522 8.71681 29.6055 9.02608 28.827 9.02608ZM28.827 29.4157C28.3608 29.4157 27.9137 29.6009 27.5841 29.9305C27.2545 30.2601 27.0693 30.7072 27.0693 31.1734C27.0693 31.6396 27.2545 32.0867 27.5841 32.4163C27.9137 32.7459 28.3608 32.9311 28.827 32.9311C29.2932 32.9311 29.7403 32.7459 30.0699 32.4163C30.3995 32.0867 30.5847 31.6396 30.5847 31.1734C30.5847 30.7072 30.3995 30.2601 30.0699 29.9305C29.7403 29.6009 29.2932 29.4157 28.827 29.4157ZM28.827 34.1C28.4286 34.1218 28.0299 34.0622 27.6553 33.9248C27.2808 33.7873 26.9381 33.575 26.6484 33.3007C26.3586 33.0263 26.1278 32.6958 25.9701 32.3293C25.8124 31.9628 25.731 31.568 25.731 31.169C25.731 30.77 25.8124 30.3752 25.9701 30.0087C26.1278 29.6422 26.3586 29.3117 26.6484 29.0373C26.9381 28.763 27.2808 28.5507 27.6553 28.4132C28.0299 28.2758 28.4286 28.2162 28.827 28.238C29.5766 28.2791 30.282 28.6058 30.7981 29.1509C31.3142 29.6961 31.6019 30.4183 31.6019 31.169C31.6019 31.9197 31.3142 32.6419 30.7981 33.1871C30.282 33.7322 29.5766 34.0589 28.827 34.1ZM53.901 29.4157C53.4348 29.4157 52.9877 29.6009 52.6581 29.9305C52.3284 30.2601 52.1433 30.7072 52.1433 31.1734C52.1433 31.6396 52.3284 32.0867 52.6581 32.4163C52.9877 32.7459 53.4348 32.9311 53.901 32.9311C54.3672 32.9311 54.8142 32.7459 55.1439 32.4163C55.4735 32.0867 55.6587 31.6396 55.6587 31.1734C55.6587 30.7072 55.4735 30.2601 55.1439 29.9305C54.8142 29.6009 54.3672 29.4157 53.901 29.4157ZM53.901 34.1C53.5155 34.0994 53.1339 34.0229 52.778 33.8749C52.4221 33.7268 52.0988 33.5101 51.8266 33.2371C51.5544 32.9642 51.3387 32.6402 51.1917 32.2839C51.0447 31.9275 50.9694 31.5457 50.97 31.1602C50.9705 30.7747 51.047 30.3931 51.1951 30.0372C51.3431 29.6813 51.5598 29.358 51.8328 29.0859C52.1058 28.8137 52.4297 28.5979 52.7861 28.451C53.1425 28.304 53.5243 28.2286 53.9098 28.2292C54.6883 28.2292 55.4349 28.5385 55.9854 29.089C56.5359 29.6395 56.8452 30.3861 56.8452 31.1646C56.8452 31.9431 56.5359 32.6898 55.9854 33.2402C55.4349 33.7907 54.6795 34.1 53.901 34.1ZM8.14736 31.815H6.63572C6.47954 31.815 6.32977 31.7529 6.21935 31.6425C6.10892 31.5321 6.04688 31.3823 6.04688 31.2261C6.04688 31.07 6.10892 30.9202 6.21935 30.8098C6.32977 30.6993 6.47954 30.6373 6.63572 30.6373H8.14736C8.30352 30.6373 8.45331 30.6993 8.56373 30.8098C8.67416 30.9202 8.7362 31.07 8.7362 31.2261C8.7362 31.3823 8.67416 31.5321 8.56373 31.6425C8.45331 31.7529 8.30352 31.815 8.14736 31.815ZM13.2975 31.815H11.7771C11.6209 31.815 11.4711 31.7529 11.3607 31.6425C11.2503 31.5321 11.1882 31.3823 11.1882 31.2261C11.1882 31.07 11.2503 30.9202 11.3607 30.8098C11.4711 30.6993 11.6209 30.6373 11.7771 30.6373H13.2887C13.4449 30.6373 13.5946 30.6993 13.7051 30.8098C13.8155 30.9202 13.8775 31.07 13.8775 31.2261C13.8775 31.3823 13.8155 31.5321 13.7051 31.6425C13.5946 31.7529 13.4449 31.815 13.2887 31.815H13.2975ZM18.4476 31.815H16.936C16.7798 31.815 16.63 31.7529 16.5196 31.6425C16.4092 31.5321 16.3471 31.3823 16.3471 31.2261C16.3471 31.07 16.4092 30.9202 16.5196 30.8098C16.63 30.6993 16.7798 30.6373 16.936 30.6373H18.4476C18.6038 30.6373 18.7536 30.6993 18.864 30.8098C18.9744 30.9202 19.0365 31.07 19.0365 31.2261C19.0365 31.3823 18.9744 31.5321 18.864 31.6425C18.7536 31.7529 18.6038 31.815 18.4476 31.815ZM23.5978 31.815H22.0861C21.93 31.815 21.7802 31.7529 21.6698 31.6425C21.5593 31.5321 21.4973 31.3823 21.4973 31.2261C21.4973 31.07 21.5593 30.9202 21.6698 30.8098C21.7802 30.6993 21.93 30.6373 22.0861 30.6373H23.5978C23.7539 30.6373 23.9037 30.6993 24.0141 30.8098C24.1246 30.9202 24.1866 31.07 24.1866 31.2261C24.1866 31.3823 24.1246 31.5321 24.0141 31.6425C23.9037 31.7529 23.7539 31.815 23.5978 31.815Z"
                      fill="#4B535D"
                    />
                  </svg>
                </div>
                <h5>Digital Pedagogy and Innovation</h5>
              </a>
            </div>
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <a
                href="page-service-details.html"
                className="service-three__item"
              >
                <div className="icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 2.46094C24.5534 2.46094 19.229 4.07608 14.7001 7.10212C10.1714 10.1281 6.64161 14.4292 4.55724 19.4613C2.47287 24.4934 1.9275 30.0306 2.9901 35.3726C4.0527 40.7147 6.67554 45.6216 10.527 49.473C14.3784 53.3244 19.2854 55.9473 24.6275 57.0099C29.9694 58.0725 35.5067 57.5271 40.5387 55.4429C45.5709 53.3585 49.8719 49.8287 52.898 45.2999C55.9239 40.7711 57.5391 35.4467 57.5391 30C57.5309 22.6988 54.6269 15.6989 49.464 10.536C44.3012 5.37319 37.3013 2.46913 30 2.46094ZM53.865 40.0589L52.6932 39.1322C52.4847 38.9676 52.3463 38.7303 52.3055 38.468L52.0112 36.593C51.9453 36.1757 51.7607 35.7863 51.4793 35.4711C51.1979 35.1561 50.8316 34.9289 50.4244 34.8164L49.3101 34.5099C49.2174 34.4841 49.1328 34.4348 49.0647 34.3667C48.9968 34.2984 48.9476 34.2137 48.9221 34.1208L48.653 33.1295C48.5259 32.6646 48.2498 32.2544 47.8671 31.9617C47.4843 31.6691 47.016 31.5102 46.5342 31.5095H45.1308C44.8265 31.5093 44.5254 31.5726 44.2469 31.6952C43.9683 31.8176 43.7181 31.9967 43.5125 32.2211C43.3068 32.4453 43.1501 32.7101 43.0521 32.9982C42.9542 33.2864 42.9173 33.5916 42.9437 33.8949C42.9524 33.9987 42.9317 34.103 42.8841 34.1958C42.8366 34.2887 42.764 34.3662 42.6746 34.4199L39 36.6038C38.7072 36.7784 38.3747 36.8753 38.0339 36.885L35.588 36.9492C35.4443 36.9539 35.3039 36.9053 35.1939 36.8126C35.084 36.7199 35.0123 36.5897 34.9926 36.4472L34.6176 33.8546C34.6005 33.735 34.6206 33.6131 34.6754 33.5055C34.7301 33.3978 34.8167 33.3098 34.9233 33.2532L37.1087 32.0963C37.3911 31.9472 37.6376 31.7379 37.8308 31.4834C38.0238 31.229 38.159 30.9353 38.2266 30.623L39.0488 26.8491C39.1689 26.2956 39.4473 25.7891 39.8499 25.3908L43.3969 21.8775C43.6286 21.6489 43.8063 21.3714 43.917 21.0654C44.0279 20.7593 44.0688 20.4324 44.0372 20.1084L43.8539 18.1875C43.8414 18.0542 43.8776 17.9207 43.9556 17.8118C44.0336 17.7029 44.1483 17.6256 44.2787 17.5946L46.4504 17.0822C46.9698 16.9599 47.4411 16.6859 47.8041 16.2947L50.1572 13.7634C53.0956 17.4011 54.9923 21.7677 55.6452 26.3981C56.2982 31.0284 55.6829 35.7506 53.865 40.0589ZM4.10157 30C4.09631 25.2258 5.41904 20.5442 7.92189 16.4784L10.4709 18.135C10.6842 18.2729 10.8594 18.4622 10.9805 18.6852C11.1016 18.9084 11.1648 19.1585 11.1642 19.4124V21.2597C11.1641 21.7158 11.2869 22.1636 11.5198 22.5557C11.7527 22.9478 12.087 23.27 12.4875 23.4882L13.3678 23.9687C13.4396 24.0078 13.5023 24.0615 13.552 24.1265C13.6017 24.1914 13.6373 24.266 13.6564 24.3455C13.6756 24.4248 13.6779 24.5075 13.6632 24.5879C13.6486 24.6683 13.6172 24.7448 13.5713 24.8124L13.2075 25.3443C12.8832 25.8176 12.7545 26.3979 12.8482 26.9639C12.942 27.5298 13.2509 28.0376 13.7105 28.3809L14.5734 29.0283C14.9629 29.3196 15.4278 29.4933 15.9129 29.5284C16.398 29.5637 16.883 29.4591 17.3105 29.2271L19.0121 28.3008C19.4274 28.0746 19.7712 27.737 20.0049 27.3258L21.5874 24.5429C21.8183 24.1368 21.9398 23.6777 21.9399 23.2106V22.3593C21.9393 22.1276 22.0286 21.9047 22.1891 21.7374C22.3494 21.57 22.5684 21.4715 22.8 21.4622L25.2759 21.3576C25.4273 21.3506 25.578 21.3821 25.7138 21.4494C25.8495 21.5168 25.9659 21.6177 26.0517 21.7425L27.1449 23.3184C27.2615 23.4879 27.3168 23.6921 27.3015 23.8971C27.2862 24.1023 27.2015 24.296 27.0609 24.4463L26.7797 24.7449C26.3529 25.1981 26.1075 25.7922 26.0901 26.4146C26.0729 27.0368 26.285 27.6437 26.6859 28.1199L27.4242 28.9968C27.5148 29.1047 27.579 29.2322 27.6116 29.3691C27.6441 29.5061 27.6441 29.6487 27.6117 29.7858L27.2813 31.1583C27.2252 31.3859 27.0828 31.5827 26.8842 31.7073C26.6858 31.8318 26.4465 31.8743 26.2172 31.8258L25.38 31.6434C24.9632 31.5543 24.5282 31.6193 24.1556 31.8261C23.7828 32.0328 23.4977 32.3676 23.3526 32.7684L22.6374 34.7583C22.5947 34.877 22.5273 34.9853 22.44 35.0763C22.3526 35.1674 22.2471 35.2389 22.1303 35.2863C22.0134 35.3339 21.8877 35.3562 21.7617 35.352C21.6357 35.3477 21.5118 35.3169 21.3984 35.2617L18.6713 33.9314C18.3933 33.7959 18.0876 33.7269 17.7785 33.7301C17.4693 33.7331 17.1651 33.8081 16.8899 33.9491C16.6148 34.0901 16.3761 34.2932 16.193 34.5423C16.0098 34.7915 15.8873 35.0798 15.8349 35.3846L15.6708 36.3342C15.5823 36.843 15.6198 37.3658 15.7802 37.8566C15.9405 38.3475 16.2188 38.7917 16.5905 39.15L19.2188 41.6855C19.5021 41.9579 19.8447 42.1611 20.2197 42.2793C20.5946 42.3975 20.9918 42.4274 21.3801 42.3666L23.7488 41.9916C24.0036 41.9502 24.2648 41.9747 24.5075 42.0627C24.7502 42.1508 24.9663 42.2994 25.1354 42.4946L26.8659 44.4779C26.9829 44.6118 27.0573 44.7776 27.0797 44.9541L27.2171 46.0214C27.2346 46.1585 27.2202 46.2977 27.1751 46.4283C27.1301 46.559 27.0554 46.6775 26.9571 46.7745C26.8587 46.8716 26.7395 46.9448 26.6082 46.9881C26.4771 47.0316 26.3376 47.0442 26.2008 47.025L24.0882 46.7283C23.7245 46.6772 23.3541 46.7058 23.0025 46.812C22.6511 46.9184 22.3268 47.0997 22.0524 47.3438L21.047 48.2343C20.9136 48.3528 20.748 48.4289 20.5715 48.4527C20.3948 48.4766 20.2149 48.4472 20.055 48.3684L16.2263 46.4859C15.6281 46.191 14.9519 46.0929 14.2946 46.2059C13.6373 46.3188 13.0326 46.6368 12.5672 47.1146L11.5519 48.1542C6.77528 43.3197 4.09815 36.7962 4.10157 30ZM30 55.8984C23.6267 55.9026 17.4773 53.547 12.7378 49.2858L13.74 48.2601C13.9641 48.0302 14.2552 47.877 14.5716 47.8226C14.888 47.7683 15.2136 47.8154 15.5016 47.9574L19.3304 49.8389C19.7822 50.0621 20.2902 50.1453 20.7896 50.0781C21.2889 50.0108 21.7569 49.796 22.1334 49.4612L23.1404 48.5705C23.2377 48.4847 23.3526 48.4208 23.4768 48.3833C23.6012 48.3456 23.7321 48.3354 23.8608 48.353L25.973 48.6497C26.3598 48.7041 26.7539 48.6684 27.1247 48.5457C27.4953 48.4229 27.8328 48.2162 28.1106 47.9417C28.3884 47.6672 28.5993 47.3324 28.7265 46.9631C28.8539 46.5939 28.8942 46.2002 28.8446 45.8129L28.7076 44.7455C28.6442 44.2466 28.4336 43.778 28.1025 43.3992L26.3724 41.4159C26.021 41.0108 25.572 40.7022 25.0679 40.5194C24.5637 40.3365 24.0213 40.2854 23.492 40.3712L21.1238 40.7462C20.9864 40.7681 20.8457 40.7577 20.7129 40.7159C20.5802 40.674 20.4588 40.6019 20.3588 40.5051L17.7296 37.9688C17.5505 37.7961 17.4165 37.5822 17.3393 37.3458C17.262 37.1094 17.244 36.8577 17.2866 36.6126L17.4512 35.663C17.46 35.6088 17.4815 35.5575 17.5139 35.5133C17.5461 35.4689 17.5884 35.4327 17.6372 35.4075C17.6859 35.3825 17.7399 35.3691 17.7948 35.3687C17.8497 35.3681 17.9039 35.3805 17.9532 35.4047L20.6799 36.735C21.0005 36.8913 21.3504 36.9785 21.7068 36.9905C22.0634 37.0026 22.4183 36.9395 22.7487 36.8052C23.0792 36.671 23.3777 36.4686 23.6247 36.2112C23.8716 35.954 24.0617 35.6475 24.1824 35.312L24.8976 33.3216C24.9072 33.2948 24.9261 33.2724 24.951 33.2586C24.9759 33.2448 25.0049 33.2405 25.0326 33.2466L25.8695 33.4289C26.5172 33.5651 27.1926 33.4446 27.7533 33.0926C28.314 32.7407 28.7162 32.1848 28.875 31.5422L29.2059 30.1674C29.2985 29.7804 29.2992 29.3772 29.2079 28.9901C29.1167 28.6029 28.9361 28.2425 28.6805 27.9375L27.9417 27.0609C27.8 26.8925 27.725 26.6777 27.7311 26.4575C27.7373 26.2373 27.8241 26.027 27.975 25.8666L28.2563 25.568C28.653 25.1432 28.8929 24.5957 28.9361 24.0159C28.9791 23.4363 28.823 22.8593 28.4934 22.3805L27.3999 20.805C27.1568 20.4524 26.828 20.1674 26.4443 19.9767C26.0607 19.7861 25.635 19.6961 25.2071 19.7151L22.7312 19.8201C22.0758 19.8459 21.456 20.1251 21.0024 20.5986C20.5488 21.0723 20.2967 21.7035 20.2992 22.3593V23.2134C20.2991 23.3961 20.2517 23.5758 20.1614 23.7347L18.5784 26.5176C18.4961 26.6633 18.3744 26.7827 18.2274 26.8622L16.5258 27.7889C16.3746 27.8709 16.203 27.9078 16.0316 27.8954C15.86 27.8829 15.6956 27.8216 15.5579 27.7187L14.6949 27.0717C14.5747 26.9813 14.4939 26.8482 14.4693 26.6999C14.4446 26.5515 14.4778 26.3993 14.5622 26.2749L14.9259 25.7429C15.1014 25.4859 15.221 25.1951 15.2771 24.8892C15.3332 24.5832 15.3246 24.2688 15.2519 23.9664C15.1791 23.664 15.0437 23.3802 14.8545 23.1333C14.6653 22.8864 14.4265 22.6818 14.1534 22.5329L13.2731 22.0524C13.1313 21.9753 13.0129 21.8615 12.9305 21.7229C12.848 21.5841 12.8044 21.4257 12.8044 21.2643V19.4124C12.8054 18.885 12.6742 18.3659 12.4227 17.9024C12.1712 17.4389 11.8075 17.0459 11.3649 16.7592L8.82845 15.1112C11.0517 11.9413 13.9584 9.3112 17.334 7.41497C20.7096 5.51873 24.468 4.40476 28.3317 4.15528C32.1954 3.9058 36.0657 4.52716 39.6572 5.97352C43.2486 7.41988 46.4694 9.65431 49.082 12.5119L46.6032 15.1772C46.461 15.3303 46.2767 15.4376 46.0734 15.4856L43.9013 15.998C43.3857 16.1214 42.932 16.4268 42.6233 16.8578C42.3146 17.2889 42.1718 17.8167 42.2208 18.3446L42.405 20.2626C42.413 20.3445 42.4026 20.4272 42.3747 20.5046C42.3467 20.5818 42.3018 20.652 42.2433 20.7099L38.6963 24.2226C38.0684 24.8438 37.6341 25.634 37.4466 26.4971L36.6245 30.272C36.6075 30.3506 36.5736 30.4247 36.525 30.4889C36.4764 30.5531 36.4143 30.6059 36.3432 30.6437L34.1583 31.8005C33.7529 32.0159 33.4236 32.3511 33.2157 32.7606C33.0078 33.17 32.9312 33.6335 32.9963 34.088L33.3713 36.6807C33.4488 37.2206 33.7221 37.7132 34.1393 38.0648C34.5564 38.4162 35.0882 38.6021 35.6334 38.5871L38.0795 38.5229C38.7 38.5068 39.306 38.3322 39.84 38.0157L43.5126 35.8322C43.8671 35.6201 44.1548 35.3126 44.3432 34.9451C44.5314 34.5774 44.6129 34.1645 44.5782 33.7529C44.5715 33.6762 44.5809 33.5991 44.6057 33.5262C44.6304 33.4535 44.67 33.3866 44.7221 33.33C44.774 33.2733 44.8371 33.228 44.9075 33.1971C44.9778 33.1661 45.0539 33.15 45.1308 33.15H46.5338C46.6556 33.1502 46.7739 33.1904 46.8707 33.2642C46.9674 33.3381 47.0373 33.4418 47.0696 33.5592L47.3382 34.5501C47.4386 34.9185 47.633 35.2545 47.9024 35.5251C48.1718 35.7957 48.5069 35.9916 48.8747 36.0938L49.9889 36.4004C50.0918 36.4286 50.1843 36.486 50.2554 36.5655C50.3265 36.6452 50.3732 36.7436 50.3897 36.8489L50.6841 38.7239C50.7887 39.3942 51.1427 40.0004 51.675 40.4208L53.1516 41.5884C50.9987 45.8855 47.6933 49.4994 43.605 52.0265C39.5166 54.5534 34.8063 55.8941 30 55.8984Z"
                      fill="#4B535D"
                    />
                  </svg>
                </div>
                <h5>Smart Education Mobility</h5>
              </a>
            </div>
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <a
                href="page-service-details.html"
                className="service-three__item"
              >
                <div className="icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6768 11.1353L16.3065 9.03891L18.7166 7.65105L19.8422 9.88664L17.6768 11.1353ZM29.9916 7.48254V4.98047L27.2168 5.13199L27.4909 7.6193L29.9916 7.48254ZM24.7774 8.0884L24.1999 5.65242L21.5304 6.44414L22.3772 8.79949L24.7774 8.0884ZM35.3914 5.56441L32.6437 5.11969L32.3821 7.60699L34.8533 8.00766L35.3914 5.56441ZM9.255 21.1405L6.95004 20.1559L5.99836 22.7678L8.39859 23.4911L9.255 21.1405ZM11.8707 16.596L9.85934 15.1056L8.3277 17.4243L10.493 18.6825L11.8707 16.596ZM7.7673 26.169L5.2984 25.7463L4.98047 28.5047L7.48113 28.6513L7.7673 26.169ZM15.4649 12.7747L13.8502 10.864L11.8264 12.7673L13.642 14.4898L15.4649 12.7747ZM50.5835 20.8083L52.8713 19.787L51.5944 17.3168L49.4337 18.5873L50.5835 20.8083ZM40.9066 7.4727L38.335 6.40254L37.503 8.76281L39.8128 9.72551L40.9066 7.4727ZM52.5166 31.0433L55.0195 31.1557L54.995 28.3826L52.4946 28.5413L52.5166 31.0433ZM52.1518 25.8122L54.6134 25.3504L53.9477 22.6505L51.5525 23.3835L52.1518 25.8122ZM49.8813 14.7855L48.0707 12.677L46.2625 14.4093L47.8946 16.3077L49.8813 14.7855ZM45.8222 10.6075L43.5735 8.97293L42.2133 11.0742L44.2391 12.5452L45.8222 10.6075ZM42.5631 48.6962L43.9601 50.7731L46.1793 49.097L44.5597 47.1888L42.5631 48.6962ZM32.7954 52.3441L33.1036 54.829L35.8443 54.333L35.262 51.8994L32.7954 52.3441ZM37.8946 51.0956L38.7731 53.4388L41.3223 52.3196L40.187 50.089L37.8946 51.0956ZM46.5488 45.2855L48.3888 46.9861L50.1604 44.8457L48.1465 43.3601L46.5488 45.2855ZM47.5301 30C47.5301 39.6707 39.6758 47.5137 29.9916 47.5137C20.3071 47.5137 12.4528 39.6707 12.4528 30C12.4528 20.3295 20.3071 12.4863 29.9916 12.4863C39.6757 12.4863 47.5301 20.3295 47.5301 30ZM45.0245 30C45.0245 21.7221 38.2809 14.9883 29.9916 14.9883C21.702 14.9883 14.9584 21.722 14.9584 30C14.9584 38.278 21.702 45.0118 29.9916 45.0118C38.2809 45.0118 45.0245 38.278 45.0245 30ZM51.6698 36.2159L54.0799 36.9049L54.6966 34.1927L52.2253 33.7773L51.6698 36.2159ZM49.644 41.0511L51.8264 42.2802L53.0573 39.7879L50.7499 38.8082L49.644 41.0511ZM8.41559 36.5627L6.01793 37.2909L6.97465 39.9004L9.27703 38.9109L8.41559 36.5627ZM11.8707 47.2767L13.8991 49.1776L15.5088 47.2597L13.6812 45.5494L11.8707 47.2767ZM27.2779 54.8755L29.9914 55.0195V52.5176L27.547 52.3856L27.2779 54.8755ZM7.48594 31.4025L4.98527 31.5564L5.30824 34.3148L7.77727 33.8873L7.48594 31.4025ZM10.52 41.3639L8.35699 42.6295L9.89613 44.9459L11.905 43.4482L10.52 41.3639ZM16.3579 50.9954L18.7705 52.3759L19.8961 50.1402L17.7232 48.8966L16.3579 50.9954ZM21.5893 53.578L24.2586 54.3622L24.8312 51.9263L22.4284 51.2202L21.5893 53.578Z"
                      fill="#4B535D"
                    />
                  </svg>
                </div>
                <h5>Diversity in Education</h5>
              </a>
            </div>
            <div
              className="col-md-6 col-xl-3 wow fadeInUp"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <a
                href="page-service-details.html"
                className="service-three__item"
              >
                <div className="icon">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M53.7866 29.4159C53.6421 29.4145 53.5031 29.36 53.3961 29.2627C53.2891 29.1655 53.2217 29.0323 53.2066 28.8885C52.6817 23.2042 50.1857 17.8823 46.1507 13.8441C42.1158 9.80598 36.7959 7.30577 31.112 6.77633C30.9664 6.75092 30.8358 6.67174 30.7459 6.55448C30.656 6.43723 30.6135 6.29048 30.6268 6.14335C30.6401 5.99621 30.7082 5.85944 30.8176 5.76017C30.927 5.6609 31.0697 5.60639 31.2174 5.60744C37.1727 6.16005 42.7473 8.77742 46.9764 13.0065C51.2055 17.2356 53.8229 22.8102 54.3755 28.7655C54.3828 28.8464 54.3732 28.9279 54.3475 29.005C54.3217 29.082 54.2803 29.1529 54.2258 29.2132C54.1713 29.2734 54.105 29.3218 54.0309 29.3551C53.9568 29.3885 53.8767 29.4062 53.7954 29.4071L53.7866 29.4159ZM28.8269 56.8364C14.6772 56.8364 3.16406 45.3233 3.16406 31.1736C3.16406 24.7315 5.55457 18.5795 9.90494 13.8336C14.2004 9.13836 20.0911 6.21185 26.4276 5.62502C26.5762 5.62152 26.7206 5.67436 26.8319 5.77292C26.9432 5.87148 27.013 6.00847 27.0275 6.15641C27.042 6.30434 26.9999 6.45227 26.9099 6.57051C26.8198 6.68875 26.6883 6.76855 26.5419 6.7939C20.4578 7.33369 14.7984 10.1392 10.6851 14.6546C6.57174 19.1699 4.30464 25.0656 4.33295 31.1736C4.33993 37.6676 6.92277 43.8937 11.5148 48.4857C16.1068 53.0777 22.3329 55.6605 28.8269 55.6675C34.9349 55.6958 40.8306 53.4287 45.3459 49.3154C49.8613 45.2021 52.6668 39.5427 53.2066 33.4586C53.232 33.3131 53.3112 33.1824 53.4284 33.0926C53.5457 33.0027 53.6924 32.9602 53.8396 32.9734C53.9867 32.9867 54.1235 33.0548 54.2227 33.1642C54.322 33.2736 54.3765 33.4164 54.3755 33.5641C53.7872 39.9021 50.8573 45.7932 46.1581 50.0867C41.4122 54.4371 35.2602 56.8364 28.8269 56.8364Z"
                      fill="#4B535D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M51.5638 31.7527H31.1742C31.0315 31.7352 30.9002 31.6661 30.805 31.5584C30.7097 31.4508 30.6572 31.312 30.6572 31.1683C30.6572 31.0245 30.7097 30.8858 30.805 30.7781C30.9002 30.6705 31.0315 30.6014 31.1742 30.5838H51.5638C51.7065 30.6014 51.8378 30.6705 51.933 30.7781C52.0283 30.8858 52.0809 31.0245 52.0809 31.1683C52.0809 31.312 52.0283 31.4508 51.933 31.5584C51.8378 31.6661 51.7065 31.7352 51.5638 31.7527ZM28.7749 53.9528C28.6187 53.9528 28.4689 53.8908 28.3585 53.7803C28.2481 53.6699 28.1861 53.5201 28.1861 53.364V51.8523C28.1759 51.7696 28.1834 51.6856 28.2081 51.6059C28.2329 51.5263 28.2742 51.4528 28.3295 51.3904C28.3847 51.3279 28.4526 51.2779 28.5286 51.2437C28.6047 51.2094 28.6871 51.1917 28.7705 51.1917C28.8539 51.1917 28.9363 51.2094 29.0124 51.2437C29.0884 51.2779 29.1563 51.3279 29.2115 51.3904C29.2668 51.4528 29.3081 51.5263 29.3329 51.6059C29.3576 51.6856 29.3651 51.7696 29.3549 51.8523V53.364C29.3549 53.6892 29.0913 53.9528 28.7749 53.9528ZM28.7749 48.7939C28.6202 48.7939 28.4718 48.7331 28.3616 48.6245C28.2514 48.516 28.1884 48.3685 28.1861 48.2138V46.7022C28.1759 46.6194 28.1834 46.5354 28.2081 46.4558C28.2329 46.3762 28.2742 46.3027 28.3295 46.2402C28.3847 46.1778 28.4526 46.1278 28.5286 46.0935C28.6047 46.0593 28.6871 46.0415 28.7705 46.0415C28.8539 46.0415 28.9363 46.0593 29.0124 46.0935C29.0884 46.1278 29.1563 46.1778 29.2115 46.2402C29.2668 46.3027 29.3081 46.3762 29.3329 46.4558C29.3576 46.5354 29.3651 46.6194 29.3549 46.7022V48.2138C29.3549 48.539 29.0913 48.7939 28.7749 48.7939ZM28.7749 43.6437C28.6202 43.6438 28.4718 43.5829 28.3616 43.4744C28.2514 43.3659 28.1884 43.2183 28.1861 43.0637V41.5521C28.1759 41.4693 28.1834 41.3853 28.2081 41.3057C28.2329 41.226 28.2742 41.1525 28.3295 41.0901C28.3847 41.0276 28.4526 40.9776 28.5286 40.9434C28.6047 40.9091 28.6871 40.8914 28.7705 40.8914C28.8539 40.8914 28.9363 40.9091 29.0124 40.9434C29.0884 40.9776 29.1563 41.0276 29.2115 41.0901C29.2668 41.1525 29.3081 41.226 29.3329 41.3057C29.3576 41.3853 29.3651 41.4693 29.3549 41.5521V43.0637C29.3549 43.3801 29.0913 43.6437 28.7749 43.6437ZM28.7749 38.4936C28.6202 38.4936 28.4718 38.4328 28.3616 38.3243C28.2514 38.2157 28.1884 38.0682 28.1861 37.9136V36.4019C28.1759 36.3191 28.1834 36.2352 28.2081 36.1555C28.2329 36.0759 28.2742 36.0024 28.3295 35.9399C28.3847 35.8775 28.4526 35.8275 28.5286 35.7932C28.6047 35.759 28.6871 35.7413 28.7705 35.7413C28.8539 35.7413 28.9363 35.759 29.0124 35.7932C29.0884 35.8275 29.1563 35.8775 29.2115 35.9399C29.2668 36.0024 29.3081 36.0759 29.3329 36.1555C29.3576 36.2352 29.3651 36.3191 29.3549 36.4019V37.9136C29.3549 38.2299 29.0913 38.4936 28.7749 38.4936ZM28.8276 29.415C28.7503 29.415 28.6737 29.3997 28.6023 29.3701C28.5308 29.3405 28.4659 29.2972 28.4112 29.2425C28.3566 29.1878 28.3132 29.1229 28.2836 29.0515C28.254 28.98 28.2388 28.9034 28.2388 28.8261V8.4365C28.2388 8.28033 28.3008 8.13056 28.4112 8.02013C28.5217 7.9097 28.6715 7.84766 28.8276 7.84766C28.9838 7.84766 29.1336 7.9097 29.244 8.02013C29.3544 8.13056 29.4165 8.28033 29.4165 8.4365V28.8261C29.4165 29.1513 29.1528 29.415 28.8276 29.415Z"
                      fill="#4B535D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.827 4.33295C28.3608 4.33295 27.9137 4.51813 27.5841 4.84777C27.2545 5.17741 27.0693 5.62449 27.0693 6.09067C27.0693 6.55685 27.2545 7.00394 27.5841 7.33357C27.9137 7.66321 28.3608 7.8484 28.827 7.8484C29.2932 7.8484 29.7403 7.66321 30.0699 7.33357C30.3995 7.00394 30.5847 6.55685 30.5847 6.09067C30.5847 5.62449 30.3995 5.17741 30.0699 4.84777C29.7403 4.51813 29.2932 4.33295 28.827 4.33295ZM28.827 9.02608C28.0485 9.02608 27.3019 8.71681 26.7514 8.16632C26.2009 7.61582 25.8916 6.86919 25.8916 6.09067C25.8916 5.31216 26.2009 4.56552 26.7514 4.01503C27.3019 3.46453 28.0485 3.15527 28.827 3.15527C29.6055 3.15527 30.3522 3.46453 30.9027 4.01503C31.4531 4.56552 31.7624 5.31216 31.7624 6.09067C31.7624 6.86919 31.4531 7.61582 30.9027 8.16632C30.3522 8.71681 29.6055 9.02608 28.827 9.02608ZM28.827 29.4157C28.3608 29.4157 27.9137 29.6009 27.5841 29.9305C27.2545 30.2601 27.0693 30.7072 27.0693 31.1734C27.0693 31.6396 27.2545 32.0867 27.5841 32.4163C27.9137 32.7459 28.3608 32.9311 28.827 32.9311C29.2932 32.9311 29.7403 32.7459 30.0699 32.4163C30.3995 32.0867 30.5847 31.6396 30.5847 31.1734C30.5847 30.7072 30.3995 30.2601 30.0699 29.9305C29.7403 29.6009 29.2932 29.4157 28.827 29.4157ZM28.827 34.1C28.4286 34.1218 28.0299 34.0622 27.6553 33.9248C27.2808 33.7873 26.9381 33.575 26.6484 33.3007C26.3586 33.0263 26.1278 32.6958 25.9701 32.3293C25.8124 31.9628 25.731 31.568 25.731 31.169C25.731 30.77 25.8124 30.3752 25.9701 30.0087C26.1278 29.6422 26.3586 29.3117 26.6484 29.0373C26.9381 28.763 27.2808 28.5507 27.6553 28.4132C28.0299 28.2758 28.4286 28.2162 28.827 28.238C29.5766 28.2791 30.282 28.6058 30.7981 29.1509C31.3142 29.6961 31.6019 30.4183 31.6019 31.169C31.6019 31.9197 31.3142 32.6419 30.7981 33.1871C30.282 33.7322 29.5766 34.0589 28.827 34.1ZM53.901 29.4157C53.4348 29.4157 52.9877 29.6009 52.6581 29.9305C52.3284 30.2601 52.1433 30.7072 52.1433 31.1734C52.1433 31.6396 52.3284 32.0867 52.6581 32.4163C52.9877 32.7459 53.4348 32.9311 53.901 32.9311C54.3672 32.9311 54.8142 32.7459 55.1439 32.4163C55.4735 32.0867 55.6587 31.6396 55.6587 31.1734C55.6587 30.7072 55.4735 30.2601 55.1439 29.9305C54.8142 29.6009 54.3672 29.4157 53.901 29.4157ZM53.901 34.1C53.5155 34.0994 53.1339 34.0229 52.778 33.8749C52.4221 33.7268 52.0988 33.5101 51.8266 33.2371C51.5544 32.9642 51.3387 32.6402 51.1917 32.2839C51.0447 31.9275 50.9694 31.5457 50.97 31.1602C50.9705 30.7747 51.047 30.3931 51.1951 30.0372C51.3431 29.6813 51.5598 29.358 51.8328 29.0859C52.1058 28.8137 52.4297 28.5979 52.7861 28.451C53.1425 28.304 53.5243 28.2286 53.9098 28.2292C54.6883 28.2292 55.4349 28.5385 55.9854 29.089C56.5359 29.6395 56.8452 30.3861 56.8452 31.1646C56.8452 31.9431 56.5359 32.6898 55.9854 33.2402C55.4349 33.7907 54.6795 34.1 53.901 34.1ZM8.14736 31.815H6.63572C6.47954 31.815 6.32977 31.7529 6.21935 31.6425C6.10892 31.5321 6.04688 31.3823 6.04688 31.2261C6.04688 31.07 6.10892 30.9202 6.21935 30.8098C6.32977 30.6993 6.47954 30.6373 6.63572 30.6373H8.14736C8.30352 30.6373 8.45331 30.6993 8.56373 30.8098C8.67416 30.9202 8.7362 31.07 8.7362 31.2261C8.7362 31.3823 8.67416 31.5321 8.56373 31.6425C8.45331 31.7529 8.30352 31.815 8.14736 31.815ZM13.2975 31.815H11.7771C11.6209 31.815 11.4711 31.7529 11.3607 31.6425C11.2503 31.5321 11.1882 31.3823 11.1882 31.2261C11.1882 31.07 11.2503 30.9202 11.3607 30.8098C11.4711 30.6993 11.6209 30.6373 11.7771 30.6373H13.2887C13.4449 30.6373 13.5946 30.6993 13.7051 30.8098C13.8155 30.9202 13.8775 31.07 13.8775 31.2261C13.8775 31.3823 13.8155 31.5321 13.7051 31.6425C13.5946 31.7529 13.4449 31.815 13.2887 31.815H13.2975ZM18.4476 31.815H16.936C16.7798 31.815 16.63 31.7529 16.5196 31.6425C16.4092 31.5321 16.3471 31.3823 16.3471 31.2261C16.3471 31.07 16.4092 30.9202 16.5196 30.8098C16.63 30.6993 16.7798 30.6373 16.936 30.6373H18.4476C18.6038 30.6373 18.7536 30.6993 18.864 30.8098C18.9744 30.9202 19.0365 31.07 19.0365 31.2261C19.0365 31.3823 18.9744 31.5321 18.864 31.6425C18.7536 31.7529 18.6038 31.815 18.4476 31.815ZM23.5978 31.815H22.0861C21.93 31.815 21.7802 31.7529 21.6698 31.6425C21.5593 31.5321 21.4973 31.3823 21.4973 31.2261C21.4973 31.07 21.5593 30.9202 21.6698 30.8098C21.7802 30.6993 21.93 30.6373 22.0861 30.6373H23.5978C23.7539 30.6373 23.9037 30.6993 24.0141 30.8098C24.1246 30.9202 24.1866 31.07 24.1866 31.2261C24.1866 31.3823 24.1246 31.5321 24.0141 31.6425C23.9037 31.7529 23.7539 31.815 23.5978 31.815Z"
                      fill="#4B535D"
                    />
                  </svg>
                </div>
                <h5>Community Impact</h5>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Service area end here */}

      {/* Video area start here */}
      <section className="video-nine-aera">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="video-nine__image imageRightToLeft gsap__parallax wow">
              <img src="images/video/video-nine-image.jpg" alt="image" />
              <div className="btn-video video-pulse">
                <a
                  className="video-popup"
                  href="https://www.youtube.com/watch?v=-CPWktdSCcI"
                >
                  <i className="fa-sharp fa-light fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="video-nine__item"
              data-background="images/bg/video-nine-bg-right.jpg"
            >
              <div className="section-header mb-30">
                <h6 className="text-white">
                  13 Years of Growing Together with Our Learners
                </h6>
                <h2 className="wow text-white splt-txt" data-splitting="">
                  Empowering Educators, Transforming Learning, and Shaping the
                  Future
                </h2>
              </div>
              <div className="progress-area">
                <div className="progress__title mb-1">
                  <h4>Teacher Training & Professional Development</h4>
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
              <div className="progress-area mt-30">
                <div className="progress__title mb-1">
                  <h4>Curriculum & Learning Pathways</h4>
                  <span>
                    <span className="progress-count">93</span>%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar wow slideInLeft"
                    data-wow-duration=".85s"
                    role="progressbar"
                    style={{ width: '93%' }}
                    aria-valuenow={93}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <div className="progress-area mt-30">
                <div className="progress__title mb-1">
                  <h4>Educational Impact & Community Outreach</h4>
                  <span>
                    <span className="progress-count">99</span>%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar wow slideInLeft"
                    data-wow-duration=".60s"
                    role="progressbar"
                    style={{ width: '99%' }}
                    aria-valuenow={99}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <p className="text mt-30">
                Nalanda Learning delivers a comprehensive suite of educator
                training programs, curriculum support solutions, and strategic
                educational consultancy—empowering institutions and teachers to
                elevate learning outcomes and drive impactful change across
                classrooms and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Video area end here */}

      {/* Brand area start here */}
      <section className="brand-six-area pb-130 pt-130">
        <div className="container">
          <div className="section-header text-center mb-50">
            <h6>Our Partners</h6>
            <h2 className="wow splt-txt" data-splitting="">
              Those who trusted us
            </h2>
          </div>
          <div className="brand-six__wrp">
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image1.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image2.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image3.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image4.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image5.png" alt="image" />
            </a>
          </div>
          <div className="brand-six__wrp wrp-bottom">
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image6.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image7.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image8.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image9.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="images/brand/brand-six-image10.png" alt="image" />
            </a>
          </div>
          <div className="brand-six__text mt-50">
            <h5 className="text">2.6k School & University Join with Us. </h5>
          </div>
        </div>
      </section>
      {/* Brand area end here */}

      {/* Testimonial area start here */}
      <section className="testimonial-area bg-sub pt-130 pb-130">
        <div className="testimonial__shape">
          <img src="images/shape/testimonial-shape.png" alt="shape" />
        </div>
        <div className="testimonial__image animation__arryLeftRight">
          <img
            className="wow bounceInRight"
            src="images/testimonial/testimonial-image.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="testimonial__wrp">
            <div className="section-header mb-50">
              <h6>Celebrating Success with Nalanda Learning</h6>
              <h2 className="wow splt-txt" data-splitting="">
                Empowering children and educators <br /> to achieve more,
                together.
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
                          Nalanda Learning has transformed the way our teachers
                          engage with students. The interactive curriculum and
                          support have made a real difference in our classrooms.
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
                          As a parent, I have seen my child grow more confident
                          and curious thanks to Nalanda Learning’s innovative
                          approach. The resources are engaging and easy to use
                          at home.
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
                          The training and support from Nalanda Learning have
                          empowered our teachers to deliver lessons more
                          effectively. Our students are more engaged than ever!
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
                          We are grateful to Nalanda Learning for their
                          continuous innovation and dedication. Our school
                          community has benefited immensely from their programs.
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

      {/* FAQ area start here */}
      <section className="faq-one-area pt-130 pb-100">
        <div className="container">
          <div className="faq-one__wrp">
            <div className="row g-5 g-lg-4 justify-content-between">
              <div className="col-lg-4">
                <div className="faq-one-left">
                  <div className="section-header">
                    <h6>FREQUENTLY ASKED QUESTIONS</h6>
                    <h2 className="wow splt-txt" data-splitting="">
                      Curious about something? Just ask us!
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      Nalanda Learning is here to answer all your
                      education-related questions. If you have inquiries beyond
                      what's listed, feel free to contact us!
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="btn-two wow fadeInUp mt-50"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                    data-splitting=""
                    data-text="Contact Us"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="faq-one__accordion">
                  <div className="section-header mb-30">
                    <h6>Frequently Asked Questions</h6>
                    <h3 className="wow splt-txt" data-splitting="">
                      Learn more about Nalanda Learning
                    </h3>
                  </div>
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
                            Nalanda Learning is an educational platform offering
                            a wide range of courses, teacher training programs,
                            and certifications. We focus on building
                            foundational skills and providing continuous
                            professional development.
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
                          How can I register for courses at Nalanda Learning?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Registration is easy! Simply visit our "Join Nalanda
                            Learning" section, fill out the application form,
                            and select your program of interest. You can
                            register as a student, educator, or institution.
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
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What types of courses do you offer?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            We offer a wide range of courses in teacher
                            training, child development, digital marketing, and
                            more. Our courses are tailored to different learning
                            levels and offer certification upon completion.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What makes Nalanda Learning different from other
                          education platforms?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Nalanda Learning emphasizes on a hands-on, practical
                            approach to learning. Our courses are designed by
                            industry experts, and we offer personalized guidance
                            to our learners. Additionally, we provide upskilling
                            programs for professionals to help them grow in
                            their careers.
                          </p>
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

      {/* FAQ area end here */}

      {/* Contact area start here */}
      <section className="contact-nine-area">
        <div className="container">
          <div className="contact-nine__wrp">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="contact-four__image imageRightToLeft wow">
                  <img
                    src="images/contact/contact-nine-image.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <h4 className="text wow splt-txt" data-splitting="">
                      An insightful consulting firm with an engaged team,
                      providing solutions that blend analytics.
                    </h4>
                    <div className="info">
                      <div>
                        <h5 className="text-white">Tamal Mukherjee</h5>
                        <span className="text-white">Founder &amp; CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-four__form">
                  <div className="section-header mb-40">
                    <h6>Let's connect</h6>
                    <h4 className="wow splt-txt" data-splitting="">
                      We’re here to help
                    </h4>
                    <p className="mt-3">
                      Need help with a project or have a question about our
                      work? We're here for you.
                    </p>
                  </div>
                  <form action="#0">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number" />
                    <select
                      className="nice-select"
                      name="enrollAs"
                      defaultValue=""
                      style={{
                        marginBottom: '20px',
                        padding: '10px',
                        width: '100%',
                      }}
                    >
                      <option value="" disabled>
                        Enroll as a...
                      </option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="school">School</option>
                      <option value="university">University</option>
                    </select>
                    <input type="text" placeholder="Subject" />
                    <textarea
                      name="masage"
                      id="masage"
                      placeholder="Message"
                      defaultValue={''}
                    />
                    <button
                      className="btn-one rounded-0 w-100"
                      data-splitting=""
                      data-text="Submit Now"
                    >
                      Submit Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="rectangle">
              <div className="item wow" />
              <div className="item-dark wow" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact area end here */}
    </>
  );
}
