import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer__shape-left"></div>
      <div className="container">
        <div className="footer__wrp pt-130 pb-130">
          <div className="footer__left">
            <Link href="/" className="logo">
              <Image src="/images/logo/nalanda_logo_white.png" alt="logo" width={120} height={80} />
            </Link>
            <p className="mt-30">
              Nalanda Learning is India’s most integrated education impact platform — connecting
              early childhood teacher training, global teaching careers, and AI-powered learning
              infrastructure to deliver real results. With backing from MEPSC, PSACWA, and nvoco,
              we’re shaping the future of learning.
            </p>
          </div>
          <div className="footer__right">
            <div className="footer__item-wrp">
              <div className="footer__item">
                <h4 className="title">Our Solutions</h4>
                <ul>
                  <li>
                    <Link href="/mepsc">MEPSC – Skill Training</Link>
                  </li>
                  <li>
                    <Link href="/b2b-saas">B2B SAAS Platform</Link>
                  </li>
                </ul>
              </div>
              <div className="footer__item">
                <h4 className="title">Company</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  {/* <li>
                    <Link href="/directors">Teams</Link>
                  </li>
                  <li>
                    <Link href="/career">Career</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li> */}
                </ul>
              </div>
              <div className="footer__item">
                <h4 className="title">
                  <i className="fas fa-map-marker-alt"></i> Contact Us
                </h4>
                <ul>
                  <li>
                    <a href="#0">
                      {' '}
                      AE-013, Canal Side Rd, A.E. Block sector 1, AE Block, Sector 1,
                      Bidhannagar,Kolkata, West Bengal 700064
                    </a>
                  </li>
                  <li>
                    <a href="#0">1800 203 3015</a>
                  </li>
                  <li>
                    <a href="#">contact@nalandalearning.in</a>
                  </li>
                </ul>
                <h4 className="title mt-3">Follow Us</h4>
                <div className="footer-socials">
                  <a href="#" aria-label="X (Twitter)" className="x-icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-lg-9">
                <p className="text-left footer-copyright-text">
                  &copy; 2025 <a href="#0">Nalanda Learning</a> Design & Developed by &nbsp;
                  <a href="#">ClicknGo</a>
                </p>
              </div>
              <div className="col-lg-3">
                <a href="/terms" className="policy">
                  Terms & Condition
                </a>
                <span className="policy mx-2">|</span>
                <a href="/privacy" className="policy">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__rectangle">
        <div className="item wow"></div>
        <div className="item-dark wow"></div>
      </div>
    </footer>
  );
}
