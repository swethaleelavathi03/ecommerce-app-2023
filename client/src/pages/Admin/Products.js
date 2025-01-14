import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
<<<<<<< HEAD
      <div className="row">
=======
      <div className="row dashboard">
>>>>>>> origin/15-admin-orders-css
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="d-flex">
=======
          <div className="d-flex flex-wrap">
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
          <div className="d-flex flex-wrap">
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
          <div className="d-flex flex-wrap">
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
          <div className="d-flex flex-wrap">
>>>>>>> origin/14-payment-gateway-integration
=======
          <div className="d-flex flex-wrap">
>>>>>>> origin/15-admin-orders-css
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
