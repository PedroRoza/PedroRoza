import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import esES from './locales/es-ES.json';

export const LANGUAGES = [
  { code: 'pt-BR', slug: 'pt-br', label: 'Português', flag: '🇧🇷' },
  { code: 'en-US', slug: 'en',    label: 'English',   flag: '🇺🇸' },
  { code: 'es-ES', slug: 'es',    label: 'Español',   flag: '🇪🇸' },
] as const;

export type LangCode = typeof LANGUAGES[number]['code'];
export type LangSlug = typeof LANGUAGES[number]['slug'];

export const SLUG_TO_CODE: Record<string, LangCode> = {
  'pt-br': 'pt-BR',
  'en':    'en-US',
  'es':    'es-ES',
};

export const CODE_TO_SLUG: Record<LangCode, LangSlug> = {
  'pt-BR': 'pt-br',
  'en-US': 'en',
  'es-ES': 'es',
};

function detectInitialLanguage(): LangCode {
  // 1. URL slug has priority (e.g. /en, /es, /pt-br)
  const slug = window.location.pathname.split('/')[1]?.toLowerCase() as LangSlug;
  if (SLUG_TO_CODE[slug]) return SLUG_TO_CODE[slug];

  // 2. LocalStorage
  const saved = localStorage.getItem('lang') as LangCode | null;
  if (saved && SLUG_TO_CODE[CODE_TO_SLUG[saved]]) return saved;

  // 3. Browser navigator language
  const nav = navigator.language || '';
  if (nav.startsWith('en')) return 'en-US';
  if (nav.startsWith('es')) return 'es-ES';

  // 4. Default: Portuguese Brazil
  return 'pt-BR';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': { translation: ptBR },
      'en-US': { translation: enUS },
      'es-ES': { translation: esES },
    },
    lng: detectInitialLanguage(),
    fallbackLng: 'pt-BR',
    interpolation: { escapeValue: false },
  });

export default i18n;
