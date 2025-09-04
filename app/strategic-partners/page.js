'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function StrategicPartnersPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef(null);

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

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeVideoModal();
    }
  };
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
          minHeight: '350px',
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
                Strategic Partners
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
                <li className="list-inline-item text-white fw-semibold">Strategic Partners</li>
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
                <img src="/images/choose/choose-image.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-right">
                <div className="section-header">
                  <h2 className="wow splt-txt" data-splitting="">
                    We’re Building the Future Together – Join Us.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    At Nalanda Learning, we believe in building a better future through education
                    and innovation. We work hand-in-hand with our partners and educators to create
                    lasting impact and drive positive change in the world of learning.
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
                      <rect width={50} height={50} fill="url(#pattern0_1095_35666)" />
                      <defs>
                        <pattern
                          id="pattern0_1095_35666"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use xlinkHref="#image0_1095_35666" transform="scale(0.0163934)" />
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
                      <span className="hover-link-light text-white">Global Growth</span>
                    </h4>
                    <p className="text">
                      We aim to bring transformative educational solutions to underserved regions
                      worldwide.
                    </p>
                  </div>
                  <a href="#" className="arrow-btn mt-20">
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
                      <rect width={69} height={50} fill="url(#pattern0_1095_35651)" />
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
                      <span className="hover-link ">Professional Excellence</span>
                    </h4>
                    <p className="text">
                      We focus on continuous improvement and delivering value to our partners and
                      educators.
                    </p>
                  </div>
                  <a href="#" className="arrow-btn mt-20">
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
                      <rect width={69} height={50} fill="url(#pattern0_1095_35636)" />
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
                      <span className="hover-link-light text-white">Business Acumen</span>
                    </h4>
                    <p className="text">
                      Our strategic approach empowers educators to thrive and organisations to grow.
                    </p>
                  </div>
                  <a href="#" className="arrow-btn mt-20">
                    <i className="fa-thin fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Choose area end here */}

      {/* Service area start here */}
      <section className="service-three-area pb-40">
        <div className="container">
          <div className="col-xl-6 mx-auto">
            <h3 className="text-center pb-30">Key Points Where We Focus</h3>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <a href="#" className="service-three__item">
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
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <a href="#" className="service-three__item">
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
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <a href="#" className="service-three__item">
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
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <a href="#" className="service-three__item">
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
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <a href="#" className="service-three__item">
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
              className="col-md-6 col-xl-4 wow fadeInUp"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <a href="#" className="service-three__item">
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
              <div
                className="video-thumbnail-container"
                style={{
                  position: 'relative',
                  height: '900px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={openVideoModal}
              >
                <video
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src="/images/video/peacwa.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div
                  className="video-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    className="play-button"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      color: '#121c27',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <i className="fa-sharp fa-solid fa-play" style={{ marginLeft: '4px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-nine__item" data-background="/images/bg/video-nine-bg-right.jpg">
              <div className="section-header mb-30">
                <h6 className="text-white">15 Years of Growing Together with Our Learners</h6>
                <h3 className="wow text-white splt-txt" data-splitting="">
                  PARTNERSHIP WITH THE PRIVATE SCHOOLS AND CHILDREN WELFARE ASSOCIATION (PSACWA)
                </h3>
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
                MEPSC has partnered with PSACWA in training 12 lakh+ teachers in ECCE with the help
                of the members of the Association with an aim to empower teachers to deliver the
                best early childhood education as envisioned in NEP2020.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Video area end here */}

      {/* Brand area start here */}
      {/* <section className="brand-six-area pb-130 pt-130">
        <div className="container">
          <div className="section-header text-centre mb-50">
            <h6>Our Partners</h6>
            <h2 className="wow splt-txt" data-splitting="">
              Those who trusted us
            </h2>
          </div>
          <div className="brand-six__wrp">
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image1.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image2.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image3.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image4.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image5.png" alt="image" />
            </a>
          </div>
          <div className="brand-six__wrp wrp-bottom">
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image6.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image7.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image8.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image9.png" alt="image" />
            </a>
            <a href="#0" className="brand-six__item">
              <img src="/images/brand/brand-six-image10.png" alt="image" />
            </a>
          </div>
          <div className="brand-six__text mt-50">
            <h5 className="text">2.6k School & University Join with Us. </h5>
          </div>
        </div>
      </section> */}
      {/* Brand area end here */}

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
                          programmes.
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
                    <p className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                      Nalanda Learning is here to answer all your education-related questions. If
                      you have inquiries beyond what's listed, feel free to contact us!
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
                            Nalanda Learning is an educational platform offering a wide range of
                            courses, teacher training programmes, and certifications. We focus on
                            building foundational skills and providing continuous professional
                            development.
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
                            Registration is easy! Simply visit our "Join Nalanda Learning" section,
                            fill out the application form, and select your program of interest. You
                            can register as a student, educator, or institution.
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
                            We offer a wide range of courses in teacher training, child development,
                            digital marketing, and more. Our courses are tailored to different
                            learning levels and offer certification upon completion.
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
                          What makes Nalanda Learning different from other education platforms?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Nalanda Learning emphasises a hands-on, practical approach to learning.
                            Our courses are designed by industry experts, and we offer personalised
                            guidance to our learners. Additionally, we provide upskilling programmes
                            for professionals to help them grow in their careers.
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
                  <img src="/images/resource/director.jpg" alt="image" />
                  <div className="content">
                    <h4 className="text wow splt-txt" data-splitting="">
                      Nalanda Learning is an insightful educational platform with an engaged team,
                      offering solutions that blend analytics and innovative teaching methods to
                      deliver impactful learning experiences.
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
                      Need help with a project or have a question about our work? We're here for
                      you.
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
                    <textarea name="masage" id="masage" placeholder="Message" defaultValue={''} />
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="video-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
          onClick={handleModalClick}
        >
          <div
            className="video-modal-content"
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: '100%',
              aspectRatio: '16/9',
            }}
          >
            <button
              onClick={closeVideoModal}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 10000,
                padding: '10px',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.1)')}
              onMouseLeave={(e) => (e.target.style.background = 'transparent')}
            >
              <i className="fa-solid fa-times" />
            </button>
            <video
              ref={videoRef}
              src="/images/video/peacwa.mp4"
              controls
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
