describe('My First HTML Project page - Form', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('has a form with action attribute submit', () => {
    cy.get('form').should('have.attr', 'action', 'submit');
  });
});
