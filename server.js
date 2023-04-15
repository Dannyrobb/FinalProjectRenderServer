import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
import db from "./config/Database.js";
import userRouter from "./routes/Users.js";
import categoryRouter from "./routes/Categories.js";
import businessRouter from "./routes/Buisnesses.js";
import locationsRouter from "./routes/Locations.js";
import reviewsRouter from "./routes/Reviews.js";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use([userRouter, categoryRouter, businessRouter, locationsRouter, reviewsRouter]);

app.listen(process.env.PORT || 8080, () => {
  console.log(`RUN ON ${process.env.PORT || 8080}`);
});

try {
  await db.authenticate();
  console.log("Database connected");
} catch (e) {
  console.log(e);
}

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
