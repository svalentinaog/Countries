import "../styles/FormPage.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActivity } from "../services/activities";
import { countries } from "../redux/slice/countryActions";
import Selector from "../components/Selector";
import Validation from "../utils/Validation";
import SelectorMultiple from "../components/SelectorMultiple";

export default function FormPage() {
  const allcountries = useSelector((state) => state.country.countries);
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false); 
  const [spanForm, setSpanForm] = useState(""); 
  const [form, setForm] = useState({
    name: "",
    difficulty: null,
    duration: null,
    season: "",
    countryId: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: null,
    duration: null,
    season: "",
    countryId: "",
  });

  const formRef = useRef(null); 

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "countryId") {
      const selectedIds = [...form.countryId]; 

      if (selectedIds.includes(value)) {
        const index = selectedIds.indexOf(value);
        if (index > -1) {
          selectedIds.splice(index, 1);
        }
      } else {
        selectedIds.push(value);
      }

      setForm({ ...form, countryId: selectedIds });
    } else {
      setForm({ ...form, [property]: value });
    }

    setErrors(Validation({ ...form, [property]: value }));
  };

  const countryIds = allcountries.map((country) => ({
    id: country.id,
  }));

  const registerActivity = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    try {
      const created = await postActivity(form);
      console.log(created, "Creando Actividad 🐝😇");
      setSpanForm("true");
      formRef.current.reset(); 
    } catch (error) {
      console.log("Algo falló al momento de crear la actividad 🤷‍♀️:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setSpanForm(error.response.data.error);
      } else {
        setSpanForm(
          "Error al crear la actividad. Por favor, intenta de nuevo."
        );
      }
    }
  };

  useEffect(() => {
    const handleChangeInForm = () => {
      setFormSubmitted(false);
    };

    const formInputs = formRef.current.querySelectorAll("input");
    formInputs.forEach((input) => {
      input.addEventListener("input", handleChangeInForm);
    });

    return () => {
      formInputs.forEach((input) => {
        input.removeEventListener("input", handleChangeInForm);
      });
    };
  }, []);

  useEffect(() => {
    dispatch(countries());
  }, [dispatch]);

  useEffect(() => {
    console.log("🐝 IDS de Países obtenidos:", countryIds);
  }, [countryIds]);

  return (
    <div className="container-form">
      <div className="pageForm">
        <form ref={formRef} className="form-create" onSubmit={registerActivity}>
          <div className="logo-form-container">
            <img
              src="/images/CountryForm00.png"
              alt="country-form"
              className="logo-form"
              name="image"
            />
          </div>

          <div className="form-columns">
            <div className="form-column">
              <label htmlFor="name" className="form-create_label" />
              <input
                className={
                  errors.name ? "form-create_inputError" : "form-create_input"
                }
                id="countryName-form"
                placeholder="Name of the tourist activity"
                type="text"
                name="name"
                onChange={handleChange}
              />
              <span className="spanError">{errors.name}</span>

              <label htmlFor="difficulty" className="form-create_label" />
              <input
                className={
                  errors.difficulty
                    ? "form-create_inputError"
                    : "form-create_input"
                }
                placeholder="Difficulty Level"
                id="countryName-form"
                type="number"
                name="difficulty"
                min="1"
                max="5"
                onChange={handleChange}
              />
              <span className="spanError">{errors.difficulty}</span>

              <label htmlFor="duration" className="form-create_label" />
              <input
                className={
                  errors.duration
                    ? "form-create_inputError"
                    : "form-create_input"
                }
                placeholder="Duration Time (hrs)"
                id="countryName-form"
                type="number"
                name="duration"
                min="1"
                max="24"
                onChange={handleChange}
              />
              <span className="spanError">{errors.duration}</span>

              <label htmlFor="season" className="form-create_label" />
              <div
                id="country-selector"
                className={
                  errors.season ? "form-create_inputError" : "form-create_input"
                }
              >
                <Selector
                  className="country-selector"
                  id="country-selector"
                  name="season"
                  onChange={handleChange}
                  options={[
                    { name: "Select Season", value: "season" },
                    { name: "Summer", value: "Summer" },
                    { name: "Autumn", value: "Autumn" },
                    { name: "Winter", value: "Winter" },
                    { name: "Spring", value: "Spring" },
                  ]}
                />
              </div>
              <span className="spanError">{errors.season}</span>

              <label htmlFor="country" className="form-create_label" />
              <div
                className={
                  errors.countryId
                    ? "form-create_inputError"
                    : "form-create_input_selectorMulti"
                }
              >
                <SelectorMultiple
                  name="countryId"
                  value="countryId"
                  onChange={handleChange}
                  options={[
                    ...countryIds.map((option) => {
                      return {
                        name: option.id,
                        value: option.id,
                      };
                    }),
                  ]}
                />
              </div>

              <div className="selected-options">
                {form.countryId.map((selectedId, index) => {
                  const selectedCountry = allcountries.find(
                    (country) => country.id === selectedId
                  );
                  return (
                    <span key={index} className="selected-optionsImg">
                      <img
                        src={selectedCountry.image}
                        alt={`Country ${selectedCountry.name}`}
                        className="selected-image"
                      />
                    </span>
                  );
                })}
              </div>

              <span className="spanError">{errors.countryId}</span>
            </div>
          </div>

          <button className="form-button">Create</button>

          {formSubmitted && (
            <span style={{ color: spanForm === "true" ? "green" : "red" }}>
              {spanForm === "true"
                ? "La actividad turística ha sido registrada con éxito."
                : spanForm === "false"
                  ? "Error: Por favor complete el formulario correctamente."
                  : spanForm}
            </span>
          )}
        </form>
      </div>

      <button
        id="goBackButton"
        type="button"
        className="back-form"
        onClick={() => window.history.back()}
      >
        &#8592; BACK
      </button>
    </div>
  );
}
