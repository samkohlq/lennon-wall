import cookieParser from "cookie-parser";
import "core-js/stable";
import cors from "cors";
import express from "express";
import logger from "morgan";
import "regenerator-runtime";
import postRouter from "./routes/postRouter";
import wallRouter from "./routes/wallRouter";

let app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("hit my root endpoint"));

app.use("/posts", postRouter);
app.use("/walls", wallRouter);

module.exports = app;
