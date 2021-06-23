import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import User from '@models/User';
import connectDB from '@utils/connectDB';

export const withProtect = handler => async (req, res) => {
  let token;
  try {
    // Connect MongoDB
    await connectDB();
    
    if (req.headers && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      // Decode token
      const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.id).select('-password');
    }
  } catch (err) {
    return res.status(401).json({ error: 'Not Authorized, token failed' });
  }

  if (!token)
    return res.status(401).json({ error: 'Not Authorized, No Token' });

  return handler(req, res);
};
