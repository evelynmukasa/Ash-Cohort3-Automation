/// <reference types="cypress" />

describe('UC-ProvideFeedback', () => {
	
    
    Cypress.on('uncaught:exception', () => false);



	const loginUrl = 'https://student.michaelkentburns.com/wp-login.php';
	  const surveyUrl = 'https://student.michaelkentburns.com/survey/samuels-team-testing-effort/';
	
    
    const studentUsername = 'eva_mukasa';
	const studentPassword = 'zesrA8-nuwfuw-xutfur';

	const loginAsStudent = () => {
		
        cy.visit(loginUrl);
		cy.get('form#loginform', { timeout: 15000 }).should('be.visible');
		   
        
        
        cy.get('input[name="log"]').clear().type(studentUsername);
    cy.get('input[name="pwd"]').clear().type(studentPassword);
		cy.get('input[name="wp-submit"]').click({ force: true });
		cy.location('pathname', { timeout: 20000 }).should('eq', '/');
	};

	it('allows a student to complete and submit an available survey', () => {
		loginAsStudent();
		cy.visit(surveyUrl);
		   
        
        cy.location('pathname').should('eq', '/survey/samuels-team-testing-effort/');
		cy.contains('Accept All').click({ force: true });
		
        
        cy.get('body').then(($body) => {
			if ($body.find('#survey-form').length) {
				cy.get('#survey-form').should('be.visible');
			         	cy.get('#survey-form input[name="answer[162]"]')
					.clear({ force: true })
					.type("hi I'm Eva", { force: true });
				
                
                    cy.get('#survey-form')
					.find('button[type="submit"], input[type="submit"]')
					.click({ force: true });
			}

			 cy.contains(/vos réponses ont bien été enregistrées|already responded to this survey/i, {
				  
                timeout: 15000,
			
            
            }).should('be.visible');
		});
	});
});
