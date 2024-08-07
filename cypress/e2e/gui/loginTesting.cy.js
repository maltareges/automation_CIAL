/// <reference types="cypress" />

describe('Login page testing', () =>{
    it('Correct Login', () =>{
      cy.loginUser()
    })

    it('Logout page', () =>{
        cy.logout()
    })
    
    it('Login with a incorrect user', () =>{
        cy.loginIncorrectUser()
    })

    it('Login with a incorrect password', () =>{
        cy.loginIncorrectPassword()
    })
  })