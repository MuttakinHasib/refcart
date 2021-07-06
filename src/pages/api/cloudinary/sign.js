import { v2 as cloudinary } from 'cloudinary';

export default async (req, res) => {
  const { folder: folderName } = req.body;
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folder = `${process.env.CLOUDINARY_UPLOAD_FOLDER}/${folderName}`;
  try {
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp,
        folder,
      },
      process.env.CLOUDINARY_API_SECRET
    );
    return res.status(200).json({ signature, timestamp, folder });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
