import { FunctionComponent } from "react";
import { SSOResult } from "../models/SSOResult";

export const CallBackSuccess: FunctionComponent<SSOResult> = ({ configurationName }) => (
  <>
    <h1>Authentication complete for {configurationName}</h1>
    <p>You will be redirected...</p>
  </>
);
