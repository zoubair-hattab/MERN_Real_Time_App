import jwt from 'jsonwebtoken';
import ErrorHandler from '../utils/errorHnadler.js';
import User from '../modeles/user.model.js';
export const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return next(new ErrorHandler('Unauthorized', 401));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userdata = await User.findById(decoded.id).select('-password');
    req.user = userdata;
    next();
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
