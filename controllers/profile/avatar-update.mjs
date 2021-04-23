import UserModel from "../../models/user.model.mjs";
import {jwtEncode} from "../../helpers/jwt.mjs";

export default async (req, res) => {
  try {
    const imageData = req.body;
    const { user } = req.authUser;

    if(!imageData.filePath) {
      throw Error('Image url is required');
    }

    const userUpdatedData = await UserModel.findByIdAndUpdate(user.id, {image: imageData});
    const u = userUpdatedData.toObject({getters: true});
    const token = await jwtEncode(u);
    return res.json({
      user: u,
      token
    })

  }catch (e) {
    return res.status(500)
      .json({
        message: e.message
      })
  }
}