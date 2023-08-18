describe("Personajes", () => {
  it("Obtener todos los personajes", () => {
    cy.visit("http://localhost:8080/personajes");

    // Iterar usando un contador y recorriendo elementos
    // let count = 0;
    // // encontrar los elementos que sean img, luego por cada uno sumarle al count pero como se está haciendo una petición y estas son promesas, entonces se trabaja con el .then() donde se irá mostrando el valor del count
    // cy.get("img")
    //   .each((item) => (count += 1))
    //   .then(() => {
    //     cy.log("Cantidad:", count);

    //     expect(count).to.equal(20);
    //   });

    // Iterar obteniendo los elementos y luego su tamaño
    // get() para obtener el elemento que se le pasa el div con la clase aspect-h-1 y find() para buscar un tipo de etiqueta dentro de lo que se obtuvo
    cy.get("div.aspect-h-1")
      .find("img")
      .then((img) => {
        // esto me retorna un array entonces se le puede aplicar length
        cy.log(img.length);

        expect(img.length).to.equal(20);
      });
  });
});
