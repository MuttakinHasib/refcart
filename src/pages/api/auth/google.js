import User from '@models/User';
import connectDB from '@utils/connectDB';
import { google } from 'googleapis';

const { OAuth2 } = google.auth;
const client = new OAuth2(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export default async (req, res) => {
  const { idToken } = req.body;
  try {
    // Connect MongoDB
    await connectDB();

    const verify = await client.verifyIdToken({
      idToken,
      audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });

    const { email, email_verified, name, picture: avatar } = verify.payload;
    // Check if email verified
    if (email_verified) {
      // Check if user already exists
      const user = await User.findOne({ email });

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
            country: user.country || '',
            isAdmin: user.isAdmin,
            token: generateIdToken(user._id),
          },
          message: `Welcome back ${user.name}!`,
        });
      } else {
        // Create new user if user does not exist
        const newUser = await User.create({
          name,
          email,
          avatar,
          password: email + process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        if (newUser) {
          return res.json({
            user: {
              _id: newUser._id,
              name: newUser.name,
              email: newUser.email,
              avatar: newUser.avatar,
              gender: newUser.gender || '',
              birthday: newUser.birthday || '',
              phone: newUser.phone || '',
              country: newUser.country || '',
              isAdmin: newUser.isAdmin,
              token: generateIdToken(newUser._id),
            },
            message: `Welcome back ${newUser.name}!`,
          });
        }
      }
    } else {
      return res.status(400).json({ error: 'Email not verified' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
