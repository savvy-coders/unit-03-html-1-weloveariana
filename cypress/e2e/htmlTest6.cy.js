describe('My First HTML Project page - Link', () => {

  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('has a link to Savvy Coders on GitHub', () => {

    cy.contains('a', 'Savvy Coders on GitHub, where I\'m learning to code!')
      .should('have.attr', 'href', 'https://github.com/savvy-coders');

  });

});