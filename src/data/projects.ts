export interface Project {
  id: string;
  title: string;
  description: string;
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
    description:
      'Site institucional do Sindicato dos Trabalhadores do Ministério da Fazenda, com área de notícias, comunicados e acesso a serviços para servidores.',
    url: 'https://sindfaz.org.br',
    tags: ['WordPress', 'PHP', 'CSS', 'UI/UX'],
    screenshot: '/sindfaz.png',
    gradient: ['#1a0a0f', '#7c0021'],
  },
  {
    id: 'calculacivil',
    title: 'Calcula Civil',
    description:
      'Plataforma de cálculo estrutural para engenheiros civis, com ferramentas de dimensionamento, verificação de estruturas e geração de relatórios técnicos.',
    url: 'https://www.calculacivil.com.br',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    screenshot: '/calculacivil.png',
    gradient: ['#0d1a14', '#1a4a2e'],
  },
  {
    id: 'j8',
    title: 'J8 Imobiliária',
    description:
      'Site completo para imobiliária com listagem de imóveis, busca avançada por filtros, integração de CRM e apresentação de empreendimentos.',
    url: 'https://www.j8.com.br',
    tags: ['Next.js', 'TypeScript', 'UI/UX'],
    context: 'Coopers Digital',
    screenshot: '/j8.png',
    gradient: ['#0a0f1a', '#1a2e4a'],
  },
  {
    id: 'medel',
    title: 'MED-EL HearBetter',
    description:
      'Portal institucional da MED-EL para os mercados austríaco e alemão — empresa líder global em implantes cocleares e soluções auditivas.',
    url: 'https://hearbetter.medel.com',
    tags: ['Craft CMS', 'JavaScript', 'SCSS', 'UI/UX'],
    context: 'Coopers Digital',
    screenshot: '/hearbetter.png',
    gradient: ['#0a1520', '#0d3a5c'],
  },
];
