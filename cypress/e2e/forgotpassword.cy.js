describe('Забыли пароль', function () {

    it('восстановление пароля через почту', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('german@dolnikov.ru');
       cy.get('#restoreEmailButton').click();
       cy.contains('Успешно отправили пароль на e-mail');
       cy.get('#exitMessageButton > .exitIcon')

       })
})