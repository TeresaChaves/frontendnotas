import "./NavBar.css";
import { IconoirProvider, Check } from "iconoir-react";
import { Iconoir } from "iconoir-react";
import project from "../assets/icons/Project.svg";
function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={project} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
