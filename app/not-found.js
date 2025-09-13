import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Nalanda Learning',
  description:
    'The page you are looking for could not be found. Return to Nalanda Learning homepage or explore our educational services.',
};

export default function NotFound() {
  return (
    <section className="error-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="error-content">
              <div className="error-code mb-40">
                <h1 style={{ fontSize: '8rem', fontWeight: '700', color: 'var(--theme-color2)' }}>
                  404
                </h1>
              </div>
              <div className="error-message">
                <h2 className="mb-20">Page Not Found</h2>
                <p className="mb-40">
                  Sorry, the page you are looking for could not be found. It might have been moved,
                  deleted, or you entered the wrong URL.
                </p>
                <div className="error-actions">
                  <Link href="/" className="btn-one me-3">
                    Go to Homepage
                  </Link>
                  <Link href="/blog" className="btn-outline">
                    Browse Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
