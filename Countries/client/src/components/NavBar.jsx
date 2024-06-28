import "../styles/NavBar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY; 
    setScrolling(scrollY > 0); 
  };

  return (
    <nav className={scrolling ? "scrolling" : ""}>
      <div className="logo-container">
        <Link to="/home">
          <img
            src="/images/PLANET-LOGO.png"
            alt="Logotipo"
            className="logo-nav"
          />
        </Link>
      </div>
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
