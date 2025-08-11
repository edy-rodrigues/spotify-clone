describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });

  it('should have a document', () => {
    cy.document().should('exist');
    cy.log('Document exists');
  });

  it('should have HTML content', () => {
    cy.get('html').should('exist');
    cy.get('body').should('exist');
  });

  it('should have a header', () => {
    cy.get('header, [role="banner"]').should('exist');
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
});
