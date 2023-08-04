// Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: counter-mf-app</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
