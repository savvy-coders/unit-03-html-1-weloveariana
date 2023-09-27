describe('My First HTML Project page - Paragraph', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('displays a p with the correct text', () => {
    cy.get('p').contains('This is my first coding project using HTML!').should('exist');
  });
});
