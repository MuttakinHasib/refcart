import axios from 'axios';
import toast from 'react-hot-toast';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * @param  {String} public_id
 */
export const removeImage = async public_id => {
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

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/product`,
      config
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
    const { data } = await axios.get(`/api/product/${id}`, config);
    return data.product;
  } catch (err) {
    throw new Error(err.message);
  }
};
/**
 * @param  {String} {id
 * @param  {Object} ...updateData}
 */
export const updateProduct = async ({ id, ...updateData }) => {
  try {
    const { data } = await axios.put(
      `/api/product/update/${id}`,
      { ...updateData },
      config
    );
    if (data.message) toast.success(data.message);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/user`,
      config
    );
    return data.users;
  } catch (err) {
    throw new Error(err.message);
  }
};
