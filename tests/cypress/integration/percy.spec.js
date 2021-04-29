/// <reference types ="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients-page"
import * as clientNewPage from "../pages/client-new-page"
import * as billsPage from "../pages/bills-page"
import * as billNewPage from "../pages/bill-new-page"
import * as roomsPage from "../pages/rooms-page"
import * as roomNewPage from "../pages/room-new-page"

describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("/")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    });

    it("Login and logout", () => {
        indexPage.logoutUser("Login")
        cy.percySnapshot('test1')
    });

    it("Create client and verify", () => {
        indexPage.viewClients("Clients")
        clientsPage.viewClientNew("New Client")
        cy.percySnapshot('ncpg')
        clientNewPage.createClient("tester", "tester@mail.com", "12345678", "Clients")
        clientsPage.verifyLastClient("tester", "tester@mail.com", "12345678")
        clientsPage.deleteLastClient()
        indexPage.logoutUser("Login")
    });

    it("Create bill and verify", () => {
        indexPage.viewBills("Bills")
        billsPage.viewBillNew("New Bill")
        cy.wait(500)
        billNewPage.createBill("1000", "Bills")
        billsPage.verifyLastBill("2", "1000", "No", "Bills")
        billsPage.deleteLastBill()
        indexPage.logoutUser("Login")
    });

    it("Create room and verify", () => {
        indexPage.viewRooms("Rooms")
        roomsPage.viewRoomNew("New Room")
        roomNewPage.createRoom("3", "3", "3", "1200", "Rooms")
        roomsPage.verifyLastRoom("3", "3", "3", "1200", "true", "balcony",)
        roomsPage.deleteLastRoom()
        indexPage.logoutUser("Login")
    });

    it("Delete a bill", () => {
        indexPage.viewBills("Bills")
        billsPage.viewBillNew("New Bill")
        billNewPage.createBill("1000", "Bills")
        billsPage.deleteLastBill()
        indexPage.logoutUser("Login")
});
});