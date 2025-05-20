export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'Google Calendar',
    desc: 'Google Calendar is a time-management and scheduling tool that helps users organize events, set reminders, and sync schedules across devices for seamless collaboration and planning..',
    
    href: 'https://google-calender-two.vercel.app/',

    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06nT-wkjp_ClDTgqTQnPUd1IBCIVSJKPsyQ&s',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
     
    ],
  },
  {
    title: 'Online Job Portal',
    desc: 'Developed a job portal allowing users to create accounts, log in, and apply for jobs. Recruiters can post, manage, and track job listings, facilitating seamless communication between applicants and employers.',
    subdesc:
      'Secure login and signup functionalities for both job seekers and recruiters.Users can browse and apply for jobs, with real-time updates on application status.',
    href: 'https://newjobportal.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: 'https://cdn.vectorstock.com/i/500p/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      
    ],
  },
  {
    title: 'Croma Clone',
    desc: ' Fully responsive replica of the Croma website,ensuring a smooth and consistent experience on any device.',
    subdesc:
      'Implemented user authentication with login,logout functionality and dynamically displayed product categories. Included sections like Trending, New Arrivals, Top Rated, and Best Sellers for enhanced navigation and a better shopping experience.',
    href: 'https://endsem-project-croma-clone-end-sem-projects-croma-d4o4jfu5nlac.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuJw-G69osCWDOvabS4K8FjdfiepJ_9FdfA&s',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
     
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

