import jwt from 'jsonwebtoken';
import User from '@models/User';
import connectDB from '@utils/connectDB';
import { generateIdToken } from '@utils/generateToken';

export default async (req, res) => {
  // Connect MongoDB
  await connectDB();

  const { token } = req.body;
  try {
    // Decode token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // Check if token is not valid
    if (!decode) {
      res.status(401).json({ error: 'Activation token expired' });
    }

    const { name, email, password } = decode;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    const user = await User.create({ name, email, password });

    if (user) {
      res.status(201).json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          gender: user.gender || '',
          birthday: user.birthday || '',
          phone: user.phone || '',
          country: user.country || '',
          isAdmin: user.isAdmin,
          token: generateIdToken(user._id),
        },
        message: `Your account has been successfully activated!`,
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
