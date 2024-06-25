import express from 'express';
import {
  SignUp,
  SignIn,
  signOut,
  loadUser,
} from '../controllers/auth.controller.js';
import { isAuth } from '../midellware/isAuth.js';
const router = express.Router();
router.get('/loadUser', isAuth, loadUser);
router.post('/signUp', SignUp);
router.post('/signIn', SignIn);
router.all('/signOut', signOut);

export default router;
