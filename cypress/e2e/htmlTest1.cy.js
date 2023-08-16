describe('My First HTML Project page - Title', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('has the correct title', () => {
    cy.title().should('eq', 'My First HTML Project');
  });
});
