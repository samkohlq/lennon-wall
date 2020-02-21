import express from "express";

import { Post, Wall } from "../db/models";

const router = express.Router();

// create post
router.post("/create", async (req, res) => {
  const [newPost, associatedWall] = await Promise.all([
    Post.create({ value: req.body.value }),
    Wall.findByPk(req.body.wallId)
  ]);
  await newPost.setWall(associatedWall);
  res.send(newPost);
});

// retrieve all posts on specific wall
router.get("/retrieve", async (req, res) => {
  const wall = await Wall.findByPk(req.body.wallId);
  const posts = await wall.getPosts();
  res.send(posts);
});

export default router;
