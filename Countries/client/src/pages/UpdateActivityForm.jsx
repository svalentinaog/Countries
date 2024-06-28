import "../styles/UpdateActivityForm.css";
import React, { useState, useEffect } from "react";
import Selector from "../components/Selector";
import Validation from "../utils/Validation";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateActivityById } from "../redux/slice/countryActions";
import { countries } from "../redux/slice/countryActions";
import axios from "axios";

export default function UpdateActivityForm() {
  const allcountries = useSelector((state) => state.country.countries);
  const dispatch = useDispatch();
  const { activityId } = useParams();
  const countryIds = allcountries.map((country) => ({
    id: country.id,
  }));

  useEffect(() => {
    axios(`http://localhost:3001/activities/${activityId}`).then(({ data }) => {
      setFormData({
        id: data.id,
        name: data.name,
        difficulty: data.difficulty,
        duration: data.duration,
        season: data.season,
        countryId: data.Countries[0].id,
      });
    });
  }, [activityId]);

  useEffect(() => {
    dispatch(countries());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: "",
  });

  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleUpdateActivity = async (updatedData) => {
    try {
      dispatch(updateActivityById(activityId, updatedData));
      setUpdateSuccess(true); 
    } catch (error) {
      console.error("Error al actualizar la actividad:", error.message);
    }
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(Validation({ ...formData, [name]: value }));
    setUpdateSuccess(false); 
  };

  return (
    <div className="container-updateForm">
      <div className="pageUpdateForm">
        <form
          className="updateForm-create"
          onSubmit={(e) => {
            e.preventDefault();
            if (Object.values(errors).every((error) => !error)) {
              handleUpdateActivity(formData);
            }
          }}
        >
          <div className="logo-UpdateForm-container">
            <img
              src="/images/continentes.png"
              alt="update-form"
              className="logo-UpdateForm"
              name="image"
            />
          </div>

          <label htmlFor="name" className="updateForm-create_label" />
          <input
            className={
              errors.name
                ? "updateForm-create_inputError"
                : "updateForm-create_input"
            }
            id="countryName-UpdateForm"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleUpdateChange}
          />
          <span className="spanError">{errors.name}</span>

          <label htmlFor="difficulty" className="updateForm-create_label" />
          <input
            className={
              errors.difficulty
                ? "updateForm-create_inputError"
                : "updateForm-create_input"
            }
            id="countryName-UpdateForm"
            type="number"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleUpdateChange}
          />
          <span className="spanError">{errors.difficulty}</span>

          <label htmlFor="duration" className="updateForm-create_label" />
          <input
            className={
              errors.duration
                ? "updateForm-create_inputError"
                : "updateForm-create_input"
            }
            id="countryName-UpdateForm"
            type="number"
            name="duration"
            min="1"
            max="24"
            value={formData.duration}
            onChange={handleUpdateChange}
          />
          <span className="spanError">{errors.duration}</span>

          <label htmlFor="season" className="updateForm-create_label" />
          <div
            id="country-selector"
            className={
              errors.season
                ? "updateForm-create_inputError"
                : "updateForm-create_input"
            }
          >
            <Selector
              className="country-selector"
              id="country-selector"
              name="season"
              value={formData.season}
              onChange={handleUpdateChange}
              options={[
                { name: formData.season, value: formData.season },
                { name: "Summer", value: "Summer" },
                { name: "Autumn", value: "Autumn" },
                { name: "Winter", value: "Winter" },
                { name: "Spring", value: "Spring" },
              ]}
            />
          </div>
          <span className="spanError">{errors.season}</span>

          <label htmlFor="country" className="updateForm-create_label" />
          <div
            className={
              errors.countryId
                ? "updateForm-create_inputError"
                : "updateForm-create_input"
            }
          >
            <Selector
              className="country-selector"
              name="countryId"
              value="countryId"
              onChange={handleUpdateChange}
              options={[
                { name: formData.countryId, value: formData.countryId },
                ...countryIds.map((option) => {
                  return {
                    name: option.id,
                    value: option.id,
                  };
                }),
              ]}
            />
          </div>

          <button
            type="submit"
            className="updateForm-button"
            disabled={updateSuccess}
          >
            Update
          </button>

          {updateSuccess && (
            <p className="update-success-message">
              Tourism activity data has been correctly updated.
            </p>
          )}

          {Object.values(errors).some((error) => error) && (
            <p className="generalError">
              Please make sure to send the data correctly.
            </p>
          )}
        </form>
      </div>

      <button
        id="goBackButton"
        type="button"
        className="back-UpdateForm"
        onClick={() => window.history.back()}
      >
        &#8592; BACK
      </button>
    </div>
  );
}
