Feature: Funcionalidade de busca de CEP via API ViaCEP

    Scenario Outline: Busca por CEPs válidos e existentes
        Given Eu faço uma requisição GET para o CEP "<cep>"
        Then A resposta deve conter o status 200
        And A resposta deve conter os detalhes do CEP

        Examples:
            | cep       |
            | 52071335  |
            | 01001-000 |
            | 40010-010 |

    Scenario: Consultar CEP com formato inválido
        Given Eu faço uma requisição GET para o CEP "asdre"
        Then A resposta deve conter o status 400

    Scenario: Consultar CEP inexistente e verificar mensagem de erro
        Given Eu faço uma requisição GET para o CEP "99999999"
        Then A resposta deve conter o status 200
        And A resposta deve conter uma mensagem de erro "erro: true"

    Scenario Outline: Busca por CEPs válidos e verificar detalhes específicos
        Given Eu faço uma requisição GET para o CEP "<cep>"
        Then A resposta deve conter o status 200
        And O logradouro deve ser "<logradouro>"
        And O bairro deve ser "<bairro>"
        And A cidade deve ser "<cidade>"
        And O estado deve ser "<estado>"

        Examples:
            | cep       | logradouro            | bairro   | cidade    | estado |
            | 01001-000 | Praça da Sé           | Sé       | São Paulo | SP     |
            | 40010-010 | Rua da Grécia         | Comércio | Salvador  | BA     |
            | 52071335  | Rua Biann de Medeiros | Monteiro | Recife    | PE     |

    Scenario: Alternar entre consulta de CEP válido e inválido
    #Testa a estabilidade e consistência da API ao alternar entre consultas válidas e inválidas.
        Given Eu faço uma requisição GET para o CEP "01001-000"
        Then A resposta deve conter o status 200
        When Eu faço uma requisição GET para o CEP "aeiou"
        Then A resposta deve conter o status 400
        When Eu faço uma requisição GET para o CEP "40010-010"
        Then A resposta deve conter o status 200




