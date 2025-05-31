import express from 'express';
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from '../controllers/admin.controller.js';
import { protectedRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();
router.use(protectedRoute, requireAdmin);

router.get("/check", checkAdmin);

router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;