import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import TwoTierValidationActions from '../../integration/Actions/two-tierValidationActions';

let tempApiData = {};

Given('Eu faço uma requisição na API para o CEP {string}', (cep) => {
    return TwoTierValidationActions.fetchAndStoreCepData(cep).then(response => {
        console.log("Dados da API recebidos:", response.body);
        tempApiData = {
            logradouro: response.body.logradouro,
            bairro: response.body.bairro,
            localidade: response.body.localidade,
            uf: response.body.uf
        };
    });
});

When('Que eu acesso a página de busca de CEP dos Correios e realizo a busca pelo CEP {string}', (cep) => {
    cy.wait(500);
    TwoTierValidationActions.navigateToAndSearchCep(cep);
});

Then('Eu devo ver que as informações na página correspondem às armazenadas da API', () => {
    TwoTierValidationActions.verifyDetailsDirectly(tempApiData);
});
