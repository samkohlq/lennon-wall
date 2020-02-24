import express from "express";
import { createPost, retrievePosts } from "../controllers/postController";

const router = express.Router();

// create post
router.post("/create", (req, res) => createPost(req, res));

// retrieve all posts on specific wall
router.get("/retrieve", (req, res) => retrievePosts(req, res));

export default router;
