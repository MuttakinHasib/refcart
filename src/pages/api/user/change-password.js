import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '@models/User';
import connectDB from '@utils/connectDB';

export default async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    // Connect MongoDB
    await connectDB();

    // Verify token
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    // Check if token is valid
    if (!decode) return res.status(400).json({ error: 'Invalid token' });

    const id = decode.id;
    // Update password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const user = await User.findByIdAndUpdate(id, {
      password: hashedPassword,
    });

    // Check if user does not exist
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.save();

    return res.status(200).json({
      message: `Your password has been changed successfully`,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
