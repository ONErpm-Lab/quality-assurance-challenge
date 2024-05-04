class CepApiActions {
    static requestCep(cep) {
        return cy.request({
            method: 'GET',
            url: `https://viacep.com.br/ws/${cep}/json/`,
            failOnStatusCode: false
        });
    }
}

export default CepApiActions;




