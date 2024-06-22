import express from 'express';
import { isAuth } from '../midellware/isAuth.js';
import { createPost } from '../controllers/post.controller.js';
const router = express.Router();

router.post('/create', isAuth, createPost);
export default router;
