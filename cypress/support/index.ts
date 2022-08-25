/* eslint-disable no-unused-vars */
// load type definitions that come with Cypress module
/// <reference types="cypress" />
export {};
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Login to the oidc provider
       */
      oidcLogin(): Chainable<Response<any>>;
    }
  }
}
