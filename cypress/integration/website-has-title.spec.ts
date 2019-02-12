/// <reference types="Cypress" />

context('Check web page has correct title', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('has a title', () => {
    cy.contains('ITG Technical Test');
  });

  // it('prints PDF', () => {
  //   cy.wait(waitingTime);
  //   cy.get('#generatePdfButton').click();
  //   cy.wait(waitingTime);
  // });

});
