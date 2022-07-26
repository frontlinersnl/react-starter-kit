import { OidcSecure } from "@axa-fr/react-oidc";
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutContainer } from "./features/about/About";
import { CounterContainer } from "./features/examples/counter/Counter";
import { Tenders } from "./features/examples/tenders/Tenders";
import { HomeContainer } from "./features/home/Home";
type Props = {};

export const ROUTE_KEYS = {
  home: "",
  about: "about",
  counter: "counter",
  tenders: "tenders",
};

export const AppRoutes: FunctionComponent<Props> = () => {
  const { home, about, counter, tenders } = ROUTE_KEYS;
  return (
    <Routes>
      <Route path={home} element={<HomeContainer />} />
      <Route path={about} element={<AboutContainer />} />
      <Route path={counter} element={<CounterContainer />} />
      {/* a route with authentication */}
      <Route
        path={tenders}
        element={
          <OidcSecure>
            <Tenders />
          </OidcSecure>
        }
      />
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route> */}
      {/* </Route> */}
    </Routes>
  );
};
