describe('Тест на сТрочныЕ буКвы в поЧте', function () {

    it('верный логин, верный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').click();


       })
})