import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.URL_DB);
    console.log(
      `Connection to mongodb is succufully,${connection.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
