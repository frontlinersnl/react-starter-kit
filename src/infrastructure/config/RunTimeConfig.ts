import { OIDCConfig } from "../sso/models/OIDCConfig";

export interface RunTimeConfig {
  version: number;
  name: string;

  /**
   * Settings for the OIDC connection
   */
  oidc: OIDCConfig;
}
