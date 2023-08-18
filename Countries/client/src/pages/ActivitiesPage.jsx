import "../styles/ActivitiesPage.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activities, deleteActivityById } from "../redux/slice/countryActions";
import BaseLayout from "../components/BaseLayout";
import ActivityCard from "../components/ActivityCard";
import ErrorActivities from "../components/ErrorActivities";
import HeadActivities from "../components/HeadActivities";

export default function ActivitiesPage() {
  const allactivities = useSelector((state) => state.country.activities);
  const dispatch = useDispatch();

  const [showButton, setShowButton] = useState(false);

  const limitActivity = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const pagesActivity = Math.ceil(allactivities.length / limitActivity);
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState(null);

  const handleDeleteActivity = (activity) => {
    setActivityToDelete(activity);
    setModalConfirmation(true);
  };

  const confirmDelete = () => {
    if (activityToDelete) {
      dispatch(deleteActivityById(activityToDelete.id));
      setModalConfirmation(false);
    }
  };

  const closeModal = () => {
    setModalConfirmation(false);
  };

  const paginadoActivity = () => {
    const startIndex = currentPage * limitActivity;
    const endIndex = startIndex + 5;
    return allactivities.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((previous) => Math.min(previous + 1, pagesActivity - 1));
  };

  const previousPage = () => {
    setCurrentPage((previous) => Math.max(previous - 1, 0));
  };

  const fetchActivities = paginadoActivity();

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
    dispatch(activities());
  }, [dispatch, allactivities]);

  useEffect(() => {}, [allactivities]);

  return (
    <BaseLayout>
      <HeadActivities />
      <div className="container-activities">
        <div className="container-allactivities-cards">
          <div className="allactivities">
            {fetchActivities && fetchActivities.length > 0 ? (
              fetchActivities.map((activity, i) => (
                <ActivityCard
                  key={i}
                  activity={activity}
                  handleDeleteActivity={() => handleDeleteActivity(activity)}
                />
              ))
            ) : (
              <ErrorActivities />
            )}
            {modalConfirmation && (
              <div className="modal">
                <div className="modal-content">
                  <p>
                    Are you sure you want to eliminate this tourist activity?
                  </p>
                  <button className="yesDelete" onClick={confirmDelete}>
                    Yes
                  </button>
                  <button className="noDelete" onClick={closeModal}>
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Renderizar la paginación */}
        <div
          className="container-pagination-activities"
          style={{ marginBottom: "40px", marginTop: "50px" }}
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
            disabled={currentPage === pagesActivity - 1 || pagesActivity === 0} // Deshabilitar
            onClick={nextPage}
            className="next-button"
          >
            Next
          </button>
        </div>

        {showButton && (
          <button
            className={`button-scroll-to-top ${showButton ? "visible" : ""}`}
            onClick={scrollToTop}
          >
            ↑
          </button>
        )}
      </div>
    </BaseLayout>
  );
}
