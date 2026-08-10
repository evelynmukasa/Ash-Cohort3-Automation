/// <reference types="cypress" />

describe('UC-ManageSurveys-Delete Survey', () => {


  Cypress.on('uncaught:exception', () => false);



  
  const loginUrl = 'https://student.michaelkentburns.com/wp-login.php';
  const dashboardUrl = 'https://student.michaelkentburns.com/wp-admin/';

  const instructorUsername = 'eva_mukasa';
  const instructorPassword = 'zesrA8-nuwfuw-xutfur';

  it('lets an instructor delete an existing survey', () => {
      cy.visit(loginUrl);
    
      cy.get('form#loginform').should('be.visible');
    cy.get('input[name="log"]').clear({ force: true }).type(instructorUsername, { 
        force: true });
    
    cy.get('input[name="pwd"]').clear({ force: true }).type(instructorPassword, { 
        force: true });
    cy.get('input[name="wp-submit"]').click({ 
        force: true });

   
   
    cy.location('pathname', { timeout: 20000 }).should('include', 'wp-admin') ;
    cy.visit(dashboardUrl);

      cy.contains(/Surveys/i, { timeout: 10000 }).click({ force: true });

    cy.on('window:confirm', () => true);

      cy.contains(/delete|trash|remove/i, { timeout: 10000 }).first().click({ force: true });

    cy.contains(/deleted|removed|survey.*deleted/i, { timeout: 10000 }).should('be.visible');


          });

});
