import {body} from "express-validator";
import UserModel from "../../models/user.model.mjs";
import {jwtEncode} from "../../helpers/jwt.mjs";
import validate from "../../helpers/validate.mjs";

export const updateProfileDetails = async (req, res) => {
  try {
    let { user } = req.authUser;
    const body = req.body;
    const userData = await UserModel.findByIdAndUpdate(user.id, body, {new: true})
    user = userData.toObject({getters: true});
    const token = await jwtEncode(user);

    return  res.json({
      user,
      token
    })
  } catch (e) {
    return res.status(500)
      .json({
        message: e.message
      })
  }
}

export const profileDetailsValidation = (req, res, next) => {
  return validate([
    body('name').isString()
  ], req, res, next);
}