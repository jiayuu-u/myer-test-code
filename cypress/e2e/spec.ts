import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// When("I visit duckduckgo.com", () => {
//   cy.visit("www.myer.com.au/join");
// });

// Then("I should see a search bar", () => {
//   cy.get("input[type=text]").should(
//     "have.attr",
//     "placeholder",
//     "Search the web without being tracked"
//   );
// });

When("I navigate to the www.myer.com.au", () => {
  cy.visit("www.myer.com.au/join");
});

Then("I entered a valid email address", () => {
  cy.get("#email").type("test@gmail.com");
});

Then("I clicked the Join button", () => {
  cy.contains("button", "Join").click();
});

Then("I entered a invalid email address", () => {
  cy.get("#email").type("test");
});
