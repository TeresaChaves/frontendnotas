import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Diseño.css"; // Archivo CSS para el diseño
import diseno from "../assets/icons/anythingtopip.svg";
import diseno2 from "../assets/icons/agenda.svg";
import diseno3 from "../assets/icons/aldiko-next.svg";
import diseno4 from "../assets/icons/adw-launcher-ex.svg";
import diseno5 from "../assets/icons/activity-manager.svg";
import diseno6 from "../assets/icons/atom-meditation.svg";
import diseno7 from "../assets/icons/nube.svg";
import diseno8 from "../assets/icons/algorithms.svg";
import diseno9 from "../assets/icons/background-eraser.svg";
import diseno10 from "../assets/icons/gfx-tool-for-pubg-bgmi.svg";
import diseno11 from "../assets/icons/app-vault.svg";
import diseno12 from "../assets/icons/antidote.svg";
import diseno13 from "../assets/icons/avenza.svg";
import flecha from "../assets/icons/icons8-arrow-96.png";

const items = [
  {
    id: 1,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno,
    label: "Pressets",
    web: "https://www.google.com",
  },
  {
    id: 2,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno2,
    label: "Tools",
    web: "https://www.google.com",
  },
  {
    id: 3,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno3,
    label: "Fonts",
  },
  {
    id: 4,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno4,
    label: "Colors",
  },
  {
    id: 5,
    size: "tall",
    color: "rgb(248 248 248)",
    imageUrl: diseno5,
    label: "Botons",
  },
  {
    id: 6,
    size: "tall",
    color: "rgb(248 248 248)",
    imageUrl: diseno6,
    label: "Icons",
  },
  {
    id: 7,
    size: "wide",
    color: "rgb(248 248 248)",
    imageUrl: diseno7,
    label: "Images",
  },
  {
    id: 8,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno8,
    label: "Patterns",
  },
  {
    id: 9,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno9,
    label: "Templates",
  },
  {
    id: 10,
    size: "wide",
    color: "rgb(248 248 248)",
    imageUrl: diseno10,
    label: "Illustrations",
  },
  {
    id: 11,
    size: "tall",
    color: "rgb(248 248 248)",
    imageUrl: diseno11,
    label: "Photos",
  },
  {
    id: 12,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno12,
    label: "Videos",
  },
  {
    id: 13,
    size: "small",
    color: "rgb(248 248 248)",
    imageUrl: diseno13,
    label: "Animations",
  },
];

const GridItem = ({ id, size, color, imageUrl, label, web }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animación ocurre solo una vez
    threshold: 0.1, // Se activa cuando el 10% del elemento está visible
  });

  return (
    <motion.div
      ref={ref}
      className={`grid-item ${size}`}
      style={{ backgroundColor: color, border: "1px solid #ccc" }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      {/* Contenedor para la imagen y el texto superpuesto */}
      <div className="grid-item-content">
        <a href={web}>
          <img src={imageUrl} alt={`Item ${id}`} className="grid-item-image" />
          <div className="grid-item-overlay">
            <span className="grid-item-label">{label}</span>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const Diseño = () => {
  return (
    <>
      <div className="section_diseño">
        <a href="/">
          <img src={flecha} alt="flecha" />
        </a>
        <h1>Diseño</h1>
        <div className="hr"></div>
        <footer className="footer-diseño">
          <ul className="year">
            <li>2022 - 24</li>
          </ul>
          <ul className="name">
            <li>Teresa Chaves</li>
            <li>Frontend Developer</li>
          </ul>
        </footer>
      </div>

      <div className="grid-container">
        {items.map((item) => (
          <GridItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Diseño;
