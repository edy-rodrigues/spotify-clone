# 🎧 Spotify UI Clone - Frontend Hiring Challenge

This project was developed as part of the technical challenge for the Frontend position at Kanastra. The proposal consists of consuming the Spotify public API, offering an attractive and responsive interface inspired by the official Spotify interface.

*Leia isto em [Português](README.pt-BR.md)*

*Check out the [Technical Decisions Documentation](docs/technical-decisions.md) to understand about the development process*

*Also, check out the [live demo](https://spotify-clone-lovat-six.vercel.app)*

## 🧰 Technologies Used

- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Cypress 14](https://www.cypress.io/)

## ✅ Features

- 🎤 Artist listing
- 💿 Artist details (popularity, top tracks, and albums)
- 📚 Manual album pagination (20 per page)
- 🔎 Filters:
  - By artist name
  - By album name
- 🌍 Responsive interface
- 🎨 Spotify-inspired UI with visual focus (animations and styling)

## 🚀 How to run locally

### 1. Prerequisites

- Node.js (recommended version: **2.x**)
- Npm

### 2. Installation

```bash
# Install dependencies
npm install
```

### 3. Environment variables

Create a `.env.local` file in the project root with the following variables:

```env
BASE_URL=http://localhost:3000
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run the project

```bash
npm run dev
```

Access at: [http://localhost:3000](http://localhost:3000)

## Other commands
```bash
# Run the following command to generate the application build
npm run build

# Run the following command to start the production environment after build
npm run start

# Run the following command to check lint
npm run lint
```

## 🧪 Tests

### Unit Tests
```bash
# Run unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:unit:watch

# Run unit tests with coverage
npm run test:unit:coverage
```

### E2E Tests (Cypress)
```bash
# Open Cypress in interactive mode
npm run cypress

# Run Cypress tests in headless mode
npm run cypress:headless

# Start the development server and open Cypress
npm run test:e2e

# Start the development server and run Cypress tests in headless mode
npm run test:e2e:headless
```

## 📚 Documentation

For more information about the tests, see:
- [Test Documentation](docs/test-documentation.md)
- [E2E Test Documentation](docs/e2e-test-documentation.md)

---

Developed by [Edinei Rodrigues](https://github.com/edy-rodrigues) 🧑‍💻
