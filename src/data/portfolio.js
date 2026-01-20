export const profile = {
  name: 'Marcin G',
  role: 'Inżynier informatyki',
  location: 'Polska',
  summary:
    'Student informatyki z pasją do tworzenia funkcjonalnych i estetycznych aplikacji webowych. Specjalizuję się w technologiach backendowych, ale również posiadam doświadczenie w frontendzie i bazach danych. Mam doświadczenie również w budowaniu aplikacji Power Apps oraz automatyzacji procesów biznesowych przy użyciu Power Automate.',
  highlights: ['Python', 'Docker','JavaScript', 'React', 'UI/UX','REST API','Power Apps', 'Sharepoint','Power Automate','SQL'],
  links: {
    email: 'mgorczynsky2@gmail.com',
    github: 'https://github.com/mgorcz2',
    linkedin: 'https://www.linkedin.com/in/marcin-gorczy%C5%84ski-2950532b3/',
  },
}

export const ui = {
  langShort: 'PL',
  langAria: 'Zmień język',
  homeAria: 'Strona główna',
  navAria: 'Nawigacja',
  nav: {
    projects: 'Projekty',
    skills: 'Umiejętności',
    experience: 'Doświadczenie',
    contact: 'Kontakt',
  },
  hero: {
    titlePrefix: 'Cześć, jestem',
    ctaProjects: 'Zobacz projekty',
    ctaEmail: 'Napisz maila',
    highlightsAria: 'Najważniejsze technologie',
  },
  summaryAria: 'Podsumowanie',
  stats: {
    location: 'Lokalizacja',
    specialization: 'Specjalizacja',
    availability: 'Dostępność',
    specializationValue: 'Fullstack dev',
    availabilityValue: 'Open to work',
  },
  sections: {
    projectsTitle: 'Projekty',
    projectsSubtitle: 'Wybrane prace — z opisem i krótką galerią.',
    skillsTitle: 'Umiejętności',
    skillsSubtitle: 'Technologie i narzędzia, z których korzystam najczęściej.',
    experienceTitle: 'Doświadczenie',
    contactTitle: 'Kontakt',
  },
  projects: {
    techAria: 'Technologie',
    gallery: 'Galeria',
    repo: 'Repo',
    thumbsAria: 'Podgląd galerii',
    openImageAriaPrefix: 'Otwórz zdjęcie',
  },
  contact: {
    emailLabel: 'Email',
    emailCta: 'Wyślij wiadomość',
  },
  footer: {
    top: 'Do góry',
  },
  lightbox: {
    dialogLabel: 'Galeria',
    close: 'Zamknij',
    closeAria: 'Zamknij galerię',
    prevAria: 'Poprzednie zdjęcie',
    nextAria: 'Następne zdjęcie',
  },
}

export const projects = [
  {
    id: 'shipment_monitoring',
    title: 'Shipment Monitoring',
    subtitle: 'Aplikacja do zarządzania przesyłkami',
    description:
      'Kurierzy, przesyłki i geolokalizacja, czyli podstawy Track&Trace. Aplikacja umożliwia śledzenie przesyłek oraz ich lokalizację na mapie.',
    tech: ['Python', 'React', 'Docker', 'Rest API', 'Pytest' , 'Selenium'],
    links: {
      repo: 'https://github.com/mgorcz2/shipment-monitoring-project',
    },
    images: [
      '/projects/shipment_monitoring/1.png',
      '/projects/shipment_monitoring/2.png',
      '/projects/shipment_monitoring/3.png',
      '/projects/shipment_monitoring/4.png',
      '/projects/shipment_monitoring/5.png',
      '/projects/shipment_monitoring/6.png',
      '/projects/shipment_monitoring/7.png',
      '/projects/shipment_monitoring/8.png',
    ],
  },
]

export const skills = [
  {
    title: 'Backend',
    items: ['Fastapi', 'JWT', 'Dependency Injection', 'SQL', 'pytest', 'Selenium', 'Docker', 'Onion architecture', 'asyncio'],
  },
  {
    title: 'Tooling',
    items: ['Git','Docker', 'VS Code','PyCharm', 'Jira', 'Microsoft Office'],
  },
  { 
    title: 'Low-code', 
    items: ['Power Apps', 'Power Automate', 'Sharepoint'] },
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Microsoft Canvas'],
  },
  {
    title: 'Dodatkowo',
    items: ['UML','Obsługa klienta', 'Analiza danych', 'Mechanika pojazdowa','Techniki tworzenia oprogramowania', 'Agile / Scrum', 'Testowanie oprogramowania'],
  },
]

export const experience = [
  {
    title: 'Power Platform developer',
    company: 'Michelin Olsztyn',
    period: '06.2025 — 12.2025 (staż)',
    bullets: [
      'Podczas realizacji stażu samodzielnie projektowałem i tworzyłem aplikacje w środowisku Microsoft Power Platform. Praca obejmowała pełen cykl tworzenia rozwiązania — od analizy potrzeb użytkowników, przez projekt interfejsu i logiki działania, aż po wdrożenie oraz testowanie aplikacji. Równocześnie pracowałem w zespole Scrum, biorąc udział w planowaniu sprintów i codziennych spotkaniach (Daily).',
    ],
  },
  {
    title: 'Edukacja',
    period: '2019 — Trwa',
    bullets: [
      'ZSZ im. Jana Ruszkowskiego. Technikum informatyczne 2018-2022',
      'Uniwersytet Warmińsko-Mazurski w Olsztynie, Wydział Matematyki i Informatyki, studia inżynierskie 2022-2026',
    ],
  },
    {
    title: 'Kursy',
    period: '',
    bullets: [
      'CKE: EE.08 Montaż i eksploatacja systemów komputerowych, urządzeń peryferyjnych i sieci 2021',
      'CKE: EE.09 Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych 2022',
    ],
  },
]
