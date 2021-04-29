import latestPostsGet from './latest.mjs'
import { createPost, createPostValidator } from './create.mjs';
import getPost from './getPost.mjs';

export {
  latestPostsGet,
  createPost,
  getPost,

  // Validations
  createPostValidator
}