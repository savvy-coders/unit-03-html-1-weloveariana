describe('My First HTML Project page - Heading', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('displays a h1 with text content "Hello, World!"', () => {
      cy.get('h1').should('have.text', 'Hello, World!');
    });
  });
  
