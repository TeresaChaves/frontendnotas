import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Formacion from "../pages/Formacion";
import Diseño from "../pages/Diseño";
import Inspiracion from "../pages/Inspiracion";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formacion" element={<Formacion />} />
      <Route path="/diseno" element={<Diseño />} />
      <Route path="/inspiracion" element={<Inspiracion />} />
    </Routes>
  );
};

export default AppRoutes;
