import express from "express";

const router = express.Router();

//sair
router.post("/api/users/signout", (req, res) => {
  res.send("ola");
});

export { router as signoutRouter };
