//Imports
import express from "express";
import cors from "cors";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";


//Initialization
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}))

//Routes
app.use(indexRoutes);
app.use(taskRoutes);

//Public files

//Run server
app.listen(app.get("port"), () =>
  console.log("[info]: Server listening on port", app.get("port"))
);
