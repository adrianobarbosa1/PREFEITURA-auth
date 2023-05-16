import express from "express";

const app = express();

// parse json request body
app.use(express.json({ limit: "50mb" }));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
