import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <p>Navbar Component</p>
    </nav>
  );
};

// es importante exponer por defecto el componente para que el orquestador pueda renderizarlo
export default Navbar;
