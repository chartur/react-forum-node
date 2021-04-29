import express from "express";
const router = express.Router();
import authMiddleware from '../middlewares/auth.middleware.mjs';

import {
  createPost,
  latestPostsGet,

  // Validators
  createPostValidator
} from '../controllers/posts/index.mjs'

router.get('/latest', latestPostsGet)
  .post('/', createPostValidator, createPost)

export default router;