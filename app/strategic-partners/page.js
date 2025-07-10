import Image from 'next/image';

export default function StrategicPartnersPage() {
  const partners = [
    {
      img: '/images/brand/brand-image1.png',
      name: 'MEPSC',
      desc: 'Skill development and certification partner.',
    },
    {
      img: '/images/brand/brand-image2.png',
      name: 'PSACWA',
      desc: 'Academic and curriculum collaboration.',
    },
    {
      img: '/images/brand/brand-image3.png',
      name: 'nvoco',
      desc: 'Technology and digital learning partner.',
    },
    {
      img: '/images/brand/brand-image4.png',
      name: 'Shopify',
      desc: 'E-commerce and platform support.',
    },
    {
      img: '/images/brand/brand-image5.png',
      name: 'Spotify',
      desc: 'Media and outreach partner.',
    },
    {
      img: '/images/brand/brand-image6.png',
      name: 'Netflix',
      desc: 'Content and streaming collaboration.',
    },
  ];
  return (
    <section className="partners-area pt-130 pb-130">
      <div className="container">
        <div className="section-header mb-60 text-center">
          <h2 className="wow splt-txt" data-splitting="">
            Our Strategic Partners
          </h2>
          <p>
            We are proud to collaborate with leading organizations to drive
            educational impact.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {partners.map((p, i) => (
            <div className="col-md-4 col-lg-3" key={i}>
              <div className="partner-card text-center p-4 bg-white rounded shadow-sm h-100">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={120}
                  height={120}
                  className="mb-3"
                />
                <h5 className="mb-1">{p.name}</h5>
                <p className="small text-muted">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-60">
          <a href="/contact" className="btn-one">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
