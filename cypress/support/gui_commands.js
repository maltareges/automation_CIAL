require('@4tw/cypress-drag-drop')

/*Check One Option Checkboxes*/

Cypress.Commands.add('checkOneOption', () => {
    const checkOneOption = () => {
        cy.log("Select checkboxe")
        cy.visit('checkboxes')
        cy.get('[type="checkbox"]')
          .first()
          .check({ force: true })
          .should('be.checked')
    }
    checkOneOption()       
})

/*Uncheck  - Checkboxes*/

Cypress.Commands.add('uncheckOptions', () => {
    const uncheckOptions = () => {
        cy.log("Uncheck checkboxes")
        cy.visit('checkboxes')
        cy.get('#checkboxes > input[type=checkbox]:nth-child(3)')
          .uncheck()
    }
    uncheckOptions()       
})
/*Select Dropdown*/

Cypress.Commands.add('selectDropdown', () => {
    const selectDropdown = () => {
        cy.log("Select Dropdown")
        cy.visit('dropdown')
        cy.get('#dropdown')
          .select('Option 2')
          .should('have.focus')
    }
    selectDropdown()       
})

/*Drag and Drop*/

Cypress.Commands.add('dragDrop', () => {
    const dragDrop = () => {
        cy.log("Drag and Drop")
        cy.visit('drag_and_drop')
        cy.get('#column-a').dragTo('#column-b')
    }
    dragDrop()       
})

Cypress.Commands.add('dragTo',{prevSubject: "element"}, (subject, targetE1) => {
    const dataTransfer = new DataTransfer()
    cy.get(subject).trigger('dragstart', {
        dataTransfer    
    })
    cy.get(targetE1).trigger('drop',{
        dataTransfer
    })
})

/*upload file*/

Cypress.Commands.add('uploadFile', () => {
    const uploadFile = () => {
        const file = 'cypress/fixtures/QA Teste.pdf'
        cy.visit('upload')
        cy.get('#file-upload').selectFile(file)
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')
    }
    uploadFile()
})

/*upload Empty file*/

Cypress.Commands.add('uploadEmptyFile', () => {
    const uploadEmptyFile = () => {
        cy.visit('upload')
        cy.get('#file-submit').click()
        cy.contains('Internal Server Error').should('be.visible')
    }
    uploadEmptyFile()
})

/*Login in a secure area*/

Cypress.Commands.add('loginUser', (
    user = Cypress.env('user_name'),
    password = Cypress.env('password'),
) => {
    const loginUser = () => {
        cy.visit('login')
        cy.get('#username').type(user)
        cy.get('#password').type(password, {log: false})
        cy.get('#login > button').click()
        cy.contains('You logged into a secure area!').should('be.visible')
    }
    loginUser()       
})

/*Logout*/

Cypress.Commands.add('logout', () => {
    const logout = () => {
    cy.loginUser()
    cy.contains('Logout').click()
    cy.contains('Login Page').should('be.visible')
   }
   logout()
})

/*Login with a incorrect User*/

Cypress.Commands.add('loginIncorrectUser', (
    incorrect_user = Cypress.env('incorrect_user'),
    password = Cypress.env('password'),
) => {
    const loginIncorrectUser = () => {
        cy.visit('login')
        cy.get('#username').type(incorrect_user)
        cy.get('#password').type(password, {log: false})
        cy.get('#login > button').click()
        cy.get('#flash').contains('Your username is invalid!')
    }
    loginIncorrectUser()       
})

/*Login with a incorrect password*/

Cypress.Commands.add('loginIncorrectPassword', (
    user = Cypress.env('user_name'),
    incorrect_password = Cypress.env('incorrect_password'),
) => {
    const loginIncorrectPassword = () => {
        cy.visit('login')
        cy.get('#username').type(user)
        cy.get('#password').type(incorrect_password, {log: false})
        cy.get('#login > button').click()
        cy.get('#flash').contains('Your password is invalid!')
    }
    loginIncorrectPassword()       
})

/*Redirect Page*/

Cypress.Commands.add('redirectPage', () => {
    const redirectPage = () => {
        cy.visit('redirector')        
        cy.url().should('eq', 'https://the-internet.herokuapp.com/redirector')
        cy.get('#redirect').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes')
        cy.get('h3').should('be.visible')
    }
    redirectPage()       
})

/*Redirect Page Status Code 200*/

Cypress.Commands.add('redirectPageStatus200', () => {
    const redirectPageStatus200 = () => {
        cy.redirectPage()
        cy.contains('200').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes/200')
    }
    redirectPageStatus200()       
})

/*Redirect Page Status Code 301*/

Cypress.Commands.add('redirectPageStatus301', () => {
    const redirectPageStatus301 = () => {
        cy.redirectPage()
        cy.contains('301').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes/301')
    }
    redirectPageStatus301()       
})

/*Redirect Page Status Code 404*/

Cypress.Commands.add('redirectPageStatus404', () => {
    const redirectPageStatus404 = () => {
        cy.redirectPage()
        cy.contains('404').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes/404')
    }
    redirectPageStatus404()       
})

/*Redirect Page Status Code 500*/

Cypress.Commands.add('redirectPageStatus500', () => {
    const redirectPageStatus500 = () => {
        cy.redirectPage()
        cy.contains('500').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes/500')
    }
    redirectPageStatus500()       
})