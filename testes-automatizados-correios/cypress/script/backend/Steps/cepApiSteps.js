import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import CepApiActions from '../../backend/Actions/cepApiActions';

Given('Eu faço uma requisição GET para o CEP {string}', (cep) => {
    CepApiActions.requestCep(cep).as('response');
});

Then('A resposta deve conter o status {int}', (status) => {
    cy.get('@response').its('status').should('eq', status);
});

Then('A resposta deve conter uma mensagem de erro {string}', (errorMessage) => {
    cy.get('@response').then(response => {
        if (response.status === 200) {
            expect(response.body).to.deep.include({ erro: true });
        }
    });
});

Then('A resposta deve conter os detalhes do CEP', () => {
    cy.get('@response').then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('cep');
        expect(response.body).to.have.property('logradouro');
        expect(response.body).to.have.property('bairro');
        expect(response.body).to.have.property('localidade');
        expect(response.body).to.have.property('uf');
    });
});

Given('Eu faço uma requisição GET para o CEP {string} inválido', (cep) => {
    CepApiActions.requestInvalidCep(cep).as('response');
});

Then('O logradouro deve ser {string}', (expectedLogradouro) => {
    cy.get('@response').its('body.logradouro').should('eq', expectedLogradouro);
});

Then('O bairro deve ser {string}', (expectedBairro) => {
    cy.get('@response').its('body.bairro').should('eq', expectedBairro);
});

Then('A cidade deve ser {string}', (expectedCidade) => {
    cy.get('@response').its('body.localidade').should('eq', expectedCidade);
});

Then('O estado deve ser {string}', (expectedEstado) => {
    cy.get('@response').its('body.uf').should('eq', expectedEstado);
});
