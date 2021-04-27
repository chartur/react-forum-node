import express from "express";
const router = express.Router();
import authMiddleware from '../middlewares/auth.middleware.mjs';

import {
  profileImage,
  updateProfileDetails,

  // validators
  profileDetailsValidation
} from '../controllers/profile/index.mjs';

router.use(authMiddleware)
  .put('/image', profileImage)
  .put('/details', profileDetailsValidation, updateProfileDetails)
export default router;