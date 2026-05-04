export interface Project {
  id: string;
  title: string;
  /** i18n key pointing to the description in locale files, e.g. 'projects.sindfaz_desc' */
  descKey: string;
  url: string;
  tags: string[];
  context?: string;
  screenshot: string;
  gradient: [string, string];
}

export const projects: Project[] = [
  {
    id: 'sindfaz',
    title: 'Sindfaz',
    descKey: 'projects.sindfaz_desc',
    url: 'https://sindfaz.org.br',
    tags: ['WordPress', 'PHP', 'CSS', 'UI/UX'],
    screenshot: '/sindfaz.png',
    gradient: ['#1a0a0f', '#7c0021'],
  },
  {
    id: 'calculacivil',
    title: 'Calcula Civil',
    descKey: 'projects.calculacivil_desc',
    url: 'https://www.calculacivil.com.br',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    screenshot: '/calculacivil.png',
    gradient: ['#0d1a14', '#1a4a2e'],
  },
  {
    id: 'j8',
    title: 'J8 Imobiliária',
    descKey: 'projects.j8_desc',
    url: 'https://www.j8.com.br',
    tags: ['Next.js', 'TypeScript', 'UI/UX'],
    context: 'Coopers Digital',
    screenshot: '/j8.png',
    gradient: ['#0a0f1a', '#1a2e4a'],
  },
  {
    id: 'medel',
    title: 'MED-EL HearBetter',
    descKey: 'projects.medel_desc',
    url: 'https://hearbetter.medel.com',
    tags: ['Craft CMS', 'JavaScript', 'SCSS', 'UI/UX'],
    context: 'Coopers Digital',
    screenshot: '/hearbetter.png',
    gradient: ['#0a1520', '#0d3a5c'],
  },
];
