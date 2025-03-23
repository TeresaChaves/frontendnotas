import flecha from "../assets/icons/icons8-arrow-96.png";
import "./Inspiracion.css";
import { useEffect } from "react";

function Inspiracion() {
  useEffect(() => {
    const numLunares = 20;
    const h2Element = document.querySelector(".inspiration_title");

    // Crear un span para contener los lunares
    const wrapper = document.createElement("span");
    wrapper.classList.add("lunares-wrapper");
    h2Element.appendChild(wrapper);

    for (let i = 0; i < numLunares; i++) {
      const lunar = document.createElement("div");
      lunar.classList.add("lunar");
      lunar.style.backgroundColor = getRandomColor();
      lunar.style.width = `${Math.random() * 60 + 20}px`;
      lunar.style.height = lunar.style.width;
      lunar.style.left = `${Math.random() * 100}%`;
      lunar.style.top = `${Math.random() * 100}%`;

      wrapper.appendChild(lunar);
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }, []);

  return (
    <>
      <div className="section_formacion" style={{ backgroundColor: "#1e0f75" }}>
        <a href="/">
          <img style={{ filter: "invert(1)" }} src={flecha} alt="flecha" />
        </a>
        <h1 style={{ color: "white", fontSize: "18rem" }}>Inspiración</h1>
        <div
          className="hr"
          style={{ border: "0.5px solid rgb(255, 255, 255)" }}></div>
        <footer
          className="footer-formacion"
          style={{ backgroundColor: "#1e0f75" }}>
          <ul className="year">
            <li style={{ color: "white" }}>2022 - 24</li>
          </ul>
          <ul className="name">
            <li style={{ color: "white" }}>Teresa Chaves</li>
            <li style={{ color: "white" }}>Frontend Developer</li>
          </ul>
        </footer>
      </div>
      <section className="section_inspiration">
        <h2 className="inspiration_title">
          Inspiración
          <span className="lunares-wrapper"></span>
        </h2>
        <div className="inspiration-container-wrapper">
          <div className="inspiration-container"></div>
          <div className="inspiration-container"></div>
          <div className="inspiration-container"></div>
          <div className="inspiration-container"></div>
          <div className="inspiration-container"></div>
          <div className="inspiration-container"></div>
        </div>
      </section>
    </>
  );
}

export default Inspiracion;
