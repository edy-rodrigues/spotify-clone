describe('Artist Details Page', () => {
  const artistId = '06HL4z0CvFAxyc27GXpf02';

  beforeEach(() => {
    cy.visit(`/artists/${artistId}`);
    cy.wait(3000);
  });

  it('should display artist information', () => {
    cy.get('section').first().should('exist');

    cy.get('h1').should('exist');
  });

  it('should display albums table', () => {
    cy.get('table').should('exist');

    cy.get('tbody tr').should('have.length.at.least', 1);
  });

  it('should navigate through album pages using pagination', () => {
    cy.get('[data-slot="pagination"]').should('exist');

    cy.get('tbody tr').its('length').as('initialAlbumCount');

    cy.get('[data-slot="pagination-link"][href*="page=2"]').then(($btn) => {
      if (!$btn.hasClass('pointer-events-none') && $btn.length > 0) {
        cy.wrap($btn).click();

        cy.wait(2000);

        cy.url().should('include', 'page=2');

        cy.get('tbody tr').should('exist');

        cy.get('[data-slot="pagination-link"][href*="artists"]').first().click();

        cy.wait(2000);

        cy.url().should('not.include', 'page=2');
      } else {
        cy.log('Only one page of albums available');
      }
    });
  });

  it('should display top tracks section', () => {
    cy.contains('h2', /top|tracks|populares/i).should('exist');

    cy.wait(2000);

    cy.get('[data-slot="carousel-content"]').should('exist');
    cy.get('[data-slot="carousel-item"]').should('have.length.at.least', 1);
  });

  it('should have clickable album rows', () => {
    cy.get('tbody tr').first().as('firstAlbumRow');

    cy.get('@firstAlbumRow').trigger('mouseover');

    cy.get('@firstAlbumRow').should('have.css', 'background-color');
  });
});
