describe('Позитивная проверка логина', () => {
  it('Вводим корректный логин и пароль', () => {
    cy.visit('https://login.qa.studio')

    cy.get('#mail').type('german@dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()

    // Проверяем сообщение
    cy.contains('Авторизация прошла успешно').should('be.visible')

    // Проверяем наличие крестика
    cy.get('img.exitIcon').should('be.visible')
  })
})
