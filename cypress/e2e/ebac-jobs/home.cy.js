/// <reference types="cypress" />

describe("Teste para a home", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });
  it("Deve renderizar 4 vagas", () => {
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4);
  });

  it("Deve filtrar por fullstack (com Enter)", () => {
    cy.get(".FormVagas_campo__E1ppF").type("fullstack{enter}");
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1);
  });

  it("Deve filtrar por fullstack (com click)", () => {
    cy.get(".FormVagas_campo__E1ppF").type("fullstack");
    cy.get("button[type='submit']").click();
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1);
  });
});
