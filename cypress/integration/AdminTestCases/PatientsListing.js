///<reference types='cypress'/>
import { faker } from '@faker-js/faker';
import LoginPageM from '../PageObjects/LoginPageM';
const LoginPages=new LoginPageM()
const support = require('../../support/login.js')
describe('Patient module test cases', ()=>{

    beforeEach(() => {
        //Logging into the portal.
        cy.login()
        LoginPages.GetPatientSection().should('be.visible').should('have.text','Patients').click()
      })

    it('As a admin the user should be navigated on patients page by clicking on patients tab', ()=>{
        //Clicking on "Patients" Tab.
        LoginPages.GetPatientSection().should('be.visible').should('have.text','Patients').click()
        //Verifying the URL that it contains patients.
        LoginPages.GetURL().should('contain','/patients')
    })
     
    it('At patients page each label and field should have proper label and validations',()=>{
        //verifying Patients header.
        LoginPages.GetPatientTaxt().should('be.visible').should('have.text','Patients')
        //Verifying the Label of First coloumn header in the patient listing table, that is "Full Name".
        LoginPages.GetFullName().should('be.visible').should('have.text','Full Name')
        //Verifying the Label of Second coloumn header in the patient listing table, that is "User ID".
        LoginPages.GetUserID().should('be.visible').should('have.text','User ID')
        //Verifying the Label of Third coloumn header in the patient listing table, that is "Email/Phone".
        LoginPages.GetEmailID().should('be.visible').should('have.text','Email/Phone')
        //Verifying the Label of Fourth coloumn header in the patient listing table, that is "Joined On".
        LoginPages.GetJoinedOn().should('be.visible').should('have.text','Joined On')
        //Verifying the Label of Fifth coloumn header in the patient listing table, that is "Subscription".
        LoginPages.GetSubscriptionsing().should('be.visible').should('have.text','Subscription')
        //Verifying the Label of sixth coloumn header in the patient listing table, that is "Appointment".
        LoginPages.GetAppointment().scrollIntoView().should('be.visible').should('have.text','Appointment')
        //Verifying the Label of Seventh coloumn header in the patient listing table, that is "Status".
        LoginPages.GetState().scrollIntoView().should('be.visible').should('have.text','Status')
        //Verifying the Label of Eight coloumn header in the patient listing table, that is "Action".
        cy.wait(2000)
        //Verifying the label of "Add New Patient" button.
        LoginPages.GetAddNewPatient().should('be.visible').should('have.text','Add New Patient')
        //Verifying the label of "Add Filter" button.
        LoginPages.GetAddFilters().should('be.visible').should('have.text','Add Filter')

    })
    it('As a Admin the user will get the add patient form by clicking on the "Add new patient" button ', ()=>{
        //Clicking on "Add New Patient" button.
        LoginPages.GetAddNewPatient().should('be.visible').should('have.text','Add New Patient').click()
        cy.wait(2000)
        //Verifying header of "Add New Patient" form.
        LoginPages.GetAddNewPatientButton().should('be.visible').should('have.text','Add New Patient')

    })

    it('At Add New Patient page each label and field should have proper label and validations ', ()=>{
        cy.wait(2000)
        //verifying if "Add New Patient" modal is present.
        LoginPages.GetAddNewPatient().should('be.visible').should('have.text','Add New Patient').click()
        //Verfying if the cross icon is present.
        LoginPages.GetCrossIcon().should('be.visible')
        //verifying the label of "First Name" input field.
        LoginPages.GetFirstN().should('be.visible').should('contain','First Name')
        //verifying that the "First Name" input field is present.
        LoginPages.GetFirstName().should('be.visible').click()
        cy.wait(2000)
        //verifying that the "Last Name" input field is present.
        LoginPages.GetLastName().should('be.visible').click()
        cy.wait(3000)
        //Verifying the validation message for blank data for "First Name" input field.
        LoginPages.GetFirstNValidate().should('be.visible').should('have.text','Required')
        cy.wait(1000)
        //verifying the label of "Preferred Name" input field.
        LoginPages.GetPageScrolling().scrollIntoView().should('be.visible').should('have.text','Preferred Name (Optional)')
        //verifying that the "Preferred Name" input field is present.
        LoginPages.GetPreferredName().should('be.visible').click()
        cy.wait(3000)
        //verifying the label of "Generate ID" Link in "User ID" input field.
        LoginPages.GetGenerateID().scrollIntoView().should('be.visible').should('contain','Generate ID')
        cy.wait(3000)
        //verifying that the "User ID" input field is present.
        //LoginPages.GetUserIDS().should('be.visible').click()
        cy.wait(3000)
        //verifying the label of "Subscription" Dropdown.
        LoginPages.GetSubscription().scrollIntoView().should('be.visible').should('contain','Subscription')
        //verifying that the "Subscription" Dropdown is present.
        LoginPages.GetSubscriptionvisible().should('be.visible')
        //verifying the label of "Phone Number" input field.
        LoginPages.GetPhoneN().should('be.visible').should('have.text','Phone Number')
        //verifying that the "Phone Number" input field is present.
        LoginPages.GetPhoneNVisiable().should('be.visible').click()
        cy.wait(3000)
        //verifying the label of "Email" input field.
        LoginPages.GetVerifiedEmail().should('be.visible').should('have.text','Email')
        //verifying that the "Email" input field is present.
        LoginPages.GetEmailFiledPresent().should('be.visible').click()
        //Verifying the validation message for blank data for "Phone Number" input field.
        LoginPages.GetBlankPhoneValidation().should('be.visible').should('have.text','At least one of the fields is required(Email or Phone)')
        cy.wait(1000)
        //verifying the label of "Date of Birth" input field.
        LoginPages.GetDateOfBirth().should('be.visible').should('contain','Date of Birth')
        //verifying that the "Date of Birth" input field is present.
         LoginPages.GetDateFiledVisiable().should('be.visible')
        //verifying the label of "Gender" Dropdown.
        LoginPages.GetGenderFiled().should('be.visible').should('contain','Gender')
        //verifying that the "Gender" Dropdown is present.
        LoginPages.GetGenderFiledVisiable().should('be.visible')
        //Verifying the Header of "Address" section.
        LoginPages.GetScrollings().scrollIntoView().should('be.visible').should('have.text','Address')
        //verifying the label of "Address Line 1" input field.
        LoginPages.GetScroll1().scrollIntoView().should('be.visible').should('contain','Address Line 1')
        //verifying that the "Address Line 1" input field is present.
        LoginPages.GetAddressfiled().should('be.visible').click()
        cy.wait(3000)
        //Verifying the validation message for blank data for "Email" input field.
        LoginPages.GetValidationEmailFiled().should('be.visible').should('have.text','At least one of the fields is required(Email or Phone)')
        cy.wait(1000)
        //verifying the label of "Address Line 2" input field.
        LoginPages.GetAddress2().should('be.visible').should('contain','Address Line 2').click()
        //verifying that the "Address Line 2" input field is present.
        LoginPages.GetValidationAdress2().should('be.visible').click()
        cy.wait(3000)
        //Verifying the validation message for blank data for "Address Line 1" input field.
        LoginPages.GetAddress1().should('be.visible').should('have.text','Required')
        cy.wait(1000)
        //verifying the label of "Postal Code" input field.
        LoginPages.GetPostalCodes().should('be.visible').should('contain','Postal Code').click()
        //verifying that the "Postal Code" input field is present.
        LoginPages.GetpostalCodepresent().should('be.visible')
        //verifying the label of "City" input field.
        LoginPages.GetCity().should('be.visible').should('contain','City')
        //verifying that the "City" input field is present.
        LoginPages.GetCityPresent().should('be.visible')
        //verifying the label of "State" input field.
        LoginPages.GetStateFiled().should('be.visible').should('contain','State')
        //verifying that the "State" input field is present.
        LoginPages.GetStateFiledPresent().should('be.visible')
        //verifying the label of "Add Patient" button.
        LoginPages.GetAddpatientsButton().should('be.visible').should('have.text','Add Patient')
        //Closing "Add New Patient" form.
        LoginPages.GetCrossIcon().scrollIntoView().should('be.visible').click({force:true})

    })

    it.only('After filling the form with valid data and clicking on continue the patient should be added ', ()=>{
        cy.AddPatient();
        
    })

    it('The added patient should refelct under patients listing', () => {
        //Reading Data from the json file.
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //Searching the patient Added with Email.
        LoginPages.GetSearchField().should('be.visible').type(provider.email.toLowerCase())
        //Verifying that the patient is added with the Email we have given.
        cy.wait(4000)
        //Verifying that the patient is added with the "User ID" we have given.
        LoginPages.GetVerifiedAddingPatients().should('be.visible')
        cy.wait(4000)
        //Verifying that the "Subscription" selected is reflecting or not.
        LoginPages.GetPlan().should('be.visible').should('contain','Basic')
        cy.wait(3000)

        })
    })

    it('As a admin the user should be navigated to the Book Appointment page by clicking on Book button against patient ', ()=>{
        LoginPages.GetSearchField().should('be.visible').clear()
        cy.wait(4000)
        LoginPages.GetScrollingsss().scrollIntoView().should('be.visible').click({force:true})
        LoginPages.GetURL().should('contain','/book_appointment')
        cy.wait(5000)
        
    })

    it('As a Admin the user can enable or disable any patient with the help of toggle icon under status',()=>{
        cy.wait(4000)
        LoginPages.GetScrollingsssss().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)
        LoginPages.GetClickInvite().click()
        cy.wait(4000)
        LoginPages.GetScrollingsssss().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)
       LoginPages.GetClickInvite().click()
        cy.wait(4000) 
        
     })

     it('As a Admin the user can change the membership of the patient by clicking on the membership plan under subscription', ()=>{
        cy.wait(5000)
        LoginPages.GetScorred().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        LoginPages.GetStandrad().should('be.visible').should('have.text','standard').click()
        cy.wait(2000)
        LoginPages.GetConfirmed().should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)
        cy.wait(5000)
        LoginPages.GetScrleded().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        LoginPages.GetExecutive().should('be.visible').should('have.text','executive').click()
        cy.wait(2000)
        LoginPages.GetConfirmed().should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)
        LoginPages.GetScrleded().scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        LoginPages.GetCypress().should('be.visible').should('have.text','cypress').click()
        cy.wait(2000)
        LoginPages.GetConfirmed().should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)
    })

    it('As a Admin the user can filter the patients based on their membeship plan using the filter button',()=>{
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(5000)
        LoginPages.GetMD().scrollIntoView().should('be.visible').should('contain','basic').click()
        cy.wait(5000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(3000)
        LoginPages.GetDo().scrollIntoView().should('be.visible').should('contain','standard').click()
        cy.wait(5000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(3000)
        LoginPages.GetPAC().scrollIntoView().should('be.visible').should('contain','executive').click()
        cy.wait(5000)
        LoginPages.GetFilterFiled().should('be.visible').click()
        cy.wait(3000)
        LoginPages.
        GetNP().scrollIntoView().should('be.visible').should('contain','cypress').click()
        cy.wait(5000)
    })

    it('As a Admin the user can change the view of the patients listing by using filter on full name which make the patients list in alphabetical order from a-z or Z-a',()=>{
        LoginPages.GetDatafilterAZ().should('be.visible').click({force:true})
        cy.wait(2000)
        LoginPages.GetDatafilterZA().should('be.visible').click({force:true})
        cy.wait(2000)
     })

    it('As a admin the user should be navigated to the profile details page of any patient by clicking on eye symbol against that particular patient ', ()=>{
        LoginPages.GetScroll().scrollIntoView().should('be.visible').click({force:true})
        
    })
    it('At profile deatils page of the patient each label and field should have proper label and validations',()=>{
        cy.wait(5000)
        LoginPages.GetScroll().scrollIntoView().should('be.visible').click({force:true})
        LoginPages.GetScrollE().scrollIntoView().should('be.visible').should('have.text','Patient Details')
        LoginPages.GetEditPatient().scrollIntoView().should('be.visible').should('have.text','Edit Patient')
        LoginPages.GetDcreased().scrollIntoView().should('be.visible').should('have.text','Mark as Deceased')
        LoginPages.GetGenderss().scrollIntoView().should('be.visible').should('have.text','Gender')
        LoginPages.GetJoined().scrollIntoView().should('be.visible').should('have.text','Joined On')
        LoginPages.GetHouseHold().scrollIntoView().should('be.visible').should('have.text','Household')
        LoginPages.GetAppointemt().scrollIntoView().should('be.visible').should('have.text','Appointments')
        LoginPages.GetMedicalHistorys().scrollIntoView().should('be.visible').should('have.text','Medical History')
        cy.wait(3000)
        LoginPages.GetNotification().scrollIntoView().should('be.visible').should('have.text','Notifications')
        cy.wait(3000)
        LoginPages.GetConstents().scrollIntoView().should('be.visible').should('have.text','Consents')
        cy.wait(3000)
        LoginPages.GetAddresseds().scrollIntoView().should('be.visible').should('have.text','Address')
        LoginPages.GetAddressOne().should('be.visible').should('have.text','Address Line 1')
        LoginPages.GetAddressSecond().should('be.visible').should('have.text','Address Line 2')
        LoginPages.GetPostalCode().should('be.visible').should('have.text','Postal Code')
        LoginPages.GetHaveCity().should('be.visible').should('have.text','City')
        LoginPages.GetState().should('be.visible').should('have.text','State')        

    })
    it('As a admin the user should be navigated back to the patients page by clicking on back symbol on profile details page',()=>{
        LoginPages.GetBackArowButtonsing().scrollIntoView().should('be.visible').click()
        cy.wait(5000)
        LoginPages.GetURL().should('contain','/patients')
    })
    it('As a admin the user should able to search any patient by his name or email or preferred Name or User ID',()=>{
        
        //Searching by the "Email".
        LoginPages.GetInputFiled().invoke('text').then((text3)=>{
            cy.wait(2000)
            LoginPages.GetSearchField().should('be.visible').clear().type(text3)
            cy.wait(2000)
            LoginPages.GetScroll5().should('be.visible').should('contain',text3)
            cy.wait(2000)
    })

        LoginPages.GetSearchField().should('be.visible').clear()
        cy.wait(2000)  
        cy.logout();

    })
})