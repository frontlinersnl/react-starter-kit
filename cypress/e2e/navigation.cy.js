describe("Application navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render the navigation links", () => {
    cy.get("[data-testid='nav']");
  });

  it("Should navigate to about when clicking on About", () => {
    cy.get('[data-testid="nav.about"]').click();
    cy.contains("About");
  });
});
