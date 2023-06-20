/// <reference types="cypress" />
describe("Testar as funcionalidades de inclusão, alteração e remoção de um contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve renderizar a pagina inicial com o título, 3 campos e botão de adicionar contato", () => {
    cy.get("h1").should("contain", "Agenda").and("contain", "contatos");
    cy.get("input").should("have.length", 3);
    cy.get("button[type='submit']").should("have.length", 1);
  });

  it("Deve prencher os dados e adicionar contato", () => {
    cy.get("input[type='text']").type("Higor Rodrigues dos Santos Cruz");
    cy.get("input[type='email']").type("higorrsc@gmail.com");
    cy.get("input[type='tel']").type("5527992054791");
    cy.get(".adicionar").click();
    cy.get(".contato").should("contain", "Higor Rodrigues dos Santos Cruz");
  });

  it("Deve editar os dados do último contato e cancelar", () => {
    cy.get(".edit").first().click();
    cy.get("input[type='text']").clear();
    cy.get("input[type='text']").type("Teste de edicao");
    cy.get("input[type='email']").clear();
    cy.get("input[type='email']").type("john@doe.com");
    cy.get("input[type='tel']").clear();
    cy.get("input[type='tel']").type("1234567890");
    cy.get(".cancelar").click();
    cy.get(".contato").should("not.contain", "Teste de edicao");
  });

  it("Deve editar os dados do último contato e salvar", () => {
    cy.get(".edit").first().click();
    cy.get("input[type='text']").clear();
    cy.get("input[type='text']").type("Teste de edicao");
    cy.get("input[type='email']").clear();
    cy.get("input[type='email']").type("john@doe.com");
    cy.get("input[type='tel']").clear();
    cy.get("input[type='tel']").type("1234567890");
    cy.get(".alterar").click();
    cy.get(".contato").should("contain", "Teste de edicao");
  });

  it("Deve excluir o último contato inserido", () => {
    cy.get(".delete").last().click();
    cy.get(".contato").should("not.contain", "Higor Rodrigues dos Santos Cruz");
  });
});
