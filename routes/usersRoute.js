import express from "express";
import { deleteuser, getuser, getusers, updateuser } from "../controllers/userController.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello User, You're logged in")
// })
//
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello User, You're logged in and you can delete your account")
// })
//
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, You're logged in and you can delete all accounts")
// })

// UPDATE
router.put("/:id", verifyUser, updateuser)

// DELETE
router.delete("/:id", verifyUser, deleteuser)

// GET
router.get("/:id", verifyUser, getuser)

// GET ALL
router.get("/", verifyAdmin, getusers)

export default router;
