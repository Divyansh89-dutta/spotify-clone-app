import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getAllUsers, getMessages } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectedRoute, getAllUsers);
// todo: getMessages
router.get("/messages/:userId", protectedRoute, getMessages);

export default router;