describe("UI TESTS", () => {
  it("should load the login page correctly", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=login-text]").should("have.length", 1);
    cy.get("[data-cy=login-text]").should("be.visible");
  });

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should not allow login when username is not provided", () => {
    cy.get("[data-cy=password]").type("password");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=login-text]").should("have.length", 1);
    cy.get("[data-cy=homepage]").should("have.length", 0);
  });

  it("should not allow login when password is not provided", () => {
    cy.get("[data-cy=email]").type("email@email.com");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=login-text]").should("have.length", 1);
    cy.get("[data-cy=homepage]").should("have.length", 0);
  });

  it("should login to the homepage with valid login credentials", () => {
    cy.get("[data-cy=email]").type("email@email.com");
    cy.get("[data-cy=email]").should("have.value", "email@email.com");
    cy.get("[data-cy=password]").type("password");
    cy.get("[data-cy=password]").should("have.value", "password");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=logout-btn]").should("be.visible");
    cy.get("[data-cy=logout-btn]").should("have.class", "btn-sm");
    cy.get("[data-cy=logout-btn]").should("not.have.class", "lbl-fake");
  });

  it("should contain correct input field values", () => {
    cy.get("[data-cy=email]").type("email@email.com");
    cy.get("[data-cy=email]").should("have.value", "email@email.com");
    cy.get("[data-cy=password]").type("password");
    cy.get("[data-cy=password]").should("have.value", "password");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=logout-btn]").should("be.visible");
    cy.get("[data-cy=logout-btn]").should("have.class", "btn-sm");
    cy.get("[data-cy=logout-btn]").should("not.have.class", "lbl-fake");
  });

  it("should logout successfully", () => {
    cy.get("[data-cy=email]").type("email@email.com");
    cy.get("[data-cy=password]").type("password");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=logout-btn]").click();
    cy.get("[data-cy=logout-text").should(
      "contain.text",
      "You are now logged out."
    );
    cy.get("[data-cy=logout-text").should(
      "not.contain.text",
      "You are now logged in."
    );
  });

  it("should have existing elements", () => {
    cy.get("[data-cy=login-text").should("exist");
    cy.get("[data-cy=logout-text").should("not.exist");
  });
});
