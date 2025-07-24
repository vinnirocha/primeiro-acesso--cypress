class loginPage {
    selectorlist() {
        const selectors = {
         usernameField: "[name='username']",
         passwordField: "[name='password']",
         loginButton: "[type='submit']",
         wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
    cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorlist().usernameField).type(username)
        cy.get(this.selectorlist().usernameField).type(password)
        cy.get(this.selectorlist().loginButton).click()
    }

    checkAccessInvalid() {
         cy.get(this.selectorsList().wrongCredentialAlert)
    }
    
}

 export default loginPage

