
describe('Fluxo de compra', () => {

    const Invaliduser = 'standard_use';
    const Invalidpassword = 'secret_sauc'
    const error = 'Epic sadface: Username and password do not match any user in this service'
    const Validuser = 'standard_user'
    const Validpassword='secret_sauce'

    // const nomeAleatorio = faker.name.firstName();
    // const sobrenomeAleatorio = faker.name.lastName();


  it('Login Invalido', ()=>{
    //Acessar o site e inserir um login invalido
    
    cy.visit('https://www.saucedemo.com/')
   
    cy.get('[data-test="username"]').type(Invaliduser)
    cy.get('[data-test="password"]').type(Invalidpassword)

    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain',error)
  })

  it('Login Valido',()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(Validuser)
    cy.get('[data-test="password"]').type(Validpassword)
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="title"]').should('contain', 'Products')

  })

  it('Fluxo de compras com produto unico', () => {

    //1.Acessar o site Swag Labs.
    cy.visit('https://www.saucedemo.com/')

    //2.Realizar login com credenciais validas

    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain', 'Products')

    //3.Adicionar produto ao carrinho de compra
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

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

  it.only('Fluxo de compras com multiplos produtos ', () => {

    //1.Acessar o site Swag Labs.
    cy.visit('https://www.saucedemo.com/')

    //2.Realizar login com credenciais validas

    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain', 'Products')

    //3.Adicionar dois produtos ao carrinho de compra
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    //4.Abrir carrinho
    cy.get('[data-test="shopping-cart-link"]').click()

    //5.clicar checkout
    cy.get('[data-test="checkout"]').click()

    //6. inserir dados pessoais
    cy.get('[data-test="firstName"]').type('gabriel' )
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