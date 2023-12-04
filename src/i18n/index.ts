import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInPt from '../locales/pt/translation.json';

// the translations
const resources = {
    en: {
        translation: translationsInEng
    },
    pt: {
        translation: translationsInPt
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem("lang") || "pt", // It acts as default language. When the site loads, content is shown in this language.  
        debug: true,
        fallbackLng: "en", // use de if selected language is not available
        interpolation: {
            escapeValue: false
        },
        ns: "translation", // namespaces help to divide huge translations into multiple small files.
        defaultNS: "translation"
    });

export default i18n;