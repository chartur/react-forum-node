import PostsModal from "../../models/posts.model.mjs";

export default async (req, res) => {
  try {
    const { id } = req.params;

    if(!id) {
      throw new Error('Post id is required!');
    }

    const post = await PostsModal
      .findById(id)
      .populate('user')
      .exec();
    return res.json({
      post
    })
  } catch (e) {
    return res.status(500)
      .json({
        message: e.message
      });
  }
}