"use strict";
/// <reference types="cypress" />
describe("Home", () => {
    beforeEach(function () {
        cy.visit("/");
    });
    it("front page is opened", () => {
        cy.contains("SHOP PRODUCTS");
    });
    it("on click shop products navigates to bag", () => {
        cy.contains("SHOP PRODUCTS").click();
    });
    it("on click shop bags navigates to bag", () => {
        cy.contains("SHOP BAGS").click();
    });
    it("on click shop wallets navigates to wallets", () => {
        cy.contains("SHOP WALLETS").click();
    });
    it("on click shop accessories navigates to accessories", () => {
        cy.contains("SHOP ACCESSORIES").click();
    });
});
describe("Navbar", () => {
    beforeEach(function () {
        cy.visit("/");
    });
    it("navbar bags navigates to bag products", () => {
        cy.contains("BAGS").click();
    });
    it("navbar wallets navigates to wallet products", () => {
        cy.contains("WALLETS").click();
    });
    it("navbar accessories navigates to wallet accessories", () => {
        cy.contains("ACCESSORIES").click();
    });
    it("navbar cart navigates to cart items", () => {
        cy.contains("CART").click();
    });
    it("navbar login navigates to login in page", () => {
        cy.contains("LOGIN").click();
    });
});
describe("Login input |Signup input", () => {
    beforeEach(function () {
        cy.visit("/login");
    });
    it("input fields in login", () => {
        cy.get("input[name=email]").type("ZaireM21@gmail.com");
        cy.get("input[name=password]").type("Bella456");
        cy.get("input[name=email]").should("have.value", "ZaireM21@gmail.com");
        cy.get("input[name=password]").should("have.value", "Bella456");
    });
    it("navigate to logout and input fields", () => {
        cy.contains("SIGN UP").click();
        cy.get("input[name=firstname]").type("Zaire");
        cy.get("input[name=lastname]").type("mac");
        cy.get("input[name=email]").type("zairemcallister@yahoo.com");
        cy.get("input[name=password]").type("CreateOrder01");
        cy.get("input[name=confirmpassword]").type("CreateOrder01");
        cy.get("input[name=firstname]").should("have.value", "Zaire");
        cy.get("input[name=lastname]").should("have.value", "mac");
        cy.get("input[name=email]").should("have.value", "zairemcallister@yahoo.com");
        cy.get("input[name=password]").should("have.value", "CreateOrder01");
        cy.get("input[name=confirmpassword]").should("have.value", "CreateOrder01");
    });
});
