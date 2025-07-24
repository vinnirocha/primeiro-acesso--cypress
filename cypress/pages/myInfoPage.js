class MyInfoPage {
    selectorsList() {
        const selectors = {
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

        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName) {
         cy.get(this.selectorsList().firstNameField).clear().type(firstName)
         cy.get(this.selectorsList().lastNameField).clear().type(lastName)
         cy.get(this.selectorsList().nickNameField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employee, otherId, driversLicenseDate, numbers) {
         cy.get(this.selectorsList().genericField).eq(4).clear({ force: true }).type(employee)
         cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
         cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
         cy.get(this.selectorsList().genericField).eq(7).clear().type(1998-12-29)
         cy.get(this.selectorsList().dateCloseButton).click()
         cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain','Successfully Update')
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
    }

    fillStatus() {
          cy.get(this.selectorsList().genericCombobox).eq(0).click()
          cy.get(this.selectorsList().secondItemCombobox).click()
          cy.get(this.selectorsList().genericCombobox).eq(1).click()
          cy.get(this.selectorsList().thirdItemCombobox).click()
    }
}

export default MyInfoPage