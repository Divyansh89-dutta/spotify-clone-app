import express from 'express';
import { authCallback } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/callback", authCallback);

export default router;