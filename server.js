import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import categoryRoutes from "./routes/categoryRoutes.js";
>>>>>>> origin/06-category-API-vid-16
=======
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
>>>>>>> origin/07-products-api-crud-vid-17
=======
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
>>>>>>> origin/09-Create-Products-Vid-19
=======
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
>>>>>>> origin/10-Update-Delete-Product-vid-20
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
app.use("/api/v1/product", productRoutes);
>>>>>>> origin/07-products-api-crud-vid-17
=======
app.use("/api/v1/product", productRoutes);
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
app.use("/api/v1/product", productRoutes);
>>>>>>> origin/09-Create-Products-Vid-19
=======
app.use("/api/v1/product", productRoutes);
>>>>>>> origin/10-Update-Delete-Product-vid-20

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
