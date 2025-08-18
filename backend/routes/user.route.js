import express from "express";
import { register, login, logout } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(register)  // "register" is a controller in user.controller.js
router.route("/login").post(login)  // "login" is a controller in user.controller.js
router.route("/logout").get(logout)  // "logout" is a controller in user.controller.js

export default router;