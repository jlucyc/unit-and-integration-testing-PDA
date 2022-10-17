describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


it('should update the display of the running total', () => {
  cy.get('#number3').click();
  cy.get('#number4').click();
  cy.get('#number5').click();
  cy.get('.display').should('contain', '345')
});

it('should do a sum and display the answer', () => {
  cy.get('#number9').click();
  cy.get('#operator-add').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '11')
});

it('should chain operations together', () => {
  cy.get('#number1').click();
  cy.get('#operator-add').click();
  cy.get('#number8').click();
  cy.get('#operator-subtract').click();
  cy.get('#number3').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '6');
});

it('should display negative numbers', () => {
  cy.get('#number1').click();
  cy.get('#operator-subtract').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-1');

});

it('should display decimal numbers', () => {
  cy.get('#number3').click();
  cy.get('#operator-divide').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '1.5');

});

it('should display large numbers', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '500000');

});

it('should display undefined', () => {
  cy.get('#number1').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'undefined');
  

});





})







// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a 
// test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify 
//   the Calculator model to meet this requirement). should contain undefined