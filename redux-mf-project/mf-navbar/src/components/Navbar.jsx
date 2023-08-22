import React from "react";

import Swal from "sweetalert2";

import { useCounterStore } from "StoreProviderModFed/StoreProviderFederated";

import "./navbar.css";

const Navbar = () => {
  const { counter, clear } = useCounterStore();

  const handleDelete = () => {
    // el sweetalert lanza una promesa entonces eso se puede resolver con un then()
    Swal.fire({
      title: "¿Seguro que quiere volver al valor por defecto?",
      showConfirmButton: true,
      confirmButtonText: "Sí",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((result) => {
      // console.log(result);
      if (result.isConfirmed) {
        clear();
      }
    });
  };

  return (
    <>
      <h3>Navbar MF - Count ({counter.value})</h3>

      <button onClick={handleDelete}>Clear</button>
    </>
  );
};

export default Navbar;
