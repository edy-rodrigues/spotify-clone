# 🧪 Guia de Testes

Este documento descreve a abordagem de testes para o projeto Clone do Spotify.

*Read this in [English](test-documentation.md)*

## 🔍 Visão Geral

O projeto utiliza uma combinação de estratégias de teste para garantir a qualidade e funcionalidade do código:

- **Testes Unitários**: Para testar componentes individuais, hooks e utilitários
- **Testes E2E**: Para testar fluxos completos de usuário e integração

## 🧩 Testes E2E (Cypress)

Os testes E2E são implementados usando Cypress para testar fluxos completos de usuário e integração entre componentes.

### Executando Testes E2E

Os seguintes scripts npm estão disponíveis para executar testes E2E:

```bash
# Abrir o Cypress em modo interativo
npm run cypress

# Executar testes do Cypress em modo headless
npm run cypress:headless

# Iniciar o servidor de desenvolvimento e abrir o Cypress
npm run test:e2e

# Iniciar o servidor de desenvolvimento e executar testes do Cypress em modo headless
npm run test:e2e:headless
```

### Estrutura de Testes

- Os testes E2E estão localizados no diretório `e2e`
- Os arquivos de teste seguem a convenção de nomenclatura: `*.cy.ts`
- Fixtures para dados simulados são armazenados em `e2e/fixtures`
- Comandos personalizados e utilitários estão em `e2e/support`

## 📦 Testes Unitários (Vitest)

Os testes unitários são implementados usando Vitest com a seguinte configuração:

- **Test Runner**: Vitest
- **Ambiente de Teste**: jsdom (para testes de DOM)
- **Bibliotecas de Teste**: 
  - `@testing-library/react` - Para renderizar e interagir com componentes React
  - `@testing-library/jest-dom` - Para asserções de DOM

### Executando Testes

Os seguintes scripts npm estão disponíveis para executar testes:

```bash
# Executar todos os testes uma vez
npm test
# ou
npm run test:unit

# Executar testes em modo watch (desenvolvimento)
npm run test:unit:watch

# Executar testes com relatório de cobertura
npm run test:unit:coverage
```

### Estrutura de Arquivos de Teste

- Os arquivos de teste devem estar co-localizados com o código que testam
- Os arquivos de teste devem seguir a convenção de nomenclatura: `*.test.tsx` ou `*.spec.tsx`
- Os testes devem ser organizados de forma que espelhe a estrutura do código que testam

### Cobertura

Relatórios de cobertura são gerados ao executar `npm run test:unit:coverage`.

Os relatórios de cobertura estão disponíveis no diretório `coverage` após executar o comando de cobertura.