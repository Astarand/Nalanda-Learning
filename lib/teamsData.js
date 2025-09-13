// Comprehensive team data organized by categories for Nalanda Learning
export const leadershipTeam = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar Sharma',
    designation: 'Chairman & Managing Director',
    image: '/images/team/leadership-1.jpg',
    bio: 'Visionary leader with 20+ years in education technology and policy development, spearheading NEP 2020 implementation.',
    linkedin: 'https://linkedin.com/in/rajesh-sharma',
    email: 'rajesh.sharma@nalandalearning.in',
  },
  {
    id: 2,
    name: 'Ms. Priya Mehta',
    designation: 'Executive Director & COO',
    image: '/images/team/leadership-2.jpg',
    bio: 'Operations expert with MBA from IIM Bangalore, scaling operations to serve 2M+ students across India.',
    linkedin: 'https://linkedin.com/in/priya-mehta',
    email: 'priya.mehta@nalandalearning.in',
  },
  {
    id: 3,
    name: 'Dr. Amit Patel',
    designation: 'Director of Technology & Innovation',
    image: '/images/team/leadership-3.jpg',
    bio: 'Technology visionary with Ph.D. from IISc Bangalore, leading AI initiatives serving millions of learners.',
    linkedin: 'https://linkedin.com/in/amit-patel',
    email: 'amit.patel@nalandalearning.in',
  },
];

export const directorsManagement = [
  {
    id: 4,
    name: 'Dr. Sunita Agarwal',
    designation: 'Director of Academic Affairs',
    image: '/images/team/director-1.jpg',
    bio: 'Acclaimed educator with 18+ years in ECCE, designed curriculum for 1000+ programs nationwide.',
    linkedin: 'https://linkedin.com/in/sunita-agarwal',
    email: 'sunita.agarwal@nalandalearning.in',
  },
  {
    id: 5,
    name: 'Mr. Vikram Singh',
    designation: 'Director of Strategic Partnerships',
    image: '/images/team/director-2.jpg',
    bio: 'Partnership expert with MBA from XLRI, established collaborations with 15+ government bodies.',
    linkedin: 'https://linkedin.com/in/vikram-singh',
    email: 'vikram.singh@nalandalearning.in',
  },
  {
    id: 6,
    name: 'Ms. Kavita Sharma',
    designation: 'Director of Operations',
    image: '/images/team/director-3.jpg',
    bio: 'Operations specialist focused on sustainable education models, implemented programs in 200+ villages.',
    linkedin: 'https://linkedin.com/in/kavita-sharma',
    email: 'kavita.sharma@nalandalearning.in',
  },
  {
    id: 7,
    name: 'Dr. Anita Desai',
    designation: 'Director of Research & Development',
    image: '/images/team/director-4.jpg',
    bio: "Child development specialist and author of 'Foundations of Early Learning' bestseller.",
    linkedin: 'https://linkedin.com/in/anita-desai',
    email: 'anita.desai@nalandalearning.in',
  },
];

export const technicalTeam = [
  {
    id: 8,
    name: 'Mr. Rohit Gupta',
    designation: 'Head of Product Development',
    image: '/images/team/tech-1.jpg',
    bio: 'Product management expert with 12+ years in EdTech, led development of mobile apps used by 1M+ students.',
    linkedin: 'https://linkedin.com/in/rohit-gupta',
    email: 'rohit.gupta@nalandalearning.in',
  },
  {
    id: 9,
    name: 'Ms. Neha Joshi',
    designation: 'Senior Full Stack Developer',
    image: '/images/team/tech-2.jpg',
    bio: 'Full-stack developer specializing in React and Node.js, building scalable educational platforms.',
    linkedin: 'https://linkedin.com/in/neha-joshi',
    email: 'neha.joshi@nalandalearning.in',
  },
  {
    id: 10,
    name: 'Mr. Arjun Nair',
    designation: 'AI/ML Engineer',
    image: '/images/team/tech-3.jpg',
    bio: 'Machine learning specialist developing AI-powered learning analytics and recommendation systems.',
    linkedin: 'https://linkedin.com/in/arjun-nair',
    email: 'arjun.nair@nalandalearning.in',
  },
];

export const marketingTeam = [
  {
    id: 11,
    name: 'Ms. Deepika Rao',
    designation: 'Head of Marketing & Communications',
    image: '/images/team/marketing-1.jpg',
    bio: 'Marketing strategist with expertise in education sector, built brand presence across digital channels.',
    linkedin: 'https://linkedin.com/in/deepika-rao',
    email: 'deepika.rao@nalandalearning.in',
  },
  {
    id: 12,
    name: 'Mr. Karan Malhotra',
    designation: 'Digital Marketing Manager',
    image: '/images/team/marketing-2.jpg',
    bio: 'Digital marketing expert specializing in EdTech campaigns and social media strategy.',
    linkedin: 'https://linkedin.com/in/karan-malhotra',
    email: 'karan.malhotra@nalandalearning.in',
  },
  {
    id: 13,
    name: 'Ms. Shreya Patel',
    designation: 'Content Marketing Specialist',
    image: '/images/team/marketing-3.jpg',
    bio: 'Content strategist creating engaging educational content and thought leadership articles.',
    linkedin: 'https://linkedin.com/in/shreya-patel',
    email: 'shreya.patel@nalandalearning.in',
  },
];

export const teachersTeam = [
  {
    id: 14,
    name: 'Ms. Meera Krishnan',
    designation: 'Senior ECCE Trainer',
    image: '/images/team/teacher-1.jpg',
    bio: 'Certified early childhood educator with 15+ years experience, trained 3000+ teachers across India.',
    linkedin: 'https://linkedin.com/in/meera-krishnan',
    email: 'meera.krishnan@nalandalearning.in',
  },
  {
    id: 15,
    name: 'Mr. Rajesh Verma',
    designation: 'Curriculum Development Specialist',
    image: '/images/team/teacher-2.jpg',
    bio: 'Education specialist focused on NEP 2020 alignment and innovative teaching methodologies.',
    linkedin: 'https://linkedin.com/in/rajesh-verma',
    email: 'rajesh.verma@nalandalearning.in',
  },
  {
    id: 16,
    name: 'Ms. Pooja Sharma',
    designation: 'Teacher Training Coordinator',
    image: '/images/team/teacher-3.jpg',
    bio: 'Training coordinator managing nationwide MEPSC certification programs and workshops.',
    linkedin: 'https://linkedin.com/in/pooja-sharma',
    email: 'pooja.sharma@nalandalearning.in',
  },
];

// Helper function to get all team members
export function getAllTeamMembers() {
  return [
    ...leadershipTeam,
    ...directorsManagement,
    ...technicalTeam,
    ...marketingTeam,
    ...teachersTeam,
  ];
}

// Helper function to get team by category
export function getTeamByCategory(category) {
  switch (category) {
    case 'leadership':
      return leadershipTeam;
    case 'directors':
      return directorsManagement;
    case 'technical':
      return technicalTeam;
    case 'marketing':
      return marketingTeam;
    case 'teachers':
      return teachersTeam;
    default:
      return [];
  }
}
