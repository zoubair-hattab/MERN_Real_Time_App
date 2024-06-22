import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './db/connectDB.js';
import authRouters from './routes/auth.route.js';
import userRouters from './routes/user.route.js';
import postRouters from './routes/post.route.js';
import errorHnadler from './midellware/error.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouters);
app.use('/api/user', userRouters);
app.use('/api/post', postRouters);

app.use(errorHnadler);
app.listen(process.env.PORT, async () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  await connectDB();
});
