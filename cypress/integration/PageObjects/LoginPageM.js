class LoginPageM

//As a Admin I should be able to navigate on login page

{
getlogPageinvisible()
{
    return cy.xpath("//*[text()='Sign In']")
}
getEnterCredentials()
{
     return cy.get('.text-gray-500')
}
getLogoVisible()
{
    return cy.get('[alt="logo"]')
}
getLabelEmailField()
{
   return cy.xpath("//label")
}
getEmailInputField()
{
   return cy.xpath("//*[@name='email']")
}
getLabelPasswordField()
{
   return cy.xpath("//label")
}
getPasswordInputField()
{
   return cy.xpath("//*[@name='password']")
}
getLabelSubmit()
{
   return cy.xpath("//button[@textid='submit']")
}
getForgotPasswordLink()
{
    return cy.get('a')
}

//At login screen Email input field should have proper validation

getEmailInputField()
{
    return cy.xpath("//input[@name='email']")
}

getClickoutsideEmail()
{
  return cy.get('.py-20')
}
getVerifyingValidationError()
{
  return cy.xpath('//form/div[1]/div[2]')
}

getiIvalidDataEmail()
{
  return cy.xpath("//input[@name='email']")
}

getValidationErrorInvalidData()
{
  return cy.xpath('//div[contains(text(),"val")]')
}
getClearingDataEmail()
{
  return cy.xpath("//input[@name='email']")
}

//=================At login screen password input field should have proper validation=================

getClickingInsidePassword()
{
  return cy.xpath("//*[@name='password']")
}

getClickingOutsidePassword()
{
   return cy.get('.py-20')
}

getValidationError()
{
   return cy.xpath('//form/div[2]/div[2]')
}

getEnterLessThen8CharactersPassword()
{
   return cy.xpath("//*[@name='password']")
}

getOutsidePasswordInput()
{
   return cy.get('.py-20')
}

getvalidationErrorMinimumChar()
{
   return cy.xpath('//div[contains(text(),"8")]')
}

getClearingDataPasswordfield()
{
   return cy.xpath("//*[@name='password']")
}

getEnteringDataSpacePasswordFiled()
{
   return cy.xpath("//input[@name='password']")
}

getvalidationErroforSpace()
{
   return cy.xpath('//div[contains(text(),"Sp")]')
}

//At login screen forgot password link text should be visible

getClickingForgotPassword()
{
   return cy.get('a')
}

getForgotPagevisible()
{
   return cy.get('.text-2xl')
}

getClickingBackArrow()
{
   return cy.get('a > .text-primary')
}

//==============I should be unable to login with invalid credential======================================

getEnteringInvalidDataEmailfeld()
{
   return cy.xpath("//input[@name='email']")
}

getEnteringInvalidDataPasswordFeld()
{
   return cy.xpath("//input[@name='password']")
}
 getCheckingSubmitButton()
 {
   return cy.xpath("//button[@textid='submit']")
 }

 //====I should be able to navigate to Enter Verification code page after login with the valid credeantials====

 getEnteringValidDataEmailInputFeld()
 {
   return cy.xpath("//input[@name='email']")
 }
 
 getEnteringValidDataPasswordInputFeld()
 {
   return cy.xpath("//input[@name='password']")
 }

 getEnterSubmitButton()
 {
   return cy.xpath("//button[@textid='submit']")
 }

 getOTPVerification()
 {
   return cy.xpath('//div[contains(text(),"E")]')
 }

//===================At "Enter Verification Code" page each label and link should be proper==================

getVerifytextEnterVerification()
{
   return cy.xpath('//*[contains(text(),"En")]')
}

getVerifiyingbAckarrowButtonVisible()
{
   return cy.xpath('//*[@fill="currentColor"]')
}

getInboxImageVisible()
{
   return cy.xpath('//*[@alt="EmailIcon"]')
}

getinboxImageVisibleCorrect()
{
   return cy.xpath('//div[contains(text(),"6 digit")]')
}

getVerifingOTPFieldPresent()
{
   return cy.xpath("//*[@class='my-4']/div[1]")
}

getVerifingHaventReceivedOTPTtext()
{
   return cy.xpath('//*[contains(text(),"Hav")]')
}

getVerifingLabelResendOTP()
{
   return cy.get('[data-layer="Content"]')
}

getverifyingLabelSubmit()
{
   return cy.xpath('//*[@textid="submit"]')
}


getverifyingResendOTPText()
{
   return cy.xpath('//*[contains(text(),"Res")]')
}

getverifyingHaventreceivedOTP()
{
   return cy.get('.font-medium')
}
getverifyingInboxImage()
{
   return cy.get('.mt-5.mb-2')
}

//==============Validate "Enter Verification Code" page with Blank Data======================

getClickingSubmitButtonBlankData()
{
   return cy.xpath("//*[@textid='submit']")
}

getVerifiyingValidationBlankData()
{
   return cy.xpath('//*[contains(text(),"valid")]')
}

//=======Validate "Enter Verification Code" page with invalid Data==================================

getEnterInvalidDatVerificationCode()
{
   return cy.xpath("//*[@class='my-4']/div[1]")
}

getEnterOnSubmitButton()
{
   return cy.xpath("//*[@textid='submit']")
}

//======After Entering valid OTP and Clicking on Submit button user should be logged in successfully=====

getClickingBackArrowIcon()
{
   return cy.xpath('//*[@fill="currentColor"]')
}

getPutsValidDataEmail()
{
   return cy.xpath("//input[@name='email']")
}

getPutsValidDataPassword()
{
   return cy.xpath("//input[@name='password']")
}

getClickingToSubmitButton()
{
   return cy.xpath("//button[@textid='submit']")
}

getCheckOTPPageVisibleAfterLogin()
{
   return cy.xpath('//div[contains(text(),"E")]')
}

getEnterValidDataVerificationCode()
{
   return cy.xpath("//*[@class='my-4']/div[1]")
}

getClickingINTOSubmit()
{
   return cy.xpath("//*[@textid='submit']")
}

//+++++++++++++++++++++++++++++++++Forgot Password++++++++++++++++++++++++++++++++++++++++


getForgotPasswordLinkVisibale()
{
  return  cy.xpath('//div[contains(text(),"F")]')
}

//============As a Admin I should be able to navigate on Forgot password page==========

get6digitVerificationText()
{
   return cy.xpath('//div[contains(text(),"A")]')
}

getEmailTextVisiable()
{
   return cy.xpath('//label/div')
}

getSUbmitButton()
{
   return cy.xpath('//button[@type="submit"]')
}

getRequiredTest()
{
   return cy.xpath('//div[contains(text(),"R")]')
}

getValidationText()
{
   return cy.xpath('//div[contains(text(),"Pl")]')
}

getHaveNotReceivedCode()
{
   return cy.xpath('//div[contains(text(),"H")]')
}

getPutInvalidValueOTP()
{
   return cy.xpath('//div[@class="hidden md:block"]')
}

GetVerificationCode()
{
   return cy.xpath('//div[contains(text(),"Verfication Code is")]')
}

//===================================Provider Listing =================================================================

GetProvidertext()
{
   return cy.get('.space-y-4 > :nth-child(3)')
}

GetURL()
{
   return cy.url()
}

GetClickProviderSection()
{
   return cy.get(':nth-child(3) > .truncate')
}

GetFirstNameTag()
{
   return cy.get('table>thead>tr>th:nth-child(1)>div')
}

GetEmailTag()
{
   return cy.get('table>thead>tr>th:nth-child(2)>div')
}

GetMobileTag()
{
   return cy.get('table>thead>tr>th:nth-child(3)>div')
}
GetProviderType()
{
   return cy.get('table>thead>tr>th:nth-child(4)>div')
}

GetJoined()
{
   return cy.get('table>thead>tr>th:nth-child(5)>div')
}

GetStatus()
{
   return cy.get('table>thead>tr>th:nth-child(6)>div')
}

GetActionTag()
{
   return cy.get('table>thead>tr>th:nth-child(7)>div')
}

GetSearchField()
{
   return cy.get('[type=search]')
}

GetAddFilter()
{
   return cy.xpath('//div[contains(text(),"Ad")]')
}

GetInviteProviderButton()
{
   return cy.xpath("//button[@textid='provider.invite']")
}

GetPendingInjvatationButton()
{
   return cy.xpath("//button[@textid='admin.pending.invites']")
}

GetPagination()
{
   return cy.get('.mt-1:nth-child(2)')
}

GetClickOnPagination()
{
   return cy.get('.mt-1:nth-child(2)')
}

GetPerviousPage()
{
   return cy.get('.mt-1:nth-child(1)')
}

GetSearchFiled()
{
   return cy.xpath('//tr[1]/td[2]/div/p')
}

GetSearchFiledVisible()
{
   return cy.get('[type=search]')
}

GetInvatationLink()
{
   return cy.get('div.flex.flex-wrap>svg')
}

GetPageScroll()
{
   return cy.get('tr:nth-child(1) > td:nth-child(7) > div > svg:nth-child(1)')
}
GetProviderDetails()
{
   return cy.get('.py-8 > .font-bold')
}

GetAddress()
{
   return cy.get('.border-b-2')
}

GetAddressOne()
{
   return cy.xpath('//div[contains(text(),"Line 1")]')
}

GetAddressSecond()
{
   return cy.xpath('//div[contains(text(),"Line 2")]')
}

GetPostalCode()
{
   return cy.xpath('//div[contains(text(),"Po")]')
}

GetHaveCity()
{
   return cy.xpath('//div[contains(text(),"Ci")]')
}

GetState()
{
   return cy.xpath('//div[contains(text(),"St")]')
}

GetClick()
{
   return cy.get('.py-8 > .h-6')
}

GetInviteProviderButtonCLick()
{
   return cy.xpath('//*[@class="z-50 w-6 h-6 text-primary cursor-pointer"]')
}

GetInvitePageScrol()
{
   return cy.get('tr:nth-child(1)>td:nth-child(6)>button')
}

GetClickInvite()
{
   return cy.xpath('//div[1]/div[2]/button[1]')
}

GetDatafilterAZ()
{
   return cy.get('table>thead>tr>th:nth-child(1)>span>svg:nth-child(1)')
}

GetDatafilterZA()
{
   return cy.get('table>thead>tr>th:nth-child(1)>span>svg:nth-child(2)')
}

GetFilterFiled()
{
   return cy.xpath('//div[contains(text(),"Add Filter")]')
}

GetMD()
{
   return cy.get('div.py-1>div:nth-child(1)')
}

GetTextVisible()
{
   return cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg')
}

GetDo()
{
   return cy.get('div.py-1>div:nth-child(2)')
}

GetPAC()
{
   return  cy.get('div.py-1>div:nth-child(3)')
}

GetNP()
{
   return cy.get('div.py-1>div:nth-child(4)')
}

GetCRN()
{
   return  cy.get('div.py-1>div:nth-child(5)')
}

GetNURSE()
{
   return cy.get('div.py-1>div:nth-child(6)')
}

Getparamedic()
{
   return cy.get('div.py-1>div:nth-child(7)')
}

GetEMT()
{
   return cy.get('div.py-1>div:nth-child(8)')
}

//================================================patients tab================================================================

GetPatientSection()
{
   return cy.xpath('//nav/div[2]')
}

GetPatientTaxt()
{
   return cy.xpath('//div[1]/div[4]/div[1]')
}

GetFullName()
{
   return cy.xpath('//div[contains(text(),"Fu")]')
}

GetUserID()
{
   return cy.xpath('//div[contains(text(),"Us")]')
}

GetEmailID()
{
   return cy.xpath('//div[contains(text(),"Em")]')
}

GetJoinedOn()
{
   return cy.xpath('//div[contains(text(),"J")]')
}

GetSubscriptionsing()
{
   return cy.get('thead > tr > :nth-child(5) > div')
}

GetAppointment()
{
   return cy.xpath('//th[6]/div[1]')
}

GetActionSection()
{
   return ccy.get('thead > tr > :nth-child(8) > div')
}

GetAddNewPatient()
{
   return cy.xpath('//div[contains(text(),"Add N")]')
}

GetAddFilters()
{
   return cy.xpath('//div[contains(text(),"Add F")]')
}

GetAddNewPatientButton()
{
   return cy.xpath('//div[@class="font-bold text-black"]')
}

//==========================================================Setting Page=============================================================

GetPageScroll()
{
   return cy.xpath("//nav//div[text()='Settings']")
}

GetChangePassword()
{
   return cy.get('.text-xl')
}

GetOddPassword()
{
   return cy.xpath("//label//div")
}

GetOddPasswordVisiable()
{
   return cy.xpath('//*[@name="oldPassword"]')
}

GetNewPassword()
{
   return cy.xpath('//*[@name="newPassword"]')
}

GetConfirmPassword()
{
   return cy.xpath('//*[@name="confirmPassword"]')
}

GetUpdatePassword()
{
   return cy.xpath("//button//div[text()='Update']")
}

GetOldPasswordValidation()
{
   return cy.contains("Old Password is required")
}

GetOldPasswordFiled()
{
   return cy.contains("New Password is required")
}

Get8CharacterLabel()
{
   return cy.get('.text-red-600')
}

GetPasswordUpdateSuccessfully()
{
   return cy.xpath("//div[text()='Sign In']")
}

GetInputEmial()
{
   return cy.get(':nth-child(1) > .mt-1 > .appearance-none')
}

GetInputPassword()
{
   return cy.get(':nth-child(2) > .mt-1 > .appearance-none')
}

GetSignIN()
{
   return cy.get('.mt-3 > .flex')
}

GetScroll()
{
   return cy.xpath('//tbody/tr[1]/td[8]/div[1]/*[1]')
}

GetActionButton()
{
   return cy.get('[d="M10 12a2 2 0 100-4 2 2 0 000 4z"]')
}

getMedicalHistory()
{
   return cy.get('.flex > :nth-child(5) > div')
}

GetReportButton()
{
   return cy.get('.flex-grow > .border-b > .flex > .border-transparent > div')
}

GetReporttext()
{
   return cy.get('.font-bold')
}

GetDateFilter()
{
   return cy.get('div.flex.items-center > div > div:nth-child(1) > div > input')
}

GetPendingButton()
{
   return cy.get('div.space-x-4.flex > button:nth-child(1)')
}

GetPendingButtonClick()
{
   return cy.get('.justify-center > div')
}

GetEmailTex()
{
   return cy.get('thead > tr > :nth-child(1) > div')
}

GetPhoneNoText()
{
   return cy.get('thead > tr > :nth-child(2) > div')
}

GetInvatiedText()
{
   return cy.get('thead > tr > :nth-child(3) > div')
}

GetStatustex()
{
   return cy.get('thead > tr > :nth-child(4) > div')
}

GetAction()
{
   return cy.get('thead > tr > :nth-child(5) > div')
}

getInvatiedtext()
{
   return cy.get('div.flex.flex-wrap>div:nth-child(1)>div')
}

GetInvitededbutton()
{
   return cy.xpath('//div[1]/h3[1]/div[1]/div[1]')
}

GetInvitedProvidertext()
{
   return cy.get('[textid="provider.invite"]')
}

GetTextEmail()
{
   return cy.xpath('//div[1]/form[1]/div[1]/label/div')
}

getTextVisiables()
{
   return cy.xpath('//div[1]/form[1]/div[1]/div')
}

GetTextPhoneNumber()
{
   return cy.xpath('//div[1]/form[1]/div[2]/label/div')
}

GetCanceltext()
{
   return cy.xpath('//div[1]/form[1]/div[3]/button[1]')
}

Getinvittextt()
{
   return  cy.xpath('//div[1]/form[1]/div[3]/button[2]')
}

GetUpdateprofile()
{
   return cy.get('#update-profile')
}

GetEmailNotVisibale()
{
   return cy.xpath('//div[1]/form[1]/div[1]/div[2]')
}

GetClearEmail()
{
   return cy.xpath('//div[1]/form[1]/div[1]/div[1]')
}

getClearPhoneNumber()
{
   return cy.xpath('//div[1]/form[1]/div[2]/div')
}

getPendingInvaitedButton()
{
   return cy.get('[textid="admin.pending.invites"] > div')
}

GetFirstClick()
{
   return cy.xpath("//tr[1]/td[5]/div/div/div")
}

//=========================================================Patient's listing ====================================================

GetCrossIcon()
{
   return cy.get('h3>div>svg')
}

GetFirstN()
{
   return cy.xpath('//label[@for="firstName"]')
}

GetFirstName()
{
   return cy.xpath('//input[@name="firstName"]')
}

GetLastName()
{
   return cy.xpath('//input[@name="lastName"]')
}

GetFirstNValidate()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div[2]')
}

GetPageScrolling()
{
   return cy.xpath('//label[@for="preferredName"]')
}

GetPreferredName()
{
   return cy.xpath('//input[@name="preferredName"]')
}

GetGenerateID()
{
   return cy.xpath('//*[@class="text-blue-800 font-semibold"]')
}

GetUserIDS()
{
   return cy.xpath('//input[@name="userId"]')
}

GetSubscription()
{
   return cy.xpath('//label[@for="membershipType"]')
}

GetSubscriptionvisible()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[1]/div')
}

GetPhoneN()
{
   return  cy.xpath('//label[@for="phone"]')
}

GetPhoneNVisiable()
{
   return cy.xpath('//input[@name="phone"]')
}

GetVerifiedEmail()
{
   return cy.xpath('//label[@for="email"]')
}

GetEmailFiledPresent()
{
   return cy.xpath('//input[@name="email"]')
}

GetBlankPhoneValidation()
{
   return cy.xpath('//div[contains(text(),"At")]')
}

GetDateOfBirth()
{
   return  cy.xpath('//label[@for="dateOfBirth"]')
}

GetDateFiledVisiable()
{
   return cy.xpath('//input[@name="dateOfBirth"]')
}

GetGenderFiled()
{
   return cy.xpath('//label[@for="gender"]')
}

GetGenderFiledVisiable()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[5]/div/div')
}

GetScrollings()
{
   return  cy.xpath('//div[@class="font-medium"]')
}

GetScroll1()
{
   return cy.xpath('//label[@for="address1"]')
}

GetAddressfiled()
{
   return cy.xpath('//input[@name="address1"]')
}

GetValidationEmailFiled()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[1]/div[2]')
}

GetAddress2()
{
   return cy.xpath('//label[@for="address2"]')
}

GetValidationAdress2()
{
   return cy.xpath('//input[@name="address2"]')
}

GetAddress1()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[1]/div[2]')
}

GetPostalCodes()
{
   return cy.xpath('//label[@for="postalCode"]')
}

GetpostalCodepresent()
{
   return cy.xpath('//input[@name="postalCode"]')
}

GetCity()
{
   return cy.xpath('//label[@for="city"]')
}

GetCityPresent()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[2]/div/div')
}

GetStateFiled()
{
   return cy.xpath('//label[@for="state"]')
}

GetStateFiledPresent()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[10]/div[1]/div')
}
GetAddpatientsButton()
{
   return cy.xpath('//button[@textid="add.patient.details"]')
}

getScrollz()
{
   return cy.xpath('//div[2]/div[2]/div[1]/div[2]/div[1]/div')
}

GetPhoneNubering()
{
   return cy.xpath('//div[2]/div[2]/div[1]/div[2]/div[2]/div')
}

GetBackArrowButtoned()
{
   return cy.xpath('//*[@class="h-6 w-6 cursor-pointer"]')
}

GetclickOnTheLink()
{
   return cy.get('div.css-11unzgr>div:nth-child(2)')
}

GetTextPhoneNumbers()
{
   return cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[2]/div[2]')
}

GetSelectdate()
{
   return cy.get('.react-datepicker__year-select')
}

GetData()
{
   return cy.get('.react-datepicker__day--015')
}

GetGenderSelecte()
{
   return cy.get('div.css-11unzgr>div:nth-child(1)')
}

GetScrol4()
{
   return cy.xpath('//*[text()="Generate ID"]')
}

GetScroll5()
{
   return cy.get('tr:nth-child(1)>td:nth-child(3)')
}

GetVerifiedAddingPatients()
{
   return cy.get('tr:nth-child(1)>td:nth-child(2)')
}

GetPlan()
{
   return cy.xpath('//tr[1]/td[5]/div')
}

GetScrollingsss()
{
   return cy.get('tr:nth-child(1) > td:nth-child(6)>div>div')
}

GetBookButton()
{
   return cy.get('.w-8 > path')
}

GetScrollingsssss()
{
   return cy.get('tr:nth-child(1)>td:nth-child(7)>button')
}

GetScorred()
{
   return cy.xpath('//tbody/tr[1]/td[5]/div[1]/div[1]/button[1]/*[1]')
}

GetStandrad()
{
   return cy.xpath('//div[1]/div[1]/div[1]/div[2]')
}

GetConfirmed()
{
   return cy.xpath('//div[1]/div[3]/button')
}

GetScrleded()
{
   return cy.xpath('//tr[1]/td[5]/div/div/button')
}

GetExecutive()
{
   return cy.xpath('//div[1]/div[1]/div[1]/div[3]')
}

GetCypress()
{
   return cy.xpath('//div[1]/div[1]/div[1]/div[4]')
}

GetScrollE()
{
   return cy.xpath('//*[text()="Patient Details"]')
}

GetEditPatient()
{
   return cy.xpath('//*[@textid="edit.patient"]')
}

GetDcreased()
{
   return cy.xpath('//*[text()="Mark as Deceased"]')
}

GetGenderss()
{
   return cy.xpath('//*[text()="Gender"]')
}

GetJoined()
{
   return cy.xpath('//*[text()="Joined On"]')
}

GetHouseHold()
{
   return cy.xpath('//*[text()="Household"]')
}

GetAppointemt()
{
   return cy.xpath('//div[@class="mt-4"]/div/nav/div[3]')
}

GetMedicalHistorys()
{
   return cy.xpath('//*[text()="Medical History"]')
}

GetNotification()
{
   return cy.get('.flex > :nth-child(8) > div')
}

GetConstents()
{
   return cy.get('.flex > :nth-child(6) > div')
}

GetAddresseds()
{
   return cy.get('.border-primary > div')
}

GetBackArowButtonsing()
{
   returncy.get('.h-6 > path')
}

GetInputFiled()
{
   return cy.xpath('//tr[1]/td[3]/div/p')
}









































}

export default LoginPageM;