import { DateTime } from "luxon";
import { FunctionComponent } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Config } from "../../config";
import "./Navbar.css";
type Props = {};

export const Navbar: FunctionComponent<Props> = () => {
  const [translate, i18n] = useTranslation();
  return (
    <>
      <h1>{translate("navBar.intro")}</h1>
      <p>
        {/* trans can also be used to translate */}
        {Config.name} <Trans i18nKey="navBar.version">version:</Trans>
        {JSON.stringify(Config.version)}
      </p>

      {/* This translation uses a formatter in the translation files  */}
      <p>{translate("navBar.currentDate", { date: DateTime.now().toJSDate() })}</p>
      <nav data-testid="nav">
        <Link to="/" data-testid="nav.home">
          {translate("nav.home")}
        </Link>
        <Link to="/about" data-testid="nav.about">
          {translate("nav.about")}
        </Link>
        <Link to="/counter" data-testid="nav.counter">
          {translate("nav.counter")}
        </Link>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <button onClick={() => i18n.changeLanguage("nl")}>nl</button>
        <hr />
      </nav>
    </>
  );
};
