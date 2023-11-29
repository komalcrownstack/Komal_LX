///<reference types='cypress'/>
import LoginPageM from '../PageObjects/LoginPageM';
const LoginPages=new LoginPageM()
const support = require('../../support/login.js')
describe('providers test cases', ()=>{

    beforeEach(() => {
        cy.login()
      })

    it('As a admin the user should be navigated to the provides page by clicking on providers tab', ()=>{
        LoginPages.GetProvidertext().should('be.visible').and('have.text','Providers').click()
        LoginPages.GetURL().should('contain','/providers')
           
    })

    it('At providers page each label and field should have proper label and proper validations', ()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.GetFirstNameTag().should('be.visible').should('have.text','Full Name')
        LoginPages.GetEmailTag().should('be.visible').should('have.text','Email')
        LoginPages.GetMobileTag().should('be.visible').should('have.text','Mobile Number')
        LoginPages.GetProviderType().should('be.visible').should('have.text','Provider Type')
        LoginPages.GetJoined().should('be.visible').should('have.text','Joined On')
        LoginPages.GetStatus().should('be.visible').should('have.text','Status')
        LoginPages.GetActionTag().should('be.visible').should('have.text','Action')
        LoginPages.GetSearchField().invoke('attr','placeholder').should('contain','Search for name or email.')
        LoginPages.GetAddFilter().should('be.visible').should('contain','Add Filter')
        LoginPages.GetInviteProviderButton().should('be.visible').should('have.text','Invite Provider')
        LoginPages.GetPendingInjvatationButton().should('be.visible').should('have.text','Pending Invitations')
        LoginPages.GetPagination().should('be.visible').should('have.text','Next')
     
    })

    it('As a admin the user should be able to go the next page of the providers list by clicking on next button', ()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
      // LoginPages.GetClickOnPagination().should('be.visible').should('have.text','Next').click()
    })

    it('As a admin the user should be able to go the previous page of the providers list by clicking on previous button', ()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
      //LoginPages.GetClickOnPagination().should('be.visible').should('have.text','Next').click()
      // LoginPages.GetPerviousPage().should('be.visible').should('have.text','Previous').click()
    })

    it('As a admin the user should be able to search any prodvider with his name or email',()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.GetSearchFiled().invoke('text').then((text1)=>{
            LoginPages.GetSearchFiledVisible().should('be.visible').type(text1)

        })
        cy.wait(5000)  
        LoginPages.GetSearchFiledVisible().should('be.visible').clear()
        cy.wait(2000)          
    })

    it ('As a admin the user should be navigated to the pending invitations page by clicking on "Pending Invitations" button.', ()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.GetPendingInjvatationButton().scrollIntoView().should('be.visible').should('have.text','Pending Invitations').click({force:true})
        cy.wait(4000)
        cy.url().should('contain','/invitation')
        cy.wait(4000)
        LoginPages.GetInvatationLink().should('be.visible').click()
        cy.wait(4000)
        LoginPages.GetURL().should('contain','/providers')
    })

    it('As a admin the user should be navigated to the profile details of any provider by clicking on eye button against that particular provider',()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.
        GetPageScroll().scrollIntoView().should('be.visible').click({force:true})
        LoginPages.GetProviderDetails().should('be.visible').should('contain','Provider Details')
        LoginPages.GetAddress().should('be.visible').should('contain','Address')
        LoginPages.GetAddressOne().should('be.visible').should('have.text','Address Line 1')
        LoginPages.GetAddressSecond().should('be.visible').should('have.text','Address Line 2')
        LoginPages.GetPostalCode().should('be.visible').should('have.text','Postal Code')
        LoginPages.GetHaveCity().should('be.visible').should('have.text','City')
        LoginPages.GetState().should('be.visible').should('have.text','State')
        LoginPages.GetClick().should('be.visible').click()
        LoginPages.GetURL().should('contain','/providers')
    })

    it('As a Admin the user should get a pop up of invite provider by Clicking on the "Invite Provider" button.',()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.GetInviteProviderButton().should('be.visible').should('have.text','Invite Provider').click()
        cy.wait(2000)
        LoginPages.GetInviteProviderButtonCLick().should('be.visible').click()
    })

    it('As a Admin the user can enable or disable any provider with the help of toggle icon under status',()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.GetInvitePageScrol().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(2000)
        LoginPages.GetClickInvite().click()
        cy.wait(2000)
        LoginPages.GetInvitePageScrol().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(2000)
        LoginPages.GetClickInvite().click()
        cy.wait(2000)
     })

     it('As a Admin the user can change the view of the providers by using filter on full name which make the provider list in alphabetical order from a-z or Z-a',()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.GetDatafilterAZ().should('be.visible').click({force:true})
        cy.wait(2000)
        LoginPages.GetDatafilterZA().should('be.visible').click({force:true})
        cy.wait(2000)
     })


    it('As a admin the user can filter the providers based on the provider type like Md,Do etc.',()=>{
        LoginPages.GetClickProviderSection().should('be.visible').should('contain','Providers').click();
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetMD().should('be.visible').should('contain','md').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetDo().should('be.visible').should('contain','do').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetPAC().should('be.visible').should('contain','pa-c').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetNP().should('be.visible').should('contain','np').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetCRN().should('be.visible').should('contain','crna').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetNURSE().should('be.visible').should('contain','nurse').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.Getparamedic().should('be.visible').should('contain','paramedic').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(2000)
        LoginPages.GetEMT().should('be.visible').should('contain','emt').click()
        cy.wait(2000)
        LoginPages.GetTextVisible().should('be.visible').click()
        cy.wait(2000)
        cy.logout();

    })


})