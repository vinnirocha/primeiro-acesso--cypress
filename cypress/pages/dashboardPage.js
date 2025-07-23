class DashboardPage {

    selectorList() {
        const selectors ={
             dashboarGrid: ".oxd-layout",
        }

        return selectors
    }

    checkDashboardPage() {
         cy.location('pathname').should('equal','/web/index.php/dashboard/index')
         cy.get(this.selectorList().dashboarGrid).should('be.visible')
    }
}

export default DashboardPage