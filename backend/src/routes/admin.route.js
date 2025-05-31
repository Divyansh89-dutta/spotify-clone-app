import express from 'express';
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from '../controllers/admin.controller.js';
import { protectedRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

// optimistic approach to use the middlewares, as it applies to all the below routes
router.use(protectedRoute, requireAdmin);

router.get("/check", checkAdmin);

router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;