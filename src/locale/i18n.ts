import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { tr } from './resources/tr';
import { Language } from 'src/definitions/react-i18next';

const resources = {
  tr: { translation: tr }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  fallbackLng: 'tr',
  interpolation: {
    escapeValue: false
  }
});

export const changeLanguage = (language: Language) => {
  //dayjs.locale(language);
  i18n.changeLanguage(language);
};

export const getLanguage = () => {
  return i18n.language as Language;
};

export const LanguageCodes: Record<Language, string> = {
  tr: 'tr-TR'
};
