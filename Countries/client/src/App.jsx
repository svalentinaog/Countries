// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import React from "react";

// Importación de las páginas
import LandingPage from "./pages/LadingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ActivitiesPage from "./pages/ActivitiesPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import UpdateActivityForm from "./pages/UpdateActivityForm.jsx";

export default function App() {
  return (
    // Enrutador principal
    <Routes>
      {/* Ruta a la página de bienvenida */}
      <Route path="/" element={<LandingPage />} />

      {/* Ruta a la página principal o inicio de la aplicación */}
      <Route path="/home" element={<HomePage />} />

      {/* Ruta a la página del detalle de tu País */}
      <Route path="/country/:idPais" element={<DetailPage />} />

      {/* Ruta a la página sobre mi / sobre la app */}
      <Route path="/about" element={<AboutPage />} />

      {/* Ruta a la página de contacto */}
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Ruta a la página de actividades */}
      <Route path="/activities" element={<ActivitiesPage />} />

      {/* Ruta a la página del formulario de registro de actividades*/}
      <Route path="/create-activity" element={<FormPage />} />

      {/* Ruta para el formulario de edición */}
      <Route path="/edit/:activityId" element={<UpdateActivityForm />} />

      {/* Ruta a la página de cierre */}
      <Route path="/log-out" element={<LogoutPage />} />

      {/* Ruta a las páginas no encontradas o inexistentes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
