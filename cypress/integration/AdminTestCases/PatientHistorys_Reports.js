///<reference types='cypress'/>
import { faker } from '@faker-js/faker';

import LoginPageM from '../PageObjects/LoginPageM';
const LoginPages=new LoginPageM()
const support = require('../../support/login.js')
const cred = require('../../fixtures/cred.json')

 describe('Reports module testcases',()=>{
 
    it('As a Admin the user should navigated to the Reports page by clicking on "Reports" tab',()=>{
        //cy.login(cred.email,cred.password)
        cy.login();
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray
        LoginPages.GetPatientSection().should('be.visible').should('have.text','Patients').click()
        LoginPages.GetURL().should('contain','/patients')
        //Add new patient custom command
        cy.AddPatient()
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //search added patient    
        LoginPages.GetSearchField().should('be.visible').type(provider.email.toLowerCase())
        //Checking email is present in the list
        LoginPages.GetScroll().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)
        LoginPages.GetActionButton().click()
        LoginPages.GetURL().should('contain','/address')
        //Click on the medical history tab
        LoginPages.getMedicalHistory().click();
        //Click onn the Reports tab
        LoginPages.GetReportButton().should('be.visible').should('contain','Reports').click()
        LoginPages.GetURL().should('contain','/reports')
        LoginPages.GetReporttext().should('be.visible').should('contain','Showing 0 Reports')  
     //   LoginPages.GetDateFilter().should('be.visible').invoke('attr','placeholder').should('contain','Filter by Date Range..')
        })
     //   
    })
    it('As a Admin the user should able to see all the reports uploaded by him for the particular patient',()=>{
        // cy.get(':nth-child(1) > a > .justify-between').should('be.visible')
        // cy.get(':nth-child(2) > a > .justify-between').should('be.visible')
        // cy.get(':nth-child(3) > a > .justify-between').should('be.visible')

    })

})