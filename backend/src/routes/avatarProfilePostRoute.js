import { Router } from "express";

//import avatar profile post controller
import avatarPostProfile from "../controllers/avatarProfilePostController.js";

const avatarProfilePostRouter = Router();

//routes

avatarProfilePostRouter.post("/avatar", avatarPostProfile);
export { avatarProfilePostRouter };
