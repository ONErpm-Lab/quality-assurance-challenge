Feature: Funcionalidade de busca de CEP no site dos Correios

    Scenario Outline: Buscar por CEPs válidos e verificar informações detalhadas
        Given Que eu acesso a página de busca de CEP dos Correios
        And clico no botão Busca CEP ou Endereço
        When Eu insiro o CEP "<cep>"
        And Eu seleciono a opção "ALL" no tipo de CEP
        And Eu clico no botão de busca
        Then Eu devo ver as informações detalhadas:
            | Logradouro/Nome | Bairro/Distrito | Localidade/UF |
            | <logradouro>    | <bairro>        | <cidade>      |

        Examples:
            | cep       | logradouro                        | bairro   | cidade            |
            | 01001-000 | Praça da Sé                       | Sé       | São Paulo/SP      |
            | 30170-010 | Avenida Bias Fortes - até 279/280 | Lourdes  | Belo Horizonte/MG |
            | 40010-010 | Rua da Grécia                     | Comércio | Salvador/BA       |

    Scenario: Buscar por um CEP inexistente
        Given Que eu acesso a página de busca de CEP dos Correios
        And clico no botão Busca CEP ou Endereço
        When Eu insiro o CEP "00000-000"
        And Eu clico no botão de busca
        Then Eu devo ver uma mensagem de erro "Dados não encontrado"

    Scenario: Buscar por um CEP com formato inválido
        Given Que eu acesso a página de busca de CEP dos Correios
        And clico no botão Busca CEP ou Endereço
        When Eu insiro o CEP "abcd"
        And Eu clico no botão de busca

    Scenario Outline: Buscar por CEP usando endereço completo
        Given Que eu acesso a página de busca de CEP dos Correios
        And clico no botão Busca CEP ou Endereço
        When Eu insiro o endereço "<endereco_completo>"
        And Eu seleciono a opção "ALL" no tipo de CEP
        And Eu clico no botão de busca
        Then Eu devo ver as informações detalhadas:
            | Logradouro/Nome | Bairro/Distrito | Localidade/UF |
            | <logradouro>    | <bairro>        | <cidade>      |

        Examples:
            | endereco_completo                   | logradouro                        | bairro   | cidade            |
            | Praça da Sé, São Paulo              | Praça da Sé                       | Sé       | São Paulo/SP      |
            | Avenida Bias Fortes, Belo Horizonte | Avenida Bias Fortes - até 279/280 | Lourdes  | Belo Horizonte/MG |
            | Rua da Grécia, Salvador             | Rua da Grécia                     | Comércio | Salvador/BA       |


