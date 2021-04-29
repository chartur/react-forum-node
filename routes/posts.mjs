import express from "express";
const router = express.Router();
import authMiddleware from '../middlewares/auth.middleware.mjs';

import {
  createPost,
  latestPostsGet,
  getPost,

  // Validators
  createPostValidator,
} from '../controllers/posts/index.mjs'

router.get('/latest', latestPostsGet)
  .get('/:id', getPost)
  .post('/', authMiddleware, createPostValidator, createPost)

export default router;