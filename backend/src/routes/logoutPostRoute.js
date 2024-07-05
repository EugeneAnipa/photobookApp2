import { Router } from "express";

//import Logout post controller

import logoutPost from "../controllers/logoutPostController.js";
const logoutPostRouter = Router();
//routes

logoutPostRouter.post("/logout", logoutPost);
export { logoutPostRouter };
