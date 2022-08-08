import { useOidc, useOidcAccessToken } from "@axa-fr/react-oidc";
import { DateTime } from "luxon";
import { FunctionComponent } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTE_KEYS } from "../../Routes";
import { Config } from "../config";
type Props = { className?: string };

const Navbar: FunctionComponent<Props> = ({ className }) => {
  const [translate, i18n] = useTranslation();
  const { login, logout, isAuthenticated } = useOidc();
  const { accessTokenPayload } = useOidcAccessToken();
  const { home, about, counter } = ROUTE_KEYS;
  return (
    <div className={className}>
      <h1>{translate("navBar.intro")}</h1>
      <p>
        {/* trans can also be used to translate */}
        {Config.name} <Trans i18nKey="navBar.version">version:</Trans>
        {JSON.stringify(Config.version)}
        <button
          onClick={() => {
            isAuthenticated ? logout() : login("/");
          }}
        >
          {isAuthenticated ? `logout (${accessTokenPayload.email})` : "login"}
        </button>
      </p>

      {/* This translation uses a formatter in the translation files  */}
      <p>{translate("navBar.currentDate", { date: DateTime.now().toJSDate() })}</p>
      <nav data-testid="nav">
        <Link to={home} data-testid="nav.home">
          {translate("nav.home")}
        </Link>
        <Link to={about} data-testid="nav.about">
          {translate("nav.about")}
        </Link>
        <Link to={counter} data-testid="nav.counter">
          {translate("nav.counter")}
        </Link>
        <Link to="/tenders" data-testid="nav.tenders">
          {translate("nav.tenders")}
        </Link>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <button onClick={() => i18n.changeLanguage("nl")}>nl</button>
        <hr />
      </nav>
    </div>
  );
};

const StyledNavBar = styled(Navbar)`
  nav a {
    padding-right: 10px;
  }
`;

export { StyledNavBar as Navbar };
