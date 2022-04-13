import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import  Backend from 'i18next-http-backend';

const currentLang = localStorage.getItem('language')

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v4',
        // debug: true,
        lng: currentLang,
        fallbackLng: 'en',
        preload:['en', 'rw', 'fr'],
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: '.',
        backend:{
            loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
        },
        interpolation: {
          escapeValue: false,
        },
        react: {
          wait: true
         }

      });

export default i18n;
