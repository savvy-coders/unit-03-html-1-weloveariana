describe('My First HTML Project page - Div', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('has a div with class container and id divOne', () => {
      cy.get('div.container#divOne').should('exist');
    });
  });
  