// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//describe('mailinator', () => {
 //   it('login', () => {
 //       cy.visit('https://yopmail.com/en/')
 //       cy.get('#login').type("lxadminqa@yopmail.com")
 //       cy.get('#refreshbut > .md > .material-icons-outlined').click();
 //       cy.get('#refresh').click();
//        cy.get('#ifmail').then(($iframe) => {
 //           const doc = $iframe.contents()
 //           cy.wait(5000)
 //           cy.wrap(doc.find('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h1:nth-child(3)')).then(($span) => {
  //              // capture what num is right now
 //               const num1 = $span.text()
 //               cy.writeFile('cypress/fixtures/text.txt', num1) 
 //             })
 //           cy.wait(7000)


 //   })
    
//})
//})