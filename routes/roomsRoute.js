import express from "express";
import {verifyAdmin} from "../utils/verifyToken.js";
import {createRoom, deleteRoom, getRoom, getRooms, updateRoom} from "../controllers/roomController.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom)

// UPDATE
router.put("/:id", verifyAdmin, updateRoom)

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

// GET
router.get("/:id", getRoom)

// GET ALL
router.get("/", getRooms)

export default router;
