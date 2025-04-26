describe('Негативный кейс: правильный логин, неправильный пароль', () => {
  it('Выводится ошибка при неверном пароле', () => {
    cy.visit('https://login.qa.studio')

    cy.get('#mail').type('german@dolnikov.ru')
    cy.get('#pass').type('wrongPassword123')
    cy.get('#loginButton').click()

    // Проверяем сообщение об ошибке
    cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет')

    // Проверяем, что есть крестик
    cy.get('img.exitIcon').should('be.visible')
  })
})
