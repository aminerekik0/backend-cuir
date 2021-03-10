 
import mongoose from "mongoose";
import config from "config";

const mongoUrl = config.get('mongoUrl');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB is connected ...')
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;