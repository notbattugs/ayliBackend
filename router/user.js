import express from "express";
import {
  signup,
  getAllUser,
  getUser,
  deleteUser,
  signin,
} from "../controller/user.js";

const router = express.Router();

router.get("/", getAllUser).post("/", signup).post("/login", signin);
router.route("/:id").get(getUser);
router.route("/:id").delete(deleteUser);

export default router;
