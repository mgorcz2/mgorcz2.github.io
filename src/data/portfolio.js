export const profile = {
  name: 'Marcin G',
  role: 'Inżynier informatyki',
  location: 'Polska',
  summary:
    'Student informatyki z pasją do tworzenia funkcjonalnych i estetycznych aplikacji webowych. Specjalizuję się w technologiach backendowych, ale również posiadam doświadczenie w frontendzie i bazach danych. Mam doświadczenie również w budowaniu aplikacji Power Apps oraz automatyzacji procesów biznesowych przy użyciu Power Automate.',
  highlights: ['Python', 'Docker','JavaScript', 'React', 'UI/UX','REST API','Power Apps', 'Sharepoint','Power Automate','SQL'],
  links: {
    email: 'mgorczynsky2@gmail.com',
    github: 'https://github.com/mgorcz2'
  },
}

export const projects = [
  {
    id: 'shipment_monitoring',
    title: 'Shipment Monitoring',
    subtitle: 'Aplikacja do zarządzania przesyłkami',
    description:
      'Kurierzy, przesyłki i geolokalizacja, czyli podstawy Track&Trace. Aplikacja umożliwia śledzenie przesyłek oraz ich lokalizację na mapie.',
    tech: ['Python', 'React', 'Docker', 'Rest API'],
    links: {
      repo: 'https://github.com/mgorcz2/shipment-monitoring-project',
    },
    images: [
      '/projects/shipment_monitoring/1.png',
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
    items: ['Obsługa klienta', 'Analiza danych', 'Mechanika pojazdowa','Techniki tworzenia oprogramowania', 'Agile / Scrum', 'Testowanie oprogramowania'],
  },
]

export const experience = [
  {
    title: 'Frontend Developer (projekty własne)',
    company: 'Portfolio / Freelance',
    period: '2024 — 2026',
    bullets: [
      'Budowa aplikacji SPA w React (routing, stan, formularze).',
      'Dopracowane layouty responsywne i komponenty UI.',
      'Integracje z API + obsługa błędów i stanów ładowania.',
    ],
  },
  {
    title: 'Edukacja',
    period: '2019 — Trwa',
    company: 'Portfolio / Freelance',
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
