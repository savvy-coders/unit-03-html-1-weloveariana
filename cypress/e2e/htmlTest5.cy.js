describe('My First HTML Project page - Image', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('has an img with src attribute image.jpg', () => {
      cy.get('img').should('have.attr', 'src', 'image.jpg');
    });
  });
  