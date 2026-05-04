import { Mail, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import RoseLogo from './ui/RoseLogo';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contato"
      className="py-24 bg-dark relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative rose — blurred, very subtle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.06] pointer-events-none">
        <RoseLogo size={460} />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Label */}
        <div className={`fade-up ${inView ? 'in-view' : ''}`}>
          <span className="inline-flex items-center justify-center gap-2 text-accent font-semibold text-sm mb-4">
            <span className="w-6 h-px bg-primary inline-block" />
            Contato
            <span className="w-6 h-px bg-primary inline-block" />
          </span>

          <h2 className="text-4xl font-extrabold text-white mb-4">
            Vamos construir algo juntos?
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Estou aberto a novas oportunidades, projetos freelance e conversas sobre tecnologia.
            Me manda uma mensagem!
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`fade-up ${inView ? 'in-view' : ''} mb-12 flex flex-col sm:flex-row items-center justify-center gap-4`}
          style={{ transitionDelay: '150ms' }}
        >
          <a
            href="mailto:pedrosilva.rosa@hotmail.com"
            className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent transition-all duration-300 hover:scale-[1.04] text-base shadow-xl shadow-primary/30"
          >
            <Mail size={20} />
            pedrosilva.rosa@hotmail.com
          </a>
          <a
            href="https://wa.me/5541997824506"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/50 transition-all duration-300 hover:scale-[1.04] text-base"
          >
            <Phone size={20} />
            (41) 99782-4506
          </a>
        </div>

        {/* Social links */}
        <div
          className={`fade-up ${inView ? 'in-view' : ''} flex justify-center gap-8`}
          style={{ transitionDelay: '280ms' }}
        >
          <a
            href="https://github.com/PedroRoza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 font-medium text-sm"
            aria-label="GitHub de Pedro Rosa"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-rosa-21061a202/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 font-medium text-sm"
            aria-label="LinkedIn de Pedro Rosa"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
