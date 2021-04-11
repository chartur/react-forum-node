import express from "express";
const router = express.Router();

import {
  signUpValidate,
  SignUp,
} from "../controllers/auth/index.mjs";

router
  .post('/sign-up', signUpValidate, SignUp)
  .post('/sign-in')

export default router;