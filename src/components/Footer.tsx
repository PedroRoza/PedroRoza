import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          aria-label="Voltar ao início"
        >
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              src="/logo-without-bg.png"
              alt="Pedro Rosa logo"
              width={34}
              height={34}
              className="object-contain"
            />
          </div>
          <span className="text-white/50 text-sm font-medium group-hover:text-white/75 transition-colors duration-200">
            Pedro Rosa
          </span>
        </a>

        <p className="text-white/25 text-xs text-center">
          © {new Date().getFullYear()} Pedro Rosa — {t('footer.made_with')}
        </p>
      </div>
    </footer>
  );
}
