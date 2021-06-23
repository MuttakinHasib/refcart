import axios from 'axios';
import User from '@models/User';
import connectDB from '@utils/connectDB';
import { generateIdToken } from '@utils/generateToken';

export default async (req, res) => {
  const { accessToken, userID } = req.body;

  try {
    // Connect MongoDB
    await connectDB();

    const URL = `https://graph.facebook.com/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;
    const { data } = await axios.get(URL);
    const { name, email, picture } = data;
    const avatar = picture.data.url;

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
      // Create new user if not already exist
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
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
