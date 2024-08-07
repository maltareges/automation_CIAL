/// <reference types="cypress" />

describe('Checkbox testing', () =>{
    it('Check one option', () =>{
      cy.checkOneOption()
    })

    it('Uncheck options', () =>{
      cy.uncheckOptions()
    })
  })