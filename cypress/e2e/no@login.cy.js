describe('Неверный логин без @', function () {

    it('Неверный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('German.Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Нужно исправить проблему валидации');
       cy.get('#exitMessageButton > .exitIcon');


       })
})