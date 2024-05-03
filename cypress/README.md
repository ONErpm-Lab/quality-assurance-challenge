# Testes Automatizados com Cypress e Cucumber

Este repositório contém testes automatizados para diferentes funcionalidades usando Cypress e Cucumber.

## Funcionalidade 1: Pesquisa de Pokémon via Frontend

Este cenário testa a funcionalidade de pesquisa de Pokémon, comparando as informações obtidas da API com as informações exibidas no frontend.

### Cenário 01: Busca de dados do Pokémon na API

- **Descrição:**
  - Como uma usuária do site do Pokémon
  - Quero comparar as informações coletadas na API com as informações do frontend

- **Passos:**
  1. Faço uma requisição para a API de Pokémon
  2. Verifico os dados recebidos da API
  3. Armazeno as informações da API
  4. Acesso o site do Pokémon
  5. Verifico se as informações sobre o nome, id, habilidade e tipo do Pokémon são as mesmas da API

- **Arquivo de Teste:** `pokemon.feature`

## Funcionalidade 2: Busca de CEP nos Correios

Este cenário testa a funcionalidade de busca de CEP nos Correios.

### Cenário 01: Pesquisar CEP válido

- **Descrição:**
  - Como um usuário do serviço dos Correios
  - Eu quero ser capaz de buscar um CEP
  - Para obter informações sobre o endereço correspondente

- **Passos:**
  1. Estou na página inicial dos Correios
  2. Realizo uma busca pelo CEP 
  3. Devo visualizar o logradouro 

- **Arquivo de Teste:** `correios.feature`

## Funcionalidade 3: Busca de CEP no ViaCEP

Este cenário testa a funcionalidade de busca de CEP no serviço do ViaCEP.

### Cenário 01: Pesquisar CEP válido no ViaCEP

- **Descrição:**
  - Como um usuário do serviço do ViaCEP
  - Eu quero ser capaz de buscar um CEP
  - Para obter informações sobre o endereço correspondente

- **Passos:**
  1. Estou no site do ViaCEP
  2. Realizo uma busca pelo CEP "01001-000" no ViaCEP
  3. Devo visualizar o logradouro "Praça da Sé" no ViaCEP

- **Arquivo de Teste:** `viacep.feature`

## Instalação e Execução

1. Clone este repositório: `git clone https://github.com/LRodriguesF/projetos_back_front.git`
2. Instale as dependências: `npm install`
3. Execute os testes: `npm run cypress:open`
4. 
## Versões do Cypress e Cucumber:

- Cypress: v7.7.0
- Cypress Cucumber Preprocessor: v4.3.1
  
## Estrutura do Projeto

- `cypress`: Contém os arquivos de configuração e os testes escritos com Cypress e Cucumber.
- `cypress/e2e/step_definitions`: Contém os arquivos de definição dos steps dos cenários Cucumber.
- `cypress/integration`: Contém os arquivos de testes Cypress.
- `cypress/plugins`: Contém os plugins Cypress.
- `cypress/support`: Contém os arquivos de suporte Cypress.
- `package.json`: Arquivo de configuração do Node.js.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adicionando nova feature'`.
4. Faça push da sua branch: `git push origin minha-feature`.
5. Abra um pull request.

