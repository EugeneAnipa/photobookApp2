import express from "express";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10kb" }));

import { dashboardRouter } from "./src/routes/dashboardRoute.js";
import { morGan } from "./src/middleware/morgan.js";
import { sequelizeTest, sequelize } from "./src/middleware/sequelize.js";
import { signUpRouter } from "./src/routes/signUpRoute.js";

app.use(morGan);
app.use(signUpRouter);
app.use(dashboardRouter);
sequelizeTest;
export default app;
