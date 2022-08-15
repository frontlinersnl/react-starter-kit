import { OIDCConfig } from "../sso/models/OIDCConfig";

export interface RunTimeConfig {
  version: number;
  name: string;

  services: {
    fake: {
      root: string;
      trucks: string;
    };
  };

  /**
   * Settings for the OIDC connection
   */
  oidc: OIDCConfig;
}
