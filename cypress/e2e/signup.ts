import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signUpData from "../fixtures/signup-data.json";

Given("user navigates to the Myer sign-up website", () => {
  cy.visit("https://www.myer.com.au/join");
});

When("user click the create account button", () => {
  cy.contains("button", "Create Account").click();
});

When("user enters an invalid email address", () => {
  cy.get("#email").type(signUpData.invalidData.email);
});

When("user enters a valid email address", () => {
  cy.get("#email").type(signUpData.validData.email);
});

Then("user clicks on the Join button", () => {
  cy.contains("button", "Join").click();
});

Then("user clicks on the Create Account button", () => {
  cy.contains("button", "Create account").click();
});

Then("user enters date of birth", () => {
  cy.get("#date-of-birth").type(signUpData.validData.birthday);
});

Then("user enters valid personal data", () => {
  cy.get("#password").type(signUpData.validData.password);
  cy.get("#first-name").type(signUpData.validData.firstName);
  cy.get("#last-name").type(signUpData.validData.lastName);
  cy.get("#mobile-phone").type(signUpData.validData.mobileNumber);

  cy.get("#address")
    .type(signUpData.validData.address)
    .get("ul")
    .contains(signUpData.validData.address)
    .click();
});

Then("user clicks on another input box", () => {
  cy.get("#email").click();
});

Then("user enters an invalid First Name", () => {
  cy.get("#first-name").type(signUpData.invalidData.firstName);
});

Then("user enters an invalid Last Name", () => {
  cy.get("#last-name").type(signUpData.invalidData.lastName);
});

Then("user could not find entered address", () => {
  cy.get("#address").type(signUpData.invalidData.address);
});

Then("user enter valid membership number", () => {
  cy.get("#myer-one-field").type(signUpData.validData.membershipNumber);
});

Then("user enter invalid membership number", () => {
  cy.get("#myer-one-field").type(signUpData.invalidData.membershipNumber);
});

Then("user enters invalid password", () => {
  cy.get("#password").type(signUpData.invalidData.password);
});

Then("the first name value should be empty", () => {
  cy.get("#first-name").should("have.value", "");
});

Then("the last name value should be empty", () => {
  cy.get("#last-name").should("have.value", "");
});

Then("user enters an invalid Australian mobile phone number", () => {
  cy.get("#mobile-phone").type(signUpData.invalidData.mobileNumber);
});

Then("user enters invalid date of birth", () => {
  cy.get("#date-of-birth").type(signUpData.invalidData.birthday);
});

Then("user clicks on the Enter Address Manually button", () => {
  cy.contains("button", "Enter Address Manually").click();
});

Then("user enters valid address information manually", () => {
  cy.get("#addressLine1").type(signUpData.validData.addressLine1);
  cy.get("#addressLine2").type(signUpData.validData.addressLine2);
  cy.get("#city").type(signUpData.validData.suburb);
  cy.get("#postcode").type(signUpData.validData.postcode);
});

Then("user should be redirected to the account page", () => {
  cy.wait(300);
  cy.url().should("be.equals", "https://www.myer.com.au/account");
});

Then("click the find card button", () => {
  cy.contains("button", "Find card number").click();
});

Then("a text message of {string} will be shown", (message: String) => {
  cy.contains(`${message}`).should("be.visible");
});

Then("user enters an invalid address line 1", () => {
  cy.get("#addressLine1").type(signUpData.invalidData.addressLine1);
});

Then("user enters an invalid address line 2", () => {
  cy.get("#addressLine2").type(signUpData.invalidData.addressLine1);
});

Then("user enters an invalid suburb name", () => {
  cy.get("#city").type(signUpData.invalidData.suburb);
});

Then("user enters an invalid postcode", () => {
  cy.get("#postcode").type(signUpData.invalidData.postcode);
});
