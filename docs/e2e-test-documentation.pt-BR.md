# Documentação de Testes E2E do Clone do Spotify

Este documento fornece uma visão geral dos testes end-to-end (E2E) implementados para a aplicação Clone do Spotify usando Cypress.

*Read this in [English](e2e-test-documentation.md)*

## Estrutura dos Arquivos de Teste

Os testes E2E estão organizados nos seguintes arquivos:

1. `e2e/home.cy.ts` - Testes para a página inicial
2. `e2e/search.cy.ts` - Testes para a página de busca
3. `e2e/search-results.cy.ts` - Testes para a página de resultados de busca
4. `e2e/artist-details.cy.ts` - Testes para a página de detalhes do artista

## Cobertura de Testes

### Testes da Página Inicial (`home.cy.ts`)

- Verificação básica de carregamento da página
- Navegação para a página de um artista ao clicar em um card de artista

### Testes da Página de Busca (`search.cy.ts`)

- Verificação do campo de entrada de busca
- Digitação no campo de busca
- Navegação para a página de resultados de busca ao digitar um termo de busca
- Limpeza do campo de entrada de busca

### Testes da Página de Resultados de Busca (`search-results.cy.ts`)

- Exibição dos resultados de busca para um determinado termo
- Funcionalidade das opções de filtro
- Navegação para a página de um artista ao clicar em um card de artista
- Alteração do termo de busca

### Testes da Página de Detalhes do Artista (`artist-details.cy.ts`)

- Exibição das informações do artista
- Exibição da tabela de álbuns
- Navegação pelas páginas de álbuns usando paginação
- Exibição da seção de faixas principais
- Interação com as linhas de álbuns

## Executando os Testes

Para executar os testes E2E:

1. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

2. Em um terminal separado, execute os testes do Cypress:
   ```
   npm run cypress:open
   ```
   ou
   ```
   npm run cypress:run
   ```

## Detalhes de Implementação dos Testes

### Estratégias Principais de Teste

1. **Navegação entre Páginas**: Os testes verificam se os usuários podem navegar entre diferentes páginas clicando em links e cards.

2. **Funcionalidade de Busca**: Os testes garantem que a funcionalidade de busca funcione corretamente, incluindo a digitação no campo de busca e a navegação para os resultados da busca.

3. **Paginação**: Os testes verificam se os controles de paginação funcionam corretamente na página de detalhes do artista.

4. **Carregamento de Conteúdo**: Os testes verificam se o conteúdo é carregado e exibido corretamente em cada página.

5. **Interações do Usuário**: Os testes simulam interações do usuário como cliques, digitação e hover.

### Dados de Teste

- Para os testes de busca, usamos "Taylor Swift" como termo de busca
- Para os testes de detalhes do artista, usamos um ID de artista conhecido (ID da Taylor Swift)

## Melhorias Futuras

Melhorias potenciais para o conjunto de testes E2E:

1. Adicionar testes mais abrangentes para casos de borda
2. Implementar testes de regressão visual
3. Adicionar testes para design responsivo (mobile, tablet, desktop)
4. Implementar simulação de dados de teste para evitar dependência da API real do Spotify