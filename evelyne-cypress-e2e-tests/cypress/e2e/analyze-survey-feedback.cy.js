/// <reference types="cypress" />

describe('UC-AnalyzeSurveyFeedback', () => {
  
    Cypress.on('uncaught:exception', () => false);

   const loginUrl = 'https://student.michaelkentburns.com/wp-login.php';
  const dashboardUrl = 'https://student.michaelkentburns.com/wp-admin/';
        const instructorUsername = 'eva_mukasa';
        const instructorPassword = 'zesrA8-nuwfuw-xutfur';

  it('allows an instructor to access the dashboard for survey feedback analysis', () => {
    
    
    cy.visit(loginUrl);
    
    cy.get('form#loginform', { timeout: 15000 }).should('be.visible');
    cy.get('input[name="log"]').clear({ force: true }).type(instructorUsername, { force: true });
    
    
    cy.get('input[name="pwd"]').clear({ force: true }).type(instructorPassword, { force: true });
    cy.get('input[name="wp-submit"]').click({ force: true });

    cy.location('pathname', { timeout: 20000 }).should('include', 'wp-admin');
    cy.visit(dashboardUrl);
    cy.contains('Dashboard').should('be.visible');
  });
});
