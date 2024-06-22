import Post from '../modeles/post.model.js';
import ErrorHandler from '../utils/errorHnadler.js';
export const createPost = async (req, res, next) => {
  const { text, img } = req.body;
  if (!text) {
    return next(new ErrorHandler('the text is required.', 404));
  }
  const maxLenght = 500;
  if (text.length > maxLenght)
    return next(new ErrorHandler(`Text must be less then ${maxLenght}`, 404));
  try {
    const newPost = new Post({
      postedBy: req.user,
      text,
      img,
    });
    const post = await newPost.save();
    res.status(200).json({
      success: true,
      message: newPost,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return next(new ErrorHandler('Post not found', 404));
    }
    res.status(200).json({
      success: true,
      message: post,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
export const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json('The post has been deleted');
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
export const likeUnlikePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const currentUserId = req.user;
    const post = await Post.findById(postId);
    if (!post) {
      return next(new ErrorHandler('Post not found', 404));
    }
    userLike = post.likes.includes(currentUserId);
    if (userLike) {
      await Post.findByIdAndUpdate(postId, {
        $pull: {
          likes: currentUserId,
        },
      });
      res.status(200).json({
        success: true,
        message: 'Post Unlike successfully',
      });
    } else {
      await Post.findByIdAndUpdate(postId, {
        $push: {
          likes: currentUserId,
        },
      });
      res.status(200).json({
        success: true,
        message: 'Post liked successfully',
      });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
export const replyToPost = async (req, res, next) => {
  try {
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
