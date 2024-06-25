import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import connectDB from './db/connectDB.js';
import authRouters from './routes/auth.route.js';
import userRouters from './routes/user.route.js';
import postRouters from './routes/post.route.js';
import errorHnadler from './midellware/error.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use('/api/auth', authRouters);
app.use('/api/user', userRouters);
app.use('/api/post', postRouters);

app.use(errorHnadler);
app.listen(process.env.PORT, async () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  await connectDB();
});
