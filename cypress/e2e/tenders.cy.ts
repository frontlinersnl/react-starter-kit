describe("Tenders page", () => {
  beforeEach(() => {
    cy.oidcLogin();
    // you can check that the user is logged in on this page:
    cy.visit("http://localhost:3000");
  });

  it("Should navigate to tenders when clicking on Tenders", () => {
    cy.get('[data-testid="nav.tenders"]').click();
    cy.contains("tenders");
    cy.contains("page_count");
  });
});
