import { FunctionComponent } from "react";
import { SSOResult } from "../models/SSOResult";

export const AuthenticatingError: FunctionComponent<SSOResult> = ({ configurationName }) => (
  <>
    <h1>Error for {configurationName}</h1>
    <p>An error occurred during authentication.</p>
  </>
);
