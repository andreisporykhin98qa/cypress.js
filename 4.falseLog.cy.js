describe('Негативный кейс: неправильный логин, правильный пароль', () => {
  it('Выводится ошибка при неправильном логине', () => {
    cy.visit('https://login.qa.studio')

    cy.get('#mail').type('notexist@qa.studio')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()

    // Проверяем сообщение об ошибке
    cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет')

    // Проверяем наличие крестика
    cy.get('img.exitIcon').should('be.visible')
  })
})
