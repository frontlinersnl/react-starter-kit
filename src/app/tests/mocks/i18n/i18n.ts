import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { i18nSettings } from "../../../../infrastructure/i18n/init";

import en from "app/../../public/i18n/en.json";
import nl from "app/../../public/i18n/nl.json";

i18n
  // detect user language
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...i18nSettings,
    ...{
      backend: undefined,
      fallbackLng: "noLang",
      debug: false,
      resources: {
        en: {
          translation: en,
        },
        nl: {
          translation: nl,
        },
        noLang: {
          translation: {},
        },
      },
    },
  });

export default i18n;
