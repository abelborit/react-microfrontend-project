import React, { useEffect, useRef } from "react";

import { ErrorBoundary } from "../components/ErrorBoundary";
import PlaceCardsFederated from "CardsModuleFederation/PlaceCardsFederated";

const PersonajesPage = () => {
  // definir una referencia
  const cardsRef = useRef(null);

  useEffect(() => {
    // vamos a mandar el contenido desde una referencia, no vamos a mandar un componente y luego vamos a ejecutar la función PlaceCardsFederated que es lo que definimos
    PlaceCardsFederated(cardsRef.current);
  }, []);

  return (
    <>
      <ErrorBoundary>
        {/* no se mandará como un componente */}
        {/* <PlaceCardsFederated /> */}
        {/* de esta forma se está diciendo que dentro del elemento <div></div> se montará mi aplicación de Vue */}
        <div ref={cardsRef}></div>
      </ErrorBoundary>
    </>
  );
};

export default PersonajesPage;
