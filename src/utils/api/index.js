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

export const getBrands = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/brand`,
      config
    );
    return data.brands;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * @param  {} {queryKey}
 * @description Get Brand by ID
 */
export const getBrandById = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/brand/${id}`,
      config
    );

    return data.brand;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * @param  {String} {id
 * @param  {Object} ...updateData}
 */
export const updateBrand = async ({ id, ...updateData }) => {
  try {
    const { data } = await axios.put(
      `/api/brand/update/${id}`,
      { ...updateData },
      config
    );

    if (data.message) toast.success(data.message);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * @param  {Object} brandData
 */
export const createBrand = async brandData => {
  try {
    const { data } = await axios.post(`/api/brand/create`, brandData, config);

    if (data.message) toast.success(data.message);

    return data.brand;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getCategories = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/category`,
      config
    );
    return data.categories;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * @param  {} {queryKey}
 * @description Get Category by ID
 */
export const getCategoryById = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/category/${id}`,
      config
    );

    return data.category;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * @param  {String} {id
 * @param  {Object} ...updateData}
 */
export const updateCategory = async ({ id, ...updateData }) => {
  try {
    const { data } = await axios.put(
      `/api/category/update/${id}`,
      { ...updateData },
      config
    );

    if (data.message) toast.success(data.message);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * @param  {Object} categoryData
 */
export const createCategory = async categoryData => {
  try {
    const { data } = await axios.post(
      `/api/category/create`,
      categoryData,
      config
    );

    if (data.message) toast.success(data.message);

    return data.category;
  } catch (err) {
    throw new Error(err.message);
  }
};
