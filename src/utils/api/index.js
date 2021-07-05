import axios from 'axios';

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${process.env.CLIENT_URL}/api/product`);
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
