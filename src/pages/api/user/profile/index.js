import { withProtect } from '@middleware/withProtect';
import User from '@models/User';
import connectDB from '@utils/connectDB';
import { generateIdToken } from '@utils/generateToken';

const handler = async (req, res) => {
  
  try {
    // Connect MongoDB
    await connectDB();

    // Check if user exists
    const user = await User.findById(req.user._id);

    if (user) {
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
      });
    } else {
      // If user does not exist
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default withProtect(handler);
