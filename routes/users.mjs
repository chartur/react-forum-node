import express from "express";
const router = express.Router();

import {
  getAll,
  getOne,
  store,
} from '../controllers/users/index.mjs'

/**
 * Users actions routing
 */
router
  .get('/', getAll)
  .post('/', store)
  .get('/:userId', getOne);

export default router;
