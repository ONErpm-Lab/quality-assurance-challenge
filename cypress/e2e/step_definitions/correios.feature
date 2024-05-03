Feature: Busca de CEP nos Correios

  Como um usuário do serviço dos Correios
  Eu quero ser capaz de buscar um CEP
  Para obter informações sobre o endereço correspondente

  Background:
    Given que estou na página inicial dos Correios

  Scenario: Pesquisar CEP válido
    When eu realizo uma busca pelo CEP "01310200"
    Then devo visualizar o logradouro "Avenida Paulista"

  Scenario: Pesquisar CEP com hífen
    When eu realizo uma busca pelo CEP "01310-200"
    Then devo visualizar o logradouro "Avenida Paulista"

  Scenario: Pesquisar CEP inválido
    When eu realizo uma busca pelo CEP "00000-000"
    Then devo visualizar a mensagem de erro "Não há dados a serem exibidos"

  Scenario: Pesquisar CEP com formato inválido
    When eu realizo uma busca pelo CEP "ABCDE-FGH"
    Then devo visualizar a mensagem de erro "Não há dados a serem exibidos"

  