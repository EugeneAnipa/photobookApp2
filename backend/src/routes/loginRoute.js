import { Router } from "express";

//import login controller
import login from "..//controllers/loginController.js";

const loginRouter = Router();

//routes

loginRouter.get("/login", login);
export { loginRouter };
