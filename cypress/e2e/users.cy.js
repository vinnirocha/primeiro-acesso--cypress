import userData from '../fixtures/userData.json'

describe('Orange HRM tests', () => {

 const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitletopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboarGrid: ".oxd-layout",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstName: "[name='firstName']",
    lastNameField: "[name='middleName']",
    nickNameField: ".oxd-input",
    genericField: ".oxd-input",
    dateField: "[placeholder='1998-12-29']",
    dateCloseButton: '#app',
    submitButton: "[type= 'submit']",
    

 }
  
 it.only('users Update - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) 
    cy.get( selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitletopBar)
    cy.get(selectorsList.dashboarGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName)
    cy.get(selectorsList.lastNameField)
    cy.get(selectorsList.nickNameField).eq(3).clear().type('nicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('otherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('drivers License')
    cy.get(selectorsList.genericField).eq(7).clear().type('1998-12-29')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Update')
    
  })
  it('login - fail', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})