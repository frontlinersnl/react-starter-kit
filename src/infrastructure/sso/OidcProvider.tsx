import { OidcProvider as ReactOidcProvider } from "@axa-fr/react-oidc";
import { FunctionComponent, ReactNode } from "react";
import { AppLoader } from "../loader/appLoader";
import { SSOConfiguration } from "./Configuration";
import { Authenticating } from "./overrides/Authenticating";
import { AuthenticatingError } from "./overrides/AuthenticatingError";
import { CallBackSuccess } from "./overrides/CallBackSuccess";
import { ServiceWorkerNotSupported } from "./overrides/ServiceWorkerNotSupported";
import { SessionLost } from "./overrides/SessionLost";

type Props = { children?: ReactNode; [x: string]: any };

export const OidcProvider: FunctionComponent<Props> = ({ children, ...rest }) => {
  return (
    <ReactOidcProvider
      loadingComponent={AppLoader}
      authenticatingErrorComponent={AuthenticatingError}
      authenticatingComponent={Authenticating}
      sessionLostComponent={SessionLost}
      serviceWorkerNotSupportedComponent={ServiceWorkerNotSupported}
      callbackSuccessComponent={CallBackSuccess}
      configuration={SSOConfiguration}
      {...rest}
    >
      {children}
    </ReactOidcProvider>
  );
};
