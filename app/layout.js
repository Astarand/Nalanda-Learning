import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Nalanda Learning - Transforming Education Through Innovation',
  description:
    "India's most integrated education impact platform connecting early childhood teacher training, global teaching careers, and AI-powered learning infrastructure. MEPSC certified programmes.",
  keywords:
    'education, teacher training, ECCE, MEPSC, early childhood education, AI learning platform, global teaching careers',
  authors: [{ name: 'Nalanda Learning' }],
  creator: 'Nalanda Learning',
  publisher: 'Nalanda Learning',
  openGraph: {
    title: 'Nalanda Learning - Transforming Education Through Innovation',
    description:
      "India's most integrated education impact platform connecting early childhood teacher training, global teaching careers, and AI-powered learning infrastructure.",
    url: 'https://nalandalearning.in',
    siteName: 'Nalanda Learning',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nalanda Learning - Transforming Education Through Innovation',
    description:
      "India's most integrated education impact platform connecting early childhood teacher training, global teaching careers, and AI-powered learning infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        {/* CSS links */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/meanmenu.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/splitting.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/tm-bs-mp.css" />
        <link rel="stylesheet" href="/css/tm-utility-classes.css" />
      </head>
      <body>
        <Header />
        <main role="main">{children}</main>
        <Footer />
        {/* Back to top area */}
        <div className="scroll-up">
          <svg
            className="scroll-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* JS scripts */}
        {/* jQuery must load first */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        {/* Bootstrap depends on jQuery */}
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        {/* meanmenu must load before script.js so the plugin is available */}
        <Script src="/js/meanmenu.js" strategy="afterInteractive" />
        {/* Other plugins */}
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/nice-select.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/parallax.js" strategy="afterInteractive" />
        <Script src="/js/splitting.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/js/gsap/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap/ScrollSmoother.min.js" strategy="afterInteractive" />
        {/* script.js must load after meanmenu.js */}
        <Script src="/js/script.js" strategy="afterInteractive" />
        <Script src="/js/jquery.validate.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.form.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
