import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./locals/en/translation.json";
import deTranslation from "./locals/de/translation.json";

// Configure i18n
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React handles escaping by default
    },
  });

export default i18n;
