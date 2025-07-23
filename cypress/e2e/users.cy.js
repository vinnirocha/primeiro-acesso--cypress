import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM tests', () => {

 const selectorsList = {

    firstName: "[name='firstName']",
    lastNameField: "[name='middleName']",
    nickNameField: ".oxd-input",
    genericField: ".oxd-input",
    genericCombobox: ".oxd-select-text",
    secondItemCombobox: ":nth-child(27) > span",
    thirdItemCombobox: ":nth-child(3) > span",
    dateField: "[placeholder='1998-12-29']",
    dateCloseButton: ".--close",
    submitButton: ".oxd-button--medium",
 }
  
 it.only('users Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

  
    cy.get(selectorsList.firstName)
    cy.get(selectorsList.lastNameField)
    cy.get(selectorsList.nickNameField).eq(3).clear().type('nicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear({ force: true }).type('employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('otherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('drivers License')
    cy.get(selectorsList.genericField).eq(7).clear().type('1998-12-29')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Update')
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()
  })
  it('login - fail', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})