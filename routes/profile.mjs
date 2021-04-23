import express from "express";
const router = express.Router();
import authMiddleware from '../middlewares/auth.middleware.mjs';

import { profileImage } from '../controllers/profile/index.mjs';

router.use(authMiddleware)
  .put('/image', profileImage)

export default router;