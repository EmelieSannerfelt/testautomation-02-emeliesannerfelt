/// <reference types ="cypress" />

//Elements
const VALUE_FIELD = "input"
const PAID_FIELD = "checkbox" //Functions?????
const SAVE_BTN = ".blue" 

//Functions
function createBill(value, content) {
    cy.get(VALUE_FIELD).type(value)
    cy.get(SAVE_BTN).click()
    cy.contains("Bills")
}

//Exports
exports.default = {
    createBill
}