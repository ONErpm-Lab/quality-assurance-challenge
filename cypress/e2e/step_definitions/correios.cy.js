import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página inicial dos Correios", () => {
  cy.visit("https://www.correios.com.br/");
});

When("eu realizo uma busca pelo CEP {string}", (cep) => {
    cy.get('a.info-link').contains('Busca CEP ou Endereço').click()
    cy.get('#endereco').type(cep);
    cy.get('#btn_pesquisar').click();

});

Then("devo visualizar o logradouro {string}", (logradouro) => {
    cy.get('td[data-th="Logradouro/Nome"]').should("contain.text", logradouro);
});

Then("devo visualizar a mensagem de erro {string}", (mensagem) => {
    cy.get('div#mensagem-resultado.mensagem').should("contain.text", mensagem);
});

