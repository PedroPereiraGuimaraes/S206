/// <reference types="cypress" />

describe('Criando cenario de teste para o site goblasqa', () => {
  it.skip('Registrando usuario', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Pedro')
    cy.get('#Text1').type('Guimarães')
    cy.get('#username').type('PedroPG')
    cy.get('#password').type('123456')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain', 'Registration successful')
  })

  it('Criando e Logando usuario', () => {
    let info = criarUsuario()

    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('div.ng-scope > :nth-child(2)').should('contain', 'You\'re logged in!!')
  })
})

function criarUsuario() {

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = 'id' + horas + minutos + segundos
  let senha = '123456'
  let userinfo = [user, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain', 'Registration successful')

  return userinfo
}