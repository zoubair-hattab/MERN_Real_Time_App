import express from 'express';
import { SignUp, SignIn, signOut } from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/signUp', SignUp);

router.post('/signIn', SignIn);
router.all('/signOut', signOut);

export default router;
