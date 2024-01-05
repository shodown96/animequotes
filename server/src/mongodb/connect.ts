import mongoose from 'mongoose';

const connectDB = (url: string) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('[db]: Connected to MongoDB'))
    .catch((err) => {
      console.error('[error]: Failed to connect to MongoDB');
      console.error(err);
    });
};

export default connectDB;


// await mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });
