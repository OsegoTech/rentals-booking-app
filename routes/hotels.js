import express from "express";
// import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";

const router = express.Router();

// CREATE
router.post("/", createHotel) 

// UPDATE
router.put("/:id", updateHotel)

// DELETE
router.delete("/:id", deleteHotel)

// GET
router.get("/:id", getHotel)

// GET ALL
router.get("/", getHotels)

export default router;
