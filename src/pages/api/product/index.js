import Product from '@models/Product';
import connectDB from '@utils/connectDB';

export default async (_req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    // Get all products
    const products = await Product.find({});

    return res.json({ products });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
