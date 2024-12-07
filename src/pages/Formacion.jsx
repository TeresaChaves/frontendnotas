import React from "react";
import { useRef } from "react";
import "./Formacion.css";
import webdev from "../assets/imgs/webdev.jpeg";
import eloquent from "../assets/imgs/EloquentJS.jpeg";
import openbootcamp from "../assets/imgs/OpenBootcamp.jpeg";
import midu from "../assets/imgs/Midu.jpeg";
import reccosmicos from "../assets/imgs/RecCosmicos.jpeg";
import desarrollo from "../assets/icons/svg-hub-102.svg";
import diseño from "../assets/icons/svg-hub-107.svg";

function Formacion() {
  const formacion = {
    websites: [
      {
        name: "Web Dev",
        url: "https://web.dev/?hl=es-419",
        description:
          "Queremos ayudarte a crear sitios web atractivos, accesibles, rápidos y seguros que funcionen en todos los navegadores y para todos tus usuarios. Este sitio es nuestra plataforma de contenido para ayudarte en ese recorrido, escrito por miembros del equipo de Chrome y expertos externos que se especializan en temas de desarrollo web, como accesibilidad, rendimiento, diseño y mucho más.",
        photo: { webdev },
      },
      {
        name: "OpenBootcamp",
        url: "https://miportafolio.com",
        description:
          "OpenBootcamp es una plataforma de educación online que ofrece cursos de programación y tecnología en español. Nuestro objetivo es ayudar a las personas a aprender habilidades digitales y a encontrar trabajo en el sector tecnológico.",
        photo: { openbootcamp },
      },
      {
        name: "https://www.recursoscosmicos.com/",
        url: "https://www.recursoscosmicos.com/",
        description:
          "Colección de herramientas y recursos para diseño y desarrollo web",
        photo: { reccosmicos },
      },
      {
        name: "Js Eloquente",
        url: "https://eloquentjavascript.es/",
        description:
          "Un libro sobre programación y JavaScript para principiantes, avanzados y expertos. Escrito por Marijn Haverbeke.",
        photo: { eloquent },
      },
      {
        name: "Midudev",
        url: "https://midu.dev/",
        description:
          "Conviértete en Desarrollador Full-Stack. Todo lo que necesitas aprender en un sólo lugar",
        photo: { midu },
      },
    ],
  };

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
        threshold: 0.1, // Detecta cuando un 10% del elemento es visible
      });
      observer.observe(node);
    }
  };

  const itemsFormacion = [
    {
      name: "Diseño",
      image: diseño,
      description:
        "Diseño de páginas web y aplicaciones móviles y web de alta calidad",
      websites: [
        {
          name: "Recursos de diseño",
          url: "https://www.recursoscosmicos.com/",
          description: "Recursos de diseño para diseñar sitios web y apps",
        },
        {
          name: "Inspiration Hub",
          url: "https://www.inspirationhub.com/",
          description: "Recursos de diseño para diseñar sitios web y apps",
        },
      ],
    },
    {
      name: "Desarrollo Web",
      image: desarrollo,
      description: "Desarrollo de páginas web",
      websites: [
        {
          name: "Web Dev Docs",
          url: "https://www.webdevdocs.com/",
          description: "Recursos de diseño para diseñar sitios web y apps",
        },
        {
          name: "Frontend Mastery",
          url: "https://www.frontendmastery.com/",
          description: "Recursos de diseño para diseñar sitios web y apps",
        },
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/",
        },
        {
          name: "W3Schools",
          url: "https://w3schools.com/",
        },
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/",
        },
        {
          name: "FreeCodeCamp",
          url: "https://www.freecodecamp.org/",
        },
        {
          name: "CodePen",
          url: "https://codepen.io/",
        },
        {
          name: "GitHub",
          url: "https://github.com/",
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/",
        },
      ],
    },
    {
      name: "UX/UI",
      image: reccosmicos,
      description: "Diseño de interfaces de usuario",
      websites: [
        {
          name: "UX Planet",
          url: "https://uxplanet.org/",
        },
        {
          name: "Designing Interfaces",
          url: "https://www.designinginterfaces.com/",
        },
      ],
    },
    {
      name: "Programación",
      image: eloquent,
      description: "Desarrollo de aplicaciones web",
      websites: [
        {
          name: "Eloquent JavaScript",
          url: "https://eloquentjavascript.net/",
        },
        {
          name: "JavaScript Info",
          url: "https://javascript.info/",
        },
      ],
    },
  ];

  // Función para calcular el color con opacidad ajustada
  function getBackgroundColorRosa(categoryIndex, index, totalItems) {
    const categoryColors = [
      "245, 158, 188", // Rosa
      "12, 101, 209", // Naranja claro
      "51, 114, 67", // Azul claro
      "250, 179, 8", // Naranja oscuro
      "255, 255, 150", // Amarillo claro
    ];

    // Selecciona el color base según el índice de la categoría
    const baseColor = categoryColors[categoryIndex % categoryColors.length];

    // Ajusta la opacidad según el índice del sitio web
    const opacity = 1 - index / totalItems;

    // Devuelve el color con la opacidad ajustada
    return `rgba(${baseColor}, ${opacity})`;
  }

  return (
    <>
      <div className="section_formacion">
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
              {item.websites &&
                item.websites.map((website, i) => (
                  <div
                    key={i}
                    className="website-hover-container"
                    ref={(node) => setObserver(node)}
                    style={{
                      backgroundColor: getBackgroundColorRosa(
                        index,
                        i,
                        item.websites.length
                      ),
                    }}>
                    <div className="website-summary">{website.name}</div>
                    <div className="website-details">
                      <p>
                        <a
                          href={website.url}
                          target="_blank"
                          rel="noopener noreferrer">
                          Entrar
                        </a>
                      </p>
                      {website.description && <p>{website.description}</p>}
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
