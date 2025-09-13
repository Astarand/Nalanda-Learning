import Link from 'next/link';
import Image from 'next/image';
import DirectorsClient from './DirectorsClient';

export const metadata = {
  title: 'Our Teams - Nalanda Learning | Leadership & Team Members',
  description:
    'Meet the talented teams at Nalanda Learning. Our leadership, technical experts, educators, and support staff are dedicated to transforming early childhood education across India.',
  keywords:
    'teams, leadership team, technical team, educators, marketing team, Nalanda Learning staff, education professionals',
};

// Team data organized by hierarchy
const teamData = {
  directors: [
    {
      id: 1,
      name: 'Tamal Mukherjee',
      designation: 'Co-Founder & Chairman',
      image: '/images/resource/director.jpg',
      bio: 'Visionary leader with 15+ years in EdTech. Former McKinsey consultant specializing in education transformation.',
      experience: '15+ Years',
    },
    {
      id: 2,
      name: 'Chirabrata Majumder',
      designation: 'Co-Founder',
      image: '/images/team/chirabrata.jpg',
      bio: 'Technology innovator and education enthusiast. IIT graduate with expertise in AI/ML applications for education.',
      experience: '12+ Years',
    },
  ],
  management: [
    {
      id: 3,
      name: 'Chris Raybould',
      designation: 'Chief Executive Officer',
      image: '/images/team/Chrish.jpeg',
      bio: 'Global education leader with 20+ years experience in international market expansion.',
      experience: '20+ Years',
    },
    {
      id: 4,
      name: 'Sumit Sarkar',
      designation: 'Advisor',
      image: '/images/team/Sumit.jpg',
      bio: 'CA and MBA from IIM Ahmedabad with expertise in EdTech funding and financial planning.',
      experience: '14+ Years',
    },
    {
      id: 5,
      name: 'Mr. Rajesh Kumar',
      designation: 'Chief Operating Officer',
      image:
        'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=400&background=10b981&color=ffffff&format=png',
      bio: 'Operations expert with 16+ years in scaling EdTech platforms and process optimization.',
      experience: '16+ Years',
    },
  ],
  technical: [
    {
      id: 6,
      name: 'Mr. Rohit Gupta',
      designation: 'Head of Product Development',
      image:
        'https://ui-avatars.com/api/?name=Rohit+Gupta&size=400&background=3b82f6&color=ffffff&format=png',
    },
    {
      id: 7,
      name: 'Mr. Arjun Nair',
      designation: 'Head of AI/ML',
      image:
        'https://ui-avatars.com/api/?name=Arjun+Nair&size=400&background=8b5cf6&color=ffffff&format=png',
    },
    {
      id: 8,
      name: 'Ms. Neha Joshi',
      designation: 'Senior Full Stack Developer',
      image:
        'https://ui-avatars.com/api/?name=Neha+Joshi&size=400&background=1d4ed8&color=ffffff&format=png',
    },
    {
      id: 9,
      name: 'Mr. Sanjay Kumar',
      designation: 'Mobile App Developer',
      image:
        'https://ui-avatars.com/api/?name=Sanjay+Kumar&size=400&background=7c2d12&color=ffffff&format=png',
    },
    {
      id: 10,
      name: 'Ms. Riya Singh',
      designation: 'UI/UX Designer',
      image:
        'https://ui-avatars.com/api/?name=Riya+Singh&size=400&background=7c3aed&color=ffffff&format=png',
    },
  ],
  teachers: [
    {
      id: 11,
      name: 'Ms. Meera Krishnan',
      designation: 'Senior ECCE Trainer',
      image:
        'https://ui-avatars.com/api/?name=Meera+Krishnan&size=400&background=dc2626&color=ffffff&format=png',
    },
    {
      id: 12,
      name: 'Mr. Rajesh Verma',
      designation: 'Curriculum Specialist',
      image:
        'https://ui-avatars.com/api/?name=Rajesh+Verma&size=400&background=7c3aed&color=ffffff&format=png',
    },
    {
      id: 13,
      name: 'Ms. Pooja Sharma',
      designation: 'Training Coordinator',
      image:
        'https://ui-avatars.com/api/?name=Pooja+Sharma&size=400&background=be185d&color=ffffff&format=png',
    },
    {
      id: 14,
      name: 'Dr. Anita Desai',
      designation: 'Research Director',
      image:
        'https://ui-avatars.com/api/?name=Anita+Desai&size=400&background=1f2937&color=ffffff&format=png',
    },
    {
      id: 15,
      name: 'Ms. Shreya Patel',
      designation: 'Content Specialist',
      image:
        'https://ui-avatars.com/api/?name=Shreya+Patel&size=400&background=7c3aed&color=ffffff&format=png',
    },
  ],
};

export default function TeamsPage() {
  return (
    <>
      {/* Breadcrumb area start here */}
      <section className="breadcrumb-area" data-background="/images/banner/banner-inner.jpg">
        <div className="container">
          <div className="breadcrumb__wrp">
            <div className="breadcrumb__item">
              <h1 className="title">Our Teams</h1>
              <nav aria-label="Breadcrumb">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>Teams</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

      {/* Teams Section */}
      <section className="teams-section py-16">
        <div className="container mx-auto px-4">
          {/* Directors Section */}
          <div className="hierarchy-section mb-16">
            <div className="section-header text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Board of Directors</h2>
              <p className="text-gray-600">Leadership & Strategic Vision</p>
            </div>
            <div className="directors-grid">
              {teamData.directors.map((member, index) => (
                <div
                  key={member.id}
                  className="director-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="profile-img"
                      priority={true}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-designation">{member.designation}</p>
                    <p className="member-bio">{member.bio}</p>
                    <div className="experience-tag">{member.experience}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Management Section */}
          <div className="hierarchy-section mb-16">
            <div className="section-header text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Management Team</h2>
              <p className="text-gray-600">Executive Leadership</p>
            </div>
            <div className="management-grid">
              {teamData.management.map((member, index) => (
                <div
                  key={member.id}
                  className="management-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="card-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="profile-img"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-designation">{member.designation}</p>
                    <p className="member-bio">{member.bio}</p>
                    <div className="experience-tag">{member.experience}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Team Section */}
          <div className="hierarchy-section mb-16">
            <div className="section-header text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Technical Team</h2>
              <p className="text-gray-600">Technology & Innovation</p>
            </div>
            <div className="team-grid">
              {teamData.technical.map((member, index) => (
                <div
                  key={member.id}
                  className="team-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="profile-img"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-designation">{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teachers Section */}
          <div className="hierarchy-section">
            <div className="section-header text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Teachers & Education Specialists
              </h2>
              <p className="text-gray-600">Learning & Development</p>
            </div>
            <div className="team-grid">
              {teamData.teachers.map((member, index) => (
                <div
                  key={member.id}
                  className="team-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="profile-img"
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-designation">{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client-side functionality */}
      <DirectorsClient />
    </>
  );
}
