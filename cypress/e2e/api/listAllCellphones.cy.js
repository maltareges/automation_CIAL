/// <reference types="Cypress" />

describe('List Cellphones', () =>{
    it('Show a list with the registered phones ', () =>{
      cy.listAllCellphones()
    })
  })