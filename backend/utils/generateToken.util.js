import jwt from 'jsonwebtoken';
const generateToken = (user, statusCode, res) => {
  console.log('user');

  console.log(user._id);
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '2d',
  });

  res.status(statusCode).cookie('token', token).json({
    success: true,
    message: user,
  });
};
export default generateToken;
