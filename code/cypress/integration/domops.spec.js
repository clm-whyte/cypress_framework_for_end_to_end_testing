describe("UI TESTS", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it("should clear the input text field", () => {
    cy.get(".action-email").type("fake@email.com");
    cy.get(".action-email").clear().should("be.empty");
  });

  it("should double click the element", () => {
    cy.get(".action-div")
      .dblclick()
      .should("not.be.visible")
      .should("have.value", "");
  });

  it("should check the first and third checkbox", () => {
    cy.get(".action-checkboxes [type='checkbox']")
      .check(["checkbox1", "checkbox3"])
      .should("be.checked");
  });

  it("should uncheck the first checkbox", () => {
    cy.get(".action-checkboxes [type='checkbox']")
      .check(["checkbox1", "checkbox3"])
      .should("be.checked");
    cy.get(".action-checkboxes [type='checkbox']")
      .uncheck(["checkbox1"])
      . should("not.be.checked");
  });
});
