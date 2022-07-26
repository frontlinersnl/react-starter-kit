export interface OIDCConfig {
  /**
   * Authority URL
   */
  url: string;

  /**
   * Realm to authenticate against
   */
  realm: string;

  /**
   * Id of this client
   */
  clientId: string;

  /**
   * Scope(s) that you want to request
   */
  scope: string;

  /**
   * URI to redirect to after successful login
   */
  redirectUri: string;

  /**
   * redirect uri for the silent refresh
   */
  silentRedirectUri: string;
}
