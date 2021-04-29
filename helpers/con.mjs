import mongoose from "mongoose";
import environments from "../environments.js";
export default (appListener) => {
  const url = environments.dbUrl
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  mongoose.connection
    .on('error', console.log)
    .once('open', appListener)
}


