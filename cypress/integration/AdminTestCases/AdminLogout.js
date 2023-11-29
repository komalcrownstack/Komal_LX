/// <reference types="Cypress" />
import LoginPageM from '../PageObjects/LoginPageM';
const cred = require('../../fixtures/cred.json')
const support = require('../../support/login.js')
const LoginPages=new LoginPageM()
describe('Login module testcases', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('URL')+"/admin")

})

      it('As a Admin I should be able to navigate on login page', () => {
        
        //Verifying that the login page is visible.
        LoginPages.getlogPageinvisible().should('have.text', 'Sign In').and('be.visible');
        //verifing the "Please enter your credentials to sign in." text on sign in page.
        LoginPages.getEnterCredentials().should('have.text', 'Please enter your credentials to sign in.')
        //Verifying that the logo on the sign in page is visible.
        LoginPages.getLogoVisible().invoke('attr', 'src').should('eq', '/static/media/Favicon-Light-20211230.aab62f3c.png');
        //Verifying the label "Email" input field.
        LoginPages.getLabelEmailField().eq(0).should('have.text', 'Email')
        //Verifying that the "Email" input field is present.
        LoginPages.getEmailInputField().should('be.visible')
        //Verifying the label "Password" input field.
        LoginPages.getLabelPasswordField().eq(1).should('have.text', 'Password')
        //Verifying that the "Password" input field is present.
        LoginPages.getPasswordInputField().should('be.visible')
        //Verifying the label of "Submit" button.
        LoginPages.getLabelSubmit().should('be.visible')
        //Verifying the "Forgot Password" Link.
        LoginPages.getForgotPasswordLink().should('have.text', 'Forgot Password?')
        
      })

      it('At login screen Email input field should have proper validation', () => {

          //Clicking inside "Email" input field.
         LoginPages.getEmailInputField().should('be.visible').clear()
          //Clicking outside "Email" input box.
         LoginPages.getClickoutsideEmail().click();
          //Verifying validation error for "Blank data".
          LoginPages.getVerifyingValidationError().eq(0).should('have.text', 'Required').and('be.visible');
          //Entering invalid data into "Email" input field.
          LoginPages.getiIvalidDataEmail().should('be.visible').type('dasd@ asda@')
          //Verifying validation error for "invalid data".
          LoginPages.getValidationErrorInvalidData().eq(0).should('have.text', 'Please enter valid email').and('be.visible');
          //Clearing data in the "Email" input field.
          LoginPages.getClearingDataEmail().clear();

  
      })

      it('At login screen password input field should have proper validation', () => {
          
          //Clicking inside Password input box.
          LoginPages.getClickingInsidePassword().should('be.visible').clear();
          //Clicking outside Password input box.
          LoginPages.getClickingOutsidePassword().click();
          //Verifying validation error for "Blank data".
          LoginPages.getValidationError().eq(0).should('have.text', 'Required').and('be.visible');
          //Enter Lessthan 8 Characters into "Password" input field.
          LoginPages.getEnterLessThen8CharactersPassword().should('be.visible').type("vsdvd11")
          //Clicking "outside" Password input box.
          LoginPages.getOutsidePasswordInput().click();
          //Verifying validation error for "Minimum Characters".
          LoginPages.getvalidationErrorMinimumChar().eq(0).should('have.text', 'Password should have min. 8 characters').and('be.visible');
          //Clearing data in the "Password" input field.
          LoginPages.getClearingDataPasswordfield().should('be.visible').clear();
          //Entering Data with "Space" into "Password" input field.
          LoginPages.getEnteringDataSpacePasswordFiled().should('be.visible').clear().type('a b')
          //Verifying validation error for "Space entered into password input field".
          LoginPages.getvalidationErroforSpace().should('have.text', 'Space not allowed').and('be.visible');
  
      })

      it('At login screen forgot password link text should be visible', () => {

          //Clicking on "Forgot Password" link.
          LoginPages.getClickingForgotPassword().should('be.visible').click();
          //Verifying that "Forgot Password" page is visible.
          LoginPages.getForgotPagevisible().should('have.text', 'Forgot Password? ').and('be.visible')
          //Clicking on Back Arrow on "Forgot Password" page.
          LoginPages.getClickingBackArrow().click()

      })

      it('I should be unable to login with invalid credential', () => {
          //Entering invalid data into "Email" input feld.
          LoginPages.getEnteringInvalidDataEmailfeld().type('alpha@gmail.com');
          //Entering invalid data into "Password" input feld.
          LoginPages.getEnteringInvalidDataPasswordFeld().type('Password@321');
          //Checking that the "Submit" button is Enabled and Clicking on it.
          LoginPages.getCheckingSubmitButton().should('be.enabled').and('be.visible').click();
          //Verifying the validation error for invalid Credentials.
          cy.contains('Incorrect email or password')
      })

      it('I should be able to navigate to Enter Verification code page after login with the valid credeantials', () => {
          //Entering Valid data into "Email" input feld.
          LoginPages.getEnteringValidDataEmailInputFeld().clear().type(cred.SupEmail);
          //Entering Valid data into "Password" input feld.
          LoginPages.getEnteringValidDataPasswordInputFeld().clear().type(cred.SupPassword);
          //Clicking on "Submit" button.
          LoginPages.getEnterSubmitButton().click();
          cy.wait(3000)
          //Verifying that the "OTP Verification" page is visible after login.
          LoginPages.getOTPVerification().should('be.visible').should('have.text','Enter Verification Code')
          //Verify the text of "Enter Verification" code header.
          cy.wait(3000)
          LoginPages.getVerifytextEnterVerification().should('be.visible').should('have.text','Enter Verification Code')
          //Verifiying that the back arrow button is visible.
          LoginPages.getVerifiyingbAckarrowButtonVisible().should('be.visible')
          //Verifiying that the "inbox image" is visible.
          LoginPages.getInboxImageVisible().should('be.visible')
          cy.pause
          //Verify the text below "inbox image" is visible and correct.
          LoginPages.getinboxImageVisibleCorrect().should('be.visible').should('contain.text','A 6 digit verification code has been sent to ')
          //verifing that the OTP input fields are present.
          LoginPages.getVerifingOTPFieldPresent().should('be.visible')
          //Verifing that the "Haven't received OTP" text is present.
          LoginPages.getVerifingHaventReceivedOTPTtext().should('be.visible').should('have.text',"Haven't received the OTP?")
          //verifying the label of "submit" button.
          LoginPages.getverifyingLabelSubmit().should('be.visible').should('have.text',"Submit")
          cy.wait(4000)
          //Clicking on "Submit" button with Blank data.
          LoginPages.getClickingSubmitButtonBlankData().click();
          //Verifiying validation error for blank data.
          cy.wait(5000)
          LoginPages.getVerifiyingValidationBlankData().should('be.visible').should('have.text','Verfication Code is not valid, please re-enter or resend Verfication code')
          //Enter invalid data into "Enter verification code" page.
          cy.wait(4000)
          LoginPages.getEnterInvalidDatVerificationCode().should('be.visible').type('123333')
          //Clicking on "Submit" button.
          LoginPages.getEnterOnSubmitButton().click();
          cy.wait(2000)
          //Verifiying validation error for blank data.
          cy.contains('Invalid otp')
          LoginPages.getClickingBackArrowIcon().should('be.visible').click()

      })
          

      it('After Entering valid OTP and Clicking on Submit button user should be logged in successfully.', () => {
    
          //Entering Valid data into "Email" input feld.
          LoginPages.getPutsValidDataEmail().clear().type(cred.SupEmail);
          //Entering Valid data into "Password" input feld.
          LoginPages.getPutsValidDataPassword().clear().type(cred.SupPassword);
          //Clicking on "Submit" button.
          LoginPages.getClickingToSubmitButton().click();
        
          cy.wait(9000)
          //Verifying that the "OTP Verification" page is visible after login.
          LoginPages.getCheckOTPPageVisibleAfterLogin().should('be.visible').should('have.text','Enter Verification Code')
          //Enter valid data into "Enter verification code" page.
          LoginPages.getEnterValidDataVerificationCode().should('be.visible').clear().type('123321')
          //Clicking on "Submit" button.
          LoginPages.getClickingINTOSubmit().click();
          //verifying that the user is logged in successfully.
          cy.url().should('include', '/dashboard');
          cy.suplogout()

    })

    
  })

