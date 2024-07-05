import { Router } from "express";

//import Login Post Controller

import loginPost from "../controllers/loginPostController.js";

const loginPostRouter = Router();

loginPostRouter.post("/login", loginPost);

export { loginPostRouter };
