import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  productCountController,
  productFiltersController,
  productListController,
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
  productPhotoController,
=======
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
<<<<<<< HEAD
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
router.delete("/product/:pid", deleteProductController);
=======
router.delete("/delete-product/:pid", deleteProductController);
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
=======
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);
<<<<<<< HEAD
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25

export default router;
