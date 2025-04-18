import { createTranslator } from 'next-intl';
import messagesEn from './../../messegas/tr.json';
import messagesTr from './../../messegas/tr.json';

export const locales = ['en', 'tr'] as const;
export const defaultLocale = 'tr';

export const messages = {
  en: messagesEn,
  tr: messagesTr,
};

type MessageKeys = keyof typeof messages['en']; 

export const t = (locale: 'en' | 'tr', key: MessageKeys) => {
  const translator = createTranslator({ locale, messages: messages[locale] });
  return translator(key);
};