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

const BASE_URL = 'https://pedro-rosa.dev.br';

const OG_LOCALES: Record<LangCode, string> = {
  'pt-BR': 'pt_BR',
  'en-US': 'en_US',
  'es-ES': 'es_ES',
};

/** Determines the best default language slug from storage/browser */
function getDefaultSlug(): string {
  const saved = localStorage.getItem('lang') as LangCode | null;
  if (saved && CODE_TO_SLUG[saved]) return CODE_TO_SLUG[saved];
  const nav = navigator.language || '';
  if (nav.startsWith('en')) return 'en';
  if (nav.startsWith('es')) return 'es';
  return 'pt-br';
}

/** Safely set a meta tag's content attribute */
function setMeta(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute('content', value);
}

/** Safely set a link tag's href attribute */
function setHref(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute('href', value);
}

/** Layout rendered for a valid /:lang route */
function AppLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n, t } = useTranslation();
  const navigate  = useNavigate();

  // 1. Language routing
  useEffect(() => {
    const slug = lang?.toLowerCase() ?? '';
    const code = SLUG_TO_CODE[slug];

    if (!code) {
      navigate(`/${getDefaultSlug()}`, { replace: true });
      return;
    }

    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      localStorage.setItem('lang', code);
    }
  }, [lang, i18n, navigate]);

  // 2. Dynamic SEO — runs every time the settled language changes
  useEffect(() => {
    const code = SLUG_TO_CODE[lang?.toLowerCase() ?? ''] as LangCode | undefined;
    if (!code) return;

    const slug    = CODE_TO_SLUG[code];
    const pageUrl = `${BASE_URL}/${slug}`;
    const title   = t('seo.title');
    const desc    = t('seo.description');

    // <title> + <html lang>
    document.title = title;
    document.documentElement.lang = code;

    // Primary meta
    setMeta('meta[name="description"]', desc);

    // Open Graph
    setMeta('meta[property="og:title"]',       title);
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[property="og:url"]',         pageUrl);
    setMeta('meta[property="og:locale"]',      OG_LOCALES[code] ?? 'pt_BR');

    // Twitter Card
    setMeta('meta[name="twitter:title"]',       title);
    setMeta('meta[name="twitter:description"]', desc);

    // Canonical
    setHref('link[rel="canonical"]', pageUrl);
  }, [i18n.language, t, lang]);

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
