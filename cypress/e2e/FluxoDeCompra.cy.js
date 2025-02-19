describe("Fluxo de compra", () => {
  const Invaliduser = "standard_use";
  const Invalidpassword = "secret_sauc";
  const error =
    "Epic sadface: Username and password do not match any user in this service";
  const Validuser = "standard_user";
  const Validpassword = "secret_sauce";

  it("Login Inválido", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(Invaliduser);
    cy.get('[data-test="password"]').type(Invalidpassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", error);

    cy.screenshot("Login Inválido - Finalizado");
  });

  it("Login Válido", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should("contain", "Products");

    cy.screenshot("Login Válido - Finalizado");
  });

  it("Fluxo de compras com produto único", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should("contain", "Products");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Gabriel");
    cy.get('[data-test="lastName"]').type("Silva");
    cy.get('[data-test="postalCode"]').type("123456");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order!");

    cy.screenshot("Fluxo de Compra Único - Finalizado");
  });

  it("Fluxo de compras com múltiplos produtos", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(Validuser);
    cy.get('[data-test="password"]').type(Validpassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should("contain", "Products");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Gabriel");
    cy.get('[data-test="lastName"]').type("Silva");
    cy.get('[data-test="postalCode"]').type("123456");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="total-label"]').should("contain", "Total: $43.18");
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("contain", "Thank you for your order!");

    cy.screenshot("Fluxo de Compra Múltipla - Finalizado");
  });
});