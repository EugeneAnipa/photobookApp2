import { Router } from "express";
//import logout controller
import logout from "../controllers/logOutController.js";

//routes
const logoutRouter = Router();

//routes

logoutRouter.get("/logout", logout);

export { logoutRouter };
