import validate from "../../helpers/validate.mjs";
import {body} from "express-validator";
import UserModel from "../../models/user.model.mjs";
import { jwtEncode } from '../../helpers/jwt.mjs'
import bcrypt from 'bcrypt';

export const signUp = async (req, res) => {
  try {
    const userBody = req.body;
    const salt = await bcrypt.genSalt(10);
    userBody.password = await bcrypt.hash(req.body.password, salt);

    let user = new UserModel(userBody);
    user = await user.save();

    const userData = user.toObject({getters: true});
    const token = await jwtEncode(userData);
    return res.json({
      user,
      token,
    })
  } catch (e) {
    return res
      .status(500)
      .json({
        message: e.message,
      })
  }
};

export const signUpValidate = (req, res, next) => {
  return validate([
    body('email')
      .isEmail()
      .isString(),
    body('name')
      .isString(),
    body('password')
      .isString()
      .isLength({min: 6}),
  ], req, res, next)
};