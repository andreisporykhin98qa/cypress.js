describe('Негативный кейс: логин без @', () => {
    it('Проверка ошибки валидации логина без символа @', () => {
      cy.visit('https://login.qa.studio')
  
      cy.get('#mail').type('germandolnikov.ru') // без @
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click()
  
      // Проверка текста ошибки валидации
      cy.get('#messageHeader').should('have.text', 'Нужно исправить проблему валидации')  
    })
  })
  