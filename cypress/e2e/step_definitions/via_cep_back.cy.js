import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou no site do ViaCEP", () => {
  cy.visit("https://viacep.com.br/");
});

When("eu realizo uma busca pelo CEP {string} no ViaCEP", (cep) => {
    cy.request({
      method: 'GET',
      url: `https://viacep.com.br/ws/${cep}/json/`,
      failOnStatusCode: false // Não considera status 400 como erro
    }).as("cepResponse");
  });

Then("devo visualizar o logradouro {string} no ViaCEP", (logradouro) => {
  cy.get("@cepResponse").should((response) => {
    expect(response.body.logradouro).to.equal(logradouro);
  });
});

Then("devo visualizar a mensagem de erro {string} no ViaCEP", (mensagem) => {
  cy.get("@cepResponse").should((response) => {
    expect(response.body.erro).to.be.true;
  });
});

Then(/^devo visualizar a mensagem de erro de formato inválido no ViaCEP$/, () => {
	cy.get("@cepResponse").should((response) => {
        expect(response.status).to.equal(400);
      });
});


