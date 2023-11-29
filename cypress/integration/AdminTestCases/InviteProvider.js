///<reference types='cypress'/>
import LoginPageM from '../PageObjects/LoginPageM';
const LoginPages=new LoginPageM()
const support = require('../../support/login.js')
const cred = require('../../fixtures/cred.json')
import { faker } from '@faker-js/faker';
describe('Provider module testcases', () => {

    beforeEach(() => {
        cy.login();
        LoginPages.GetProvidertext().should('be.visible').should('have.text','Providers').click();
        cy.wait(3000)
    })

    it('As a Admin I should be albe to navigate on invited provider listing page', () => {
        LoginPages.GetProvidertext().should('be.visible').should('have.text','Providers').click();
        LoginPages.GetURL().should('include', '/providers');
        LoginPages.GetPendingButton().should('be.visible').should('have.text','Pending Invitations').click();
        LoginPages.GetURL().should('include', '/invitation');
     })
    it('At invited providers page each label and field should have proper label and proper validations', () => {
        LoginPages.GetPendingButton().should('be.visible').should('have.text','Pending Invitations').click();
        LoginPages.GetPendingButtonClick().click()
        LoginPages.GetEmailTex().should('be.visible').and('have.text', 'Email');
        LoginPages.GetPhoneNoText().should('be.visible').should('contain','Phone Number')
        LoginPages.GetInvatiedText().should('be.visible').and('have.text', 'Invited On');
        LoginPages.GetStatustex().should('be.visible').and('have.text', 'Status');
        LoginPages.GetAction().should('be.visible').and('contain', 'Action');
        LoginPages.GetInviteProviderButton().should('be.visible').should('have.text','Invite Provider')
        LoginPages.getInvatiedtext().should('be.visible').and('contain', 'Invited Providers')
     })
     it('As a admin the user should be able to go the next page of the pending invitations list by clicking on next button', ()=>{
       // LoginPages.GetPagination().should('be.visible').should('have.text','Next').click()
    })

    it('As a admin the user should be able to go the previous page of the pending invitations list by clicking on previous button', ()=>{
      // LoginPages.GetPerviousPage().should('be.visible').should('have.text','Previous').click()
    })

    it('As a Admin I should be albe to get a pop up window of invite provider by clicking on invite provider button', () => {
        LoginPages.GetInviteProviderButton().should('have.text','Invite Provider').click()
        LoginPages.GetInvitededbutton().should('be.visible').should('have.text','Invite Provider')
        
    })
    it('At invited providers pop up window each label and field should have proper label and proper validations', () => {
        LoginPages.GetInvitedProvidertext().should('be.visible').should('have.text','Invite Provider').click()
        LoginPages.GetInviteProviderButtonCLick().should('be.visible')
       // LoginPagesGetTextEmail().should('be.visible').and('have.text', 'Email')
        LoginPages.getTextVisiables().should('be.visible')
        LoginPages.GetTextPhoneNumber().should('be.visible').and('contain', 'Phone Number')
        LoginPages.getTextVisiables().should('be.visible')
        LoginPages.GetCanceltext().should('be.visible').and('have.text', 'Cancel')
        LoginPages.Getinvittextt().should('be.visible').and('have.text', 'Invite')
        LoginPages.getTextVisiables().clear().type('sdada@dada@asd.com');
        LoginPages.GetUpdateprofile().click();
        LoginPages.GetEmailNotVisibale().should('be.visible').and('have.text', 'Email is not valid');
     })
    it('As a Admin I shoual be able to invite provider', () => {
        cy.get('[textid="provider.invite"]').should('be.visible').should('have.text','Invite Provider').click()
        const email = faker.name.firstName()+'@yopmail.com';
       // const phone = faker.phone.phonehoneNumber('(###)-###-####');
        LoginPages.GetClearEmail().clear().type(email);
      //  LoginPages.getClearPhoneNumber().clear().type(phone); 
        LoginPages.GetUpdateprofile().click();
        cy.writeFile('cypress/fixtures/provider.json', {
            email: email,
         //   phone:phone
        });
        cy.contains('Invitation sent successfully.');
    })
    it('As a admin the user should be able to search any prodvider with his name or email',()=>{
        cy.readFile('cypress/fixtures/provider.json').then((provider) =>{
        //LoginPages.
        LoginPages.getPendingInvaitedButton().click();
        cy.wait(3000)
        LoginPages.GetSearchField().should('be.visible').type(provider.email.toLowerCase())
        cy.wait(5000)
        })

    })
  //  it('As a Admin I should be able to able to resend the invitation code.', () => {
  //       LoginPages.GetFirstClick().first().click();
   //     // cy.contains("Invitation sent successfully.")
  //      cy.logout();
  //  })
})
