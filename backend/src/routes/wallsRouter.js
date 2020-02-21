import express from "express";
const router = express.Router();

import { Wall } from "../db/models";

// create new wall and send it back in response
router.post("/create", async (req, res) => {
  const newWall = await Wall.create({ name: req.body.name });
  res.send(newWall);
});

// retrieve wall based on parameter passed in
router.get("/retrieve", async (req, res) => {
  const wall = await Wall.findOne({
    where: {
      name: req.query.wallName
    }
  });
  res.send(wall);
});

export default router;
