import express from 'express';
import {
  followUnfollowUser,
  updateUser,
  getUserProfile,
} from '../controllers/user.controller.js';
import { isAuth } from '../midellware/isAuth.js';
const router = express.Router();
router.get('/profile/:username', getUserProfile);
router.post('/follow/:id', isAuth, followUnfollowUser);
router.put('/update', isAuth, updateUser);

export default router;
