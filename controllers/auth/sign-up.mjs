import validate from "../../helpers/validate.mjs";
import {body} from "express-validator";
import UserModel from "../../models/user.model.mjs";
import { jwtEncode } from '../../helpers/jwt.mjs'

export const SignUp = async (req, res) => {
  const User = new UserModel(req.body);
  try {
    const user = await User.save();
    const userData = user.toObject({getters: true})
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
  return res.json({
    gago: 'gago',
    user: req.body,
  })
}

export const signUpValidate = async (req, res, next) => {
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
}