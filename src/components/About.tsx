import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

const SKILL_GROUPS = [
  { labelKey: 'about.group_frameworks', items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'WordPress', 'Angular'] },
  { labelKey: 'about.group_languages',  items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'Pascal'] },
  { labelKey: 'about.group_database',   items: ['PL/pgSQL', 'MongoDB', 'MySQL', 'PhpMyAdmin'] },
  { labelKey: 'about.group_devops',     items: ['CI/CD', 'Jenkins', 'IaC', 'Docker', 'AWS', 'Azure'] },
  { labelKey: 'about.group_ai',         items: ['CMS', 'MCP'] },
];

export default function About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-24 bg-muted" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`fade-up ${inView ? 'in-view' : ''} mb-14`}>
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm mb-3">
            <span className="w-6 h-px bg-primary inline-block" />
            {t('about.label')}
          </span>
          <h2 className="text-4xl font-extrabold text-dark">{t('about.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <div className={`fade-up ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '120ms' }}>
            {/* Avatar */}
            <div className="w-64 h-64 rounded-2xl overflow-hidden mb-6 shadow-lg shadow-primary/20 ring-2 ring-primary/20">
              <img src="/foto.jpg" alt="Pedro Rosa" className="w-full h-full object-cover object-top" />
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">{t('about.bio1')}</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">{t('about.bio2')}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{t('about.bio3')}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '7+',  labelKey: 'about.stat_years' },
                { value: '30+', labelKey: 'about.stat_projects' },
                { value: '4',   labelKey: 'about.stat_agencies' },
              ].map(({ value, labelKey }) => (
                <div key={labelKey}>
                  <p className="text-3xl font-extrabold text-primary">{value}</p>
                  <p className="text-sm text-gray-500 mt-0.5 leading-tight">{t(labelKey)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={`fade-up ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '240ms' }}>
            <h3 className="font-bold text-dark text-lg mb-6">{t('about.stack_title')}</h3>
            <div className="flex flex-col gap-5">
              {SKILL_GROUPS.map(({ labelKey, items }) => (
                <div key={labelKey}>
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                    {t(labelKey)}
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
