import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutContainer } from "./features/about/About";
import { CounterContainer } from "./features/counter/Counter";
import { HomeContainer } from "./features/home/Home";
import { Navbar } from "./infrastructure/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/counter" element={<CounterContainer />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
