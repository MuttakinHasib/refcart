import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * @param  {any} file
 * @param  {String} folder
 */
export const uploader = async (file, folder) => {
  try {
    const res = await cloudinary.uploader.upload(file, { folder });
    if (!res) {
      throw new Error('Something went wrong');
    }
    return res;
  } catch (err) {
    console.error(err.message);
  }
};
