describe('My First HTML Project page', () => {
  beforeEach(() => {
    cy.visit('/solution.html');
  });

  it('has the correct title', () => {
    cy.title().should('eq', 'My First HTML Project');
  });

  it('has a div with class container and id divOne', () => {
    cy.get('div.container#divOne').should('exist');
  });

  it('displays a h1 with text content "Hello, World!"', () => {
    cy.get('h1').should('have.text', 'Hello, World!');
  });

  it('displays a p with the correct text', () => {
    cy.get('p').should('have.text', 'This is my first coding project using HTML!');
  });

  it('has an img with src attribute image.jpg', () => {
    cy.get('img').should('have.attr', 'src', 'image.jpg');
  });

  it('has a link to Savvy Coders on Replit', () => {
    cy.get('a')
      .should('have.attr', 'href', 'https://replit.com/@savvy-coders')
      .and('have.text', 'Savvy Coders on Replit, where I\'m learning to code!');
  });

  it('has a form with action attribute submit', () => {
    cy.get('form').should('have.attr', 'action', 'submit');
  });
});
