import i18n, { InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { FormattedDate } from "./formatters/formattedDate";

/**
 * Initial i18n settings
 * https://www.i18next.com/overview/configuration-options
 */
export const i18nSettings: InitOptions = {
  debug: false,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // i18next-http-back-end options, for all options read: https://github.com/i18next/i18next-http-backend
  backend: { loadPath: "/i18n/{{lng}}.json" },
};

i18n
  // detect user language
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nSettings);

// format date based on language
i18n.services.formatter?.add("formattedDate", FormattedDate);

export default i18n;
