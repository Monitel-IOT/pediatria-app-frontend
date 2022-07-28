describe('LoginPage', () => {
  it('has a title', () => {
    cy.visit('/login');

    cy.contains('Login Page');
  });
});
