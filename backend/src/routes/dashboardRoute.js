import { Router } from "express";

//import Dashboard Controller
import dashboard from "../controllers/dashboardController.js";
const dashboardRouter = Router();

//routes
dashboardRouter.get("/dashboard", dashboard);
export { dashboardRouter };
