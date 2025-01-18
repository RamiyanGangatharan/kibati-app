import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; 
    if (!uri) { throw new Error('MONGO_URI is not defined in environment variables'); }
    await mongoose.connect(uri);
  } 
  catch (error) { console.error('MongoDB connection error:', error.message); process.exit(1); }
};

export default connectDB;