import "../styles/HomePage.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countries } from "../redux/slice/countryActions";
import BaseLayout from "../components/BaseLayout";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Error404 from "../components/Error404";
import Loader from "./Loader";

export default function HomePage() {
  const allcountries = useSelector((state) => state.country.countries);
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);

  const limit = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(allcountries.length / limit);

  const [isLoading, setIsLoading] = useState(true);

  const paginado = () => {
    const startIndex = currentPage * limit;
    const endIndex = startIndex + 10;
    return allcountries.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((previous) => Math.min(previous + 1, totalPages - 1));
  };
  const previousPage = () => {
    setCurrentPage((previous) => Math.max(previous - 1, 0));
  };

  const fetchCountries = paginado();
  console.log("Holaa somos los paises limitados xd 🙅‍♀️", fetchCountries);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setIsLoading(true); // Establecer isLoading a true antes de obtener los países
    dispatch(countries())
      .then(() => {
        setIsLoading(false); // Establecer isLoading a false después de obtener los países
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setIsLoading(false); // Asegurarse de establecer isLoading a false en caso de error también
      });
  }, [dispatch]);

  useEffect(() => {
    console.log("Países obtenidos:", allcountries);
  }, [allcountries]);

  return (
    <BaseLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchBar setCurrentPage={setCurrentPage} />

          {/* Renderizar la paginación */}
          <div className="container-pagination" style={{ marginTop: "20px" }}>
            <button
              className="previous-button"
              disabled={currentPage === 0}
              onClick={previousPage}
            >
              Previous
            </button>
            <div>
              <span className="current-page">{currentPage + 1}</span>
            </div>
            <button
              disabled={currentPage === totalPages - 1} // Deshabilita el botón "Next" si es la última página
              onClick={nextPage}
              className="next-button"
            >
              Next
            </button>
          </div>

          <div className="container-home">
            <div className="container-countries-cards">
              <div className="countries">
                {fetchCountries && fetchCountries.length > 0 ? (
                  fetchCountries.map((country, i) => (
                    <Card key={i} country={country} />
                  ))
                ) : (
                  <Error404 />
                )}
              </div>
            </div>

            {/* Renderizar la paginación */}
            <div
              className="container-pagination"
              style={{ marginBottom: "40px", marginTop: "20px" }}
            >
              <button
                className="previous-button"
                disabled={currentPage === 0}
                onClick={previousPage}
              >
                Previous
              </button>
              <div>
                <span className="current-page">{currentPage + 1}</span>
              </div>
              <button
                disabled={currentPage === totalPages - 1} // Deshabilita el botón "Next" si es la última página
                onClick={nextPage}
                className="next-button"
              >
                Next
              </button>
            </div>

            {showButton && (
              <button
                className={`button-scroll-to-top ${
                  showButton ? "visible" : ""
                }`}
                onClick={scrollToTop}
              >
                ↑
              </button>
            )}
          </div>
        </>
      )}
    </BaseLayout>
  );
}
