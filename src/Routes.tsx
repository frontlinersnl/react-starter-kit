import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutContainer } from "./features/about/About";
import { CounterContainer } from "./features/examples/counter/Counter";
import { HomeContainer } from "./features/home/Home";
type Props = {};

export const ROUTE_KEYS = {
  home: "",
  about: "about",
  counter: "counter",
};

export const AppRoutes: FunctionComponent<Props> = () => {
  const { home, about, counter } = ROUTE_KEYS;
  return (
    <Routes>
      <Route path={home} element={<HomeContainer />} />
      <Route path={about} element={<AboutContainer />} />
      <Route path={counter} element={<CounterContainer />} />
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
