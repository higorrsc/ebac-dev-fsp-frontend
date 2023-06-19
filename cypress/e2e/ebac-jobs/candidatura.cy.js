/// <reference types="cypress" />

describe("Teste para a página de candidatura", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("Deve levar o usuário até o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get("input").should("have.length", 7);
    cy.screenshot("tela-inscricao");
  });

  it("Deve preencher o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get('input[name="nome-completo"]').type("Higor Cruz");
    cy.get('input[name="email"]').type("higorrsc@gmail.com");
    cy.get('input[name="telefone"]').type("5527992054791");
    cy.get('input[name="endereco"]').type("R dos Bobos, n. 0");
    cy.get("#linux").check();
    cy.get('select[name="escolaridade"]').select("bacharelado");
    cy.get(".Aplicacao_button__tw2AE").click();
    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado pela candidatura!");
    });
    cy.screenshot("tela-inscricao-preenchido");
  });
});
