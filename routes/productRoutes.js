import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
<<<<<<< HEAD
=======
  productCountController,
  productFiltersController,
  productListController,
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
  productPhotoController,
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
router.delete("/product/:pid", deleteProductController);
=======
router.delete("/delete-product/:pid", deleteProductController);
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);
>>>>>>> origin/11-filter-cat-price-paginate-vid-21

export default router;
