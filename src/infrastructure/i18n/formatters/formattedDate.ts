import { DateTime } from "luxon";

/**
 * Luxon based date formatter for a specific language
 * @param value date to format
 * @param language language of the current user
 * @returns formatted date
 */
export const FormattedDate = (value: Date, language: string | undefined) => {
  if (!language) {
    language = "en";
  }

  let format;

  switch (language) {
    case "nl":
      format = "dd/MM/yyyy";
      break;
    case "en":
      format = "yyyy-MM-dd";
      break;
    default:
      format = "yyyy-MM-dd";
  }
  return DateTime.fromJSDate(value).setLocale(language).toFormat(format);
};
