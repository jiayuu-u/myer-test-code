import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signUpData from "../fixtures/signup-data.json";

Given("user visits the signup page", () => {
  cy.visit("https://www.myer.com.au/join");
});

When("user enters a valid email address", () => {
  let random = Math.floor(Math.random() * 1000000);
  cy.get("#email").type(`kjakd${random}@googlemail.com`);
});

Then("user clicks on the join button", () => {
  cy.contains("button", "Join").click();
});

Then("user clicks on the create account button", () => {
  cy.contains("button", "Create Account").click();
});

Then("user enters valid details for signup form", () => {
  cy.get("#password").type(signUpData.password);
  cy.get("#first-name").type(signUpData.firstName);
  cy.get("#last-name").type(signUpData.lastName);
  cy.get("#mobile-phone").type(signUpData.mobileNumber);

  cy.get("body").then((body) => {
    if (body.find("#date-of-birth").length > 0) {
      cy.get("#date-of-birth").type(signUpData.birthday);
    }
  });
});

Then("user enters valid address", () => {
  cy.get("#address")
    .type(signUpData.typeAddress)
    .get("ul")
    .contains(signUpData.selectAddress)
    .click();
});

Then("user clicks on the Enter Address Manually button", () => {
  cy.contains("button", "Enter Address Manually").click();
});

Then("user could not find entered address", () => {
  cy.get("#address").type(signUpData.typeAddress2);
});

Then("user enters valid address information manually", () => {
  cy.get("#addressLine1").type(signUpData.addressLine1);
  cy.get("#addressLine2").type(signUpData.addressLine2);
  cy.get("#city").type(signUpData.suburb);
  cy.get("#postcode").type(signUpData.postcode);
});

Then("user clicks the find card button", () => {
  cy.contains("button", "Find card number").click();
});

Then("user enter the card number", () => {
  cy.get("#myer-one-field").type(signUpData.membershipNumber);
});

Then("the user submits the signup form", () => {
  cy.contains("button", "Create account").click();
});

Then("user should be redirected to the account page", () => {
  cy.wait(5000);
  cy.url().should("be.equals", "https://www.myer.com.au/account");
});

Then("the message {string} should be shown", (message) => {
  cy.contains(`${message}`, { timeout: 10000 }).should("be.visible");
});
