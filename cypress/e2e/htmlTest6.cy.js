describe('My First HTML Project page - Link', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('has a link to Savvy Coders on Replit', () => {
    cy.get('a')
      .should('have.attr', 'href', 'https://replit.com/@savvy-coders')
      .and('have.text', "Savvy Coders on Replit, where I'm learning to code!");
  });
});
