import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CepActions from '../../frontend/Actions/cepSearchActions';

Given('Que eu acesso a página de busca de CEP dos Correios', () => {
    CepActions.navigateToCepPage();
});

When('Que eu acesso a página de busca de CEP dos Correios', () => {
    CepActions.navigateToCepPage();
});

Given('clico no botão Busca CEP ou Endereço', () => {
    CepActions.searchCep();
});

When('Eu insiro o CEP {string}', (cep) => {
    CepActions.enterCep(cep);
});

When('Eu seleciono a opção {string} no tipo de CEP', (option) => {
    CepActions.selectTipoCep(option);
});

When('Eu clico no botão de busca', () => {
    CepActions.clickSearchButton();
});

Then('Eu devo ver as informações detalhadas:', (dataTable) => {
    CepActions.verifyDetails(dataTable);
});

Then('Eu devo ver uma mensagem de erro {string}', (message) => {
    CepActions.verifyErrorMessage(message);
});

When('Eu insiro o endereço {string}', (address) => {
    CepActions.enterAddress(address);
});