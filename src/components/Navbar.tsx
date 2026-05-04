import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import RoseLogo from './ui/RoseLogo';

const NAV_LINKS = [
  { href: '#sobre',    label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-dark">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Pedro Rosa — início">
          <RoseLogo size={30} className="transition-transform duration-300 group-hover:scale-110" />
          <span className="font-bold text-white text-base tracking-tight">Pedro Rosa</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white/65 hover:text-white text-sm font-medium relative group transition-colors duration-200"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-white p-1 rounded"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 border-t border-white/10' : 'max-h-0'
        } bg-dark`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-white/75 hover:text-white font-medium transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-primary font-semibold hover:text-accent transition-colors duration-200"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
