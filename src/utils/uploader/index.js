import axios from 'axios';

/**
 * @param  {String} folder - folder name
 */
export const getSignature = async folder => {
  try {
    const { data } = await axios.post(
      '/api/cloudinary/sign',
      {
        folder,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // const { signature, timestamp, folder } = data;
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
