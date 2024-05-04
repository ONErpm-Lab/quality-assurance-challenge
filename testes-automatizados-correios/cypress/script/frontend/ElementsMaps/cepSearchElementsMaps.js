class CepPage {
    static get searchCep() { return 'a.info-link[href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"]'; }
    static get cepInput() { return 'input[name="endereco"]'; }
    static get searchButton() { return 'button[name="btn_pesquisar"]'; }
    static get selectTypeCep() { return 'select[name="tipoCEP"]'; }
    static get logradouroField() { return 'td[data-th="Logradouro/Nome"]'; }
    static get bairroField() { return 'td[data-th="Bairro/Distrito"]'; }
    static get cidadeField() { return 'td[data-th="Localidade/UF"]'; }
    static get errorMessage() { return '#mensagem-resultado-alerta'; }
}

export default CepPage;