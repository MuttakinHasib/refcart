import jwt from 'jsonwebtoken';

/**
 * @param  {Object} payload
 */
export const generateActivationToken = payload => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5m' });
};

/**
 * @param  {String} id
 */
export const generateIdToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
