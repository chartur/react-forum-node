import UserModel from "../../models/user.model.mjs";

export default (req, res) => {
  console.log(req.params);
  return res.json({
    test: 'gago',
  })
}