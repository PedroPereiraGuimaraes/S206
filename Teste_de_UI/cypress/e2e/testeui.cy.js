/// <reference types="cypress" />

describe('Testes da Página da Wikipedia', () => {

  it('Tentando criar conta com nome já usado', () => {

    cy.visit('https://pt.wikipedia.org')
    cy.get('#pt-login-2 > a > span').click()
    cy.get('#mw-createaccount-join').click()
    cy.get('#wpName2').type("user")
    cy.get('#wpPassword2').type("senha")
    cy.get('#wpRetype').type("senha")
    cy.get('#mw-input-captchaWord').type("teste")
    cy.get('#wpCreateaccount').click()

    cy.get('.cdx-message__content').should('contain', 'já existe')
  })

  it('Deve exibir o título da página principal corretamente', () => {
    cy.visit('https://pt.wikipedia.org/wiki/P%C3%A1gina_principal');
    cy.title().should('eq', 'Wikipédia, a enciclopédia livre');
  });

  it('Deve realizar uma pesquisa e verificar os resultados', () => {
    cy.visit('https://pt.wikipedia.org/wiki/P%C3%A1gina_principal');
    const searchText = 'Cypress Testing';
    cy.get('#searchInput').type(searchText);
    cy.get('#searchform').click();
    cy.get('#firstHeading').should('exist');
  });

  it('Deve verificar se o botao de contato existe', () => {
    cy.visit('https://pt.wikipedia.org/wiki/P%C3%A1gina_principal');
    cy.get('.vector-header-container').click();
    cy.get('#n-contact-description').should('exist');
  });

  it('Deve verificar se um cabeçalho contém um texto específico', () => {
    cy.visit('https://pt.wikipedia.org/wiki/P%C3%A1gina_principal');
    cy.get('h1#firstHeading').should('contain', 'Wikipédia');
  });

  it('Deve verificar se o histórico de edições existe', () => {
    cy.visit('https://pt.wikipedia.org/wiki/P%C3%A1gina_principal');
    cy.get('#ca-history').should('exist');
  });

  it('Deve verificar se o ícone de discussão existe', () => {
    cy.visit('https://pt.wikipedia.org/wiki/P%C3%A1gina_principal');
    cy.get('#ca-talk').should('exist');
  });

  it('Deve verificar se um rodapé contém um link específico', () => {
    cy.visit('https://pt.wikipedia.org/wiki/P%C3%A1gina_principal');
    cy.get('#footer')
      .find('a')
      .should('contain', 'Política de privacidade');
  });
});
