describe('My First HTML Project page - Link', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('has a link to Savvy Coders on Replit', () => {
    cy.get('a')
      .should('have.attr', 'href', 'https://github.com/savvy-coders')
      .and('have.text', "Savvy Coders on GitHub, where I'm learning to code!");
  });
});
