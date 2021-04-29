import mongoose from "mongoose";
export default (appListener) => {
  const url = 'mongodb+srv://mern-app-db:SqcHvfEb-si5JfG@cluster0.yr0zs.mongodb.net/react?retryWrites=true&w=majority'
  // const url = 'mongodb://localhost:27017/react'
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


