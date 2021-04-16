import mongoose from "mongoose";
export default (appListener) => {
  mongoose.connect('mongodb://localhost:27017/react', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  });

  mongoose.connection
    .on('error', console.log)
    .once('open', appListener)
}


