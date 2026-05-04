import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, CODE_TO_SLUG, type LangCode } from '../i18n';

/* ── Language Switcher dropdown ─────────────────────────────── */
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate  = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find(l => l.code === i18n.language) ?? LANGUAGES[0];

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function switchLang(code: LangCode) {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    navigate(`/${CODE_TO_SLUG[code]}`);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 text-white/65 hover:text-white text-sm font-medium transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Selecionar idioma"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 bg-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 min-w-[140px]"
        >
          {LANGUAGES.map(lang => (
            <li key={lang.code} role="option" aria-selected={lang.code === i18n.language}>
              <button
                onClick={() => switchLang(lang.code)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-colors duration-150 text-left
                  ${lang.code === i18n.language
                    ? 'bg-primary/30 text-white'
                    : 'text-white/65 hover:bg-white/10 hover:text-white'}`}
              >
                <span className="text-base">{lang.flag}</span>
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Navbar ─────────────────────────────────────────────────── */
export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { href: '#sobre',    label: t('nav.about') },
    { href: '#projetos', label: t('nav.projects') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-dark">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Pedro Rosa — início">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img src="/logo-without-bg.png" alt="Pedro Rosa logo" width={34} height={34} className="object-contain" />
          </div>
          <span className="font-bold text-white text-base tracking-tight">Pedro Rosa</span>
        </a>

        {/* Desktop links + switcher */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-white/65 hover:text-white text-sm font-medium relative group transition-colors duration-200">
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-200">
              {t('nav.contact')}
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Mobile: switcher + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(v => !v)}
            className="text-white p-1 rounded"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 border-t border-white/10' : 'max-h-0'} bg-dark`}>
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setIsOpen(false)} className="block py-2 text-white/75 hover:text-white font-medium transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" onClick={() => setIsOpen(false)} className="block py-2 text-primary font-semibold hover:text-accent transition-colors duration-200">
              {t('nav.contact')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
