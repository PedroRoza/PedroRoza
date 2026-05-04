import { useInView } from '../hooks/useInView';

const SKILL_GROUPS = [
  {
    label: 'Frameworks',
    items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'WordPress', 'Angular'],
  },
  {
    label: 'Linguagens',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'Pascal'],
  },
  {
    label: 'Database',
    items: ['PL/pgSQL', 'MongoDB', 'MySQL', 'PhpMyAdmin'],
  },
  {
    label: 'DevOps',
    items: ['CI/CD', 'Jenkins', 'IaC', 'Docker', 'AWS', 'Azure'],
  },
  {
    label: 'IA',
    items: ['CMS', 'MCP'],
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="sobre"
      className="py-24 bg-muted"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`fade-up ${inView ? 'in-view' : ''} mb-14`}>
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm mb-3">
            <span className="w-6 h-px bg-primary inline-block" />
            Sobre mim
          </span>
          <h2 className="text-4xl font-extrabold text-dark">
            Quem está por trás do código
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <div
            className={`fade-up ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '120ms' }}
          >
            {/* Avatar / initials */}
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <span className="text-white font-extrabold text-xl tracking-tight">PR</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Sou um desenvolvedor full-stack brasileiro com experiência em projetos de diferentes
              escalas — de sites institucionais a plataformas SaaS complexas. Já trabalhei em
              agências digitais e de forma independente para clientes de diversas áreas.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Me preocupo com cada detalhe: desde a arquitetura do backend até a micro-animação
              que torna a interface mais fluida. Acredito que bom software é aquele que resolve
              problemas reais com elegância.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Quando não estou codando, estou estudando design ou explorando novas tecnologias.
            </p>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '7+',  label: 'Anos de experiência' },
                { value: '30+', label: 'Projetos entregues' },
                { value: '4',   label: 'Agências parceiras' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-extrabold text-primary">{value}</p>
                  <p className="text-sm text-gray-500 mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div
            className={`fade-up ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '240ms' }}
          >
            <h3 className="font-bold text-dark text-lg mb-6">Stack &amp; Ferramentas</h3>
            <div className="flex flex-col gap-5">
              {SKILL_GROUPS.map(({ label, items }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-3.5 py-1.5 rounded-lg hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
