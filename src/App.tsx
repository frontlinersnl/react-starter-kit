import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./infrastructure/navbar/Navbar";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
