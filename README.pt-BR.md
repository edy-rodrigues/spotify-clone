# 🎧 Clone da Interface do Spotify - Desafio Técnico Frontend

Este projeto foi desenvolvido como parte do desafio técnico para a vaga de Frontend na Kanastra. A proposta consiste em consumir a API pública do Spotify, oferecendo uma interface chamativa e responsiva inspirada na interface oficial do Spotify.

*Read this in [English](README.md)*

*Confira a [Documentação de Decisões Técnicas](docs/technical-decisions.pt-BR.md) para entender sobre o processo de desenvolvimento*

## 🧰 Tecnologias Utilizadas

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Query 5](https://tanstack.com/query/latest)
- [Cypress 14](https://www.cypress.io/)

## ✅ Funcionalidades

- 🎤 Listagem de artistas
- 💿 Detalhes de um artista (popularidade, principais músicas e álbuns)
- 📚 Paginação manual de álbuns (20 por página)
- 🔎 Filtros:
  - Por nome do artista
  - Por nome do álbum
- 🌍 Interface responsiva
- 🎨 UI inspirada no Spotify com foco visual (animações e estilizações)

## 🚀 Como rodar localmente

### 1. Pré-requisitos

- Node.js (versão recomendada: **2.x**)
- Npm

### 2. Instalação

```bash
# Instale as dependências
npm install
```

### 3. Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Executar o projeto

```bash
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

## Outros comandos
```bash
# Execute o seguinte comando para gerar o build da aplicação
npm run build

# Execute o seguinte comando para subir o ambiente de produção pós build
npm run start

# Execute o seguinte comando para verificar o lint
npm run lint
```

## 🧪 Testes

### Testes Unitários
```bash
# Execute os testes unitários
npm run test:unit

# Execute os testes unitários em modo watch
npm run test:unit:watch

# Execute os testes unitários com cobertura
npm run test:unit:coverage
```

### Testes E2E (Cypress)
```bash
# Abra o Cypress em modo interativo
npm run cypress

# Execute os testes do Cypress em modo headless
npm run cypress:headless

# Inicie o servidor de desenvolvimento e abra o Cypress
npm run test:e2e

# Inicie o servidor de desenvolvimento e execute os testes do Cypress em modo headless
npm run test:e2e:headless
```

## 📚 Documentação

Para mais informações sobre os testes, consulte:
- [Documentação de Testes](docs/test-documentation.pt-BR.md)
- [Documentação de Testes E2E](docs/e2e-test-documentation.pt-BR.md)

---

Desenvolvido por [Edinei Rodrigues](https://github.com/edy-rodrigues) 🧑‍💻