import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user navigates to the Myer sign-up website", () => {
  cy.visit("https://www.myer.com.au/join");
});

When("user click the create account button", () => {
  cy.contains("button", "Create Account").click();
});

When("user enters an invalid email address", () => {
  cy.get("#email").type(`testtesttest`);
});

When("user enters a valid email address", () => {
  cy.get("#email").type(`tes5tsfj=$sd2sdfsxaq0pp9@gmail.com`);
});

Then("user clicks on the Create Account button", () => {
  cy.contains("button", "Create account").click();
});

Then("user clicks on another input box", () => {
  cy.get("#email").click();
});

Then("user enters an invalid First Name", () => {
  cy.get("#first-name").type("123[]");
});

Then("user enters an invalid Last Name", () => {
  cy.get("#last-name").type("123[]");
});

Then("user could not find entered address", () => {
  cy.get("#address").type("3 Young St");
});

Then("user enter valid membership number", () => {
  cy.get("#myer-one-field").type("2389298013");
});

Then("user enter invalid membership number", () => {
  cy.get("#myer-one-field").type("2389298094");
  // cy.get("");
});

Then("user clicks on the Join button", () => {
  cy.contains("button", "Join").click();
});

Then("user enters date of birth", () => {
  cy.get("#date-of-birth").type("31/05/1999");
});

Then("user enters valid personal data", () => {
  cy.get("#password").type(`Abcdefghi123`);
  cy.get("#first-name").type("Nelson");
  cy.get("#last-name").type("Alex");
  cy.get("#mobile-phone").type("0412345678");

  cy.get("#address")
    .type("3 Young Street, Box Hill")
    .get("ul")
    .contains("3 Young Street, BOX HILL VIC 3128")
    .click();
});

Then("an Error message should be shown", () => {
  cy.contains("Please enter a valid").should("be.visible");
});

Then("user enters invalid password", () => {
  cy.get("#password").type("hjsw");
});

Then("the first name value should be empty", () => {
  cy.get("#first-name").should("have.value", "");
});

Then("the last name value should be empty", () => {
  cy.get("#last-name").should("have.value", "");
});

Then("user enters an invalid Australian mobile phone number", () => {
  cy.get("#mobile-phone").type("1234567890");
});

Then("user enters invalid date of birth", () => {
  cy.get("#date-of-birth").type("31312001");
});

Then("user clicks on the Enter Address Manually button", () => {
  cy.contains("button", "Enter Address Manually").click();
});

Then("user enters valid address information manually", () => {
  cy.get("#addressLine1").type("3 Young Street");
  cy.get("#addressLine2").type("Floor 1");
  cy.get("#city").type("Box Hill");
  cy.get("#postcode").type("3128");
});

Then("user should be redirected to the account page", () => {
  const page = {
    title: "My Account | MYER",
    from: "https://www.myer.com.au/join",
    to: "https://www.myer.com.au/account",
  };

  //   cy.visit(page.from, { failOnStatusCode: false });

  cy.url().should("be.equals", page.to);
  // cy.request("POST", "https://api-online.myer.com.au/v2/user/register").then(
  //   (response) => {
  //     expect(response.status).to.eq(200);
  //   }
  // );
  // cy.title().should("include", page.title);
});

Then("click the find card button", () => {
  cy.contains("button", "Find card number").click();
});

Then("a text message of account already exists will be shown", () => {
  cy.contains("You already have an account").should("be.visible");
});

Then("it show the membership number is valid", () => {
  cy.contains("Your MYER one Number was added successfully").should(
    "be.visible"
  );
});

Then("membership number not found message displayed", () => {
  cy.contains("This MYER one membership number wasn't found.").should(
    "be.visible"
  );
});

Then("user enters an invalid address line 1", () => {
  cy.get("#addressLine1").type("!@#");
});

Then("user enters an invalid address line 2", () => {
  cy.get("#addressLine2").type("!@#");
});

Then("user enters an invalid suburb name", () => {
  cy.get("#city").type("!@#");
});

Then("user enters an invalid postcode", () => {
  cy.get("#postcode").type("qwe");
  cy.get("#postcode").type("!@#");
});
