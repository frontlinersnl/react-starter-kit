import { FunctionComponent } from "react";
import { SSOResult } from "../models/SSOResult";

export const Authenticating: FunctionComponent<SSOResult> = ({ configurationName }) => (
  <>
    <h1>Authentication in progress for {configurationName}</h1>
    <p>You will be redirected to the login page.</p>
  </>
);
