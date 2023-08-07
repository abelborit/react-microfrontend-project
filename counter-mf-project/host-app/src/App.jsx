// Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18

import React from "react";
import ReactDOM from "react-dom/client";

// importar el módulo que se está federando: navbarModuleFederation es el microfrontend que se expuso y Navbar es el nombre que le colocamos al componente federado. Como es una importación por default en el módulo yo le estoy colocando un nombre representativo a lo que se hace, que es la federación de módulos
import NavbarModuleFederation from "navbarModuleFederation/Navbar";
import CounterModuleFederation from "counterModuleFederation/CounterMF";

import "./index.css";

const App = () => (
  <>
    <NavbarModuleFederation />

    <div className="container">
      <h2>Host App</h2>
      <CounterModuleFederation />
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
