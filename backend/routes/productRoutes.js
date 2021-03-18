import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public

export default router;
