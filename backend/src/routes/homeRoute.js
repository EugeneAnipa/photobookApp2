import { Router } from "express";

//import home controller
import home from "../controllers/homeController.js";

const homeRouter = Router();

//routes

homeRouter.get("/login", home);

export { homeRouter };
