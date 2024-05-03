import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^que eu faço uma requisição para a API de pokemon$/, () => {
  cy.request({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu/'
  }).then((response) => {
    cy.wrap(response).as('pokemonResponse');
  });
});

When(/^eu verifico os dados recebidos da API$/, () => {
	cy.get('@pokemonResponse').then((response) => {
    cy.expect(response.status).to.eql(200);
    cy.expect(response.body).to.have.property('name').and.eql('pikachu');
    cy.expect(response.body).to.have.property('id').and.eql(25);
    cy.expect(response.body.abilities[0].ability.name).to.eql('static');
    cy.expect(response.body.types[0].type.name).to.eql('electric');
  });
});

Then(/^Armazenando informação da API$/, () => {
  cy.get('@pokemonResponse').then((response) => {
    Cypress.env('nomePokemon', response.body.name);
    Cypress.env('idPokemon', response.body.id);
    Cypress.env('habilidadePokemon', response.body.abilities[0].ability.name);
    Cypress.env('tipoPokemon', response.body.types[0].type.name);
  });
});

Then(/^eu acesso o site do Pokemon$/, () => {
	cy.visit('https://pokemondb.net/pokedex/pikachu');
});

Then(/^eu vejo que as informações sobre o nome do Pokemon são as mesmas da API$/, () => {
  cy.get('#main').contains(Cypress.env('nomePokemon'));
});

Then(/^eu vejo que as informações sobre o id do Pokemon são as mesmas da API$/, () => {
  cy.get('#tab-basic-25 > :nth-child(1) > :nth-child(2) > .vitals-table > tbody > :nth-child(1) > td').contains(Cypress.env('idPokemon'));
});

Then(/^eu vejo que as informações sobre a habilidade do Pokemon são as mesmas da API$/, () => {
  cy.get('td > span.text-muted > a').contains(Cypress.env('habilidadePokemon'), { matchCase: false });
});

Then(/^eu vejo que as informações sobre o tipo do Pokemon são as mesmas da API$/, () => {
  cy.get('#tab-basic-25 > :nth-child(1) > :nth-child(2) > .vitals-table > tbody > :nth-child(2) > td > .type-icon').contains(Cypress.env('tipoPokemon'), { matchCase: false });
});
