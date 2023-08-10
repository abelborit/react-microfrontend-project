import React, { useState } from "react";

const Counter = ({ initialCounter }) => {
  if (!initialCounter) {
    throw new Error("Error en el mf-counter");
  }

  const [counter, setCounter] = useState(initialCounter);

  return (
    <>
      <span className="text-2xl mb-2">Initial Value: {initialCounter}</span>

      <div className="text-3xl">
        <button
          className="bg-green-300 text-center font-bold rounded-md p-2"
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>

        <span className="mx-8">{counter}</span>

        <button
          className="bg-red-400 text-center font-bold rounded-md p-2"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
