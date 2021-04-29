/// <reference types ="cypress" />

//elements

const CATEGORY_FIELD = ":nth-child(1) > select"
const ROOM_NUMBER_FIELD = ":nth-child(2) > input"
const FLOOR_FIELD = ":nth-child(3) > input"
const AVAILABLE_FIELD = ".checkbox"
const PRICE_FIELD = ":nth-child(5) > input"
const FEATURES_FIELD = ":nth-child(6) > select"
const SAVE_BTN = ".blue" 

//Functions
function createRoom(category, roomnumber, floor, available, price, content) {
    cy.get(CATEGORY_FIELD).select("double")
    cy.get(ROOM_NUMBER_FIELD).type(roomnumber)
    cy.get(FLOOR_FIELD).type(floor)
    cy.get(AVAILABLE_FIELD).click()
    cy.get(PRICE_FIELD).type(1200)
    cy.get(FEATURES_FIELD).select("balcony")
    cy.get(SAVE_BTN).click()
    cy.contains("Rooms")

}
//Exports
exports.default = {
    createRoom
}