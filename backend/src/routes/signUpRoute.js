import { Router } from "express";

//import signUp Controller
import signUp from "../controllers/signUpController.js";
const signUpRouter = Router();

//routes
signUpRouter.get("/signup", signUp);
export { signUpRouter };
