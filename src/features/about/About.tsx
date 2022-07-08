import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

type Props = {};

export const AboutContainer: FunctionComponent<Props> = () => {
  const [translate] = useTranslation();
  return <h1>{translate("about.title")}</h1>;
};
