///<reference types='cypress'/>
import LoginPageM from '../PageObjects/LoginPageM';
const cred = require('../../fixtures/cred.json')
const LoginPages=new LoginPageM()

describe('Forgot password module testcases', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('URL')+"/admin")
        LoginPages.getForgotPasswordLinkVisibale().should('be.visible').should('have.text','Forgot Password?').click();
        cy.url().should('include', 'forgot-password');
      })
      
    it("As a Admin I should be able to navigate on Forgot password page", () => {
      
        LoginPages.get6digitVerificationText().should('be.visible').and('contain', 'A 6 digit verification code will be sent to your registered Email Address.');
        LoginPages.getEmailTextVisiable().should('be.visible').and('have.text','Email');
        LoginPages.getEnteringInvalidDataEmailfeld().should('be.visible');
        LoginPages.getSUbmitButton().should('be.visible').should('have.text','Continue').click();
        cy.wait(2000)
        LoginPages.getRequiredTest().should('be.visible').and('contain.text', 'Required');
        //invalid email case
        LoginPages.getEmailInputField().should('be.visible').type('ASd@ads@sd.com');
        LoginPages.getValidationText().should('be.visible').and('have.text', 'Please enter valid email');
        
    })

    it("At Forgot password page each field should have proper lable and validation", () => {

        LoginPages.getForgotPasswordLinkVisibale().should('be.visible').should('have.text','Forgot Password? ');
        LoginPages.get6digitVerificationText().should('be.visible').and('contain', 'A 6 digit verification code will be sent to your registered Email Address.');
        LoginPages.getEmailTextVisiable().should('be.visible').and('have.text','Email');
        LoginPages.getEnteringInvalidDataEmailfeld().should('be.visible');
        LoginPages.getSUbmitButton().should('be.visible').should('have.text','Continue').click();
        cy.wait(2000)
        LoginPages.getRequiredTest().should('be.visible').and('contain.text', 'Required');
        //invalid email case
        LoginPages.getEnteringInvalidDataEmailfeld().should('be.visible').type('ASd@ads@sd.com');
        LoginPages.getValidationText().should('be.visible').and('have.text', 'Please enter valid email');
      //  OTP shouldn't send on invalid email
        LoginPages.getEnteringInvalidDataEmailfeld().should('be.visible').clear().type('abc@gmail.com');
        LoginPages.getSUbmitButton().should('be.visible').should('have.text','Continue').click();
        cy.wait(2000);
        cy.contains('User not found with this information');


    })

    it("OTP should sent on Valid registerd email", () => {

        const emailId = cred.SupEmail;
        LoginPages.getEnteringInvalidDataEmailfeld().should('be.visible').clear().type(emailId);
        LoginPages.getSUbmitButton().should('be.visible').should('have.text','Continue').click();
        cy.wait(2000);
        //cy.contains("OTP send to user's email/phone");
        // Verify each and evey label and title on varification screen
        LoginPages.getOTPVerification().should('be.visible').and('have.text','Enter Verification Code');
        LoginPages.get6digitVerificationText().should('be.visible').and('have.text','A 6 digit verification code has been sent to your email address and phone number.');
        LoginPages.getHaveNotReceivedCode().should('be.visible').and('have.text',"Haven't received the code?");
        cy.wait(6000)
        LoginPages.getRequiredTest().should('be.visible').and('have.text',"Resend Code");
      //  valdation should appear when user does not enter otp into the field
        LoginPages.getSUbmitButton().should('be.visible').should('have.text','Submit').click();
        LoginPages.GetVerificationCode().should('be.visible').and('have.text',"Verfication Code is not valid, please re-enter or resend Verfication code");
      //  validation should appear when user enter invalid OTP
         LoginPages.getPutInvalidValueOTP().type('336699');
         LoginPages.getSUbmitButton().should('be.visible').should('have.text','Submit').click();
         LoginPages.GetVerificationCode().should('be.visible').and('have.text',"Verfication Code is not valid, please re-enter or resend Verfication code");
        // verify resend button functionality
        LoginPages.getRequiredTest().should('be.visible').and('have.text',"Resend Code").click();
        const emailId1 = cred.SupEmail;
        cy.wait(2000);
        cy.contains("OTP send to user's email/phone");
    })

    

})
