describe("Navegaciones", () => {
  it("Visita todas las páginas usando el menú del navbar", () => {
    cy.visit("http://localhost:8080");

    cy.get("a").contains("Personajes").click();
    cy.get("a").contains("About").click();
    cy.get("a").contains("MF APP").click();
  });

  it("Debe entrar a la página de personajes, entrar a los detalles del personaje Morty Smith y luego regresar al listado de personajes", () => {
    cy.visit("http://localhost:8080/personajes");
    cy.visit("http://localhost:8080/personajes/2");

    cy.get("a").contains("Go back").click();
  });
});
