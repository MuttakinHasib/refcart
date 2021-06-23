export const withAdmin = handler => async (req, res) => {
  if (req.user && req.user.isAdmin) {
    return handler(req, res);
  } else {
    return res.status(401).json({ error: 'Not Authorized as an Admin' });
  }
};
