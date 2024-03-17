import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
<<<<<<< HEAD
        <div className="list-group">
=======
        <div className="list-group dashboard-menu">
>>>>>>> origin/15-admin-orders-css
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          {/* <NavLink
>>>>>>> origin/15-admin-orders-css
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
<<<<<<< HEAD
          </NavLink>
=======
          </NavLink> */}
>>>>>>> origin/15-admin-orders-css
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
