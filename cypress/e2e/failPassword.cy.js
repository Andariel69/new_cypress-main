describe('Неверный пароль', function () {

    it('неверный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio6');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').click();


       })
})