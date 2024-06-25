import User from '../modeles/user.model.js';
import ErrorHandler from '../utils/errorHnadler.js';
import cloudinary from 'cloudinary';
import bcryptjs from 'bcryptjs';
export const updateUser = async (req, res, next) => {
  const { name, username, email, password, profilePic, bio } = req.body;

  try {
    const user = await User.findById(req.user._id);
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
    if (profilePic) {
      if (user.profilePic) {
        cloudinary.v2.uploader.destroy(user?.profilePic.public_id);
      }

      const myCloud = await cloudinary.v2.uploader.upload(profilePic);
      user.profilePic = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;
    user.bio = bio || user.bio;
    const updateUser = await user.save();
    res.status(201).json({
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
    const currentUser = req.user;
    if (!user) {
      return next(new ErrorHandler('User is not Found', 404));
    }

    if (currentUser.following.includes(id)) {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: {
          following: id,
        },
      });
      const userUpdate = await User.findByIdAndUpdate(
        id,
        {
          $pull: {
            followers: req.user._id,
          },
        },
        { new: true }
      );
      console.log(userUpdate);

      res.status(200).json({ success: true, message: userUpdate });
    } else {
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          following: id,
        },
      });
      const userUpdate = await User.findByIdAndUpdate(
        id,
        {
          $push: {
            followers: req.user._id,
          },
        },
        { new: true }
      );
      console.log(userUpdate);
      res.status(200).json({ success: true, message: userUpdate });
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
