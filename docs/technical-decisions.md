# Technical Decisions Documentation

This document outlines the key technical decisions I made during the development of this project for the Frontend position technical challenge at Kanastra. It explains the rationale behind these decisions, acknowledging technical debt where applicable, and providing context for improvements to demonstrate knowledge.

*Leia em [português](technical-decisions.pt-BR.md)*

## Domain Entities

### Spotify API Coupling

The domain entities in the `domain` directory (e.g., `Artist`, `Album`) are directly coupled with Spotify's data structures. For example, in the Artist class:

- I chose to import and use the Spotify Artist type directly
- I encapsulated the Spotify Artist object in our domain class
- I exposed Spotify properties through getter methods

**Why I made this choice:**
- **Development Speed**: I chose this approach because it significantly accelerated my development by eliminating the need to create and maintain separate domain models.
- **Technical Debt**: I acknowledge this creates a tight coupling with the Spotify API, making it harder to switch providers or modify the domain model independently.
- **Future Improvement**: In a production environment with more time, I would implement a proper domain model that maps Spotify data to our own entities, creating a clear separation between the external API and our domain.

## Infrastructure Services

In my implementation of services in the `infra/spotify-api` directory, I decided to directly use Spotify's response types without transformation. For example, in my artist API implementation:

- I developed methods that return Spotify's data types directly (Artist[], TopTracksResult, etc.)
- I chose not to use Data Transfer Objects (DTOs) to transform the data
- I accepted that the application would be tightly coupled to Spotify's API structure

**Why I made this choice:**
- **Development Efficiency**: By using Spotify's types directly, I was able to avoid creating and maintaining DTOs (Data Transfer Objects), which accelerated my development.
- **Technical Debt**: I'm aware that my approach tightly couples the application to Spotify's data structures, making it harder to change providers or modify the API interface.
- **Scalability Concerns**: I recognize that the solution I implemented isn't scalable for a production application where I'd want more control over the data structures.

## UI Components

To enhance the user experience, I built various visual elements that mirror Spotify's interface, even though not all functionality is fully implemented:

### Play Button Example

I created the `CardPlayButton` component in `src/components/data-display/card/card.tsx` as a visual element that appears when users hover over a card, without actually triggering music playback. I carefully styled this button to match Spotify's visual language, while acknowledging its limited functionality in the current implementation.

**Why I made this choice:**
- **Visual authenticity**: I included these elements to create an experience that closely resembles the original Spotify interface.
- **Core focus**: Implementing full music playback would have gone beyond the main scope of the technical challenge.
- **Forward thinking**: I designed the structure to make it easier to add real functionality in future iterations.

## Internationalization (i18n)

I implemented comprehensive internationalization support in the project with:

- I added support for multiple languages (English, Portuguese-Brazil, Korean)
- I developed locale-based routing
- I created utility functions for language resolution
- I organized structured translation files

**Why I made this choice:**
- **Global Accessibility**: I chose to support multiple languages because I believe it makes my application accessible to a wider audience.
- **Demonstration of Best Practices**: I wanted to demonstrate my knowledge of proper internationalization techniques using Next.js and next-intl.
- **Extensibility**: I designed the structure to allow me to easily add new languages in the future.

## How AI was used in this project

Today AI plays an important role in development, but obviously for this technical challenge I wrote all the technical layer by hand, typing each line of code myself. AI was used in different aspects of the project:

### In development

- **Autocomplete**: I used autocomplete features that in the past were done in a more "procedural" way, so to speak, and that today AI brings greater robustness because it proposes obvious code that you would type but with a "tab" you gain a small performance boost
- **Specific questions**: For architecture and decision-making questions, I discussed with AI and sought information in blogs, StackOverflow, and open-source repositories (which was the only way we had in the past)

Today I see AI being robust in **most** simple decisions and in complex decisions to **discuss and initiate logical reasoning** but never assuming it as absolute truth - it's necessary to validate against large projects, books, and real use cases.

### In complementary tasks

AI also helped me with non-core development aspects:

- **Translations**: It assisted with Korean translations and corrections in the English and Portuguese versions
- **Documentation**: It contributed to improving the clarity and writing of documentation while maintaining my personal style

In all cases, I maintained complete control over the technical decisions and code implementation. AI was a complementary tool, not a substitute for my technical knowledge and experience.

## Conclusion

The technical decisions I've documented here reflect the balance I sought between development speed and best practices. While some approaches I chose introduce technical debt, I made these decisions consciously to meet project deadlines while delivering a high-quality user experience.

For a production environment, I would recommend:

1. Decoupling the domain entities I created from Spotify's data structures
2. Implementing proper DTOs for the API responses I developed
3. Adding real functionality to the UI components I mocked
4. Expanding the test coverage I planned