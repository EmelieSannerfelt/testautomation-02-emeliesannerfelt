/// <reference types ="cypress" />

//Element
const HEADER = "h2"
const UNAME_FIELD = ":nth-child(1) > input"
const PASSWD_FIELD = ":nth-child(2) > input"
const LOGIN_BTN = ".btn"

//Functions
function confirmHeader(content) {
    cy.get(HEADER).should("contain", content)
}

function loginUser(uname, passwd, content) {
    cy.get(UNAME_FIELD).type(uname)
    cy.get(PASSWD_FIELD).type(passwd)
    cy.get(LOGIN_BTN).click()
    cy.get(HEADER).should("contain", content)
    cy.wait(500)
}

//Exports
exports.default = {
    confirmHeader,
    loginUser
}