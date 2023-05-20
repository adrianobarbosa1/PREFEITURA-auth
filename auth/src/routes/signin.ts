import express from "express";

const router = express.Router();

//entrar
router.post("/api/users/signin", (req, res) => {
  res.send("ola");
});

export { router as signinRouter };
