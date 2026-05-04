import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
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

      <div className="max-w-6xl mx-auto px-6 w-full py-8 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* ── Left: text (desktop) / top (mobile) ── */}
        <div className="flex flex-col">
          {/* Label */}
          <span
            className={`fade-up ${loaded ? 'in-view' : ''} inline-flex items-center gap-2 text-accent font-semibold text-sm mb-5`}
          >
            <span className="w-6 h-px bg-primary inline-block" />
            {t('hero.role')}
          </span>

          {/* Heading */}
          <h1
            className={`fade-up ${loaded ? 'in-view' : ''} text-4xl md:text-[3.5rem] font-extrabold text-dark leading-[1.1] mb-5`}
            style={{ transitionDelay: '80ms' }}
          >
            {t('hero.greeting')}
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
            className={`fade-up ${loaded ? 'in-view' : ''} text-gray-500 text-base md:text-lg leading-relaxed mb-0 md:mb-9 max-w-md`}
            style={{ transitionDelay: '160ms' }}
          >
            {t('hero.tagline')}
          </p>

          {/* ── Rose: mobile only (between text and buttons) ── */}
          <div
            className={`fade-in ${loaded ? 'in-view' : ''} flex md:hidden justify-center items-center my-8`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-glow pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(124,0,33,0.18) 0%, transparent 65%)',
                  transform: 'scale(1.5)',
                }}
              />
              <img
                src="/logo-without-bg.png"
                alt="Pedro Rosa logo"
                width={220}
                height={220}
                className="animate-float relative z-10 drop-shadow-lg object-contain"
              />
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`fade-up ${loaded ? 'in-view' : ''} flex flex-wrap gap-4 mt-0 md:mt-0`}
            style={{ transitionDelay: '240ms' }}
          >
            <a
              href="#projetos"
              className="bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-accent transition-all duration-300 hover:scale-[1.04] shadow-md shadow-primary/20"
            >
              {t('hero.cta_projects')}
            </a>
            <a
              href="#contato"
              className="border-2 border-primary text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-muted transition-all duration-300 hover:scale-[1.04]"
            >
              {t('hero.cta_contact')}
            </a>
          </div>
        </div>

        {/* ── Right: Rose (desktop only) ── */}
        <div
          className={`fade-in ${loaded ? 'in-view' : ''} hidden md:flex justify-center items-center`}
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

    </section>
  );
}
