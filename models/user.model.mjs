import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
  name:  {
    type: String,
    required: true
  }, // String is shorthand for {type: String}
  age: {
    type: Number,
    default: null
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  image: {
    default: null,
    type: {
      fileName: String,
      name: String
    }
  },
  password: String,
  bio: {
    default: null,
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  }
}, {
  versionKey: false
});

const UserModel = model('User', schema)

export default UserModel;