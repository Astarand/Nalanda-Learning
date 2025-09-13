'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function TeamCard({ member, cardType = 'standard' }) {
  const [imageError, setImageError] = useState(false);

  const cardStyles = {
    director: 'team-card-director w-80 h-96 p-8',
    management: 'team-card-management w-72 h-84 p-6',
    standard: 'team-card-standard w-64 h-80 p-5',
  };

  const imageStyles = {
    director: 'w-32 h-32',
    management: 'w-28 h-28',
    standard: 'w-24 h-24',
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getImageSrc = () => {
    if (imageError) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        member.name,
      )}&size=400&background=6366f1&color=ffffff&format=png`;
    }
    return member.image;
  };

  return (
    <div className={`team-card ${cardStyles[cardType]} mx-auto`}>
      {/* Social Links */}
      <div className="social-links">
        <i className="fa-regular fa-plus" />
        <ul>
          <li>
            <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
              <i className="fa-regular fa-envelope" />
            </a>
          </li>
          <li>
            <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>

      {/* Profile Image */}
      <div className="team-image mb-6">
        <div className={`profile-container ${imageStyles[cardType]}`}>
          <Image
            src={getImageSrc()}
            alt={`${member.name} - ${member.designation}`}
            width={cardType === 'director' ? 128 : cardType === 'management' ? 112 : 96}
            height={cardType === 'director' ? 128 : cardType === 'management' ? 112 : 96}
            className="profile-image"
            priority={cardType === 'director'}
            onError={handleImageError}
          />
        </div>
      </div>

      {/* Content */}
      <div className="team-content text-center flex-1 flex flex-col">
        <h4
          className={`team-name ${
            cardType === 'director' ? 'text-2xl' : cardType === 'management' ? 'text-xl' : 'text-lg'
          } font-bold mb-2`}
        >
          {member.name}
        </h4>

        <p
          className={`team-designation ${
            cardType === 'director' ? 'text-lg' : 'text-base'
          } font-semibold mb-4`}
        >
          {member.designation}
        </p>

        <p
          className={`team-bio ${
            cardType === 'director' ? 'text-base' : 'text-sm'
          } leading-relaxed mb-6 flex-1`}
        >
          {member.bio}
        </p>

        <div className="experience-badge">
          <i className="fa-regular fa-clock mr-2"></i>
          <span>{member.experience} Experience</span>
        </div>
      </div>
    </div>
  );
}
