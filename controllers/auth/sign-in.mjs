import validate from "../../helpers/validate.mjs";
import { body } from "express-validator";
import UserModel from "../../models/user.model.mjs";

export default (req, res) => {
  const user = new UserModel(req.body);
}

export const signInValidate = () => {
  return validate([
    body('email').isEmail().isString(),
    body('password').isLength({min: 6}),
    body('confirm_password').isLength({min: 6})
  ])
}