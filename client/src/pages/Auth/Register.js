import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
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
<<<<<<< HEAD
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/04-admin-user-panel-vid-15
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/06-category-API-vid-16
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/07-products-api-crud-vid-17
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/09-Create-Products-Vid-19
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/14-payment-gateway-integration
=======
  const [answer, setAnswer] = useState("");
>>>>>>> origin/15-admin-orders-css
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
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
<<<<<<< HEAD
=======
        answer,
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
        answer,
>>>>>>> origin/04-admin-user-panel-vid-15
=======
        answer,
>>>>>>> origin/06-category-API-vid-16
=======
        answer,
>>>>>>> origin/07-products-api-crud-vid-17
=======
        answer,
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
        answer,
>>>>>>> origin/09-Create-Products-Vid-19
=======
        answer,
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
        answer,
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
        answer,
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
        answer,
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
        answer,
>>>>>>> origin/14-payment-gateway-integration
=======
        answer,
>>>>>>> origin/15-admin-orders-css
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
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
<<<<<<< HEAD
      <div className="form-container ">
=======
      <div className="form-container" style={{ minHeight: "90vh" }}>
>>>>>>> origin/15-admin-orders-css
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
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
=======
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
>>>>>>> origin/14-payment-gateway-integration
=======
>>>>>>> origin/15-admin-orders-css
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is Your Favorite sports"
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
=======
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
>>>>>>> origin/14-payment-gateway-integration
=======
>>>>>>> origin/15-admin-orders-css
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
