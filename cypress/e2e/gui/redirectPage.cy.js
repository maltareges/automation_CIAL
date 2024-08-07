/// <reference types="cypress" />

describe('Redirect page', () =>{
    it('Redirect Status Code Page', () =>{
      cy.redirectPage()
    })

    it('Redirect Status Code 200', () =>{
        cy.redirectPageStatus200()
    })

    it('Redirect Status Code 301', () =>{
        cy.redirectPageStatus301()
    })

    it('Redirect Status Code 404', () =>{
        cy.redirectPageStatus404()
    })

    it('Redirect Status Code 500', () =>{
        cy.redirectPageStatus500()
    })
  })
