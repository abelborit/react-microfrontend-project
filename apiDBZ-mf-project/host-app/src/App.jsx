// Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PersonajesPage from "./pages/PersonajesPage";
import AboutPage from "./pages/AboutPage";
import NavbarFederated from "NavbarModuleFederation/NavbarFederated";
// import NotFound from "./pages/NotFound";

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <NavbarFederated />

    <div className="text-center mt-8 text-4xl">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personajes" element={<PersonajesPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
