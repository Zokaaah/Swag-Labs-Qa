describe("Fluxo de compra", () => {
  require("@shelex/cypress-allure-plugin");

  const Invaliduser = "standard_use";
  const Invalidpassword = "secret_sauc";
  const error =
    "Epic sadface: Username and password do not match any user in this service";
  const Validuser = "standard_user";
  const Validpassword = "secret_sauce";

  it("Login Invalido", () => {
    cy.allure().step("Acessar o site e tentar login inválido");
    cy.visit("https://www.saucedemo.com/");

    cy.allure().step("Inserir credenciais inválidas");
    cy.get('[data-test="username"]').type(Invaliduser);
    cy.get('[data-test="password"]').type(Invalidpassword);

    cy.allure().step("Clicar no botão de login");
    cy.get('[data-test="login-button"]').click();

    cy.allure().step("Verificar mensagem de erro");
    cy.get('[data-test="error"]').should("be.visible").and("contain", error);
  });

  it("Login Valido", () => {
    cy.allure().step("Acessar o site da Swag Labs");
    cy.visit("https://www.saucedemo.com/");

    cy.allure().step("Inserir credenciais válidas");
    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);

    cy.allure().step("Clicar no botão de login");
    cy.get('[data-test="login-button"]').click();

    cy.allure().step("Verificar se o login foi bem-sucedido");
    cy.get('[data-test="title"]').should("contain", "Products");
  });

  it("Fluxo de compras com produto único", () => {
    cy.allure().step("Acessar o site Swag Labs");
    cy.visit("https://www.saucedemo.com/");

    cy.allure().step("Realizar login com credenciais válidas");
    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should("contain", "Products");

    cy.allure().step("Adicionar produto ao carrinho");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.allure().step("Abrir carrinho");
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.allure().step("Iniciar checkout");
    cy.get('[data-test="checkout"]').click();

    cy.allure().step("Preencher dados pessoais");
    cy.get('[data-test="firstName"]').type("Gabriel");
    cy.get('[data-test="lastName"]').type("Silva");
    cy.get('[data-test="postalCode"]').type("123456");

    cy.allure().step("Avançar para pagamento");
    cy.get('[data-test="continue"]').click();

    cy.allure().step("Finalizar a compra");
    cy.get('[data-test="finish"]').click();

    cy.allure().step("Verificar mensagem de confirmação");
    cy.get(".complete-header").should("contain", "Thank you for your order!");
  });

  it("Fluxo de compras com múltiplos produtos", () => {
    cy.allure().step("Acessar o site Swag Labs");
    cy.visit("https://www.saucedemo.com/");

    cy.allure().step("Realizar login com credenciais válidas");
    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should("contain", "Products");

    cy.allure().step("Adicionar dois produtos ao carrinho");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.allure().step("Abrir carrinho");
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.allure().step("Iniciar checkout");
    cy.get('[data-test="checkout"]').click();

    cy.allure().step("Preencher dados pessoais");
    cy.get('[data-test="firstName"]').type("Gabriel");
    cy.get('[data-test="lastName"]').type("Silva");
    cy.get('[data-test="postalCode"]').type("123456");

    cy.allure().step("Avançar para pagamento");
    cy.get('[data-test="continue"]').click();

    cy.allure().step("Verificar valor total");
    cy.get('[data-test="total-label"]').should("contain", "Total: $43.18");

    cy.allure().step("Finalizar a compra");
    cy.get('[data-test="finish"]').click();

    cy.allure().step("Verificar mensagem de confirmação");
    cy.get(".complete-header").should("contain", "Thank you for your order!");
  });
});
