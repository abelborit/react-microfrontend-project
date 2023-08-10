// Usar este paquete todavía utiliza la implementación de React 17, pero si nos fijamos en el package.json ya usa la versión React 18, por eso nos aparece el siguiente problema: **_Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17._** Para solucionar esto se tiene que modificar el src/App.jsx a la versión de React 18 para poder usar los hooks y las nuevas implementación de la versión 18

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavbarFederated from "NavbarModuleFederation/NavbarFederated";
import { Loader } from "./components/Loader";
// import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PersonajesPage = lazy(() => import("./pages/PersonajesPage"));
const CharacterDetailPage = lazy(() => import("./pages/CharacterDetailPage"));

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <NavbarFederated />

    <div className="text-center mt-8 text-4xl">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/personajes"
          element={
            <Suspense fallback={<Loader />}>
              <PersonajesPage />
            </Suspense>
          }
        />

        <Route
          path="/personajes/:id"
          element={
            <Suspense fallback={<Loader />}>
              <CharacterDetailPage />
            </Suspense>
          }
        />

        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <AboutPage />
            </Suspense>
          }
        />

        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
