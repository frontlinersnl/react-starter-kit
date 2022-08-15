/// <reference types="cypress" />

describe("Application trucks", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("appBaseUrl"));
  });

  it("Should render the navigation links", () => {
    cy.get("[data-testid='nav']");
  });

  it("Should navigate to trucks and display a result when clicking on trucks", () => {
    cy.get('[data-testid="nav.trucks"]').click();
    cy.contains("trucks (contract api) page");
  });

  it("Should eventually (after the http call) display the results on screen", () => {
    cy.intercept({
      method: "GET",
      url: "http://localhost:9600/fake/trucks",
    }).as("getTrucks");
    cy.get('[data-testid="nav.trucks"]').click();
    cy.contains("trucks (contract api) page");
    cy.wait("@getTrucks").its("response.statusCode").should("be.oneOf", [200, 304]);
    cy.get('[data-testid="trucksResult"]').should("not.be.empty");
  });
});
