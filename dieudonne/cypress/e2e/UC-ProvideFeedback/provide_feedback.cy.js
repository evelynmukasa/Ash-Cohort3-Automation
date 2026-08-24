describe("Provide Feedback", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("should access All Surveys", () => {
    cy.contains("Survey").should("be.visible").click();
    cy.contains("All Survey").should("be.visible").click();

    cy.url().should("include", "edit.php");
  });

  it("should display validation errors for incomplete feedback", () => {
    
  });

});