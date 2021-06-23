import User from '@models/User';
import connectDB from '@utils/connectDB';
import { generateIdToken } from '@utils/generateToken';
import { withProtect } from 'middleware/withProtect';

const handler = async (req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.avatar = req.body.avatar || user.avatar;
      user.gender = req.body.gender || user.gender;
      user.birthday = req.body.birthday || user.birthday;
      user.phone = req.body.phone || user.phone;
      user.country = req.body.country || user.country;
      user.avatar = req.body.avatar || user.avatar;

      if (req.body.newPassword) {
        if (await user.matchPassword(req.body.oldPassword)) {
          user.password = req.body.newPassword;
        } else {
          return res
            .status(400)
            .json({ error: 'Current password is incorrect' });
        }
      }

      const updatedUser = await user.save();
      return res.json({
        user: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          avatar: updatedUser.avatar,
          gender: updatedUser.gender || '',
          birthday: updatedUser.birthday || '',
          phone: updatedUser.phone || '',
          country: updatedUser.country || '',
          isAdmin: updatedUser.isAdmin,
          token: generateIdToken(updatedUser._id),
        },
        message: `User updated successfully`,
      });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default withProtect(handler);
