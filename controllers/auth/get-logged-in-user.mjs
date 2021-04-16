import validate from "../../helpers/validate.mjs";
import { header } from "express-validator";
export const getLoggedInUser = async (req, res) => {
  try {
    const { authUser } = req;
    return res.json(authUser)
  } catch (e) {
    return res.status(500)
      .json({
        message: e.message
      })
  }
};

export const getLoggedInUserValidator = (req, res, next) => {
  return validate([
    header('authorization').isString()
  ], req, res, next)
};