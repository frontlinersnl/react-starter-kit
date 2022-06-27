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
        <Link to="/">Home</Link> <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <hr />
      </nav>
    </>
  );
};
