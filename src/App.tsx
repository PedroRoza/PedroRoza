import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import { SLUG_TO_CODE, CODE_TO_SLUG, type LangCode } from './i18n';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

/** Determines the best default language slug from storage/browser */
function getDefaultSlug(): string {
  const saved = localStorage.getItem('lang') as LangCode | null;
  if (saved && CODE_TO_SLUG[saved]) return CODE_TO_SLUG[saved];
  const nav = navigator.language || '';
  if (nav.startsWith('en')) return 'en';
  if (nav.startsWith('es')) return 'es';
  return 'pt-br';
}

/** Layout rendered for a valid /:lang route */
function AppLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate  = useNavigate();

  useEffect(() => {
    const slug = lang?.toLowerCase() ?? '';
    const code = SLUG_TO_CODE[slug];

    if (!code) {
      // Unknown slug — redirect to detected default
      navigate(`/${getDefaultSlug()}`, { replace: true });
      return;
    }

    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      localStorage.setItem('lang', code);
    }
  }, [lang, i18n, navigate]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<AppLayout />} />
      <Route path="*"      element={<Navigate to={`/${getDefaultSlug()}`} replace />} />
    </Routes>
  );
}
