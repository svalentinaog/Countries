import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Agregamos un event listener al componente para detectar el scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiamos el event listener cuando el componente se desmonta
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Obtenemos la posición actual del scroll en el eje vertical
    setScrolling(scrollY > 0); // Cambiamos el estado de scrolling dependiendo de si la posición del scroll es mayor a 0
  };

  return (
    <nav className={scrolling ? "scrolling" : ""}>
      {/* Primera sección de la barra de navegación */}
      <div className="logo-container">
        <Link to="/home">
          <img
            src="/images/PLANET-LOGO.png"
            alt="Logotipo"
            className="logo-nav"
          />
        </Link>
      </div>
      {/* Segunda sección de la barra de navegación */}
      <div className="menu-nav">
      <Link to="/activities">
          <button className="button-about">Activities</button>
        </Link>
        <Link to="/create-activity">
          <button className="button-activities">New Activity</button>
        </Link>
        <Link to="/about">
          <button className="button-about">About</button>
        </Link>
        <Link to="/contact">
          <button className="button-about">Contact</button>
        </Link>
        <Link to="/log-out">
          <button className="button-logout">Log Out</button>
        </Link>
      </div>
    </nav>
  );
}
