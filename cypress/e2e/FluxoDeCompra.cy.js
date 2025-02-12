
describe('template spec', () => {
  it('passes', () => {


    //1.Acessar o site Swag Labs.
    cy.visit('https://www.saucedemo.com/')

    //2.Realizar login com credenciais validas

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click()

    //3.Adicionar dois produtos ao carrinho de compra
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    //4.Abrir carrinho
    cy.get('[data-test="shopping-cart-link"]').click()

    //5.clicar checkout
    cy.get('[data-test="checkout"]').click()

    //6. inserir dados pessoais
    cy.get('[data-test="firstName"]').type('gabriel')
    cy.get('[data-test="lastName"]').type('silva')
    cy.get('[data-test="postalCode"]').type('123456')

    //7. avançar
    cy.get('[data-test="continue"]').click()

    //8. Verificar valor total
    cy.get('[data-test="total-label"]').should('contain', 'Total: $43.18')

    cy.get('[data-test="finish"]').click()

    // 9. Finalizar a compra e verificar a mensagem de confirmação
    cy.get(".complete-header").should("contain", "Thank you for your order!");



  })
})