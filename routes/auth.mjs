import express from "express";
const router = express.Router();
import {
  signUpValidate,
  signInValidate,
  signUp,
  signIn,
  getLoggedInUser,
  getLoggedInUserValidator
} from "../controllers/auth/index.mjs";

router
  .post('/sign-up', signUpValidate, signUp)
  .post('/sign-in', signInValidate, signIn)
  .post('/token', getLoggedInUserValidator, getLoggedInUser);

export default router;