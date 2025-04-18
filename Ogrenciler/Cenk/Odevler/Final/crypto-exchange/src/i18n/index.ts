import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/common.json';
import tr from './tr/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
