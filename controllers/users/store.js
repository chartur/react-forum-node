import UserModel from "../../models/user.model.mjs";

export default (req, res) => {
  const User = new UserModel(req.body)
  try {
    const user = User.save();
    return res.json({
      user
    })
  } catch(e) {
    return res.json({
      message: e.message
    }).status(500)
  }
}