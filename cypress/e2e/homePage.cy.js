describe('HomePage', () => {
  it('Does not to much', () => {
    // Arrange - setup initial app state
    // - visit a web page
    // - query for an element
    // Act - take an action
    // - interact with that element
    // Assert - make an assertion
    // - Make assertions
  });
  it('has a title', () => {
    cy.visit('/home');

    cy.contains('Gestion Clinica');
  });
});
