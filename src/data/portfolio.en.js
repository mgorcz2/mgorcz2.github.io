export const profile = {
  name: 'Marcin G',
  role: 'Computer Science Engineer',
  location: 'Poland',
  summary:
    "Computer Science Engineer passionate about building functional and visually polished web applications. I focus on backend technologies, and I also have experience with frontend and databases. I’ve worked with Microsoft Power Platform (Power Apps) and automated business processes using Power Automate.",
  highlights: ['Python', 'Docker', 'JavaScript', 'React', 'UI/UX', 'REST API', 'Power Apps', 'SharePoint', 'Power Automate', 'SQL'],
  links: {
    email: 'mgorczynsky2@gmail.com',
    github: 'https://github.com/mgorcz2',
    linkedin: 'https://www.linkedin.com/in/marcin-gorczy%C5%84ski-2950532b3/',
  },
}

export const ui = {
  langShort: 'EN',
  langAria: 'Change language',
  homeAria: 'Home',
  navAria: 'Navigation',
  nav: {
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    titlePrefix: "Hi, I'm",
    ctaProjects: 'View projects',
    ctaEmail: 'Send email',
    highlightsAria: 'Key technologies',
  },
  summaryAria: 'Summary',
  stats: {
    location: 'Location',
    specialization: 'Specialization',
    availability: 'Availability',
    specializationValue: 'Web app developer, Power platform developer',
    availabilityValue: 'Open to work',
  },
  sections: {
    projectsTitle: 'Projects',
    projectsSubtitle: 'Selected work — description and a short gallery.',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies and tools I use most often.',
    experienceTitle: 'Experience',
    contactTitle: 'Contact',
  },
  projects: {
    techAria: 'Technologies',
    gallery: 'Gallery',
    repo: 'Repo',
    thumbsAria: 'Gallery preview',
    openImageAriaPrefix: 'Open image',
  },
  contact: {
    emailLabel: 'Email',
    emailCta: 'Send message',
  },
  footer: {
    top: 'Back to top',
  },
  lightbox: {
    dialogLabel: 'Gallery',
    close: 'Close',
    closeAria: 'Close gallery',
    prevAria: 'Previous image',
    nextAria: 'Next image',
  },
}

export const projects = [
  {
    id: 'shipment_monitoring',
    title: 'Shipment Monitoring',
    subtitle: 'Shipment management app',
    description:
      'Couriers, shipments and geolocation — Track & Trace fundamentals. The app lets you track shipments and view their location on a map.',
    tech: ['Python', 'React', 'Docker', 'Rest API', 'Pytest' , 'Selenium'],
    links: {
      repo: 'https://github.com/mgorcz2/shipment-monitoring-project',
    },
    images: [      '/projects/shipment_monitoring/1.png',
      '/projects/shipment_monitoring/2.png',
      '/projects/shipment_monitoring/3.png',
      '/projects/shipment_monitoring/4.png',
      '/projects/shipment_monitoring/5.png',
      '/projects/shipment_monitoring/6.png',
      '/projects/shipment_monitoring/7.png',
      '/projects/shipment_monitoring/8.png',],
  },
    {
    id: 'shop',
    title: 'Shop MVP',
    subtitle: 'MVP Canvas shop application',
    description:
        'A minimal viable product (MVP) of a shop application built using Microsoft Power Apps Canvas. The app allows users to browse products (fetched via an API), add them to the cart, and place orders. It integrates with SharePoint for data storage and Power Automate for order processing workflows.',
    tech: ['Power Platform', 'Power Apps', 'Power Automate', 'SharePoint', 'REST API'],
    links: {
      repo: '',
    },
    images: [
      '/projects/pa_shop/1.png',
      '/projects/pa_shop/2.png'],
    }
]

export const skills = [
  {
    title: 'Backend',
    items: ['FastAPI', 'JWT', 'Dependency Injection', 'SQL', 'pytest', 'Selenium', 'Docker', 'Onion architecture', 'asyncio'],
  },
  {
    title: 'Tooling',
    items: ['Git', 'Docker', 'VS Code', 'PyCharm', 'Jira', 'Microsoft Office'],
  },
  {
    title: 'Low-code',
    items: ['Power Apps', 'Power Automate', 'SharePoint'],
  },
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive design', 'Microsoft Canvas'],
  },
  {
    title: 'Additional',
    items: ['UML', 'Customer support', 'Data analysis', 'Vehicle mechanics', 'Software engineering', 'Agile / Scrum', 'Software testing'],
  },
]

export const experience = [
  {
    title: 'Power Platform Developer',
    company: 'Michelin Olsztyn',
    period: '06.2025 — 12.2025 (internship)',
    bullets: [
      'During my internship I independently designed and built applications in the Microsoft Power Platform. The work covered the full delivery cycle — from user needs analysis, through UI and business logic design, to deployment and testing. In parallel, I worked in a Scrum team, participating in sprint planning and daily stand-ups (Daily).',
    ],
  },
  {
    title: 'Education',
    period: '2019 — Present',
    bullets: [
      'ZSZ im. Jana Ruszkowskiego — IT technical school (2018-2022)',
      'University of Warmia and Mazury in Olsztyn — Faculty of Mathematics and Computer Science, B.Eng. (2022-2026)',
    ],
  },
  {
    title: 'Courses',
    period: '',
    bullets: [
      'CKE: EE.08 Installation and operation of computer systems, peripherals and networks (2021)',
      'CKE: EE.09 Programming, building and administering websites and databases (2022)',
    ],
  },
]
