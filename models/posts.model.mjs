import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String
  },
  title: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  }
})

const PostsModal = model('Post', schema);

export default PostsModal;