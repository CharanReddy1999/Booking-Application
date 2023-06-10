import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, this is booking app auth endpoint");
});

router.get("/register", (req, res) => {
  res.send("This is booking app auth register endpoint");
});

export default router;
