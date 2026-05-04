import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import { projects, type Project } from '../data/projects';

/* ── Browser Chrome Mockup ───────────────────────────────────── */
function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
      {/* Chrome bar */}
      <div className="bg-gray-100 px-3 py-2.5 flex items-center gap-1.5 border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <div className="flex-1 mx-3">
          <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate leading-none">
            {project.url.replace('https://', '')}
          </div>
        </div>
      </div>

      {/* Screenshot */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.screenshot}
          alt={`Screenshot do projeto ${project.title}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

/* ── Projects Section ────────────────────────────────────────── */
export default function Projects() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section id="projetos" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`fade-up ${inView ? 'in-view' : ''} mb-14`}>
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm mb-3">
            <span className="w-6 h-px bg-primary inline-block" />
            {t('projects.label')}
          </span>
          <h2 className="text-4xl font-extrabold text-dark mb-2">
            {t('projects.title')}
          </h2>
          <p className="text-gray-500 max-w-lg text-base leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`fade-up ${inView ? 'in-view' : ''} group rounded-2xl border border-gray-100 overflow-hidden hover:border-accent/40 hover:shadow-xl transition-all duration-350 hover:-translate-y-1.5`}
              style={{ transitionDelay: `${i * 100 + 80}ms` }}
            >
              <BrowserMockup project={project} />

              <div className="p-6">
                {/* Title row */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-dark text-xl leading-tight">{project.title}</h3>
                  {project.context && (
                    <span className="shrink-0 text-xs text-accent bg-muted px-2.5 py-1 rounded-full font-medium">
                      {project.context}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {t(project.descKey)}
                </p>

                {/* Footer: tags + link */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-accent bg-muted px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-accent transition-colors duration-200"
                  >
                    {t('projects.visit')}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
