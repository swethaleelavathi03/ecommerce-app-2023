import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
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
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
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
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
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
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/register" element={<Register />} />
=======
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
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
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
