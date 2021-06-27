const cloudinary = require('cloudinary').v2;

export default async (_req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
    },
    process.env.CLOUDINARY_SECRET
  );
  return res.status(200).json({ signature, timestamp });
};
