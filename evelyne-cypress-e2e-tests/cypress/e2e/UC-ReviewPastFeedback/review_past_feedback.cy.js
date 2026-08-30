/// <reference types="cypress" />

describe('UC-ReviewPastFeedback', () => {
  
    it('student can see past feedback', () => {
    cy.visit('https://student.michaelkentburns.com/wp-login.php');

    cy.get('#user_login').type('eva_mukasa');
    
    cy.get('#user_pass').type('zesrA8-nuwfuw-xutfur');
    cy.get('#wp-submit').click();

    cy.location('pathname').should('eq', '/');
    
    
    cy.contains('Accept All').click({ force: true });

    cy.visit('https://student.michaelkentburns.com/my-completed-surveys/');
    
    cy.contains('Surveys You Have Completed').should('be.visible');
    cy.contains("Samuel’s Team – Testing Effort").click();

    cy.contains('Your Answers for:').should('be.visible');
    cy.contains("hi I'm Eva").should('be.visible');
  });
});
