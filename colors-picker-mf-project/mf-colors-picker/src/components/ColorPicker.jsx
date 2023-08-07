import React from "react";
// import { HEXToRGB, useColors } from "../hooks/useColors";

const ColorPicker = ({
  color,
  handleChangeColor,
  handleSubmitSaveColor,
  handleDeleteColorsList,
  rColor,
  gColor,
  bColor,
}) => {
  // aquí el useColors y HEXToRGB están en un archivo que es un custom hook pero en el microfronted host-app no es reactivo, es decir, en el host-app es una nueva instancia totalmente independiente a la que existe en el microfrontend mf-colors-picker, entonces para que se pueda cambiar el estado de un microfrontend a otro, se necesitan pasar parámetros para que el microfronted mf-colors-picker los pueda utilizar (se está haciendo que el microfrontend host-app se encargue de la lógica)
  // const { color, handleChangeColor, handleSubmitSaveColor } =
  //   useColors();
  // const { rColor, gColor, bColor } = HEXToRGB(color);

  return (
    <form onSubmit={handleSubmitSaveColor}>
      <input
        type="color"
        className="form-control"
        style={{ width: "100%", height: "200px", cursor: "pointer" }}
        title="Seleccione un color..."
        value={color}
        onChange={handleChangeColor}
      />

      <div className="text-center">
        <h2 className="mt-3 fw-bolder">
          <div
            style={{
              width: "22px",
              height: "22px",
              background: color,
              display: "inline-block",
              margin: "0 1rem",
              borderRadius: "100%",
            }}
          ></div>

          <span>{color}</span>
          <div className="mt-2">
            <span className="m-2">R:{rColor}</span>
            <span>G:{gColor}</span>
            <span className="m-2">B:{bColor}</span>
          </div>
        </h2>

        <div
          className="mt-4"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            gap: "1.25rem",
          }}
        >
          <button type="submit" className="btn btn-success">
            Guardar Color
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleDeleteColorsList}
          >
            Eliminar Lista
          </button>
        </div>
      </div>
    </form>
  );
};

export default ColorPicker;
