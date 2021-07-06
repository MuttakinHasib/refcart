import axios from 'axios';
// import toast from 'react-hot-toast';

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/product`
    );
    return data.products;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * @param  {any} {queryKey}
 */
export const getProductById = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  try {
    const { data } = await axios.get(`/api/product/${id}`);
    return data.product;
  } catch (err) {
    throw new Error(err.message);
  }
};
/**
 * @param  {String} public_id
 */
export const removeImage = async public_id => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.post(
      `/api/cloudinary/remove`,
      {
        public_id,
      },
      config
    );
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
