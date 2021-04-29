/// <reference types ="cypress" />

//Elements
const CREATE_ROOM_BTN ="h2 > .btn"
const ROOM_LIST =".room"
const THREE_DOTS_BTN =".action > img"
const DELETE_BTN =".menu > :nth-child(2)"

//Functions
function viewRoomNew(content) {
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(content)
}

function verifyLastRoom(floor, room, category, available, price, features) {
    cy.get(ROOM_LIST).last()
    .should("contain", floor)
    .and("contain", room)
    .and("contain", category)
    .and("contain", available)
    .and("contain", price)
    .and("contain", features)
}

function deleteLastRoom() {
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click();
}

exports.default = {
    viewRoomNew,
    verifyLastRoom,
    deleteLastRoom
}