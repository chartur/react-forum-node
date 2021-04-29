import PostsModal from "../../models/posts.model.mjs";

export default async (req, res) => {
  const defaultCount = 10;
  try {
    const latest = await PostsModal
      .find()
      .populate('user', ['name', 'email', 'image'])
      .sort({createdAt: -1})
      .limit(defaultCount)
      .exec()

    return res.json({
      posts: latest
    })
  } catch (e) {
    return res.status(500)
      .json({
        message: e.message
      })
  }
}