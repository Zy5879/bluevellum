/// <reference types="cypress" />

describe("Home", () => {
  it("front page is opened", () => {
    cy.visit("/");
    cy.contains("SHOP PRODUCTS");
  });
  it("on click shop products navigates to bag", () => {
    cy.visit("/");
    cy.contains("SHOP PRODUCTS").click();
  });
});
