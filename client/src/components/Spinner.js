import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/07-products-api-crud-vid-17
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/09-Create-Products-Vid-19
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/14-payment-gateway-integration
=======
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
>>>>>>> origin/15-admin-orders-css
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/07-products-api-crud-vid-17
=======
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
>>>>>>> origin/09-Create-Products-Vid-19
=======
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
>>>>>>> origin/14-payment-gateway-integration
=======
>>>>>>> origin/15-admin-orders-css
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/04-admin-user-panel-vid-15
=======
>>>>>>> origin/06-category-API-vid-16
=======
>>>>>>> origin/07-products-api-crud-vid-17
=======
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
>>>>>>> origin/09-Create-Products-Vid-19
=======
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
>>>>>>> origin/14-payment-gateway-integration
=======
>>>>>>> origin/15-admin-orders-css
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
