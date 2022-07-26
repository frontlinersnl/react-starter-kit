import { OidcConfiguration } from "@axa-fr/react-oidc/dist/vanilla/oidc";
import { Config } from "../config";

const { clientId, redirectUri, silentRedirectUri, scope, url } = Config.oidc;

/* eslint-disable camelcase */
export const SSOConfiguration: OidcConfiguration = {
  client_id: clientId,
  redirect_uri: redirectUri,
  silent_redirect_uri: silentRedirectUri,
  scope,
  authority: url,
  service_worker_only: false,
};
