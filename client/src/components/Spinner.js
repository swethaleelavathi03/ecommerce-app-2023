import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
const Spinner = () => {
  const [count, setCount] = useState(5);
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/04-admin-user-panel-vid-15
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/06-category-API-vid-16
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
<<<<<<< HEAD
<<<<<<< HEAD
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);
=======
=======
>>>>>>> origin/06-category-API-vid-16
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
<<<<<<< HEAD
>>>>>>> origin/04-admin-user-panel-vid-15
=======
>>>>>>> origin/06-category-API-vid-16
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
