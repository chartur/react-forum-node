import validate from "../../helpers/validate.mjs";
import { body } from "express-validator";
import UserModel from "../../models/user.model.mjs";
import bcrypt from 'bcrypt';
import {jwtEncode} from "../../helpers/jwt.mjs";

export const signIn = async (req, res) => {
  try {
    let user = await UserModel.findOne({
      email: req.body.email
    });
    const passwordCheck = await bcrypt.compare(req.body.password, user.password);
    if(!passwordCheck) {
      throw Error('Invalid credentials');
    }
    user = user.toObject({getters: true});
    const token = await jwtEncode(user);
    return res.json({
      user,
      token
    })
  } catch (e) {
    return res.status(500)
      .json({
        message: e.message
      })
  }
};

export const signInValidate = (req, res, next) => {
  return validate([
    body('email')
      .isEmail()
      .isString(),
    body('password')
      .isString()
      .isLength({min: 6}),
  ], req, res, next)
};