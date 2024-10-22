import express from "express";
import { forgotPassword, resetPassword, signin, signup, verify } from "../controllers/authController.js";
import { auth } from "../middleware/auth.js";
import restrict from "../middleware/isAdmin.js";
const router = express.Router()


router.post("/signup", auth, restrict("admin", "super-admin"), signup);
router.get("/verify", auth, verify)
router.post("/signin", signin);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);
export default router