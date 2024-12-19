// Usage: import i18n from "./i18n"; // don't forget to import the i18n.js file
// Usage: const { t } = useTranslation(); // use the t function to translate text
// Usage: <h1>{t("Hello")}</h1> // use the t function to translate text
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
