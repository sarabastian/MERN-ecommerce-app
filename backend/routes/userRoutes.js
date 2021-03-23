import express from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public

export default router;
