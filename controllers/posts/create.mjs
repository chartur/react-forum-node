import validate from "../../helpers/validate.mjs";
import {body} from "express-validator";
import PostsModal from "../../models/posts.model.mjs";

export const createPost = async (req, res) => {
  try {
    const body = req.body;
    const { user } = req.authUser;

    body.user = user;

    let post = new PostsModal(body)
    await post.save();

    await post.populate('user', ['name', 'email', 'image']).execPopulate();
    post = post.toObject({getters: true});

    req.socketObj.broadcast.emit('onNewPost', post);

    return  res.json({
      post
    })
  } catch (e) {
    return res.status(500)
      .json({
        message: e.message
      })
  }
}

export const createPostValidator = (req, res, next) => {
  return validate([
    body('content').isString(),
    body('title').isString(),
  ], req, res, next)
}