/// <reference types="cypress" />
/* eslint-disable camelcase */
import jwt_decode from "jwt-decode";
import "./../index";

Cypress.Commands.add("oidcLogin", () => {
  const options = {
    method: "POST",
    url: Cypress.env("oidcUrl"),
    form: true,
    body: {
      grant_type: Cypress.env("oidcGrantType"),
      client_id: Cypress.env("oidcClientId"),
      client_secret: Cypress.env("oidcClientSecret"),
      scope: Cypress.env("oidcScope"),
    },
  };

  return cy.request(options).then((response) => {
    const { access_token, expires_in, id_token, token_type, scope } = response.body;
    const accessTokenPayload = jwt_decode(access_token);
    // stub email on the result, as service accounts don't generally have them but we use it in the UI
    (accessTokenPayload as any).email = "cypress@e2e.email";

    window.sessionStorage.setItem(
      `oidc.default:${Cypress.env("oidcCallbackUrl")}`,
      JSON.stringify({
        tokens: {
          accessToken: access_token,
          expiresIn: expires_in,
          idToken: id_token,
          tokenType: token_type,
          idTokenPayload: jwt_decode(id_token),
          accessTokenPayload,
          scope,
        },
      }),
    );
    return response;
  });
});
