import User from '../modeles/user.model.js';
import ErrorHandler from '../utils/errorHnadler.js';
import bcryptjs from 'bcryptjs';
import generateToken from '../utils/generateToken.util.js';
export const SignUp = async (req, res, next) => {
  try {
    const { name, email, username } = req.body;
    console.log(req.body);
    const userEmail = await User.findOne({ $or: [{ email }, { username }] });

    if (userEmail) {
      return next(new ErrorHandler('User already exists', 400));
    }
    const hashPassword = await bcryptjs.hash(req.body.password, 12);
    const newUser = new User({
      name,
      email,
      username,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: 'The user has been successfully added.',
    });
  } catch (error) {
    console.log(`Error from api/auth/sigUp`, error.message);
    return next(new ErrorHandler('Internal server.', 500));
  }
};
export const SignIn = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler('There is no user ', 404));
    }
    const isSame = await bcryptjs.compare(req.body.password, user.password);
    if (!isSame) {
      return next(new ErrorHandler('Your credtial is not correct.', 401));
    }
    const { password: pass, ...rest } = user._doc;
    generateToken(rest, 201, res);
  } catch (error) {
    console.log(`Error from api/auth/sigIn`, error.message);
    return next(new ErrorHandler('Internal server.', 500));
  }
};
export const signOut = (req, res, next) => {
  try {
    res.clearCookie('token').status(200).json('User has been signed out');
  } catch (error) {
    return next(new ErrorHandler('Internal server.', 500));
  }
};
export const loadUser = async (req, res, next) => {
  try {
    if (!req.user) {
      return next(new ErrorHandler('user is not login.', 500));
    } else {
      res.status(200).json({
        success: true,
        message: req.user,
      });
    }
  } catch (error) {
    return next(new ErrorHandler('Internal server.', 500));
  }
};
