import express from 'express';
import { isAuth } from '../midellware/isAuth.js';
import {
  createPost,
  deletePost,
  getFeedPosts,
  getPost,
  likeUnlikePost,
  replyToPost,
} from '../controllers/post.controller.js';
const router = express.Router();
router.get('/:id', getPost);
router.get('/feed', isAuth, getFeedPosts);

router.post('/create', isAuth, createPost);
router.post('/like/:id', isAuth, likeUnlikePost);
router.post('/reply/:id', isAuth, replyToPost);

router.delete('/:id', isAuth, deletePost);

export default router;
