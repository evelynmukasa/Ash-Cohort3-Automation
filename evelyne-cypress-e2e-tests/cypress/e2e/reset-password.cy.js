/// <reference types="cypress" />

describe('Reset Password use case - Student role', () => {
  const loginUrl = 'https://student.michaelkentburns.com/wp-login.php';

  it('1. allows a student to access the recovery page', () => {
    cy.visit(loginUrl);

    cy.contains('Lost your password?').should('be.visible').click();
    
    
    cy.url().should('include', 'wp-login.php?action=lostpassword');
    cy.contains('Lost Password').should('be.visible');
       });

  it('2. shows the recovery form fields for a student', () => {
    cy.visit(loginUrl + '?action=lostpassword');
   
   
    cy.get('form#lostpasswordform', { timeout: 10000 }).should('be.visible');
    cy.get('label[for="user_login"]').should('contain.text', 'Username or Email Address');
    
    
    cy.get('input[name="user_login"]').should('be.visible');
    cy.get('input[name="wp-submit"]').should('be.visible');
  });

  it('3. submits a valid student recovery request successfully', () => {
    cy.visit(loginUrl + '?action=lostpassword');
      
     cy.get('input[name="user_login"]').clear().type('eva_mukasa');
    cy.get('input[name="wp-submit"]').click({ force: true });

    cy.contains('Check your email for the confirmation link', { timeout: 15000 }).should('be.visible');
    cy.url().should('include', 'wp-login.php?checkemail=confirm');
  });

  it('4. should send a reset-email to the student email', () => {
    cy.visit(loginUrl + '?action=lostpassword');
     
    cy.get('input[name="user_login"]').clear().type('eva_mukasa');
    cy.get('input[name="wp-submit"]').click({ force: true });

    cy.contains('A password reset email has been sent to your email address').should('be.visible');
  });
});
