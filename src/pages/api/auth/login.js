import User from '@models/User';
import connectDB from '@utils/connectDB';
import { generateIdToken } from '@utils/generateToken';

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    await connectDB();
    const user = await User.findOne({ email });
    // if user doesn't exist'
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // check if password matches
    if (user && (await user.matchPassword(password))) {
      return res.json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          gender: user.gender || '',
          birthday: user.birthday || '',
          phone: user.phone || '',
          address: user.address || {},
          isAdmin: user.isAdmin,
          token: generateIdToken(user._id),
        },
        message: `Welcome back ${user.name}!`,
      });
    } else {
      return res.status(401).json({ error: 'Password does not match' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
