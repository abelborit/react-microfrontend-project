import { useEffect, useState } from "react";
import { getColorsLocalStorage, getLastColor } from "../helpers/getColors";
import Swal from "sweetalert2";

export const useColors = () => {
  const [color, setColor] = useState(getLastColor());
  const [colorsList, setColorsList] = useState(getColorsLocalStorage());

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmitSaveColor = (e) => {
    e.preventDefault();

    const newColorsList = [color, ...colorsList];
    setColorsList(newColorsList);
  };

  const handleDeleteColorsList = () => {
    setColor("#000000");
    setColorsList([]);

    // mandar una notificación
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Lista eliminada",
      showConfirmButton: false,
      timer: 1250,
      timerProgressBar: true,
    });
  };

  useEffect(() => {
    localStorage.setItem("colorsList", JSON.stringify(colorsList));
  }, [colorsList]);

  useEffect(() => {
    if (!colorsList.length) {
      localStorage.removeItem("colorsList");
    }
  }, []);

  return {
    color,
    colorsList,
    handleChangeColor,
    handleSubmitSaveColor,
    handleDeleteColorsList,
  };
};

export const HEXToRGB = (hexColor) => {
  const rColor = parseInt(hexColor.slice(1, 3), 16);
  const gColor = parseInt(hexColor.slice(3, 5), 16);
  const bColor = parseInt(hexColor.slice(5, 7), 16);

  return { rColor, gColor, bColor }; // return an object
  // return [rColor, gColor, bColor];
};
