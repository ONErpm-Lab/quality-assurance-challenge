Feature: Cruzamento de Informações de CEP entre API ViaCEP e Site dos Correios

    Scenario Outline: Validar consistência das informações de CEP entre API e Site dos Correios
        Given Eu faço uma requisição na API para o CEP "<cep>"
        When Que eu acesso a página de busca de CEP dos Correios e realizo a busca pelo CEP "<cep>"
        Then Eu devo ver que as informações na página correspondem às armazenadas da API

        Examples:
            | cep      |
            | 26183220 |
            | 37503192 |
            | 69151588 |
