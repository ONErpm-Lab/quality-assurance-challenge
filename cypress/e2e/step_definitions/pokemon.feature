Feature: Pesquisa de pokemon via FrontEnd comparando com as informações armazenadas da API

Como uma usuária do site do pokemon
Quero comparar as informações coletadas na API com as informação de Front end

#-- Cenário 01 --#
Scenario: Busca de dados do pokemon API
    Given que eu faço uma requisição para a API de pokemon
    When eu verifico os dados recebidos da API
    Then Armazenando informação da API
    And eu acesso o site do Pokemon
    And eu vejo que as informações sobre o nome do Pokemon são as mesmas da API
    And eu vejo que as informações sobre o id do Pokemon são as mesmas da API
    And eu vejo que as informações sobre a habilidade do Pokemon são as mesmas da API
    And eu vejo que as informações sobre o tipo do Pokemon são as mesmas da API