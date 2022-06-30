import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Config } from "../config";
import "./Navbar.css";
type Props = {};

export const Navbar: FunctionComponent<Props> = () => {
  return (
    <>
      <h1>Our fancy header with navigation.</h1>
      <p>App version: {JSON.stringify(Config.version)}</p>
      <nav data-testid="nav">
        <Link to="/" data-testid="nav.home">
          Home
        </Link>
        <Link to="/about" data-testid="nav.about">
          About
        </Link>
        <Link to="/counter" data-testid="nav.counter">
          Counter
        </Link>
        <hr />
      </nav>
    </>
  );
};
