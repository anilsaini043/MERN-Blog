import express from "express";
import { register } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(register)  // "register" is a controller in user.controller.js

export default router;