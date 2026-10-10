import { getLocales } from "expo-localization";
import en from './en.json';
import cs from './cs.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Get user's language code: 'cs', 'en'...
const deviceLanguage = getLocales()[0].languageCode;

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v4',
        resources: {
            cs:{ translation: cs },
            en:{ translation: en },
        },
        lng: deviceLanguage || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;