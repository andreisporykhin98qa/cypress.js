describe.only('Негативный кейс: логин с заглавными буквами (проверка бага)', () => {
    it('Логин с верхним регистром не должен влиять на авторизацию (но влияет)', () => {
      cy.visit('https://login.qa.studio')
  
      cy.get('#mail').type('GerMan@Dolnikov.ru') // с заглавными
      cy.get('#pass').type('iLoveqastudio1')
      cy.get('#loginButton').click()
  
      // Ожидаем успешную авторизацию 
      cy.contains('Авторизация прошла успешно').should('be.visible')  
    })
  })
  