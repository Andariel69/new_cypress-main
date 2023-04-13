describe('Неверный логин', function () {

    it('Неверный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('g@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon');


       })
})