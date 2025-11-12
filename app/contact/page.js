'use client';
import Link from 'next/link';
import { useEffect } from 'react';
export default function ContactPage() {
  useEffect(() => {
    // ✅ Apply data-background images
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach(el => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);
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
                Contact Us
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
                <li className="list-inline-item text-white fw-semibold">Contact</li>
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

      <section className="funfact-eight-area pt-130 pb-80">
        <div className="container">
          <div className="funfact-eight__wrp">
            <div className="row g-4">
              <div className="col-lg-4 d-flex">
                <div
                  className="funfact-eight__item flex-fill d-flex flex-column"
                  data-background="/images/funfact/funfact-eight-image1.jpg"
                  style={{
                    backgroundImage: 'url("/images/funfact/funfact-eight-image1.jpg")',
                    height: '100%',
                  }}
                >
                  <div className="inner-box flex-grow-1 d-flex flex-column">
                    <h3 className="title">Address</h3>
                    <p className="text mb-0">
                      Nalanda Learning Systems Pvt Ltd
                      <br />
                      AE-013, Canal Side Rd, A.E. Block sector 1, AE Block, Sector 1
                      <br />
                      Bidhannagar,Kolkata, West Bengal 700068
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div
                  className="funfact-eight__item flex-fill d-flex flex-column"
                  data-background="/images/funfact/funfact-eight-image2.jpg"
                  style={{
                    backgroundImage: 'url("/images/funfact/funfact-eight-image2.jpg")',
                    height: '100%',
                  }}
                >
                  <div className="inner-box flex-grow-1 d-flex flex-column">
                    <h3 className="title">Contact</h3>
                    <p className="text mb-0">
                      Toll-Free Number: <a href="tel:+913340601234">1800 203 3015</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div
                  className="funfact-eight__item flex-fill d-flex flex-column"
                  data-background="/images/funfact/funfact-eight-image2.jpg"
                  style={{
                    backgroundImage: 'url("/images/funfact/funfact-eight-image2.jpg")',
                    height: '100%',
                  }}
                >
                  <div className="inner-box flex-grow-1 d-flex flex-column">
                    <h3 className="title">Email</h3>
                    <p className="text mb-0">
                      <a href="mailto:info@nalandalearning.com">info@nalandalearning.in</a>
                      <br />
                      <a href="mailto:support@nalandalearning.com">support@nalandalearning.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact area start here */}
      <section className="contact-nine-area">
        <div className="container">
          <div className="contact-nine__wrp">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="contact-four__image imageRightToLeft wow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4208430545614!2d88.407663676021!3d22.600754631936493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275e26d87a615%3A0x7cc9abe4df4c9225!2sNalanda%20Learning%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752184119750!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nalanda Learning Systems Pvt Ltd Location"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-four__form">
                  <div className="section-header mb-40">
                    <h6>Let's connect</h6>
                    <h2 className="wow splt-txt" data-splitting="">
                      We’re here to help
                    </h2>
                    <p className="mt-3">
                      Need help with a project or have a question about our work? We're here for
                      you.
                    </p>
                  </div>
                  <form action="#0">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
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
          </div>
        </div>
      </section>
      {/* Contact area end here */}
    </>
  );
}
