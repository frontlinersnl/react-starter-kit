import { useOidc } from "@axa-fr/react-oidc";
import { FunctionComponent } from "react";
import { SSOResult } from "../models/SSOResult";

export const SessionLost: FunctionComponent<SSOResult> = ({ configurationName }) => {
  const { login } = useOidc(configurationName);

  return (
    <>
      <h1>Session timed out for {configurationName}</h1>
      <p>Your session has expired. Please re-authenticate.</p>
      <button type="button" onClick={() => login("/")}>
        Login
      </button>
    </>
  );
};
