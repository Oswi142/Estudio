describe("Contador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("index.html");
    cy.get("#primera-frase").type("Hola mundo");
    cy.get("#contar-button").click();
    cy.get("#resultado-div").should("contain", {"Hola": 1,"mundo": 1});
  });
});
