import User from '@models/User';
import connectDB from '@utils/connectDB';
import { resetPasswordIdToken } from '@utils/generateToken';
import { sendPasswordResetEmail } from '@utils/mailer';

export default async (req, res) => {
  const { email } = req.body;
  try {
    // Connect MongoDB
    await connectDB();

    // Check if user exists
    const user = await User.findOne({ email });

    // Check if user does not exist
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const url = `${
      process.env.CLIENT_URL
    }/change-password/${resetPasswordIdToken(user._id)}`;

    await sendPasswordResetEmail(email, url);
    return res.status(200).json({
      message: `Password reset link has been sent to ${email}`,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
