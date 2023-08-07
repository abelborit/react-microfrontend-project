// Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18

import React from "react";
import ReactDOM from "react-dom/client";

import ColorPicker from "colorPickerModuleFederation/ColorPicker";

// import "./index.css";

const App = () => (
  <>
    <h1 className="text-center bg-dark text-white p-3">Color Picker MF App</h1>

    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4">Lista de colores</div>
        <div className="col-12 col-md-8">
          <ColorPicker />
        </div>
      </div>
    </div>
  </>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
