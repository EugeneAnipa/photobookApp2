import { Router } from "express";

//import sign up post controller

import signUpPost from "../controllers/signUpPostController.js";

const signUpPostRouter = Router();

signUpPostRouter.post("/signup", signUpPost);

export { signUpPostRouter };
