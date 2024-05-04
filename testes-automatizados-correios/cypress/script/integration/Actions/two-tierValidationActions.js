import CepApiActions from '../../backend/Actions/cepApiActions';
import CepActions from '../../frontend/Actions/cepSearchActions';
import CepPage from '../../frontend/ElementsMaps/cepSearchElementsMaps';

class TwoTierValidationActions {
    static fetchAndStoreCepData(cep) {
        return CepApiActions.requestCep(cep);
    }

    static navigateToAndSearchCep(cep) {
        CepActions.navigateToCepPage();
        CepActions.searchCep();
        CepActions.enterCep(cep);
        CepActions.selectTipoCep("ALL");
        CepActions.clickSearchButton();
    }

    static verifyDetailsDirectly(apiData) {
        if (!apiData || !apiData.logradouro || !apiData.bairro || !apiData.localidade || !apiData.uf) {
            throw new Error("Dados da API não estão definidos");
        }
    
        cy.get(CepPage.logradouroField)
            .should('be.visible')
            .invoke('text')
            .then(text => {
                expect(text.trim()).to.include(apiData.logradouro);
            });
    
        cy.get(CepPage.bairroField)
            .should('be.visible')
            .invoke('text')
            .then(text => {
                expect(text.trim()).to.include(apiData.bairro);
            });
    
        cy.get(CepPage.cidadeField)
            .should('be.visible')
            .invoke('text')
            .then(text => {
                expect(text.trim()).to.include(`${apiData.localidade}/${apiData.uf}`);
            });
    }
}

export default TwoTierValidationActions;
