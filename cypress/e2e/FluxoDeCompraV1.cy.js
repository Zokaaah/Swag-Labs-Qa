describe("template spec", () => {
  it("Login Inválido", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("senha");
    cy.get("#login-button").click();

    cy.get('[data-test="error"]').contains(
      "Epic sadface: Username and password do not match any user in this service"
    );
    cy.screenshot('Login Invalido - finalizado - mensagem exibida corretamente')
  });
  it("Login válido", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");

    cy.get("#login-button").click();

    cy.get(".product_label").contains("Products");
    // cy.screenshot('Login Valido')
  });
});
