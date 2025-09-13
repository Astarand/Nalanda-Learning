import Link from 'next/link';
import { jobOpenings } from '../../lib/jobsData';
import CareerClient from './CareerClient';

export const metadata = {
  title: 'Career Opportunities - Nalanda Learning | Apply Now',
  description:
    'Explore exciting career opportunities at Nalanda Learning. Apply for roles in education, technology, and innovation. Simple application process with response in 5-7 days.',
  keywords:
    'careers, jobs, education jobs, EdTech careers, teacher training jobs, technology jobs, Nalanda Learning careers, apply now',
};

export default function CareerPage() {
  return (
    <>
      {/* Breadcrumb area start here */}
      <section className="breadcrumb-area" data-background="/images/banner/banner-inner.jpg">
        <div className="container">
          <div className="breadcrumb__wrp">
            <div className="breadcrumb__item">
              <h1 className="title">Join Nalanda Learning</h1>
              <nav aria-label="Breadcrumb">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>Career</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

      {/* How to Apply Section */}
      <section className="how-to-apply-area pt-130 pb-80" id="how-to-apply">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="how-to-apply__content text-center">
                <div className="section-header mb-50">
                  <h6>Application Process</h6>
                  <h2 className="wow splt-txt" data-splitting="">
                    How to Apply
                  </h2>
                  <p className="mt-20">
                    Ready to join our mission of transforming early childhood education in India?
                    Our streamlined application process makes it easy to apply for your dream role.
                    Follow these simple steps to get started on your journey with Nalanda Learning.
                  </p>
                </div>

                <div className="application-steps">
                  <div className="row g-4 mb-50">
                    <div className="col-lg-6 col-md-6">
                      <div className="step-card">
                        <div className="step-icon">
                          <i className="fa-solid fa-file-user"></i>
                        </div>
                        <h5 className="step-title">Prepare Your Application</h5>
                        <p>
                          Update your resume/CV and prepare a portfolio showcasing your relevant
                          work and achievements.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="step-card">
                        <div className="step-icon">
                          <i className="fa-solid fa-search"></i>
                        </div>
                        <h5 className="step-title">Choose Your Role</h5>
                        <p>
                          Browse our open positions below and click "View Details" on the role that
                          matches your skills and interests.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="step-card">
                        <div className="step-icon">
                          <i className="fa-solid fa-paper-plane"></i>
                        </div>
                        <h5 className="step-title">Submit Application</h5>
                        <p>
                          Complete the application form or email your application directly to{' '}
                          <a href="mailto:careers@nalandalearning.in">careers@nalandalearning.in</a>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="step-card">
                        <div className="step-icon">
                          <i className="fa-solid fa-clock"></i>
                        </div>
                        <h5 className="step-title">Await Response</h5>
                        <p>
                          Expect a response from our HR team within 5–7 business days regarding the
                          next steps in the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section - This will be handled by the client component */}
      <CareerClient jobOpenings={jobOpenings} />
    </>
  );
}
