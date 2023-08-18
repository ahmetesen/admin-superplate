import 'react-i18next';
import { tr } from 'src/locale/resources/tr';

type LanguageKeys = keyof typeof tr;
declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: { translation: typeof tr };
  }
}

type Language = 'tr';
