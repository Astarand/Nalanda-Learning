'use client';

import Image from 'next/image';
import { useState } from 'react';

// Individual team member card component
function OrgCard({ member, size = 'medium', showConnections = true }) {
  const [imageError, setImageError] = useState(false);

  const cardSizes = {
    xl: 'w-80 h-96 p-8',
    large: 'w-72 h-84 p-6',
    medium: 'w-64 h-80 p-5',
    small: 'w-56 h-72 p-4',
  };

  const imageSizes = {
    xl: 140,
    large: 120,
    medium: 100,
    small: 80,
  };

  const levelStyles = {
    1: 'bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white shadow-2xl border-0',
    2: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl border-0',
    3: 'bg-white border-2 border-indigo-200 shadow-lg hover:border-indigo-400',
    4: 'bg-white border border-gray-200 shadow-md hover:border-gray-400',
    5: 'bg-gray-50 border border-gray-100 shadow-sm hover:border-gray-300',
  };

  const textStyles = {
    1: 'text-white',
    2: 'text-white',
    3: 'text-gray-800',
    4: 'text-gray-700',
    5: 'text-gray-600',
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
    <div className="relative flex flex-col items-center">
      {/* Connecting line from top */}
      {showConnections && member.level > 1 && (
        <div className="absolute -top-8 w-px h-8 bg-gradient-to-b from-indigo-300 to-indigo-500"></div>
      )}

      {/* Card */}
      <div
        className={`
        org-card relative rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl
        ${cardSizes[size]} ${levelStyles[member.level]}
      `}
      >
        {/* Department indicator */}
        <div
          className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${
            member.level <= 2 ? 'bg-white/30' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
          }`}
        ></div>

        {/* Social links */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            <a
              href={`mailto:${member.email}`}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                member.level <= 2
                  ? 'bg-white/20 hover:bg-white/30 text-white'
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-600'
              }`}
            >
              <i className="fa-regular fa-envelope text-xs"></i>
            </a>
            <a
              href={member.linkedin}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                member.level <= 2
                  ? 'bg-white/20 hover:bg-white/30 text-white'
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-600'
              }`}
            >
              <i className="fa-brands fa-linkedin-in text-xs"></i>
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div
              className={`
              rounded-full overflow-hidden border-4 transition-all duration-300
              ${member.level <= 2 ? 'border-white/30' : 'border-indigo-100'}
            `}
            >
              <Image
                src={getImageSrc()}
                alt={`${member.name} - ${member.title}`}
                width={imageSizes[size]}
                height={imageSizes[size]}
                className="object-cover"
                priority={member.level <= 2}
                onError={handleImageError}
              />
            </div>
            {/* Level indicator */}
            <div
              className={`
              absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
              ${member.level <= 2 ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'}
            `}
            >
              L{member.level}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center flex-1 flex flex-col">
          <h3
            className={`
            font-bold mb-2 leading-tight
            ${member.level === 1 ? 'text-2xl' : member.level === 2 ? 'text-xl' : 'text-lg'}
            ${textStyles[member.level]}
          `}
          >
            {member.name}
          </h3>

          <p
            className={`
            font-semibold mb-3 text-sm
            ${member.level <= 2 ? 'text-white/90' : 'text-indigo-600'}
          `}
          >
            {member.title}
          </p>

          <p
            className={`
            text-xs leading-relaxed mb-4 flex-1
            ${member.level <= 2 ? 'text-white/80' : 'text-gray-600'}
          `}
          >
            {member.bio}
          </p>

          {/* Experience badge */}
          <div
            className={`
            inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
            ${member.level <= 2 ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-700'}
          `}
          >
            <i className="fa-regular fa-clock"></i>
            <span>{member.experience}</span>
          </div>
        </div>
      </div>

      {/* Connecting lines to children */}
      {showConnections && member.reports && member.reports.length > 0 && (
        <>
          {/* Vertical line down */}
          <div className="w-px h-8 bg-gradient-to-b from-indigo-500 to-indigo-300"></div>
          {/* Horizontal connector */}
          {member.reports.length > 1 && (
            <div className="relative w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent">
              {/* Connection points */}
              {member.reports.map((_, index) => (
                <div
                  key={index}
                  className="absolute w-2 h-2 bg-indigo-500 rounded-full -top-1"
                  style={{
                    left: `${(100 / (member.reports.length + 1)) * (index + 1)}%`,
                    transform: 'translateX(-50%)',
                  }}
                ></div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Main organizational chart component
export default function OrgChart({ organizationData }) {
  const [selectedMember, setSelectedMember] = useState(null);

  // Create a flat array of all members for easy lookup
  const allMembers = [
    ...organizationData.coFounders,
    ...organizationData.executives,
    ...organizationData.directors,
    ...organizationData.managers,
    ...organizationData.specialists,
  ];

  // Function to get members by level
  const getMembersByLevel = (level) => {
    return allMembers.filter((member) => member.level === level);
  };

  // Function to get direct reports
  const getDirectReports = (managerId) => {
    return allMembers.filter((member) => member.reportsTo === managerId);
  };

  return (
    <div className="org-chart-container">
      {/* Level 1: Co-Founders */}
      <div className="level-container mb-16">
        <div className="flex justify-center items-start gap-8 lg:gap-16">
          {organizationData.coFounders.map((member, index) => (
            <div key={member.id} className="relative">
              <OrgCard member={member} size="xl" showConnections={false} />

              {/* Connecting line between co-founders */}
              {index === 0 && organizationData.coFounders.length > 1 && (
                <div className="absolute top-1/2 -right-4 lg:-right-8 w-8 lg:w-16 h-px bg-gradient-to-r from-purple-400 to-indigo-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Level 2: CEO & Advisor */}
      <div className="level-container mb-12">
        <div className="flex justify-center items-start gap-8 lg:gap-24">
          {organizationData.executives.map((member) => (
            <div key={member.id} className="relative">
              {/* Connection line to parent */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-px h-16 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
              </div>

              <OrgCard member={member} size="large" showConnections={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Level 3: Directors */}
      <div className="level-container mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-7xl mx-auto">
          {organizationData.directors.map((member) => (
            <div key={member.id} className="relative">
              {/* Connection line to parent */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-indigo-400"></div>
              </div>

              <OrgCard member={member} size="medium" showConnections={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Level 4: Managers */}
      <div className="level-container mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 justify-items-center max-w-6xl mx-auto">
          {organizationData.managers.map((member) => (
            <div key={member.id} className="relative">
              {/* Connection line to parent */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-px h-10 bg-gradient-to-b from-indigo-400 to-gray-400"></div>
              </div>

              <OrgCard member={member} size="medium" showConnections={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Level 5: Specialists */}
      <div className="level-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-items-center max-w-5xl mx-auto">
          {organizationData.specialists.map((member) => (
            <div key={member.id} className="relative">
              {/* Connection line to parent */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-gray-300"></div>
              </div>

              <OrgCard member={member} size="small" showConnections={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Organizational Levels
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-600 to-blue-600"></div>
            <span className="text-sm text-gray-600">Level 1: Co-Founders</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <span className="text-sm text-gray-600">Level 2: Executives</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-indigo-200 bg-white"></div>
            <span className="text-sm text-gray-600">Level 3: Directors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-gray-200 bg-white"></div>
            <span className="text-sm text-gray-600">Level 4: Managers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-50 border border-gray-100"></div>
            <span className="text-sm text-gray-600">Level 5: Specialists</span>
          </div>
        </div>
      </div>
    </div>
  );
}
