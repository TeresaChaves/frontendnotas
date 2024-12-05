import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Formacion from "../pages/Formacion";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formacion" element={<Formacion />} />
    </Routes>
  );
};

export default AppRoutes;
