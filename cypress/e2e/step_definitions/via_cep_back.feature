Feature: Busca de CEP no ViaCEP

  Como um usuário do serviço do ViaCEP
  Eu quero ser capaz de buscar um CEP
  Para obter informações sobre o endereço correspondente

  Background:
    Given que estou no site do ViaCEP

  Scenario: Pesquisar CEP válido no ViaCEP
    When eu realizo uma busca pelo CEP "01001-000" no ViaCEP
    Then devo visualizar o logradouro "Praça da Sé" no ViaCEP

  Scenario: Pesquisar CEP inválido no ViaCEP
    When eu realizo uma busca pelo CEP "00000-000" no ViaCEP
    Then devo visualizar a mensagem de erro "CEP não encontrado" no ViaCEP

  Scenario: Pesquisar CEP com formato inválido no ViaCEP
    When eu realizo uma busca pelo CEP "ABCDE-FGH" no ViaCEP
    Then devo visualizar a mensagem de erro de formato inválido no ViaCEP