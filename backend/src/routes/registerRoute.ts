import express from "express";
import { Signup } from "../controllers/auth/Signup";
import { Signin } from "../controllers/auth/Signin";
import { validateUserFormate } from "../middleware/validateUser";
import { SignOut } from "../controllers/auth/SignOut";
const router=express.Router();

router.post("/signup",validateUserFormate,Signup);
router.post("/signin",validateUserFormate,Signin);
router.get("/signout",SignOut);

export const registerRoute= router;