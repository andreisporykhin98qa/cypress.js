describe('Восстановление пароля', () => {
  it('Проверка логики восстановления пароля', () => {
    cy.visit('https://login.qa.studio')

    // Кликаем "Забыли пароль?"
    cy.get('#forgotEmailButton').click()

    // Вводим email
    cy.get('#mailForgot').type('test@mail.ru')

    // Жмем "Восстановить пароль"
    cy.get('#restoreEmailButton').click()

    // Проверка по id: текст сообщения
    cy.get('#messageHeader').should('have.text', 'Успешно отправили пароль на e-mail')

    // Проверка крестика
    cy.get('img.exitIcon').should('be.visible')
  })
})
