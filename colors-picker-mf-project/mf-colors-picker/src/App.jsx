// Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18

import React from "react";
import ReactDOM from "react-dom/client";

import ColorPicker from "./components/ColorPicker";

import "./index.css";
import { useColors, HEXToRGB } from "./hooks/useColors";

const App = () => {
  /* para probar que funciona todo independientemente */
  const {
    color,
    handleChangeColor,
    handleSubmitSaveColor,
    handleDeleteColorsList,
  } = useColors();
  const { rColor, gColor, bColor } = HEXToRGB(color);

  return (
    <div className="container">
      <ColorPicker
        color={color}
        handleChangeColor={handleChangeColor}
        handleSubmitSaveColor={handleSubmitSaveColor}
        handleDeleteColorsList={handleDeleteColorsList}
        rColor={rColor}
        gColor={gColor}
        bColor={bColor}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
