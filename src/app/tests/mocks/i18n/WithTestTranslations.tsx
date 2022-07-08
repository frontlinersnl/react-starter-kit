import { FunctionComponent, ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";

type Props = { children?: ReactNode; keysOnly?: boolean };

const ProvidedComponent: FunctionComponent<Props> = ({ children, keysOnly }) => {
  const [_translate, i18nSettings] = useTranslation();
  if (keysOnly) {
    i18nSettings.changeLanguage("noLang");
  }

  return <>{children}</>;
};

export const WithTestTranslations: FunctionComponent<Props> = ({ children, keysOnly = false }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ProvidedComponent keysOnly={keysOnly}>{children}</ProvidedComponent>
    </I18nextProvider>
  );
};
