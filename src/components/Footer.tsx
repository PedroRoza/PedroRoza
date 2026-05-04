import RoseLogo from './ui/RoseLogo';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          aria-label="Voltar ao início"
        >
          <RoseLogo
            size={22}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-white/50 text-sm font-medium group-hover:text-white/75 transition-colors duration-200">
            Pedro Rosa
          </span>
        </a>

        <p className="text-white/25 text-xs text-center">
          © {new Date().getFullYear()} Pedro Rosa — Feito com React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
