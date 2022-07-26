import { FunctionComponent } from "react";
import { SSOResult } from "../models/SSOResult";

export const ServiceWorkerNotSupported: FunctionComponent<SSOResult> = ({ configurationName }) => (
  <>
    <h1>Unable to authenticate on this browser for {configurationName}</h1>
    <p>Your browser is not configured to support Service Workers.</p>
  </>
);
