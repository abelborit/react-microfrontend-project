import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");
  console.log(color);

  const HEXToRGB = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // return {r, g, b} // return an object
    return [r, g, b];
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <form>
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
            <span className="m-2">R:{HEXToRGB(color)[0]}</span>
            <span>G:{HEXToRGB(color)[1]}</span>
            <span className="m-2">B:{HEXToRGB(color)[2]}</span>
          </div>
        </h2>
      </div>
    </form>
  );
};

export default ColorPicker;
