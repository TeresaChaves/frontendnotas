import React from "react";
import { useRef } from "react";
import "./Formacion.css";
import flecha from "../assets/icons/icons8-arrow-96.png";
import { itemsFormacion } from "./../components/ItemsFormacion";

function Formacion() {
  const listRef = useRef([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };

  const setObserver = (node) => {
    if (node) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
      });
      observer.observe(node);
    }
  };

  const getBackgroundColorRosa = (categoryIndex, index, totalItems) => {
    const categoryColors = [
      "245, 158, 188", // Rosa
      "12, 101, 209", // Azul
      "51, 114, 67", // Verde
      "250, 179, 8", // Naranja
      "255, 255, 150", // Amarillo claro
    ];
    const baseColor = categoryColors[categoryIndex % categoryColors.length];
    const opacity = 1 - index / totalItems;
    return `rgba(${baseColor}, ${opacity})`;
  };

  return (
    <>
      <div className="section_formacion">
        <a href="/">
          <img src={flecha} alt="flecha" />
        </a>
        <h1>Formación</h1>
        <div className="hr"></div>
        <footer className="footer-formacion">
          <ul className="year">
            <li>2022 - 24</li>
          </ul>
          <ul className="name">
            <li>Teresa Chaves</li>
            <li>Frontend Developer</li>
          </ul>
        </footer>
      </div>

      <div className="section_formacion-list">
        {itemsFormacion.map((item, index) => (
          <div
            key={index}
            className="section_formacion-list-item"
            ref={(node) => {
              listRef.current[index] = node;
              setObserver(node);
            }}>
            <span className="details">
              {item.websites.map((website, i) => (
                <div
                  key={i}
                  className="website-hover-container"
                  ref={setObserver}
                  style={{
                    backgroundColor: getBackgroundColorRosa(
                      index,
                      i,
                      item.websites.length
                    ),
                  }}>
                  <div className="website-summary">{website.name}</div>
                  <div className="website-details">
                    {website.description && <p>{website.description}</p>}
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      Visitar sitio web
                    </a>
                  </div>
                </div>
              ))}
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
export default Formacion;
