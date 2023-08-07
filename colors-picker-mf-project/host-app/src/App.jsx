// Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18

import React from "react";
import ReactDOM from "react-dom/client";

// componentes federados
import ColorPickerMF from "colorPickerModuleFederation/ColorPicker";
import ColorListMF from "colorListModuleFederation/ColorList";

// funciones federadas. Aquí el useColors y HEXToRGB están en un archivo que es un custom hook pero en el microfronted host-app no es reactivo, es decir, aquí en el host-app es una nueva instancia totalmente independiente a la que existe en el microfrontend mf-colors-picker, entonces para que esto pueda cambiar el estado de un microfrontend a otro, se necesitan pasar parámetros para que el microfronted mf-colors-picker los pueda utilizar (aquí se está haciendo que el microfrontend host-app se encargue de la lógica)
import { useColors, HEXToRGB } from "colorPickerModuleFederation/useColors";

// import "./index.css";

const App = () => {
  // la fuente de información está siendo de host-app, sin embargo estas funciones no son propias del host-app, ya que son propias del microfrontend mf-colors-picker (ya que tiene sentido que este microfrontend tenga esa lógica porque es quien la usa internamente) y lo que se busca con que todo lo esté manejando el host-app es que el estado esté disponible en el resto de los microfontends
  const {
    color,
    colorsList,
    handleChangeColor,
    handleSubmitSaveColor,
    handleDeleteColorsList,
  } = useColors();
  const { rColor, gColor, bColor } = HEXToRGB(color);

  return (
    <>
      <h1 className="text-center bg-dark text-white p-3">
        Color Picker MF App
      </h1>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorListMF colorsList={colorsList} />
          </div>

          <div className="col-12 col-md-8">
            <ColorPickerMF
              color={color}
              handleChangeColor={handleChangeColor}
              handleSubmitSaveColor={handleSubmitSaveColor}
              handleDeleteColorsList={handleDeleteColorsList}
              rColor={rColor}
              gColor={gColor}
              bColor={bColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
