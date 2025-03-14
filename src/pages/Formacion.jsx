import React from "react";
import { useRef } from "react";
import "./Formacion.css";
import eloquent from "../assets/imgs/EloquentJS.jpeg";
import reccosmicos from "../assets/imgs/RecCosmicos.jpeg";
import desarrollo from "../assets/icons/svg-hub-102.svg";
import diseño from "../assets/icons/svg-hub-107.svg";
import flecha from "../assets/icons/icons8-arrow-96.png";

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
        {
          name: "Laws of UX",
          url: "https://lawsofux.com/es/",
          description:
            "Laws of UX es una colección de mejores prácticas que los diseñadores pueden considerar al crear interfaces de usuario.",
        },
        {
          name: "58 reglas para diseño UI",
          url: "https://uxdesign.cc/58-rules-for-stunning-and-effective-user-interface-design-ea4b93f931f6",
          description:
            "La interfaz de usuario adecuada puede elevar una aplicación de funcional a inolvidable, marcando la diferencia entre un usuario que interactúa una vez y uno que regresa una y otra vez.",
        },
        {
          name: "Proyectos para Figma",
          url: "https://sneakpeek.design/",
          description:
            "Mire dentro de los archivos Figma de las principales empresas GRATIS",
        },
        {
          name: "Layoutit!",
          url: "https://layoutit.com/",
          description:
            "Pruebe nuestras sencillas herramientas y generadores de interfaz",
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
          description:
            "Recursos de diseño para diseñar sitios web y apps de alta calidad y accesibles para poder ver esta muy bien el partado de documentación y de instalaciones de aplicaciones",
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
        {
          name: "DevDocs",
          url: "https://devdocs.io/",
          description:
            "DevDocs combina múltiples documentaciones de API en una interfaz rápida, organizada y que permite realizar búsquedas. Esto es lo que debes saber antes de empezar:",
        },
        {
          name: "Frontend Mentor",
          url: "https://www.frontendmentor.io/challenges",
          description:
            "Plataforma Frontend Mentor y te dará experiencia trabajando con diseños y construyendo pequeños proyectos. ",
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
          description:
            "Este libro trata de JavaScript, programación y los maravillosos mundos digitales. Puedes leerlo online aquí, o comprar tu propia copia en papel (3ª edición y en inglés).",
        },
        {
          name: "JavaScript Info",
          url: "https://javascript.info/",
          description:
            "Cómo se hace ahora. Desde lo más básico hasta temas avanzados con explicaciones sencillas pero detalladas.z",
        },
        {
          name: "Git con ejemplos: Guía interactiva",
          url: "https://antonz.org/git-by-example/",
          description:
            "Pruebe nuestras sencillas herramientas y generadores de interfaz",
        },
        {
          name: "CodeAnalogies",
          url: "https://www.codeanalogies.com/",
          description:
            "Comprender plenamente los conceptos de JavaScript y CSS utilizando analogías e imágenes memorables. Elimine horas de ensayo y error y de adivinanzas.",
        },
        {
          name: "JS en 5 minutos",
          url: "https://learnxinyminutes.com/es/javascript/",
          description:
            "Haz un viaje relámpago por tu próximo idioma favorito. Impulsado por la comunidad",
        },
        {
          name: "Flexbox Patterns",
          url: "https://flexboxpatterns.com/",
          description:
            "Construye impresionantes interfaces de usuario con CSS flexbox. Incluye ejemplos y código fuente.",
        },
        {
          name: "Eloquent JavaScript",
          url: "https://eloquentjavascript.net/",
          description:
            "Pruebe nuestras sencillas herramientas y generadores de interfaz",
        },
        {
          name: "JavaScript Info",
          url: "https://javascript.info/",
          description:
            "Pruebe nuestras sencillas herramientas y generadores de interfaz",
        },
      ],
    },
  ];

  // Función para calcular el color con opacidad ajustada
  // Función para calcular el color con opacidad ajustada
  function getBackgroundColorRosa(categoryIndex, index, totalItems) {
    const categoryColors = [
      "245, 158, 188", // Rosa
      "12, 101, 209", // Azul
      "51, 114, 67", // Verde
      "250, 179, 8", // Naranja
      "255, 255, 150", // Amarillo claro
    ];

    // Selecciona el color base según el índice de la categoría
    const baseColor = categoryColors[categoryIndex % categoryColors.length];

    // Ajusta la opacidad según el índice del sitio web
    const opacity = 1 - index / totalItems;

    // Devuelve el color con la opacidad ajustada (CORREGIDO)
    return `rgba(${baseColor}, ${opacity})`;
  }

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
