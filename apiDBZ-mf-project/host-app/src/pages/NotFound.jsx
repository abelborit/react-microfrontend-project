import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2 className="my-10 text-5xl text-red-500">404 Page Not Found...</h2>
      <NavLink to="/" className={"bg-blue-400 p-3 text-white rounded-md"}>
        Go to home
      </NavLink>
    </div>
  );
};

export default NotFound;
