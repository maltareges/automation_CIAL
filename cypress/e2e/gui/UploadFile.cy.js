/// <reference types="cypress" />

describe('Upload File', () =>{
    it('Upload File CSV format', () =>{
      cy.uploadFile()
    })

    it('Upload Empty File', () =>{
        cy.uploadEmptyFile()
      })
  })