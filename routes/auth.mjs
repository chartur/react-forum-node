import express from "express";
const router = express.Router();
import appendUserToRequest from '../middlewares/append-user-to-request.mjs';
import {
  signUpValidate,
  signInValidate,
  signUp,
  signIn,
  getLoggedInUser,
  getLoggedInUserValidator
} from "../controllers/auth/index.mjs";

router
  .use(appendUserToRequest)
  .post('/sign-up', signUpValidate, signUp)
  .post('/sign-in', signInValidate, signIn)
  .post('/token', getLoggedInUserValidator, getLoggedInUser);

export default router;