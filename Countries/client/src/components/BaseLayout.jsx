import "../styles/BaseLayout.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return (
    // Estructura del diseño base
    <div className="container-base-layout">
      <NavBar />
      <div className="my-content">{children}</div>
      <Footer />
    </div>
  );
}
