# Swag-Labs-Qa


---

![swaglabs](https://github.com/user-attachments/assets/33233821-d989-42fa-b5e5-46efe8a9eb7a)


---

### Descrição da Automação

Este projeto de automação utiliza o Cypress para testar o fluxo de compras no sistema da Swag Labs. Abaixo estão os cenários testados:

1. **Login Inválido**:
   - Acessa o site da Swag Labs.
   - Insere credenciais inválidas (usuário e senha incorretos).
   - Verifica se a mensagem de erro "Epic sadface: Username and password do not match any user in this service" é exibida.

2. **Login Válido**:
   - Acessa o site da Swag Labs.
   - Insere credenciais válidas (usuário e senha corretos).
   - Verifica se o login é bem-sucedido e se a página de produtos é carregada corretamente.

3. **Fluxo de Compra com Produto Único**:
   - Acessa o site e realiza o login com credenciais válidas.
   - Adiciona um produto ao carrinho de compras.
   - Abre o carrinho e inicia o processo de checkout.
   - Insere dados pessoais (nome, sobrenome e CEP).
   - Avança para a etapa de revisão e verifica o valor total da compra.
   - Finaliza a compra e verifica a mensagem de confirmação "Thank you for your order!".

4. **Fluxo de Compra com Múltiplos Produtos**:
   - Acessa o site e realiza o login com credenciais válidas.
   - Adiciona dois produtos ao carrinho de compras.
   - Abre o carrinho e inicia o processo de checkout.
   - Insere dados pessoais (nome, sobrenome e CEP).
   - Avança para a etapa de revisão e verifica o valor total da compra.
   - Finaliza a compra e verifica a mensagem de confirmação "Thank you for your order!".

---

### Como Executar os Testes

Para executar os testes, siga os passos abaixo:

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute os testes com `npx cypress run` ou `npx cypress open` para abrir a interface interativa do Cypress.

---

