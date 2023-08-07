import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <p>Counter Micro-Frontend (Module Federation)</p>
    </nav>
  );
};

// Es importante exponer por defecto el componente que se está federando para que el orquestador o microfrontend principal pueda renderizarlo
export default Navbar;
