'use client';
import { useEffect, useState } from 'react';

export default function CareerClient({ jobOpenings }) {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Apply data-background images
    const bgElements = document.querySelectorAll('[data-background]');
    bgElements.forEach((el) => {
      const bg = el.getAttribute('data-background');
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });

    // Initialize animations
    if (typeof window !== 'undefined') {
      if (window.WOW) {
        new window.WOW().init();
      }
    }
  }, []);

  const filteredJobs =
    activeFilter === 'all'
      ? jobOpenings
      : jobOpenings.filter((job) => job.department.toLowerCase() === activeFilter);

  const departments = ['all', 'education', 'technology', 'business development', 'analytics'];

  return (
    <section className="job-openings-area pt-130 pb-130" id="open-roles">
      <div className="container">
        <div className="section-header text-center">
          <h6>Open Positions</h6>
          <h2 className="wow splt-txt" data-splitting="">
            Current Job Openings
          </h2>
        </div>

        {/* Job Filter Tabs */}
        <div className="job-filter mb-50">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            {departments.map((dept) => (
              <li key={dept} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeFilter === dept ? 'active' : ''}`}
                  onClick={() => setActiveFilter(dept)}
                  aria-label={`Filter jobs by ${dept}`}
                >
                  {dept === 'all' ? 'All Positions' : dept.charAt(0).toUpperCase() + dept.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          <div className="row g-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className="col-lg-6">
                <div className="job-card h-100">
                  <div className="job-card__header">
                    <div className="job-meta">
                      <span className="department">{job.department}</span>
                      <span className="type">{job.type}</span>
                    </div>
                    <h4 className="job-title">{job.title}</h4>
                    <div className="job-details">
                      <span>
                        <i className="fa-light fa-location-dot"></i>
                        {job.remote ? `${job.location} (Remote)` : job.location}
                      </span>
                    </div>
                  </div>
                  <div className="job-card__body">
                    <p className="job-description">{job.summary}</p>
                    <div className="job-requirements">
                      <h6>Key Requirements:</h6>
                      <ul>
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="job-card__footer">
                    <button className="btn-one" aria-label={`Apply for ${job.title} position`}>
                      View Details <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply CTA */}
        <div className="apply-cta text-center mt-60">
          <div className="apply-cta__content">
            <h3 className="mb-20">Ready to Make an Impact?</h3>
            <p className="mb-30">
              Don't see the perfect role? We're always looking for talented individuals who share
              our passion for transforming education.
            </p>
            <button className="btn-one btn-lg">
              Send Us Your Resume <i className="fa-light fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
