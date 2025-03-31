import express from "express";

import { authmiddleware } from "../middleware/authmiddleware";
import { Userdata } from "../controllers/User/Userdata";
import { authStatus } from "../controllers/User/authStatus";
const router=express.Router();

router.all("*",authmiddleware);
router.get("/",Userdata);
router.get("/authstatus",authStatus);




export const userRoute = router;