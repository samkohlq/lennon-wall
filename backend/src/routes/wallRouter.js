import express from "express";
import { createWall, retrieveWall } from "../controllers/wallController";
const router = express.Router();

// create new wall and send it back in response
router.post("/create", (req, res) => createWall(req, res));

// retrieve wall based on parameter passed in
router.get("/retrieve", (req, res) => retrieveWall(req, res));

router.post("/retrieveWallId", (req, res) => retrieveWallId(req, res));

export default router;
