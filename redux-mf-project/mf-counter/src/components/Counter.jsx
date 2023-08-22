import React from "react";

import Swal from "sweetalert2";

import { useCounterStore } from "StoreProviderModFed/StoreProviderFederated";

import "./counter.css";

const Counter = () => {
  const { counter, increment, decrement } = useCounterStore();
  const limitCounter = 5;

  const handleIncrement = () => {
    if (counter.value < limitCounter) {
      increment();

      return;
    }

    Swal.fire(
      "No puedes incrementar más",
      `El contador no puede ser mayor a ${limitCounter}`,
      "error"
    );
  };

  return (
    <>
      <h3>Counter MF: {counter.value}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
