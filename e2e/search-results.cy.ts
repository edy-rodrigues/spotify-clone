describe('Search Results Page', () => {
  const searchTerm = 'Taylor Swift';

  beforeEach(() => {
    cy.visit(`/search/${encodeURIComponent(searchTerm)}`);
    cy.wait(3000);
  });

  it('should display search results for the given term', () => {
    cy.get('h2').should('exist');

    cy.get('[data-slot="search-input"]').should('have.value', searchTerm);
  });

  it('should have filter options', () => {
    cy.get('[data-slot="filter-item"]').should('exist');

    cy.get('[data-slot="filter-item"]').first().click();

    cy.url().should('include', 'filter=');
  });

  it('should navigate to an artist page when clicking on an artist card', () => {
    cy.wait(5000);

    cy.get('[data-slot="card"]').should('exist');

    cy.get('[data-slot="card"]').first().as('artistCard');

    cy.get('@artistCard')
      .invoke('attr', 'href')
      .then((href) => {
        const artistId = href?.split('/').pop();

        cy.get('@artistCard').click();

        cy.url().should('include', `artists/${artistId}`);

        cy.get('h1').should('exist');
      });
  });

  it('should allow changing the search term', () => {
    const newSearchTerm = 'Beyonce';

    cy.get('[data-slot="search-input"]').clear().type(newSearchTerm);

    cy.wait(600);

    cy.url().should('include', `/search/${encodeURIComponent(newSearchTerm)}`);

    cy.get('h2').should('exist');
  });
});
