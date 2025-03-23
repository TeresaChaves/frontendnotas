import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useState } from "react";

function Home() {
  return (
    <div className="">
      <header className="header_container">
        <div className="body_title">
          <h1>Teresa Chaves</h1>
          <span>Frontend Developer / UX-UI</span>
        </div>
        <div className="body_list">
          <ul className="contanier-home_list">
            <li className="body_list_item">
              <Link to="/formacion">
                <span>Formación Desarrollo Web</span>{" "}
                <span className="Link_Home">Formación</span>
              </Link>
            </li>
            <li className="body_list_item">
              <Link to="/diseno">
                <span>Botones, Iconos, Color, Pressets </span>{" "}
                <span className="Link_Home">Diseño Web</span>
              </Link>
            </li>
            <li className="body_list_item">
              <Link to="/inspiracion">
                <span>Diseños y trabajos de otrxs desarrolladorxs</span>{" "}
                <span className="Link_Home">Inspiración</span>
              </Link>
            </li>
            <li className="body_list_item">
              <Link to="/">
                <span>Frameworks para React, CSS o SaSS</span>{" "}
                <span className="Link_Home">Librerías</span>
              </Link>
            </li>
            <li className="body_list_item">
              <Link to="/">
                <span>Proyectos útiles para estudiar de la comunidad</span>{" "}
                <span className="Link_Home">Proyectos</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Home;
