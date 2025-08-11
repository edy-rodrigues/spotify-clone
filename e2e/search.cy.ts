describe('Search Page', () => {
  beforeEach(() => {
    cy.visit('/search');
    cy.wait(2000);
  });

  it('should have a search input field', () => {
    cy.get('[data-slot="search-input"]').should('exist');
  });

  it('should allow typing in the search field', () => {
    const searchTerm = 'Taylor Swift';

    cy.get('[data-slot="search-input"]').first().type(searchTerm);

    cy.get('[data-slot="search-input"]').first().should('have.value', searchTerm);
  });

  it('should navigate to search results page when typing a search term', () => {
    const searchTerm = 'Taylor Swift';

    cy.get('[data-slot="search-input"]').first().type(searchTerm);

    cy.wait(600);

    cy.url().should('include', `/search/${encodeURIComponent(searchTerm)}`);

    cy.get('h2').should('exist');
  });

  it('should clear the search input when clicking the clear button', () => {
    const searchTerm = 'Taylor Swift';

    cy.get('[data-slot="search-input"]').first().type(searchTerm);

    cy.get('[data-slot="search-input"]').first().should('have.value', searchTerm);

    cy.get('[data-slot="search-clear-button"]').first().click();

    cy.get('[data-slot="search-input"]').first().should('have.value', '');
  });
});
