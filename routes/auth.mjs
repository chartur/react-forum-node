import express from "express";
const router = express.Router();
import {
  signUp,
  signIn,
  getLoggedInUser,

  // validators
  signUpValidate,
  signInValidate,
  getLoggedInUserValidator
} from "../controllers/auth/index.mjs";

router
  .post('/sign-up', signUpValidate, signUp)
  .post('/sign-in', signInValidate, signIn)
  .post('/token', getLoggedInUserValidator, getLoggedInUser);

export default router;