import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handler = async (req, res) => {
  const { public_id } = req.body;

  try {
    const result = await cloudinary.uploader.destroy(public_id);

    if (result) {
      return res.status(200).json({ message: 'Image removed' });
    } else {
      return res.status(400).json({ error: 'Something went wrong' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;
