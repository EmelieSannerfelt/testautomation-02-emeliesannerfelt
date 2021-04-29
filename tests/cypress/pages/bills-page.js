/// <reference types ="cypress" />

//Elements
const CREATE_BILL_BTN ="h2 > .btn"
const BILLS_LIST =".bill"
const THREE_DOTS_BTN =".action > img"
const DELETE_BTN =".menu > :nth-child(2)"

//functions
function viewBillNew(content) {
    cy.get(CREATE_BILL_BTN).click()
    cy.contains(content)
}

function verifyLastBill(id, value, paid) {
    cy.get(BILLS_LIST).last()
    .should("contain", id)
    .and("contain", value)
    .and("contain", paid)
}
function deleteLastBill() {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
}

//Exports
exports.default = {
    viewBillNew,
    verifyLastBill,
    deleteLastBill
}