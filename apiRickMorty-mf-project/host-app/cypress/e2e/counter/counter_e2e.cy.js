// describe () es una función que es como almacenar en un conjunto todas las pruebas que existirán en este archivo
describe("Counter Tests", () => {
  // para definir una prueba vamos a hacerlo con la función it()
  it("debe cargar el counter", () => {
    // hacer que mi aplicación visite algo, en este caso será el host-app
    cy.visit("http://localhost:8080");

    // obtener elementos del DOM
    cy.get("h1").contains("Counter MF");
    cy.get("button").contains("+1");
    cy.get("button").contains("-1");
    cy.get("span").contains("Initial Value: 100");
  });

  it("debe aumentar el counter en +1 después de un click", () => {
    cy.visit("http://localhost:8080");

    // con esto se está siendo muy genérico porque son todos los button (aunque se le está diciendo que contenga el +1, entonces es de cierta forma preciso)
    // const btnAdd = cy.get("button").contains("+1");
    // de esta forma se le está pasando la clase que viene desde Tailwind con el fin de hacerlo más preciso, similar a como si fuera con un identificador único
    const btnAdd = cy
      .get(".bg-green-300.text-center.font-bold.rounded-md.p-2")
      .contains("+1");
    btnAdd.click();
    btnAdd.click();
    btnAdd.click();
    btnAdd.click();
    btnAdd.click();

    cy.get("span").contains("105");
  });
});
