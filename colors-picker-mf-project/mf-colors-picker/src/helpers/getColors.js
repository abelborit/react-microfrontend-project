export const getColorsLocalStorage = () => {
  return JSON.parse(localStorage.getItem("colorsList") || "[]");
};

export const getLastColor = () => {
  const lastColor = getColorsLocalStorage()[0];

  return lastColor || "#000000";
};
