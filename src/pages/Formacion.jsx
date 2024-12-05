import React from "react";
import { Link } from "react-router-dom";
import "./Formacion.css";
import webdev from "../assets/imgs/webdev.jpeg";
import eloquent from "../assets/imgs/EloquentJS.jpeg";
import openbootcamp from "../assets/imgs/OpenBootcamp.jpeg";
import midu from "../assets/imgs/Midu.jpeg";
import reccosmicos from "../assets/imgs/RecCosmicos.jpeg";
import { useRef } from "react";
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

  const items = ["Diseño", "Desarrollo Web", "UX/UI", "Programación"];
  const itemsFormacion = [
    {
      name: "Diseño",
      image: diseño, // Importa la imagen directamente si es posible
      description:
        "Diseño de páginas web y aplicaciones móviles y web de alta calidad",
      websites: [
        {
          name: "Recursos de diseño",
          url: "https://www.recursoscosmicos.com/",
        },
        {
          name: "Inspiration Hub",
          url: "https://www.inspirationhub.com/",
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
        },
        {
          name: "Frontend Mastery",
          url: "https://www.frontendmastery.com/",
        },
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/",
        },

        {
          name: "W3Schools",
          url: "https://w3schools.com/",
          description: "W3Schools",
        },
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/",
          description: "Codecademy",
        },
        {
          name: "FreeCodeCamp",
          url: "https://www.freecodecamp.org/",
          description: "FreeCodeCamp",
        },
        {
          name: "CodePen",
          url: "https://codepen.io/",
          description: "CodePen",
        },
        {
          name: "GitHub",
          url: "https://github.com/",
          description: "GitHub",
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/",
          description: "Stack Overflow",
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
              {/* Detalles sobre {item.description} */}
              {/* <img
                className="img-formacion"
                src={item.image}
                alt="image de formacion"
              /> */}
              {item.websites &&
                item.websites.map((website, i) => (
                  <p key={i}>
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {website.name}
                    </a>
                  </p>
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
