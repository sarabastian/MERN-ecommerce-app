import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

router.post("/login", authUser);

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public

export default router;
