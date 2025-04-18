// i18n.ts
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

const initI18next = async (lng: string = 'en', ns: string = 'common') => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`./public/locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  
  return i18nInstance;
};

interface TranslationOptions {
  keyPrefix?: string;
  [key: string]: any;
}

export async function useTranslation(
  lng: string, 
  ns: string | string[] = 'common', 
  options: TranslationOptions = {}
) {
  const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? ns[0] : ns);
  
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  };
}