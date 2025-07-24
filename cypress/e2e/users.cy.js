import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM tests', () => {


  
 it('users Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    myInfoPage.fillPersonalDetails('first Name', 'last Name', 'nick Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'otherId', '1998-12-29')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  
 

  
  })
  it('login - fail', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  })
})