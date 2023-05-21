import express from "express";
import "express-async-errors";
import mongoose from "mongoose";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/errorHandler";
import { currentUserRouter } from "./routes/current-user";
import { nameApiRouter } from "./routes/name-api";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();

// parse json request body
app.use(express.json({ limit: "50mb" }));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(currentUserRouter);
app.use(nameApiRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    console.log("[INFO] Connected to MongoDB");
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");

    app.listen(3000, () => {
      console.log("[INFO] Listening on port 3000!");
    });
  } catch (err) {
    console.error(err);
  }
};

start();
