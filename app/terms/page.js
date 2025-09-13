import Link from 'next/link';
import TermsClient from './TermsClient';

export const metadata = {
  title: 'Terms & Conditions - Nalanda Learning | Legal Information',
  description:
    'Read the terms and conditions for using Nalanda Learning services, including our educational platforms, training programs, and digital solutions.',
  keywords: 'terms and conditions, legal, user agreement, service terms, Nalanda Learning policies',
};

export default function TermsPage() {
  return (
    <>
      {/* Breadcrumb area start here */}
      <section className="breadcrumb-area" data-background="/images/banner/banner-inner.jpg">
        <div className="container">
          <div className="breadcrumb__wrp">
            <div className="breadcrumb__item">
              <h1 className="title">Terms & Conditions</h1>
              <nav aria-label="Breadcrumb">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>Terms & Conditions</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

      {/* Terms Content Section */}
      <section className="terms-content-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="terms-content">
                <div className="terms-header mb-50">
                  <h1>Terms & Conditions</h1>
                  <p className="last-updated">Last updated: March 15, 2024</p>
                </div>

                {/* Table of Contents */}
                <div className="table-of-contents mb-50">
                  <h3>Table of Contents</h3>
                  <ul>
                    <li>
                      <a href="#acceptance">1. Acceptance of Terms</a>
                    </li>
                    <li>
                      <a href="#services">2. Description of Services</a>
                    </li>
                    <li>
                      <a href="#user-accounts">3. User Accounts and Registration</a>
                    </li>
                    <li>
                      <a href="#acceptable-use">4. Acceptable Use Policy</a>
                    </li>
                    <li>
                      <a href="#intellectual-property">5. Intellectual Property Rights</a>
                    </li>
                    <li>
                      <a href="#privacy">6. Privacy and Data Protection</a>
                    </li>
                    <li>
                      <a href="#payments">7. Payments and Refunds</a>
                    </li>
                    <li>
                      <a href="#limitation-liability">8. Limitation of Liability</a>
                    </li>
                    <li>
                      <a href="#termination">9. Termination</a>
                    </li>
                    <li>
                      <a href="#governing-law">10. Governing Law</a>
                    </li>
                    <li>
                      <a href="#contact">11. Contact Information</a>
                    </li>
                  </ul>
                </div>

                {/* Terms Sections */}
                <div className="terms-sections">
                  <section id="acceptance" className="terms-section mb-40">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                      By accessing and using the Nalanda Learning website, mobile applications, and
                      services (collectively, the "Services"), you accept and agree to be bound by
                      the terms and provision of this agreement. If you do not agree to abide by the
                      above, please do not use this service.
                    </p>
                    <p>
                      These Terms of Service ("Terms") govern your use of our website located at
                      nalandalearning.in (the "Service") operated by Nalanda Learning Systems Pvt
                      Ltd ("us", "we", or "our").
                    </p>
                  </section>

                  <section id="services" className="terms-section mb-40">
                    <h2>2. Description of Services</h2>
                    <p>
                      Nalanda Learning provides educational technology solutions, including but not
                      limited to:
                    </p>
                    <ul>
                      <li>MEPSC-certified Early Childhood Care and Education training programs</li>
                      <li>B2B SAAS platform for educational institutions</li>
                      <li>AI-powered learning analytics and assessment tools</li>
                      <li>Teacher training and professional development programs</li>
                      <li>Educational content and curriculum development services</li>
                    </ul>
                    <p>
                      We reserve the right to modify, suspend, or discontinue any aspect of our
                      Services at any time without prior notice.
                    </p>
                  </section>

                  <section id="user-accounts" className="terms-section mb-40">
                    <h2>3. User Accounts and Registration</h2>
                    <p>
                      To access certain features of our Services, you may be required to create an
                      account. When creating an account, you agree to:
                    </p>
                    <ul>
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain and promptly update your account information</li>
                      <li>Maintain the security of your password and account</li>
                      <li>Accept all risks of unauthorized access to your account</li>
                    </ul>
                    <p>
                      You are responsible for all activities that occur under your account, whether
                      or not you authorized such activities.
                    </p>
                  </section>

                  <section id="acceptable-use" className="terms-section mb-40">
                    <h2>4. Acceptable Use Policy</h2>
                    <p>You agree not to use our Services to:</p>
                    <ul>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe upon the rights of others</li>
                      <li>Distribute spam, malware, or other harmful content</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with or disrupt our Services</li>
                      <li>Use our Services for any commercial purpose without authorization</li>
                    </ul>
                    <p>
                      We reserve the right to investigate and take appropriate legal action against
                      anyone who violates this provision.
                    </p>
                  </section>

                  <section id="intellectual-property" className="terms-section mb-40">
                    <h2>5. Intellectual Property Rights</h2>
                    <p>
                      The Service and its original content, features, and functionality are and will
                      remain the exclusive property of Nalanda Learning Systems Pvt Ltd and its
                      licensors. The Service is protected by copyright, trademark, and other laws.
                    </p>
                    <p>
                      Our trademarks and trade dress may not be used in connection with any product
                      or service without our prior written consent.
                    </p>
                  </section>

                  <section id="privacy" className="terms-section mb-40">
                    <h2>6. Privacy and Data Protection</h2>
                    <p>
                      Your privacy is important to us. Please review our Privacy Policy, which also
                      governs your use of the Service, to understand our practices regarding the
                      collection, use, and disclosure of your personal information.
                    </p>
                    <p>
                      We comply with applicable data protection laws, including the Information
                      Technology Act, 2000, and the Personal Data Protection Bill (when enacted).
                    </p>
                  </section>

                  <section id="payments" className="terms-section mb-40">
                    <h2>7. Payments and Refunds</h2>
                    <p>
                      Certain aspects of our Services may require payment. You agree to pay all fees
                      and charges associated with your use of paid Services.
                    </p>
                    <ul>
                      <li>
                        All payments are processed securely through authorized payment gateways
                      </li>
                      <li>
                        Fees are non-refundable except as required by law or as specified in our
                        refund policy
                      </li>
                      <li>We reserve the right to change our pricing at any time</li>
                      <li>Failure to pay may result in suspension or termination of Services</li>
                    </ul>
                  </section>

                  <section id="limitation-liability" className="terms-section mb-40">
                    <h2>8. Limitation of Liability</h2>
                    <p>
                      In no event shall Nalanda Learning Systems Pvt Ltd, nor its directors,
                      employees, partners, agents, suppliers, or affiliates, be liable for any
                      indirect, incidental, special, consequential, or punitive damages, including
                      without limitation, loss of profits, data, use, goodwill, or other intangible
                      losses, resulting from your use of the Service.
                    </p>
                  </section>

                  <section id="termination" className="terms-section mb-40">
                    <h2>9. Termination</h2>
                    <p>
                      We may terminate or suspend your account and bar access to the Service
                      immediately, without prior notice or liability, under our sole discretion, for
                      any reason whatsoever and without limitation, including but not limited to a
                      breach of the Terms.
                    </p>
                    <p>
                      If you wish to terminate your account, you may simply discontinue using the
                      Service.
                    </p>
                  </section>

                  <section id="governing-law" className="terms-section mb-40">
                    <h2>10. Governing Law</h2>
                    <p>
                      These Terms shall be interpreted and governed by the laws of India. Any
                      disputes arising under these Terms shall be subject to the exclusive
                      jurisdiction of the courts in Kolkata, West Bengal, India.
                    </p>
                  </section>

                  <section id="contact" className="terms-section mb-40">
                    <h2>11. Contact Information</h2>
                    <p>
                      If you have any questions about these Terms & Conditions, please contact us:
                    </p>
                    <div className="contact-details">
                      <p>
                        <strong>Nalanda Learning Systems Pvt Ltd</strong>
                      </p>
                      <p>
                        1st Floor, 1/22, Poddar Nagar, Jodhpur Park
                        <br />
                        Kolkata, West Bengal 700068, India
                      </p>
                      <p>
                        Email:{' '}
                        <a href="mailto:legal@nalandalearning.in">legal@nalandalearning.in</a>
                      </p>
                      <p>
                        Phone: <a href="tel:+913340601234">+91 33 4060 1234</a>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client-side functionality */}
      <TermsClient />
    </>
  );
}
