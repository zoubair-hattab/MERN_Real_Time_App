import User from '../modeles/user.model.js';
import ErrorHandler from '../utils/errorHnadler.js';
import bcryptjs from 'bcryptjs';
export const updateUser = async (req, res, next) => {
  const { name, username, email, password, profilePic, bio } = req.body;

  try {
    const user = await User.findById(req.user);
    if (!user) {
      res.status(200).json({
        success: true,
        message: 'User is not exist',
      });
    }
    if (password) {
      const hashPassword = await bcryptjs.hash(password, 12);
      user.password = hashPassword;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;
    user.bio = bio || user.bio;
    user.profilePic = profilePic || user.profilePic;
    const updateUser = await user.save();
    res.satus(201).json({
      success: true,
      message: updateUser,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

export const followUnfollowUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const currentUser = await User.findById(req.user);
    if (!user) {
      return next(new ErrorHandler('User is not Found', 404));
    }

    if (currentUser.following.includes(id)) {
      await User.findByIdAndUpdate(currentUser, {
        $pull: {
          following: id,
        },
      });
      await User.findByIdAndUpdate(id, {
        $pull: {
          followers: currentUser._id,
        },
      });
      res
        .status(200)
        .json({ success: true, message: 'You are Unfollow this person.' });
    } else {
      await User.findByIdAndUpdate(currentUser, {
        $push: {
          following: id,
        },
      });
      await User.findByIdAndUpdate(id, {
        $push: {
          followers: currentUser._id,
        },
      });
      res
        .status(200)
        .json({ success: true, message: 'You are follow this person.' });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
export const getUserProfile = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).select('-password');
    if (!user) {
      return next(new ErrorHandler('User is not found', 404));
    }
    res.status(200).json({
      success: true,
      message: user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
