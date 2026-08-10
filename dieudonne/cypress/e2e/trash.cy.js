describe('Trash Survey', () => {

  it('should move a survey to trash', () => {

    
    cy.visit('/wp-login.php')

    cy.get('#user_login').type('mulongeshadieudonne17@gmail.com')
    cy.get('#user_pass').type('Dieudosuv26@@')
    cy.get('#wp-submit').click()

    
    cy.contains('Survey').click()

    
    cy.contains('All Surveys').click()

    
    cy.contains('All Surveys').should('be.visible')

    
    cy.contains('a', 'delete_test_survery_by_dieudonne')
      .closest('tr')
      .within(() => {
        cy.contains('Trash').click()
      })

    
    cy.contains('delete_test_survery_by_dieudonne').should('not.exist')

  })

})