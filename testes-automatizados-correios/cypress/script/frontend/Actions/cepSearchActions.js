import CepPage from '../../frontend/ElementsMaps/cepSearchElementsMaps';

class CepActions {
    static navigateToCepPage() {
        cy.visit('https://www.correios.com.br/')
            .then(() => {
                cy.url().should('include', 'correios.com.br'); 
                cy.get('body').should('be.visible');
            });
    }

    static searchCep() {
        cy.get(CepPage.searchCep).eq(0)
            .should('be.visible')
            .click();
    }

    static selectTipoCep(optionValue) {
        cy.get(CepPage.selectTypeCep)
            .should('be.visible')
            .and('exist')
            .select(optionValue)
            .should('have.value', optionValue);
    }

    static enterCep(cep) {
        cy.get(CepPage.cepInput)
            .should('be.visible')
            .type(cep)
            .invoke('val')
            .then(value => {
                expect(value).to.equal(cep);
            });
    }

    static clickSearchButton() {
        cy.get(CepPage.searchButton)
            .should('be.visible')
            .click();
    }
    static verifyDetails(dataTable) {
        dataTable.hashes().forEach(row => {
            cy.get(CepPage.logradouroField)
                .should('be.visible')
                .and('exist')
                .invoke('text')
                .then(text => {
                    expect(text.trim()).to.contain(row['Logradouro/Nome']);
                });

            cy.get(CepPage.bairroField)
                .should('be.visible')
                .and('exist')
                .invoke('text')
                .then(text => {
                    expect(text.trim()).to.contain(row['Bairro/Distrito']);
                });

            cy.get(CepPage.cidadeField)
                .should('be.visible')
                .and('exist')
                .invoke('text')
                .then(text => {
                    expect(text.trim()).to.contain(row['Localidade/UF']);
                });
        });
    }

    static verifyErrorMessage(expectedMessage) {
        cy.get(CepPage.errorMessage)
            .should('be.visible')
            .and('exist')
            .invoke('text')
            .then(text => {
                expect(text.trim()).to.equal(expectedMessage);
            });
    }

    static enterAddress(address) {
        cy.get(CepPage.cepInput)
            .should('be.visible')
            .type(address)
            .invoke('val')
            .then(value => {
                expect(value).to.equal(address);
            });
    }
}

export default CepActions;