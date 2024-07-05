import express from "express";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10kb" }));

import { dashboardRouter } from "./src/routes/dashboardRoute.js";
import { morGan } from "./src/middleware/morgan.js";
import { sequelizeTest, sequelize } from "./src/middleware/sequelize.js";
import { signUpRouter } from "./src/routes/signUpRoute.js";
import { homeRouter } from "./src/routes/homeRoute.js";
import { loginRouter } from "./src/routes/loginRoute.js";
import { logoutRouter } from "./src/routes/logoutRoute.js";
import { addPostPhotoRouter } from "./src/routes/addPostPhotoRoute.js";
import { avatarProfilePostRouter } from "./src/routes/avatarProfilePostRoute.js";

import { loginPostRouter } from "./src/routes/loginPostRoute.js";
import { logoutPostRouter } from "./src/routes/logoutPostRoute.js";
import { signUpPostRouter } from "./src/routes/signupPostRoute.js";

app.use(morGan);
app.use(signUpRouter);
app.use(dashboardRouter);
app.use(homeRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(addPostPhotoRouter);
app.use(avatarProfilePostRouter);
app.use(loginPostRouter);
app.use(logoutPostRouter);
app.use(signUpPostRouter);

sequelizeTest;
export default app;
