'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function MEPSCPage() {
  useEffect(() => {
    // Apply data-background images
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach(el => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
        el.style.backgroundRepeat = 'no-repeat';
      }
    });
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
              <h1 className="title">MEPSC – Skill Training</h1>
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
                <li>MEPSC – Skill Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

      {/* Page Header Section */}
      <section className="about-eleven-area pt-130 pb-80">
        <div className="container">
          <div className="section-header text-center mb-80">
            <h6>Government Certified Program</h6>
            <h2 className="wow splt-txt" data-splitting="">
              Empowering Preschool Facilitators & Caregivers with <br />
              <span className="text-primary">Govt. of India Certified</span> Skill Training
            </h2>
            <p className="text mt-20">
              A nationally recognised programme under Skill India, aligned with NEP 2020, shaping
              the future of Early Childhood Care & Education
            </p>
          </div>
          <div className="text-center">
            <div className="simple-cta-buttons">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfRQXtsn-3g_9DJJ3ld8hXQgws6CADZbA76fFi5vsFBOHelBQ/viewform"
                className="simple-cta-btn primary-btn"
                target="_blank"
              >
                <i className="fa-solid fa-user-plus"></i>
                Enroll Now
              </Link>
              <Link
                href="/images/certificates/01_MEPSC-Teacher-Training-Brochure_New.pdf"
                className="simple-cta-btn secondary-btn"
                target="_blank"
              >
                <i className="fa-solid fa-download"></i>
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Partnership & Certification Program Section */}
      <section className="feature-five-area have-margin pt-130 pb-130">
        <div className="container">
          <div className="section-header text-center mb-80">
            <h6>Government Partnership</h6>
            <h2 className="wow splt-txt" data-splitting="">
              About the Initiative
            </h2>
            <p className="text mt-20">
              A collaborative effort between leading government bodies to enhance Early Childhood
              Care & Education standards across India
            </p>
          </div>

          {/* Certificate Showcase - Enhanced */}
          <div className="enhanced-certificate-showcase mb-80">
            <div className="certificate-hero-section">
              <div className="certificate-image-container">
                <img
                  src="/images/certificates/mepsc-sample-certificate.jpg"
                  alt="MEPSC Sample Certificate"
                  className="main-certificate-image"
                />
              </div>
              <div className="certificate-details-enhanced">
                <div className="cert-header">
                  <div className="cert-title">
                    <h3>Government of India Certified</h3>
                    <div className="cert-subtitle">
                      <span className="cert-badge">Official Certification</span>
                    </div>
                  </div>
                </div>

                <div className="cert-description">
                  <p>
                    This certificate is issued under the authority of{' '}
                    <strong>Government of India</strong> and is recognized nationwide for
                    professional development in Early Childhood Care & Education under the{' '}
                    <strong>Skill India Mission</strong>.
                  </p>
                </div>

                <div className="certification-highlights">
                  <div className="row g-3">
                    <div className="col-4">
                      <div className="highlight-item primary">
                        <div className="highlight-icon">
                          <i className="fa-solid fa-shield-check"></i>
                        </div>
                        <div className="highlight-content">
                          <h5>Nationally Recognized</h5>
                          <span>Valid across all states</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="highlight-item secondary">
                        <div className="highlight-icon">
                          <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div className="highlight-content">
                          <h5>NSQF Level 4</h5>
                          <span>Professional qualification</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="highlight-item tertiary">
                        <div className="highlight-icon">
                          <i className="fa-solid fa-award"></i>
                        </div>
                        <div className="highlight-content">
                          <h5>16 Credits</h5>
                          <span>Academic credit points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="certification-benefits">
                  <h4>Key Benefits</h4>
                  <div className="benefits-list">
                    <div className="benefit-point">
                      <i className="fa-solid fa-check-circle"></i>
                      <span>Lifetime validity with government backing</span>
                    </div>
                    <div className="benefit-point">
                      <i className="fa-solid fa-check-circle"></i>
                      <span>Enhanced career opportunities nationwide</span>
                    </div>
                    <div className="benefit-point">
                      <i className="fa-solid fa-check-circle"></i>
                      <span>Recognition by educational institutions</span>
                    </div>
                    <div className="benefit-point">
                      <i className="fa-solid fa-check-circle"></i>
                      <span>Pathway to higher qualifications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="enhanced-government-partnership">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="enhanced-partner-card">
                  <div className="card-header">
                    <div className="partner-logo">
                      <img src="/images/icons/icon1.png" alt="MSDE" className="partner-logo-img" />
                    </div>
                    <div className="govt-badge">
                      <span style={{ color: 'white' }}>Ministry</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>Ministry of Skill Development</h4>
                    <p>
                      Government policy framework and oversight for national skill development
                      initiatives
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="authority-seal">
                      <i className="fa-solid fa-shield-check"></i>
                      <span>Authorized</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="enhanced-partner-card">
                  <div className="card-header">
                    <div className="partner-logo">
                      <img
                        src="/images/icons/icon2.png"
                        alt="Skill India"
                        className="partner-logo-img"
                      />
                    </div>
                    <div className="govt-badge">
                      <span style={{ color: 'white' }}>Mission</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>Skill India Mission</h4>
                    <p>
                      National skill development initiative promoting vocational training across
                      sectors
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="authority-seal">
                      <i className="fa-solid fa-shield-check"></i>
                      <span>Authorized</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="enhanced-partner-card">
                  <div className="card-header">
                    <div className="partner-logo">
                      <img src="/images/icons/icon3.png" alt="NCVET" className="partner-logo-img" />
                    </div>
                    <div className="govt-badge">
                      <span style={{ color: 'white' }}>Council</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>National Council for VET</h4>
                    <p>
                      Quality assurance and certification body for vocational education and training
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="authority-seal">
                      <i className="fa-solid fa-shield-check"></i>
                      <span>Authorized</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6">
                <div className="enhanced-partner-card">
                  <div className="card-header">
                    <div className="partner-logo">
                      <img src="/images/icons/icon4.png" alt="MEPSC" className="partner-logo-img" />
                    </div>
                    <div className="govt-badge">
                      <span style={{ color: 'white' }}>PSC</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>Media & Entertainment PSC</h4>
                    <p>
                      Sector-specific skill standards and certification for media and entertainment
                      industry
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="authority-seal">
                      <i className="fa-solid fa-shield-check"></i>
                      <span>Authorized</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Key Learning Modules - 9 Points */}
          <div className="learning-modules-section mt-100">
            <div className="section-header text-center mb-60">
              <h3>Key Learning Modules</h3>
              <p className="text mt-20">
                Comprehensive curriculum covering all aspects of early childhood care and education
              </p>
            </div>
            <div className="row g-4 mb-60">
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">01</div>
                  <div className="module-content">
                    <h5>Child Development & Psychology</h5>
                    <p>Understanding cognitive, emotional, and social development</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">02</div>
                  <div className="module-content">
                    <h5>Early Learning Methodologies</h5>
                    <p>Play-based learning and proven teaching approaches</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">03</div>
                  <div className="module-content">
                    <h5>Health, Safety & Nutrition</h5>
                    <p>Ensuring physical well-being and safe environments</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">04</div>
                  <div className="module-content">
                    <h5>Inclusive Education Practices</h5>
                    <p>Supporting children with diverse needs and abilities</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">05</div>
                  <div className="module-content">
                    <h5>Parent & Community Engagement</h5>
                    <p>Building partnerships with families and communities</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">06</div>
                  <div className="module-content">
                    <h5>Assessment & Documentation</h5>
                    <p>Tracking and recording child progress effectively</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">07</div>
                  <div className="module-content">
                    <h5>Professional Ethics & Standards</h5>
                    <p>Maintaining high professional standards and ethics</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">08</div>
                  <div className="module-content">
                    <h5>Classroom Management</h5>
                    <p>Creating positive learning environments</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="module-card">
                  <div className="module-number">09</div>
                  <div className="module-content">
                    <h5>Technology Integration</h5>
                    <p>Using digital tools to enhance learning experiences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/images/certificates/01_MEPSC-Teacher-Training-Brochure_New.pdf"
                target="_blank"
                className="simple-download-btn"
              >
                <i className="fa-solid fa-file-pdf"></i>
                Download Detailed Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Career Transformation Section */}
      <section className="career-transformation-enhanced pt-130 pb-130">
        <div className="container">
          <div className="section-header text-center mb-80">
            <h6>Career Transformation</h6>
            <h2 className="wow splt-txt" data-splitting="">
              Transform Your Professional Journey
            </h2>
            <p className="text mt-20">
              Unlock new opportunities with government-certified skills and nationwide recognition
            </p>
          </div>

          <div className="transformation-grid">
            <div className="row g-4 mb-80">
              <div className="col-lg-4 col-md-6">
                <div className="transformation-card certificate-card">
                  <div className="card-header">
                    <div className="transformation-icon">
                      <i className="fa-solid fa-certificate"></i>
                    </div>
                    <div className="govt-verification">
                      <span style={{ color: 'white' }}>Govt. Verified</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4>Official Government Certificate</h4>
                    <p>
                      Receive an official certificate and marksheet issued directly by the
                      Government of India, ensuring nationwide recognition and credibility.
                    </p>
                    <div className="benefit-highlight">
                      <i className="fa-solid fa-shield-check"></i>
                      <span>Lifetime Validity</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="transformation-card recognition-card">
                  <div className="card-header">
                    <div className="transformation-icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="govt-verification">
                      <span style={{ color: 'white' }}>NCF Aligned</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4>National Credit Recognition</h4>
                    <p>
                      Your certification credits are recognized under the National Credit Framework,
                      enabling seamless progression in your educational journey.
                    </p>
                    <div className="benefit-highlight">
                      <i className="fa-solid fa-graduation-cap"></i>
                      <span>16 Credits Earned</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="transformation-card skills-card">
                  <div className="card-header">
                    <div className="transformation-icon">
                      <i className="fa-solid fa-brain"></i>
                    </div>
                    <div className="govt-verification">
                      <span style={{ color: 'white' }}>Industry Ready</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4>Advanced Professional Skills</h4>
                    <p>
                      Master cutting-edge ECCE methodologies, child psychology, and inclusive
                      education practices that employers actively seek.
                    </p>
                    <div className="benefit-highlight">
                      <i className="fa-solid fa-star"></i>
                      <span>Expert Level</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="transformation-card growth-card">
                  <div className="card-header">
                    <div className="transformation-icon">
                      <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div className="govt-verification">
                      <span style={{ color: 'white' }}>Career Boost</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4>Accelerated Career Growth</h4>
                    <p>
                      Access premium job opportunities, leadership roles, and higher salary packages
                      in the rapidly growing early childhood education sector.
                    </p>
                    <div className="benefit-highlight">
                      <i className="fa-solid fa-chart-line"></i>
                      <span>Boost Career Opportunity</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="transformation-card policy-card">
                  <div className="card-header">
                    <div className="transformation-icon">
                      <i className="fa-solid fa-book-open"></i>
                    </div>
                    <div className="govt-verification">
                      <span style={{ color: 'white' }}>NEP 2020</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4>Future-Ready Curriculum</h4>
                    <p>
                      Stay ahead with curriculum perfectly aligned to National Education Policy
                      2020, ensuring relevance for decades to come.
                    </p>
                    <div className="benefit-highlight">
                      <i className="fa-solid fa-rocket"></i>
                      <span>Future Proof</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="transformation-card impact-card">
                  <div className="card-header">
                    <div className="transformation-icon">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="govt-verification">
                      <span style={{ color: 'white' }}> Social Impact</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h4>Meaningful National Contribution</h4>
                    <p>
                      Join thousands of certified professionals making a lasting impact on India's
                      early childhood education landscape and future generations.
                    </p>
                    <div className="benefit-highlight">
                      <i className="fa-solid fa-hands-helping"></i>
                      <span>Nation Building</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="success-statistics">
            <div className="row g-4 text-center">
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Certified Professionals</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Job Placement Rate</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">40%</div>
                  <div className="stat-label">Average Salary Increase</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">28</div>
                  <div className="stat-label">States Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="final-cta-section pt-130 pb-130">
        <div className="container">
          <div className="final-cta-content text-center">
            <h2 className="mb-20">
              Join the Movement to Empower Early Childhood Educators Across India
            </h2>
            <p className="mb-40">
              Enrol today and be recognised as a certified professional under Government of India's
              Skill Development Initiative
            </p>
            <div className="highlighted-buttons">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfRQXtsn-3g_9DJJ3ld8hXQgws6CADZbA76fFi5vsFBOHelBQ/viewform"
                className="highlight-btn primary-highlight"
                target="_blank"
              >
                <i className="fa-solid fa-user-plus"></i>
                Enroll Now
              </Link>
              <Link href="#" className="highlight-btn secondary-highlight">
                <i className="fa-solid fa-handshake"></i>
                Partner with Us
              </Link>
              <Link
                href="/images/certificates/01_MEPSC-Teacher-Training-Brochure_New.pdf"
                target="_blank"
                className="highlight-btn tertiary-highlight"
              >
                <i className="fa-solid fa-download"></i>
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
