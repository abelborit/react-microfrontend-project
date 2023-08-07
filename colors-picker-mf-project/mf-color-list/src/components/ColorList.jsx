import React from "react";
import Swal from "sweetalert2";

const ColorList = ({ colorsList = [] }) => {
  const handleCopyColor = (color) => {
    // copiar en el porta papeles de la computadora usando el porta papeles del navegador
    navigator.clipboard.writeText(color);

    // mandar una notificación
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${color} - copiado!`,
      showConfirmButton: false,
      timer: 1250,
      timerProgressBar: true,
    });
  };

  return (
    <div className="list-group text-center">
      {colorsList.length ? (
        colorsList.map((elementColor, index) => (
          <button
            key={index}
            type="button"
            className="list-group-item list-group-item-action text-white"
            aria-current="true"
            title="Copiar"
            style={{
              background: elementColor,
              fontWeight: "bolder",
            }}
            onClick={() => handleCopyColor(elementColor)}
          >
            {elementColor}
          </button>
        ))
      ) : (
        <div className="alert alert-danger" role="alert">
          <b>No hay colores seleccionados...</b>
        </div>
      )}
    </div>
  );
};

export default ColorList;
