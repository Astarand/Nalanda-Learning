import Link from 'next/link';
import PrivacyClient from './PrivacyClient';

export const metadata = {
  title: 'Privacy Policy - Nalanda Learning | Data Protection & Privacy',
  description:
    'Learn how Nalanda Learning collects, uses, and protects your personal information. Our comprehensive privacy policy ensures your data security and privacy.',
  keywords:
    'privacy policy, data protection, personal information, data security, GDPR compliance, privacy rights',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Breadcrumb area start here */}
      <section className="breadcrumb-area" data-background="/images/banner/banner-inner.jpg">
        <div className="container">
          <div className="breadcrumb__wrp">
            <div className="breadcrumb__item">
              <h1 className="title">Privacy Policy</h1>
              <nav aria-label="Breadcrumb">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>Privacy Policy</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

      {/* Privacy Content Section */}
      <section className="privacy-content-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="privacy-content">
                <div className="privacy-header mb-50">
                  <h1>Privacy Policy</h1>
                  <p className="last-updated">Last updated: March 15, 2024</p>
                </div>

                {/* Table of Contents */}
                <div className="table-of-contents mb-50">
                  <h3>Table of Contents</h3>
                  <ul>
                    <li>
                      <a href="#introduction">1. Introduction</a>
                    </li>
                    <li>
                      <a href="#information-collection">2. Information We Collect</a>
                    </li>
                    <li>
                      <a href="#information-use">3. How We Use Your Information</a>
                    </li>
                    <li>
                      <a href="#information-sharing">4. Information Sharing and Disclosure</a>
                    </li>
                    <li>
                      <a href="#data-security">5. Data Security</a>
                    </li>
                    <li>
                      <a href="#data-retention">6. Data Retention</a>
                    </li>
                    <li>
                      <a href="#your-rights">7. Your Rights and Choices</a>
                    </li>
                    <li>
                      <a href="#cookies">8. Cookies and Tracking Technologies</a>
                    </li>
                    <li>
                      <a href="#children-privacy">9. Children's Privacy</a>
                    </li>
                    <li>
                      <a href="#international-transfers">10. International Data Transfers</a>
                    </li>
                    <li>
                      <a href="#policy-changes">11. Changes to This Policy</a>
                    </li>
                    <li>
                      <a href="#contact-privacy">12. Contact Us</a>
                    </li>
                  </ul>
                </div>

                {/* Privacy Sections */}
                <div className="privacy-sections">
                  <section id="introduction" className="privacy-section mb-40">
                    <h2>1. Introduction</h2>
                    <p>
                      Nalanda Learning Systems Pvt Ltd ("we," "our," or "us") is committed to
                      protecting your privacy and ensuring the security of your personal
                      information. This Privacy Policy explains how we collect, use, disclose, and
                      safeguard your information when you visit our website, use our services, or
                      interact with us.
                    </p>
                    <p>
                      By using our services, you consent to the collection and use of information in
                      accordance with this policy. We encourage you to read this policy carefully to
                      understand our practices regarding your personal data.
                    </p>
                  </section>

                  <section id="information-collection" className="privacy-section mb-40">
                    <h2>2. Information We Collect</h2>

                    <h3>2.1 Personal Information</h3>
                    <p>We may collect the following types of personal information:</p>
                    <ul>
                      <li>Name, email address, phone number, and postal address</li>
                      <li>Educational background and professional qualifications</li>
                      <li>
                        Payment information (processed securely through third-party providers)
                      </li>
                      <li>Account credentials and preferences</li>
                      <li>Communication records and feedback</li>
                    </ul>

                    <h3>2.2 Automatically Collected Information</h3>
                    <p>When you use our services, we automatically collect:</p>
                    <ul>
                      <li>IP address, browser type, and operating system</li>
                      <li>Device information and unique identifiers</li>
                      <li>Usage data, including pages visited and time spent</li>
                      <li>Location data (with your consent)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>

                    <h3>2.3 Educational Data</h3>
                    <p>For our educational services, we may collect:</p>
                    <ul>
                      <li>Learning progress and assessment results</li>
                      <li>Course completion data and certifications</li>
                      <li>Student performance analytics</li>
                      <li>Interaction data within our learning platforms</li>
                    </ul>
                  </section>

                  <section id="information-use" className="privacy-section mb-40">
                    <h2>3. How We Use Your Information</h2>
                    <p>We use your personal information for the following purposes:</p>

                    <h3>3.1 Service Delivery</h3>
                    <ul>
                      <li>Providing and maintaining our educational services</li>
                      <li>Processing registrations and managing accounts</li>
                      <li>Delivering training programs and certifications</li>
                      <li>Providing customer support and technical assistance</li>
                    </ul>

                    <h3>3.2 Communication</h3>
                    <ul>
                      <li>Sending service-related notifications and updates</li>
                      <li>Responding to inquiries and providing support</li>
                      <li>Sending marketing communications (with consent)</li>
                      <li>Conducting surveys and collecting feedback</li>
                    </ul>

                    <h3>3.3 Improvement and Analytics</h3>
                    <ul>
                      <li>Analyzing usage patterns to improve our services</li>
                      <li>Conducting research and development</li>
                      <li>Personalizing user experience</li>
                      <li>Ensuring security and preventing fraud</li>
                    </ul>
                  </section>

                  <section id="information-sharing" className="privacy-section mb-40">
                    <h2>4. Information Sharing and Disclosure</h2>
                    <p>
                      We do not sell, trade, or rent your personal information. We may share your
                      information in the following circumstances:
                    </p>

                    <h3>4.1 Service Providers</h3>
                    <p>
                      We may share information with trusted third-party service providers who assist
                      us in:
                    </p>
                    <ul>
                      <li>Payment processing and financial services</li>
                      <li>Cloud hosting and data storage</li>
                      <li>Email delivery and communication services</li>
                      <li>Analytics and performance monitoring</li>
                    </ul>

                    <h3>4.2 Legal Requirements</h3>
                    <p>We may disclose your information when required by law or to:</p>
                    <ul>
                      <li>Comply with legal obligations or court orders</li>
                      <li>Protect our rights, property, or safety</li>
                      <li>Investigate potential violations of our terms</li>
                      <li>Respond to government requests or regulatory inquiries</li>
                    </ul>

                    <h3>4.3 Business Transfers</h3>
                    <p>
                      In the event of a merger, acquisition, or sale of assets, your information may
                      be transferred as part of the business transaction, subject to confidentiality
                      agreements.
                    </p>
                  </section>

                  <section id="data-security" className="privacy-section mb-40">
                    <h2>5. Data Security</h2>
                    <p>
                      We implement appropriate technical and organizational measures to protect your
                      personal information:
                    </p>
                    <ul>
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments and audits</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Employee training on data protection practices</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                    <p>
                      While we strive to protect your information, no method of transmission over
                      the internet or electronic storage is 100% secure. We cannot guarantee
                      absolute security.
                    </p>
                  </section>

                  <section id="data-retention" className="privacy-section mb-40">
                    <h2>6. Data Retention</h2>
                    <p>We retain your personal information for as long as necessary to:</p>
                    <ul>
                      <li>Provide our services and maintain your account</li>
                      <li>Comply with legal obligations and regulatory requirements</li>
                      <li>Resolve disputes and enforce our agreements</li>
                      <li>Maintain business records and analytics</li>
                    </ul>
                    <p>
                      When information is no longer needed, we securely delete or anonymize it in
                      accordance with our data retention policies.
                    </p>
                  </section>

                  <section id="your-rights" className="privacy-section mb-40">
                    <h2>7. Your Rights and Choices</h2>
                    <p>You have the following rights regarding your personal information:</p>

                    <h3>7.1 Access and Portability</h3>
                    <ul>
                      <li>Request access to your personal information</li>
                      <li>Obtain a copy of your data in a portable format</li>
                      <li>Receive information about how your data is processed</li>
                    </ul>

                    <h3>7.2 Correction and Updates</h3>
                    <ul>
                      <li>Update or correct inaccurate information</li>
                      <li>Complete incomplete personal data</li>
                      <li>Modify your account preferences</li>
                    </ul>

                    <h3>7.3 Deletion and Restriction</h3>
                    <ul>
                      <li>Request deletion of your personal information</li>
                      <li>Restrict processing of your data</li>
                      <li>Object to certain types of processing</li>
                    </ul>

                    <p>
                      To exercise these rights, please contact us using the information provided in
                      the "Contact Us" section below.
                    </p>
                  </section>

                  <section id="cookies" className="privacy-section mb-40">
                    <h2>8. Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar technologies to:</p>
                    <ul>
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Provide personalized content and advertisements</li>
                      <li>Ensure security and prevent fraud</li>
                    </ul>
                    <p>
                      You can control cookie settings through your browser preferences. However,
                      disabling cookies may affect the functionality of our services.
                    </p>
                  </section>

                  <section id="children-privacy" className="privacy-section mb-40">
                    <h2>9. Children's Privacy</h2>
                    <p>
                      Our services are designed for educational institutions and adult learners. We
                      do not knowingly collect personal information from children under 13 without
                      parental consent. If we become aware that we have collected such information,
                      we will take steps to delete it promptly.
                    </p>
                    <p>
                      For educational services involving minors, we work with schools and parents to
                      ensure appropriate consent and protection measures are in place.
                    </p>
                  </section>

                  <section id="international-transfers" className="privacy-section mb-40">
                    <h2>10. International Data Transfers</h2>
                    <p>
                      Your information may be transferred to and processed in countries other than
                      your country of residence. We ensure that such transfers comply with
                      applicable data protection laws and implement appropriate safeguards to
                      protect your information.
                    </p>
                  </section>

                  <section id="policy-changes" className="privacy-section mb-40">
                    <h2>11. Changes to This Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our
                      practices or legal requirements. We will notify you of any material changes by
                      posting the updated policy on our website and updating the "Last updated"
                      date.
                    </p>
                    <p>
                      Your continued use of our services after any changes indicates your acceptance
                      of the updated policy.
                    </p>
                  </section>

                  <section id="contact-privacy" className="privacy-section mb-40">
                    <h2>12. Contact Us</h2>
                    <p>
                      If you have any questions, concerns, or requests regarding this Privacy Policy
                      or our data practices, please contact us:
                    </p>
                    <div className="contact-details">
                      <p>
                        <strong>Data Protection Officer</strong>
                        <br />
                        Nalanda Learning Systems Pvt Ltd
                      </p>
                      <p>
                        1st Floor, 1/22, Poddar Nagar, Jodhpur Park
                        <br />
                        Kolkata, West Bengal 700068, India
                      </p>
                      <p>
                        Email:{' '}
                        <a href="mailto:privacy@nalandalearning.in">privacy@nalandalearning.in</a>
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
      <PrivacyClient />
    </>
  );
}
