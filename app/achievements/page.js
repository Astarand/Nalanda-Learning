import Image from 'next/image';

export default function AchievementsPage() {
  const achievements = [
    {
      img: '/images/achivement/1.jpg',
      title: 'National Award 2022',
      desc: 'Recognized for excellence in education innovation.',
    },
    {
      img: '/images/achivement/2.jpg',
      title: 'Best EdTech Startup',
      desc: 'Awarded for outstanding impact in digital learning.',
    },
    {
      img: '/images/achivement/3.jpg',
      title: 'Global Partnership',
      desc: 'Collaborated with international education leaders.',
    },
    {
      img: '/images/achivement/4.jpg',
      title: '100K+ Students',
      desc: 'Empowered over 100,000 learners nationwide.',
    },
    {
      img: '/images/achivement/5.jpg',
      title: 'Innovation Grant',
      desc: 'Secured funding for AI-powered learning tools.',
    },
  ];
  return (
    <section className="achievements-area pt-130 pb-130">
      <div className="container">
        <div className="section-header mb-60 text-center">
          <h2 className="wow splt-txt" data-splitting="">
            Our Achievements
          </h2>
          <p>
            Celebrating milestones and recognitions on our journey to transform
            education.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {achievements.map((a, i) => (
            <div className="col-md-4 col-lg-3" key={i}>
              <div className="achievement-card text-center p-4 bg-white rounded shadow-sm h-100">
                <Image
                  src={a.img}
                  alt={a.title}
                  width={220}
                  height={220}
                  className="mb-3 rounded"
                />
                <h4 className="mb-2">{a.title}</h4>
                <p className="small text-muted">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-60">
          <a href="/about" className="btn-one">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
