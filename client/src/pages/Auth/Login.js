import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
<<<<<<< HEAD

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/04-admin-user-panel-vid-15
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/06-category-API-vid-16
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/07-products-api-crud-vid-17
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/09-Create-Products-Vid-19
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/02-Context-And-Logout-vid-12

  const navigate = useNavigate();
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/04-admin-user-panel-vid-15
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/06-category-API-vid-16
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/07-products-api-crud-vid-17
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/09-Create-Products-Vid-19
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======

  const navigate = useNavigate();
  const location = useLocation();
>>>>>>> origin/11-filter-cat-price-paginate-vid-21

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
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
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/02-Context-And-Logout-vid-12
        navigate("/");
=======
        navigate(location.state || "/");
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
        navigate(location.state || "/");
>>>>>>> origin/04-admin-user-panel-vid-15
=======
        navigate(location.state || "/");
>>>>>>> origin/06-category-API-vid-16
=======
        navigate(location.state || "/");
>>>>>>> origin/07-products-api-crud-vid-17
=======
        navigate(location.state || "/");
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
        navigate(location.state || "/");
>>>>>>> origin/09-Create-Products-Vid-19
=======
        navigate(location.state || "/");
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
        navigate(location.state || "/");
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
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
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
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

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
