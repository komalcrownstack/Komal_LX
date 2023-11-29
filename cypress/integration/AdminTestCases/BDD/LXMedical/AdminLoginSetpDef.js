/// <reference types="Cypress" />
import { when } from 'cypress/types/jquery';
import LoginPageM from '../PageObjects/LoginPageM';
const LoginPages=new LoginPageM()
const cred = require('../../fixtures/cred.json')
const text = require('../../fixtures/text.txt')


import { Given,When,Then,and } from "@badeball/cypress-cucumber-preprocessor";

Given('I Open the website',()=>
{
    beforeEach(() => {
        cy.visit(Cypress.env('URL')+"/admin")
        LoginPages.getEmailInputField().clear().type(cred.email);
        //Entering Valid data into "Password" input feld.
        LoginPages.getEnteringValidDataPasswordInputFeld().clear().type(cred.password);
     })

})

 when('Verify the all the tittle on the login page',()=>
 {
    LoginPages.getlogPageinvisible().should('have.text', 'Sign In').and('be.visible');
    LoginPages.getEnterCredentials().should('have.text', 'Please enter your credentials to sign in.');
    //Verifying that the logo on the sign in page is visible.
    LoginPages.getLogoVisible().invoke('attr', 'src').should('eq', '/static/media/Favicon-Light-20211230.aab62f3c.png');
    //Verifying the label "Email" input field.
    LoginPages.getLabelEmailField().eq(0).should('have.text', 'Email');
    //Verifying that the "Email" input field is present.
    LoginPages.getEmailInputField().should('be.visible');
    //Verifying the label "Password" input field.
    LoginPages.getLabelPasswordField().eq(1).should('have.text', 'Password');
    //Verifying that the "Password" input field is present.
    LoginPages.getPasswordInputField().should('be.visible');
    //Verifying the label of "Submit" button.
    LoginPages.getLabelSubmit().should('be.visible');
    //Verifying the "Forgot Password" Link.
    LoginPages.getForgotPasswordLink().should('have.text', 'Forgot Password?');

 })

 and('Validate all the label on the Verification Code page',()=>
 {
 //Clicking inside "Email" input field.
 LoginPages.getEmailInputField().should('be.visible').clear()
 //Clicking outside Email input box.
 LoginPages.getClickoutsideEmail().click();
 //Verifying validation error for "Blank data".
 LoginPages.getVerifyingValidationError().eq(0).should('have.text', 'Required').and('be.visible');
 //Entering invalid data into "Email" input field.
 LoginPages.getiIvalidDataEmail().should('be.visible').type('dasd@ asda@')
 //Verifying validation error for "invalid data".
 cy.xpath('//div[contains(text(),"val")]').eq(0).should('have.text', 'Please enter valid email').and('be.visible');
 //Clearing data in the "Email" input field.
 LoginPages.getiIvalidDataEmail().clear();

 })

 Then('Login the website',()=>
 {
 //Clicking on "Submit" button.
 cy.wait(3000);
 LoginPages.getClickingToSubmitButton().click();
 //Entering Valid data into "Email" input feld.
 cy.wait(3000)
 //Verifying that the "OTP Verification" page is visible after login.
 LoginPages.getOTPVerification().should('be.visible').should('have.text','Enter Verification Code')
 //Enter valid data into "Enter verification code" page.
 LoginPages.getVerifingOTPFieldPresent().should('be.visible').clear().type('123321')
 //Clicking on "Submit" button.
 LoginPages.getClickingINTOSubmit().click();
 //verifying that the user is logged in successfully.
 cy.url().should('include', '/dashboard');
 })