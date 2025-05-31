import express from 'express';
import { getAllSongs, getFeaturedSongs, getSongsMadeForYou, getTrendingSongs } from '../controllers/song.controller.js';
import { protectedRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/", protectedRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/made-for-you", getSongsMadeForYou);
router.get("/trending", getTrendingSongs);

export default router;