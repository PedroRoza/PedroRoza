import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-16 flex items-center bg-white relative overflow-hidden"
    >
      {/* Subtle radial glow (right side, behind rose) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 55% at 78% 52%, rgba(124,0,33,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Background micro-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#7c0021 1px, transparent 1px), linear-gradient(to right, #7c0021 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* ── Left: text ── */}
        <div>
          {/* Label */}
          <span
            className={`fade-up ${loaded ? 'in-view' : ''} inline-flex items-center gap-2 text-accent font-semibold text-sm mb-5`}
          >
            <span className="w-6 h-px bg-primary inline-block" />
            Full Stack Developer
          </span>

          {/* Heading */}
          <h1
            className={`fade-up ${loaded ? 'in-view' : ''} text-5xl md:text-[3.5rem] font-extrabold text-dark leading-[1.1] mb-5`}
            style={{ transitionDelay: '80ms' }}
          >
            Olá, eu sou
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #7c0021 30%, #8e475c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Pedro Rosa
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`fade-up ${loaded ? 'in-view' : ''} text-gray-500 text-lg leading-relaxed mb-9 max-w-md`}
            style={{ transitionDelay: '160ms' }}
          >
            Desenvolvedor full-stack, transformo ideias em experiências digitais memoráveis.
            Código limpo, design cuidadoso e performático utilizando tecnologia de ponta.
          </p>

          {/* CTAs */}
          <div
            className={`fade-up ${loaded ? 'in-view' : ''} flex flex-wrap gap-4`}
            style={{ transitionDelay: '240ms' }}
          >
            <a
              href="#projetos"
              className="bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent transition-all duration-300 hover:scale-[1.04] shadow-md shadow-primary/20"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-muted transition-all duration-300 hover:scale-[1.04]"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        {/* ── Right: Rose ── */}
        <div
          className={`fade-in ${loaded ? 'in-view' : ''} flex justify-center items-center`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="relative">
            {/* Glow halo */}
            <div
              className="absolute inset-0 rounded-full animate-glow pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(124,0,33,0.18) 0%, transparent 65%)',
                transform: 'scale(1.5)',
              }}
            />
            <img
              src="/logo-without-bg.png"
              alt="Pedro Rosa logo"
              width={340}
              height={340}
              className="animate-float relative z-10 drop-shadow-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
